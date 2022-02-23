import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  const dispacth = useDispatch()
  const cash = useSelector(state => state.cash)

  const addCash = (cash) => {
    dispacth({type: "ADD_CASH", payload: cash})
  }

  const getCash = (cash) => {
    dispacth({type: "GET_CASH", payload: cash})
  }

  return (
    <div className={'app'}>
      <div style={{fontSize:'3rem'}}>{cash}</div>
      <div style={{display:'flex'}}>
        <button onClick={()=>addCash(Number(prompt()))}>Внести деньги</button>
        <button onClick={()=>getCash(Number(prompt()))}>Снять деньги</button>
      </div>      
    </div>
  );
}

export default App;
