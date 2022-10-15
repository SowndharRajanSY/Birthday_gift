import React,{useEffect,useState} from 'react';
import './lock.css';
import { FlashlightSharp, CameraSharp } from 'react-ionicons';
export default function Lock(props) {
  let d = new Date();
  const [hour,setHour] = useState(d.getHours());
  const [minute,setMinute] = useState(d.getMinutes());
  const [dateTime,setDateTime] = useState(d);
  const [click,setClick] = useState(0);
  const [status,setStatus] = useState(false);

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
  function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
  }
  const update = ()=>{
    setDateTime(new Date());
    let d1 = addZero(dateTime.getHours());
    let m1 = addZero(dateTime.getMinutes());
    setHour(d1);
    setMinute(m1);
  }
  useEffect(()=>{
    setInterval(update(),1000);
    if(click>4){
      setClick(0);
      setStatus(!status);
      props.onChange(status);
    }
  },[click > 4])
  let month = months[dateTime.getMonth()];
  let date = dateTime.getDate();
  let day = days[dateTime.getDay()];
  return (
    <div className="lockStyle">
      <div className="DateBox">
        <h2>
          {hour}:{minute}
        </h2>
        <h4>{day},</h4>
        <h4>
          {date} {month}
        </h4>
      </div>
      <div className="iconBox">
        <div className="iconic Torch">
          <FlashlightSharp color="#ffffff" width="15px" height="25px" style={{transform : "rotate(-47deg)"}}/>
        </div>
        <div className="iconic camera">
          <CameraSharp color="#ffffff" width="15px" height="15px" />
        </div>
        <div className="bottom_lock1"><input className="slider_lock1" type="range" value={click} onChange={(e)=>{
          setClick(e.target.value);
        }} min="0" max="5"/></div>
      </div>
    </div>
  );
}