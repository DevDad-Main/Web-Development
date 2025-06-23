import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET, // Click 'View API Keys' above to copy your API secret
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    const response = await cloudinary.uploader.upload(localFilePath, {
      //NOTE: This is handy as it will automatically figure out the file type
      resource_type: "auto",
    });

    console.log(`File Uploaded on Cloudinary. File SRC: ${response.url}`);
    //NOTE: Once file is uploaded, Delete it from the server
    //NOTE: Delete the file  from our server
    fs.unlinkSync(localFilePath);

    //NOTE: Returning thr response if anyone else wants to do anything with the data
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath);
    return null;
  }
};

export { uploadOnCloudinary };
