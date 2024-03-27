import { all, call, put, takeLatest } from "redux-saga/effects";
import API from "../../network/apis/postsApi";
import { setPosts } from "../actions/postsAction";
import postsTypes from "../types/postsTypes";

export function* createPosts({ payload }) {
  try {
    const response = yield call(API.apiCreatePosts, payload);
    if (response?.code === "ERR_NONE") {
      yield put(setPosts(response?.data?.response));
    }
  } catch (err) {
    console.error(err?.response?.data?.message);
  }
}

export function* onCreatePosts() {
  yield takeLatest(postsTypes.CREATE_POSTS, createPosts);
}

export function* fetchPosts({ payload }) {
  try {
    const response = yield call(API.apiFetchPosts, payload);
    if (response?.code === "ERR_NONE") {
      yield put(setPosts(response?.data?.response));
    }
  } catch (err) {
    console.error(err?.response?.data?.message);
  }
}

export function* onFetchPosts() {
  yield takeLatest(postsTypes.GET_ALL_POSTS, fetchPosts);
}

export default function* postsSaga() {
  yield all([
    call(onFetchPosts),
    call(onCreatePosts),
  ]);
}
