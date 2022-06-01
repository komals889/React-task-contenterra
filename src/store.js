import {createStore,combineReducers,applyMiddleware} from 'redux'
import{composeWithDevTools} from 'redux-devtools-extension'
import thunk from'redux-thunk'
import { getAllUser } from './reducers/user-reducer'
 
const rootReducers=combineReducers({
        users:getAllUser
})
 
const store=createStore(rootReducers, {},composeWithDevTools(applyMiddleware(thunk)))

export default store