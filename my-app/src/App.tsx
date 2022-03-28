import React, {useEffect} from 'react';
import './App.css';
import Header from './components/Header/Header';
import { useDispatch } from 'react-redux';
import { getApiData } from './store/actions';
import ProductInfoContainer from './containers/ProductInfoContainer';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getApiData())
  }, [])

  return (
    <div className="app">
      <Header />
      <div className="app-content">
        <div className='product-info'>
          <ProductInfoContainer />
        </div>
        <div className='product-stats-table' />
      </div>
    </div>
  );
}

export default App;
