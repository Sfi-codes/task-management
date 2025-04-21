import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import taskListReducer from './reducers/taskListReducer.js'
import currentTaskReducer from './reducers/currentTaskReducer'

const reducer = combineReducers({
  taskList: taskListReducer,
  currentTask: currentTaskReducer

})

const store = createStore(reducer)

createRoot(document.getElementById('root')).render(
<Provider store={store}>
    <App />
  </Provider>
)
