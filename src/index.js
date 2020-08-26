import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App'
import { Provider} from 'react-redux'
import store from '../src/store'
import 'antd/dist/antd.css'

const rootElement = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);