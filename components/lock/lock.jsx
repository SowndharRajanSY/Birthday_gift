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
          <FlashlightSharp color="#ffffff" width="15px" height="25px" />
        </div>
        <div className="iconic camera">
          <CameraSharp color="#ffffff" width="15px" height="15px" />
        </div>
        <div className="bottom_lock"><input className="slider_lock" type="range" value={click} onChange={(e)=>{
          setClick(e.target.value);
          if(click>2){
            setClick(0);
            setStatus(!status);
            props.onChange(status);
          }
        }} min="0" max="5"/></div>
      </div>
    </div>
  );
}
