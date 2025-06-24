import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.models.js";
import {
  deleteFromCloudinary,
  uploadOnCloudinary,
} from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const generateAccessAndRefreshToken = async (userId) => {
  try {
    const user = await User.findById(userId);

    if (!user) {
      throw new ApiError(500, "User does not exist.");
    }

    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong while generating access and refresh tokens"
    );
  }
};

const registerUser = asyncHandler(async (req, res) => {
  //NOTE: We also have the image files aswell avatar and cover image but they get handled seperately by multer
  const { fullname: fullname, email, username, password } = req.body;

  //NOTE: Validation

  //NOTE: Handy way instead of manually checking each field in a seperate if statement etc.
  //NOTE: The some will return the first one that does not meet the requiremnets, but in our case because the server is always running
  //NOTE: We will just carry on to check if the next field is missing etc
  if (
    [fullname, username, email, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All Fields are required");
  }

  //NOTE: Check to see if the user already exists, we will import in the User from mongo that we made using mongoose
  //NOTE: We can find the user by multiple queries like .findOne({username or email etc})
  const doesUserExist = await User.findOne({
    $or: [
      {
        username,
      },
      {
        email,
      },
    ],
  });

  if (doesUserExist) {
    throw new ApiError(409, "User with email or username already exists");
  }
  console.warn(req.files);
  const avatarLocalPath = req.files?.avatar?.[0]?.path;
  const coverImageLocalPath = req.files?.coverImage?.[0]?.path;

  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar file is missing.");
  }
  //NOTE: ALlowing the coverImage to optional
  // let coverImage = "";

  // const avatar = await uploadOnCloudinary(avatarLocalPath);
  // if (coverImage) {
  //   const coverImage = await uploadOnCloudinary(coverImageLocalPath);
  // }

  let avatar;
  try {
    avatar = await uploadOnCloudinary(avatarLocalPath);
    console.log("Uploaded avatar", avatar);
  } catch (error) {
    console.log("Error uploading avatar ", error);
    throw new ApiError(500, "Failed to upload avatar.");
  }

  let coverImage;
  try {
    coverImage = await uploadOnCloudinary(coverImageLocalPath);
    console.log("Uploaded Cover Image", coverImage);
  } catch (error) {
    console.log("Error uploading avatar ", error);
    throw new ApiError(500, "Failed to upload cover image.");
  }

  try {
    const user = await User.create({
      fullname: fullname,
      avatar: avatar.url,
      coverImage: coverImage?.url || "",
      email,
      password,
      username: username.toLowerCase(),
    });

    //NOTE: Extra query from the DB to make sure we are not maing a duplicate
    //NOTE: Also .select()we are specifing the data we dont want to be returned
    const createdUser = await User.findById(user._id).select(
      "-password -refreshToken"
    );

    if (!createdUser) {
      //NOTE: Server Error
      throw new ApiError(500, "Something went wrong while registering a user");
    }

    //NOTE: Returning a response to the front end
    return res
      .status(201)
      .json(new ApiResponse(200, createdUser, "User registered successfully"));
  } catch (error) {
    console.log("User Creation Failed");

    if (avatar) {
      await deleteFromCloudinary(avatar.public_id);
    }
    if (coverImage) {
      await deleteFromCloudinary(coverImage.public_id);
    }

    throw new ApiError(
      500,
      "Something went wrong while registering a new user and image files were deleted"
    );
  }
});

const loginUser = asyncHandler(async (req, res) => {
  //NOTE: Get data from the body.

  const { email, username, password } = req.body;

  //NOTE: Validation
  if (![email, username, password].some((field) => field?.trim() === "")) {
    throw new ApiError(400, "All Fields are required");
  }

  const user = await User.findOne({
    $or: [
      {
        username,
      },
      {
        email,
      },
    ],
  });

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  //NOTE: Validate the password
  const isPasswordValid = await user.isPasswordValid(password);
});

export { registerUser, generateAccessAndRefreshToken };
