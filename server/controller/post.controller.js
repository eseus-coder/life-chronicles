import PostModel from "../models/posts.js";
import * as errorModule from '../helper/error.js';

const {
    ApplicationError, 
    ErrorCodes, 
    NotAuthorizedError, 
    InternalError, 
    UserError, 
    NotFoundError, 
    ForbiddenError
} = errorModule;

export const getPosts = async (req, res) => {
    try {
        const postsData = await PostModel.find();
        return postsData;
    } catch (error) {
        throw new InternalError("Error in getPosts: ", error.message);
    }
};

export const createPost = async (req, res) => {

    const post = req.body;

    const newPost = await PostModel.create(post);

    try {

        await newPost.save();

        return newPost;

    } catch (error) {
        throw new InternalError("Error in createPost: ", error.message);
    }
};