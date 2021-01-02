//import logo from './logo.svg';
import { useContext } from 'react';
import './App.css';
import { data } from './components/context';
import Header from './components/Header';

function App() {
  const {requests,OOD,DEL,INT,DEX,NFI} =useContext(data);

  return (
    <div className="App">
      <Header></Header>
    </div>
  );
}

export default App;
