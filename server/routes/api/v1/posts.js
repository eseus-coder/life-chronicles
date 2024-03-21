//Package imports
import express from "express";

const router = express.Router();

//File or component imports
import { getPosts } from '../../../controller/post.controller.js';

router.get('/', async (req, res, next) => {
    try {
        const response = await getPosts(req, res);
        res.send(response);
    } catch (error) {
        console.error(error);
        next(error);
    }
});

export default router;