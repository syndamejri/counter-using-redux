//import logo from './logo.svg';
import './App.css';

import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './reducers/count';

function App() {

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <>
    <h1>Counter : {count}</h1>
    <button onClick={handleIncrement}>+</button>
    <button onClick={handleDecrement}>-</button>

    </>
  );
}

export default App;
