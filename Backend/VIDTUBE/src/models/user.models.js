import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    //NOTE: We also not like Postgresql don't need to define an id with primarykey etc
    //NOTE: as Mongo automatically aassigns one upon creation _id etc

    //NOTE: Instead of just assigning the string type, we can also define objects with alot more properties
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    fullname: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    avatar: {
      type: String, //Cloudinary URL
      required: true,
    },
    coverImage: {
      type: String, //Cloudinary URL
    },
    watchHistory: [
      {
        type: Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
    password: {
      type: String, //NOTE: Won't be a plain string, it wiill be encrypted, maybe salting and hashing?
      required: [true, "password is required"], //NOTE: We Requirethe password obviously but then we send over a message to front end
    },
    refreshToken: {
      type: String,
    },
  },
  //NOTE: This property tells mongoose to assign createdAt nd updatedAt field to your scheme, type will be Date
  { timestamps: true }
);

//NOTE: Mongoose will go ahead and a create a document with this structure.
//NOTE: If this document dosent exist, it will create it.
//NOTE: The structure it should follow is the userSchema
//
//NOTE: When we also export this we will get all the featuresthat mongoose has
//NOTE: So we can import the model and have access to like querying, finding elements
//NOTE: Saving more data to the database
export const User = mongoose.model("User", userSchema);
