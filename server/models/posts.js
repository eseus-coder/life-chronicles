import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    // postId: {
    //     type: Number,
    //     unique: true,
    // },
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

const PostModel = mongoose.model('PostModel', postSchema);

export default PostModel;