import './App.css';
import Counter from './Counter';
import {createStore, combineReducers} from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';


import countReducer from './countReducers';
import productReducer from './productReducer';
import modalReducer from './modalReduce';

import Modal from './Modal';

const store = createStore(combineReducers({
  countState:countReducer,
  productState:productReducer,
  modalState:modalReducer}), composeWithDevTools() );

function App() {
  return (
    <Provider store= {store}>
      <Counter/>
      <Modal />
   </Provider>
   
  );
}

export default App;
