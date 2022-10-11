import React,{useEffect} from 'react';
import './lock.css';
import { FlashlightSharp, CameraSharp } from 'react-ionicons';
export default function Lock() {
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
  let hours;
  let minutes;
  let month;
  let date;
  let day;
  // setInterval(function () {
  //   const d = new Date();
  //   hours = d.getHours();
  //   minutes = d.getMinutes();
  //   month = months[d.getMonth()];
  //   date = d.getDate();
  //   day = days[d.getDay()];
  // }, 1000);
  
  return (
    <div className="lockStyle">
      <div className="DateBox">
        <h2>
          {hours}:{minutes}
        </h2>
        <h4>{day},</h4>
        <h4>
          {date} {month}
        </h4>
      </div>
      <div className="iconBox">
        <div className="iconic Torch">
          <FlashlightSharp color="#ffffff" width="15px" height="25px" />
        </div>
        <div className="iconic camera">
          <CameraSharp color="#ffffff" width="15px" height="15px" />
        </div>
        <div className="bottom"></div>
      </div>
    </div>
  );
}
