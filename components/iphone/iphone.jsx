import React from 'react';
import Lock from '../lock/lock';
import Pin from '../pin/pin';
import './iphone.css';
function Iphone() {
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
			<div className="lock">
				<Lock/>
			</div>
			{/* <div className="pin">
				<Pin/>
			</div> */}
    </div>
  );
}

export default Iphone;