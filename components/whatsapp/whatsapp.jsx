import React,{useState} from 'react';
import Webcam from 'react-webcam';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Call,
  CameraSharp,
  ChatbubbleSharp,
  ApertureSharp,
  CogOutline,
  CreateOutline,
  CameraReverseOutline
} from 'react-ionicons';
import 'swiper/css';
import './whatsapp.css';

export default function Whatsapp() {
  const[isActive,setActive] = useState(0);
  const Camera =()=>{
    if(isActive == 2){
      return(
        <Webcam width="225.5px" height="100%"/> 
      )
    }
  }
  const Active = (val)=>{
    if(isActive == val){
      return "#656ffa";
    }else{
      return "#fff";
    }
  }
  return (
    <div className="Whatsapp">
      <Swiper initialSlide={3} onSlideChange={(e) => setActive(e.snapIndex)}>
        <SwiperSlide>
          <div className="Status">
            <h1>status</h1>
            <div className="myStatus"></div>
            <div className="recentUpdates"></div>
            <div className="viewedUpdates"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Calls">
            <p>There's no call logs</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Camera">
            {Camera()}
            <div className="buttons_slade">
              <CameraReverseOutline width="30px" height="30px" style={{position : "relative",top : "-60px",right : "-165px"}}/>
              <div className="btn"></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="MsgSection">
            <div className="edit Bar">
              <h4>Edit</h4>
              <CreateOutline color="#fff" style={{ cursor: 'pointer' }} />
            </div>
            <div className="Title Bar">
              <h1>Chats</h1>
            </div>
            <div className="head Bar">
              <h4>Brodcast Lists</h4>
              <h4>New Group</h4>
            </div>
            <div className="msgBox">
              <div className="profile">
                <img
                  src="https://png.pngitem.com/pimgs/s/7-70690_thinking-woman-png-transparent-hd-photo-beautiful-girl.png"
                  alt="profile"
                />
              </div>
              <div className="details">
                <h3>Raj</h3>
                <div className="content">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.?
                  </p>
                </div>
              </div>
              <div className="MsgTime">
                <h4>13:14</h4>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Settings">
            <h1>settings</h1>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="StatusBar">
        <div className={['status', ...Array.from(isActive ==0 && ['active'])].join(
              ' '
            )}>
          <ApertureSharp color={Active(0)} />
          <h5>status</h5>
        </div>
        <div className={['calls', ...Array.from(isActive ==1 && ['active'])].join(
              ' '
            )}>
          <Call color={Active(1)} style={{position : "relative",left : "-3px"}}/>
          <h5>calls</h5>
        </div>
        <div className={['camera', ...Array.from(isActive ==2 && ['active'])].join(
              ' '
            )}>
          <CameraSharp color={Active(2)}/>
          <h5>camera</h5>
        </div>
        <div className={['chats', ...Array.from(isActive ==3 && ['active'])].join(
              ' '
            )}>
          <ChatbubbleSharp color={Active(3)} />
          <h5>chats</h5>
        </div>
        <div className={['settings', ...Array.from(isActive ==4 && ['active'])].join(
              ' '
            )}>
          <CogOutline color="#ffffff" color={Active(4)} />
          <h5>settings</h5>
        </div>
      </div>
    </div>
  );
}
