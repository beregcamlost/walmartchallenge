import { useState, useCallback } from 'react';
import { Skeleton } from './components/layout';
import { ListProduct } from './components/list';
import 'antd/dist/antd.css';
import './App.css';

function App() {
  
  const [search, setSearch] = useState(undefined);
  
  const onSearch = useCallback((evt) => {
    const value = evt && evt.target && evt.target.value
    if (value && value.length >= 3) {
      setSearch(value);
    }
  }, []);

  return (
    <Skeleton onSearch={onSearch}>
      <ListProduct search={search}></ListProduct>
    </Skeleton>
  );
}

export default App;
