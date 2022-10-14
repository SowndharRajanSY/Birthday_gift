import React from 'react';
import Webcam from 'react-webcam';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  CallOutline,
  CameraOutline,
  ChatbubbleOutline,
  ApertureOutline,
  CogOutline,
  CreateOutline,
} from 'react-ionicons';
import 'swiper/css';
import './whatsapp.css';

export default function Whatsapp() {
  return (
    <div className="Whatsapp">
      <Swiper initialSlide={3}>
        <SwiperSlide>
          <div className="Status">
            <h1>status</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Calls">
            <h2>calls</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Camera">
            <Webcam width="225.5px" height="100%"/>
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
        <div className="status">
          <ApertureOutline />
          <h5>status</h5>
        </div>
        <div className="calls">
          <CallOutline style={{position : "relative",left : "-3px"}}/>
          <h5>calls</h5>
        </div>
        <div className="camera">
          <CameraOutline />
          <h5>camera</h5>
        </div>
        <div className="chats">
          <ChatbubbleOutline />
          <h5>chats</h5>
        </div>
        <div className="settings">
          <CogOutline color="#ffffff" />
          <h5>settings</h5>
        </div>
      </div>
    </div>
  );
}
