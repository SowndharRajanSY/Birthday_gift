import React, { useState, useEffect } from 'react';
import Lock from '../lock/lock';
import Pin from '../pin/pin';
import { LockClosed, Wifi, BatteryFull } from 'react-ionicons';
import './iphone.css';
function Iphone() {
  //Need For Time
  let d = new Date();
  const [hour, setHour] = useState(d.getHours());
  const [minute, setMinute] = useState(d.getMinutes());
  const [dateTime, setDateTime] = useState(d);
  //Ends
  const [status, setStatus] = useState(false);
  const [isloggedin, setLoggedin] = useState(false);
  const onlyOn = () => {
    if (!status) {
      return (
        <LockClosed
          color={'#ffffff'}
          height="13px"
          width="13px"
          style={{ position: 'relative', left: '7px', top: '0px' }}
        />
      );
    } else {
      return null;
    }
  };
  const withOut = () => {
    if (status || isloggedin) {
      return (
        <div className="time">
          {hour}:{minute}
        </div>
      );
    } else {
      return null;
    }
  };
  function addZero(i) {
    if (i < 10) {
      i = '0' + i;
    }
    return i;
  }
  const update = () => {
    setDateTime(new Date());
    let d1 = addZero(dateTime.getHours());
    let m1 = addZero(dateTime.getMinutes());
    setHour(d1);
    setMinute(m1);
  };
  useEffect(() => {
    setInterval(update(), 1000);
  }, []);
  const condition = () => {
    if (isloggedin) {
      <div className="Apps">
      </div>;
    } else {
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
    }
  };
  return (
    <div className="iphone">
      <div className="notch">
        {onlyOn()}
        <div className="front_camera"></div>
      </div>
      <div className="notification">
        {withOut()}
        <div className="msgBox_dynamic"></div>
        <div className="statusBar">
          <Wifi
            width="18px"
            height="18px"
            color="#ffffff"
            style={{ transform: 'translateX(-10px)' }}
          />
          <BatteryFull
            width="18px"
            height="18px"
            color="#ffffff"
            style={{ transform: 'translateX(-2.5px)' }}
          />
        </div>
      </div>
      <div className="display"></div>
      <div className="navigation"></div>
      {condition()}
    </div>
  );
}

export default Iphone;
