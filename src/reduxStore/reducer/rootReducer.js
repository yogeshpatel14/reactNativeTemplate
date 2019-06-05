import { combineReducers } from 'redux';
import testData from './testReducer';

const createCombineReducer = combineReducers({
    reducer_test:testData
})

export {
    createCombineReducer
}