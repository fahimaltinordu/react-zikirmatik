import './App.css';
import {useState} from 'react'

function App() {

  const [count,setCount] = useState(0);
  if (count < 0) {
    setCount(0)
  }
  if (count == 33) {
    setCount(0)
    alert("Hey maşallah mübarek")
  }

  return (
    <div className="App">
      <h1>ZikirMatik</h1>
      <p>{count}</p>
      <div className="buttons">
        <button onClick={()=>{setCount(count+1)}}>Arttır</button>
        <button onClick={()=>{setCount(count-1)}}>Azalt</button>
        <button onClick={()=>{setCount(0)}}>Sıfırla</button>
      </div>
    </div>
  );
}
export default App;
