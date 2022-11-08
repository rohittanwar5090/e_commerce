import {createStore , applyMiddleware} from 'redux'
import logger from 'redux-logger'
import rootReducer from './rootReducer'
import { persistStore } from 'redux-persist'

const middlewares = [];
if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger);
}
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(rootReducer , enhancer )
// applyMiddleware(...middlewares)
export const persistor = persistStore(store)

// export default { store , persistor};