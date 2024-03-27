import postsTypes from "../types/postsTypes";

const INITIAL_STATE = {
    getAllPostsData: [],
};

const postsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case postsTypes.GET_ALL_POSTS:
            return {
                ...state,
            }

        case postsTypes.CREATE_POSTS:
            return {
                ...state,
            }

        case postsTypes.SET_POSTS:
            return {
                ...state,
                getAllPostsData: action.payload
            }
    
        default:
            return state;
    }
};

export default postsReducer;