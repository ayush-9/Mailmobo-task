//import logo from './logo.svg';
import { useContext } from 'react';
import './App.css';
import { data } from './component/context';
import Header from './component/Header';
import Navbar from './component/Navbar';

function App() {
  const {requests,OOD,DEL,INT,DEX,NFI} =useContext(data);

  return (
    <div className="App">
      <Navbar>n</Navbar>
      <Header></Header>
    </div>
  );
}

export default App;
