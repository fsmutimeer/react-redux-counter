import './App.css';
import Counter from './Counter';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import {DECREASE, INCREASE, RESET} from './actionTypes';
import reducer from './reducers';

const defaultState = {
  count : 0,
  name: 'Feroz'
}

const store = createStore(reducer, defaultState );

console.log(store.getState());
function App() {
  return (
    <Provider store= {store}>
      <Counter/>
   </Provider>
   
  );
}

export default App;
