import React, { useEffect, useState } from 'react';
import { LockClosed } from 'react-ionicons';
import './pin.css';

export default function Pin(props) {
  const [originalPin, setOrginalPin] = useState('123456');
  const [isloggedin,setLoggedin] = useState(false);
  const [pins, setPins] = useState('');
  const [click, setClick] = useState(0);
  const [status, setStatus] = useState(true);
  const Numpad = (e) => {
    setPins(pins + e.target.value);
  };
  useEffect(() => {
    if(click>4){
      setClick(0);
      setStatus(!status);
      props.onChange(status);
    }
    if (pins.length > 6) {
      setPins('');
    } else {
      if (pins == originalPin) {
        setLoggedin(true);
        setPins('');
        props.onChange(status,isloggedin);
      } else {
        setPins('');
      }
    }
  }, [pins.length == 6],[click > 4]);
  return (
    <div className="PinStyle">
      <div className="Top">
        <div className="lockicon">
          <LockClosed color={'#ffffff'} height="30px" width="30px" />
        </div>
        <div className="passcode">
          <h5>Enter the Passcode</h5>
          <br />
          <div
            className={['pins', ...Array.from(pins == '' && ['animate'])].join(
              ' '
            )}
          >
            <input
              type="password"
              value={pins}
              onChange={(e) => {
                setPins(e.target.value);
              }}
            />
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div className="Bottom1">
        <div className="pinBox">
          <button value="1" onClick={Numpad}>
            1
          </button>
          <button value="2" onClick={Numpad}>
            2
          </button>
          <button value="3" onClick={Numpad}>
            3
          </button>
          <button value="4" onClick={Numpad}>
            4
          </button>
          <button value="5" onClick={Numpad}>
            5
          </button>
          <button value="6" onClick={Numpad}>
            6
          </button>
          <button value="7" onClick={Numpad}>
            7
          </button>
          <button value="8" onClick={Numpad}>
            8
          </button>
          <button value="9" onClick={Numpad}>
            9
          </button>
          <button value="0" onClick={Numpad}>
            0
          </button>
        </div>
        <div className="cancel1">
          <h5 style={{ cursor: 'pointer' }}>Forget Password</h5>
          <h5
            onClick={() => {
              setClick(0);
              setStatus(!status);
              props.onChange(status);
            }}
            style={{ cursor: 'pointer' }}
          >
            Cancel
          </h5>
        </div>
      </div>
      <div className="bottom_pin">
        <input
          className="slider_pin"
          type="range"
          value={click}
          onChange={(e) => {
            setClick(e.target.value);
            if (click > 2) {
              setClick(0);
              setStatus(!status);
              props.onChange(status);
            }
          }}
          min="0"
          max="5"
        />
      </div>
    </div>
  );
}
/*<input className="slider_lock" type="range" value={click} onChange={(e)=>{
          setClick(e.target.value);
        }} min="0" max="5"/>
        
        useEffect(()=>{
    if(click>4){
      setClick(0);
      setStatus(!status);
      props.onChange(status);
    }
  },[click > 4])*/