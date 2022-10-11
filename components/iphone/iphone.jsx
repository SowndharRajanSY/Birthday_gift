import React, { useState, useEffect } from 'react';
import Lock from '../lock/lock';
import Pin from '../pin/pin';
import { LockClosed } from 'react-ionicons';
import './iphone.css';
function Iphone() {
  //Need For Time
  let d = new Date();
  const [hour,setHour] = useState(d.getHours());
  const [minute,setMinute] = useState(d.getMinutes());
  const [dateTime,setDateTime] = useState(d);
  //Ends
  const [status, setStatus] = useState(false);
  const onlyOn = ()=>{
    if(!status){
      return(
        <LockClosed color={'#ffffff'} height="13px" width="13px" style={{position : "relative",left : "7px",top :"0px"}} />
      )
    }else{
      return null;
    }
  }
    //Function For Time
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const update = ()=>{
      setDateTime(new Date());
      if(Number(hour) <= 0){
        setHour('0'+dateTime.getHours());
      }else{
        setHour(dateTime.getHours());
      }
      if(Number(minute) <=0){
        setMinute('0'+dateTime.getMinutes());
      }else{
        setMinute(dateTime.getMinutes());
      }
    }
    useEffect(()=>{
      setInterval(update(),1000);
    },[])
    let month = months[dateTime.getMonth()];
    let date = dateTime.getDate();
    let day = days[dateTime.getDay()];//ends
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
        {
          onlyOn()
        }
        <div className="front_camera"></div>
      </div>
      <div className="notification">
        <div className="time">{hour}:{minute}</div>
        <div className="msgBox_dynamic"></div>
        <div className="statusBar"></div>
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
