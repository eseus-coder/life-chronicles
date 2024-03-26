import { all, call, put, takeLatest } from "redux-saga/effects";
import API from "../../network/apis/postsApi";
import { setPosts } from "../actions/postsAction";
import postsTypes from "../types/postsTypes";

export function* fetchPosts({ payload }) {
  try {
    const response = yield call(API.apiFetchPosts, payload);
    if (response?.code === "ERR_NONE") {
      yield put(setPosts(response?.data));
    }
  } catch (err) {
    console.error(err?.response?.data?.message);
  }
}

export function* onFetchPosts() {
  yield takeLatest(postsTypes.GET_ALL_POSTS, fetchPosts);
}

export default function* postsSaga() {
  yield all([call(onFetchPosts)]);
}
