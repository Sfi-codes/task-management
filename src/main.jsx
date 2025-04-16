import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import taskReducer from './reducers/taskReducer'

const store = createStore(taskReducer)

createRoot(document.getElementById('root')).render(
<Provider store={store}>
    <App />
  </Provider>
)
