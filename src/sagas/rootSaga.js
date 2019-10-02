/* quan ly toan bo saga khac */
import {delay} from 'redux-saga'
import {all} from 'redux-saga/effects' // chay nhieu saga 1 luc

import {hellosaga} from "./counterSagas";

export default function* rootSaga() {
    //yieldb chạy tuần tự
    yield all([
        hellosaga
    ]);
}