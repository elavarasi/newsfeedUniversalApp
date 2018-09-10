import { combineReducers } from 'redux'
import setNews from './setNews'

const rootReducer = combineReducers({
  news: setNews
})

export default rootReducer
