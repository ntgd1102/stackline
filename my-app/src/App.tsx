import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { useDispatch } from 'react-redux';
import { getApiData } from './store/actions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getApiData())
  }, [])

  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
