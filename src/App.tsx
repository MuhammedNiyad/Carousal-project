import { useState } from 'react'
import './App.css'
import { carousalImg } from './component/Carousal'

export function App() {
  const [number, setNUmber] = useState(0)

  function RightBtn() {
      setNUmber(number - 1);
  }
  function LeftBtn() {
      setNUmber(number + 1);
  }

  let CrslImg = carousalImg[number];
  return (
    <>
      <div style={{ width: '550px', position:'relative', border : "5px solid" }}>
        <h1>Carousal Image</h1>
        <img src={CrslImg.url} alt="" style={{ width: '550px' }} />
        <br></br>
        <button style={{position:'absolute',left:0 , top:"55%"}} onClick={RightBtn} disabled={number < 1}>Left</button>
        <button style={{position:'absolute',right:0 , top:"55%"}} onClick={LeftBtn} disabled={number === carousalImg.length - 1}>Right</button>
      </div>
    </>
  );


}
