//Package imports
import express from 'express';

const router = express.Router();

//File or component imports
import postsRouter from './posts.js';

//Router handling
router.use('/posts', postsRouter);

export default router;