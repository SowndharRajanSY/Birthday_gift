import React from 'react';
import { LockClosed } from 'react-ionicons';
import './pin.css';

export default function Pin() {
  return (
    <div className="PinStyle">
      <div className="Top">
        <div className="lockicon">
          <LockClosed color={'#ffffff'} height="30px" width="30px" />
        </div>
        <div className="passcode">
          <h5>Enter the Passcode</h5>
          <br />
          <div className="pins">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div className="Bottom">
        <div className="pinBox">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>0</button>
        </div>
        <div className="cancel">
          <h5>Forget Password</h5>
          <h5>Cancel</h5>
        </div>
      </div>
      <div className="bottom"></div>
    </div>
  );
}
