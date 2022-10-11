import React, { useState, useEffect } from 'react';
import Lock from '../lock/lock';
import Pin from '../pin/pin';
import './iphone.css';
function Iphone() {
  const [status, setStatus] = useState(false);
  const condition = () => {
    if (status) {
      return (
        <div className="pin">
          <Pin
            onChange={(val) => {
              setStatus(val);
            }}
          />
        </div>
      );
    } else {
      return (
        <div className="lock">
          <Lock
            onChange={(val) => {
              setStatus(val);
            }}
          />
        </div>
      );
    }
  };
  return (
    <div className="iphone">
      <div className="notch">
        <div className="front_camera"></div>
      </div>
      <div className="notification">
        <div className="msgBox_dynamic"></div>
      </div>
      <div className="display"></div>
      <div className="navigation"></div>
      {condition()}
      {/* <div className="lock">
				<Lock onChange={(val)=>{setStatus(val)}}/>
			</div> */}
      {/* <div className="pin">
				<Pin/>
			</div> */}
    </div>
  );
}

export default Iphone;
