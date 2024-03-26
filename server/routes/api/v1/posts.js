//Package imports
import express from "express";

const router = express.Router();

//File or component imports
import { getPosts, createPost } from '../../../controller/post.controller.js';
import { successBody, errorBody } from '../../../helper/utility.js';

router.get('/getPosts', async (req, res, next) => {
    try {
        const response = await getPosts(req, res);
        res.send(successBody({
            response,
            message: 'Fetched all posts successfully!'
        }));
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.post('/createPost', async (req, res, next) => {
    try {
        const response = await createPost(req, res);
        res.send(response);
    } catch (error) {
        console.error(error);
        next(error);
    }
});

export default router;