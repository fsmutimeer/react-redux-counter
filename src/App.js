import './App.css';
import Counter from './Counter';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import {DECREASE, INCREASE, RESET} from './actionTypes';
import reducer from './countReducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const defaultState = {
  count : 0,
  name: 'Feroz'
}

const store = createStore(reducer, defaultState,
                        composeWithDevTools() );

console.log(store.getState());
function App() {
  return (
    <Provider store= {store}>
      <Counter/>
   </Provider>
   
  );
}

export default App;
