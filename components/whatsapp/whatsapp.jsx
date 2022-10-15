import React, { useState } from 'react';
import Webcam from 'react-webcam';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Call,
  CameraSharp,
  ChatbubbleSharp,
  ApertureSharp,
  ChevronBackOutline,
  CreateOutline,
  CameraReverseOutline,
  VideocamOutline,
  CallOutline,
  SendOutline,
} from 'react-ionicons';
import 'swiper/css';
import './whatsapp.css';
import FlashOutline from 'react-ionicons/lib/FlashOutline';

export default function Whatsapp() {
  const [isActive, setActive] = useState(0);
  const [isChat, setChat] = useState(false);
  const Camera = () => {
    if (isActive == 2) {
      return <Webcam width="225.5px" height="100%" />;
    }
  };
  const Active = (val) => {
    if (isActive == val) {
      return '#656ffa';
    } else {
      return '#fff';
    }
  };
  return (
    <div className="Whatsapp">
      <Swiper initialSlide={4} onSlideChange={(e) => setActive(e.snapIndex)}>
        <SwiperSlide>
          <div className="Status">
            <h2>status</h2>
            <div className="myStatus"></div>
            <h4>RECENT UPDATES</h4>
            <div className="recentUpdates"></div>
            <h4>VIEWED UPDATES</h4>
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
              <CameraReverseOutline
                width="30px"
                height="30px"
                style={{ position: 'relative', top: '-60px', right: '-165px' }}
              />
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
              <div
                className="details"
                onClick={() => {
                  setChat(true);
                }}
              >
                <h3>Yosana</h3>
                <div className="content">
                  <p>Hi Neha 😍</p>
                </div>
              </div>
              <div className="MsgTime">
                <h4>13:14</h4>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="StatusBar">
        <div
          className={[
            'status',
            ...Array.from(isActive == 0 && ['active']),
          ].join(' ')}
        >
          <ApertureSharp color={Active(0)} />
          <h5>status</h5>
        </div>
        <div
          className={['calls', ...Array.from(isActive == 1 && ['active'])].join(
            ' '
          )}
        >
          <Call
            color={Active(1)}
            style={{ position: 'relative', left: '-3px' }}
          />
          <h5>calls</h5>
        </div>
        <div
          className={[
            'camera',
            ...Array.from(isActive == 2 && ['active']),
          ].join(' ')}
        >
          <CameraSharp color={Active(2)} />
          <h5>camera</h5>
        </div>
        <div
          className={['chats', ...Array.from(isActive == 3 && ['active'])].join(
            ' '
          )}
        >
          <ChatbubbleSharp color={Active(3)} />
          <h5>chats</h5>
        </div>
      </div>
      {isChat ? (
        <div className="msgInnerBox">
          <div className="user">
            <div className="profile">
              <div className="StatusBars">
                <div className="back">
                  <ChevronBackOutline
                    onClick={() => {
                      setChat(false);
                    }}
                    style={{ cursor: 'pointer' }}
                  />
                </div>
                <div className="callsBar">
                  <VideocamOutline color="#fff" />
                  <CallOutline />
                </div>
              </div>
              <div className="userInfo">
                <div className="profileImg">
                  <img
                    src="https://png.pngitem.com/pimgs/s/7-70690_thinking-woman-png-transparent-hd-photo-beautiful-girl.png"
                    alt="profile"
                  />
                </div>
                <div className="name_lastSeen">
                  <h4>Yosana</h4>
                  <p>last seen at oct 10 12.00AM</p>
                </div>
              </div>
            </div>
            <div className="messages">
              <div className="msg msg1">
                <p>Hi Neha 😍</p>
              </div>

              <div className="msg msg2">
                <p>
                  Many more happy returns of the day❤️😍..intha 20th birthdayla
                  nee manasula ethachu kastamo sogamo kovamo vachiruntha athaila
                  maranthuttu intha new birth day apo nalla happya intha year ah
                  thodangu😊...intha birthday mattu illaama ella birthdayvu ella
                  aasayu ella santhosamana nigalvu nadakka enmanasaara
                  vaalthukiren😊❤️💕...
                </p>
              </div>

              <div className="msg msg3">
                <p>once again very many more happy returns of the day...💕💖</p>
              </div>

              <div className="msg msg3">
                <p>ithuka ivlo naal pannainu ketta...kandipa aama🤣😂...😜💖</p>
              </div>
              <div className="msg msg3">
                <p>reply panrathula ino set panala..🤣😂...😜</p>
              </div>
            </div>
            <div className="replyBox">
              <input type="text" />
              <SendOutline />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
