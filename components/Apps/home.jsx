import React,{useState,useEffect} from 'react';
import './home.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import AppsFunction from '../AppsFunction/appsfunction';

export default function Apps() {
  const [isWhatsapp,setWhatsapp] = useState(true);
  const [click,setClick] = useState(0);
  const [status,setStatus] = useState(false);
  const AppOn = ()=>{
    setWhatsapp(true);
  }
  const AppOnOff = ()=>{
    if(!status){
      return(
        <div className="FunctionOfApps">
          <AppsFunction status={isWhatsapp}/>
        </div>
      )
    }
  }
  useEffect(()=>{
    if(click>4){
      setClick(0);
      setStatus(!status);
    }
  },[click > 4])
  return (
    <div className="Home">
      <Swiper spaceBetween={25} slidesPerView={1}>
        <SwiperSlide>
          <div className="firstPage">
            <div className="widgetBox"></div>
            <div className="main row-1">
              <div className="photos">
                <img
                  src="https://www.apple.com/v/iphone-14-pro/b/images/specs/icon_photos__4ceqb6df1nmm_large.png"
                  alt="photos"
                />
              </div>
              <div className="facetime">
                <img
                  src="https://www.apple.com/v/iphone-14-pro/b/images/specs/icon_facetime__co8tjqdiz9zm_large.png"
                  alt="facetime"
                />
              </div>
              <div className="health">
                <img
                  src="https://www.apple.com/v/iphone-14-pro/b/images/specs/icon_health__b4hzufum9xiu_large.png"
                  alt="health"
                />
              </div>
              <div className="mail">
                <img
                  src="https://www.apple.com/v/iphone-14-pro/b/images/specs/icon_mail__cjzfb5kss5n6_large.png"
                  alt="mail"
                />
              </div>
            </div>
            <div className="main row-2">
              <div className="wallet">
                <img
                  src="https://www.apple.com/v/iphone-14-pro/b/images/specs/icon_wallet__8cvhvaojzlu2_large.png"
                  alt="wallet"
                />
              </div>
              <div className="music">
                <img
                  src="https://www.apple.com/v/iphone-14-pro/b/images/specs/icon_music__dbxtn1t18y6a_large.png"
                  alt="music"
                />
              </div>
              <div className="maps">
                <img
                  src="https://www.apple.com/v/iphone-14-pro/b/images/specs/icon_maps__eep0s9tu66ky_large.png"
                  alt="maps"
                />
              </div>
              <div className="siri">
                <img
                  src="https://www.apple.com/v/iphone-14-pro/b/images/specs/icon_siri__ea5x1rfp12s2_large.png"
                  alt="siri"
                />
              </div>
            </div>
            <div className="main row-3">
              <div className="itunes">
                <img
                  src="https://www.apple.com/v/iphone-14-pro/b/images/specs/icon_itunes_store__bm1vlnm1r9qq_large.png"
                  alt="itunes"
                />
              </div>
              <div className="appstore">
                <img
                  src="https://www.apple.com/v/iphone-14-pro/b/images/specs/icon_app_store__es1jdk1w2qaa_large.png"
                  alt="appstore"
                />
              </div>
              <div className="calender">
                <img
                  src="https://www.apple.com/v/iphone-14-pro/b/images/specs/icon_calendar__f1f10z75h0yi_large.png"
                  alt="calender"
                />
              </div>
              <div className="notes">
                <img
                  src="https://www.apple.com/v/iphone-14-pro/b/images/specs/icon_notes__bhngfcwfnvbm_large.png"
                  alt="notes"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="secondPage">
            <div className="firstPage">
              <div className="main row-1">
                <div className="books">
                  <img
                    src="https://www.apple.com/v/iphone-14-pro/b/images/specs/icon_ibooks__f6mnfhud3066_large.png"
                    alt="books"
                  />
                </div>
                <div className="homekit">
                  <img
                    src="https://www.apple.com/v/iphone-14-pro/b/images/specs/icon_homekit__d4yc6wa97qeu_large.png"
                    alt="homekit"
                  />
                </div>
                <div className="weather">
                  <img
                    src="https://www.apple.com/v/iphone-14-pro/b/images/specs/icon_weather__ebah1buzbhsi_large.png"
                    alt="weather"
                  />
                </div>
                <div className="remainders">
                  <img
                    src="https://www.apple.com/v/iphone-14-pro/b/images/specs/icon_reminders__di1f1z5s4wqe_large.png"
                    alt="remainders"
                  />
                </div>
              </div>
              <div className="main row-2">
                <div className="calculator">
                  <img
                    src="https://www.apple.com/v/iphone-14-pro/b/images/specs/icon_calculator__d7a00ukviuoi_large.png"
                    alt="calculator"
                  />
                </div>
                <div className="stocks">
                  <img
                    src="https://www.apple.com/v/iphone-14-pro/b/images/specs/icon_stocks__cuzu3zux2x6q_large.png"
                    alt="stocks"
                  />
                </div>
                <div className="tv">
                  <img
                    src="https://www.apple.com/v/iphone-14-pro/b/images/specs/icon_tv__dhicu2ugl6eu_large.png"
                    alt="tv"
                  />
                </div>
                <div className="clock">
                  <img
                    src="https://www.apple.com/v/iphone-14-pro/b/images/specs/icon_clock__crno03l3cm6a_large.png"
                    alt="clock"
                  />
                </div>
              </div>
              <div className="main row-3">
                <div className="voicememo">
                  <img
                    src="https://www.apple.com/v/iphone-14-pro/b/images/specs/icon_voicememo__chovqzlhpf0i_large.png"
                    alt="voicememo"
                  />
                </div>
                <div className="compass">
                  <img
                    src="https://www.apple.com/v/iphone-14-pro/b/images/specs/icon_compass__bhbacipnuadu_large.png"
                    alt="compass"
                  />
                </div>
                <div className="podcast">
                  <img
                    src="https://www.apple.com/v/iphone-14-pro/b/images/specs/icon_podcasts__eotg7tn2dc02_large.png"
                    alt="podcast"
                  />
                </div>
                <div className="watch">
                  <img
                    src="https://www.apple.com/v/iphone-14-pro/b/images/specs/icon_applewatch__fxcg1urhjfmi_large.png"
                    alt="watch"
                  />
                </div>
              </div>
              <div className="main row-4">
                <div className="tips">
                  <img
                    src="https://www.apple.com/v/iphone-14-pro/b/images/specs/icon_tips__0m9pxscc3zmu_large.png"
                    alt="tips"
                  />
                </div>
                <div className="findme">
                  <img
                    src="https://www.apple.com/v/iphone-14-pro/b/images/specs/icon_find_my__fx6t10wkfaye_large.png"
                    alt="findme"
                  />
                </div>
                <div className="settings">
                  <img
                    src="https://www.apple.com/v/iphone-14-pro/b/images/specs/icon_settings__b2n57ewvsgr6_large.png"
                    alt="settings"
                  />
                </div>
                <div className="files">
                  <img
                    src="https://www.apple.com/v/iphone-14-pro/b/images/specs/icon_files__clsxumr03gnm_large.png"
                    alt="files"
                  />
                </div>
              </div>
              <div className="main row-5">
                <div className="measure">
                  <img
                    src="https://www.apple.com/v/iphone-14-pro/b/images/specs/icon_measure__dv4t453vakya_large.png"
                    alt="measure"
                  />
                </div>
                <div className="magnifier">
                  <img
                    src="https://www.apple.com/v/iphone-14-pro/b/images/specs/icon_magnifier__c7jsvo2peqeu_large.png"
                    alt="magnifier"
                  />
                </div>
                <div className="translate">
                  <img
                    src="https://www.apple.com/v/iphone-14-pro/b/images/specs/icon_translate__fqku11fgbvyq_large_2x.png"
                    alt="translate"
                  />
                </div>
                <div className="shortcuts">
                  <img
                    src="https://www.apple.com/v/iphone-14-pro/b/images/specs/icon_shortcuts__gb3qr4tnelim_large.png"
                    alt="shortcuts"
                  />
                </div>
              </div>
              {/* <div className="main row-6">
                <div className="movie">
                  <img
                    src="https://www.apple.com/v/iphone-14-pro/b/images/specs/icon_imovie__eabjglfvwqye_large.png"
                    alt="movie"
                  />
                </div>
                <div className="pages">
                  <img
                    src="https://www.apple.com/v/iphone-14-pro/b/images/specs/icon_pages__ebtupt6l858i_large.png"
                    alt="pages"
                  />
                </div>
                <div className="keynote">
                  <img
                    src="https://www.apple.com/v/iphone-14-pro/b/images/specs/icon_keynote__5hrgks3lwhuy_large.png"
                    alt="keynote"
                  />
                </div>
                <div className="numbers">
                  <img
                    src="https://www.apple.com/v/iphone-14-pro/b/images/specs/icon_numbers__eubgf1igioeq_large.png"
                    alt="numbers"
                  />
                </div>
              </div>
              <div className="main row-7">
                <div className="garageband">
                  <img
                    src="https://www.apple.com/v/iphone-14-pro/b/images/specs/icon_garageband__dgwl2ommnrma_large.png"
                    alt="garageband"
                  />
                </div>
                <div className="remote">
                  <img
                    src="https://www.apple.com/v/iphone-14-pro/b/images/specs/icon_itunes_remote__b14sgro7hnpy_large.png"
                    alt="remote"
                  />
                </div>
                <div className="clips">
                  <img
                    src="https://www.apple.com/v/iphone-14-pro/b/images/specs/icon_clips__8xilngcewjmy_large.png"
                    alt="clips"
                  />
                </div>
                <div className="support">
                  <img
                    src="https://www.apple.com/v/iphone-14-pro/b/images/specs/icon_support__favvpmeye526_large.png"
                    alt="support"
                  />
                </div>
              </div>*/}
              <div className="main row-7">
                <div className="whatsapp" style={{transform : "translateX(-75px)"}} onClick={AppOn}>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3992/3992601.png"
                    alt="whatsapp"
                  />
                </div> 
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="main default">
              <div className="phone">
                <img
                  src="https://www.apple.com/v/iphone-14-pro/b/images/specs/icon_phone__demfm8e8tvau_large.png"
                  alt="phone"
                />
              </div>
              <div className="message">
                <img
                  src="https://www.apple.com/v/iphone-14-pro/b/images/specs/icon_messages__p96yz9z3xnum_large.png"
                  alt="message"
                />
              </div>
              <div className="camera">
                <img
                  src="https://www.apple.com/v/iphone-14-pro/b/images/specs/icon_camera__ff8fzi42yaqi_large.png"
                  alt="camera"
                />
              </div>
              <div className="safari">
                <img
                  src="https://www.apple.com/v/iphone-14-pro/b/images/specs/icon_safari__bwe30bfu9076_large.png"
                  alt="safari"
                />
              </div>
            </div>
            <div className="bottom_lock"><input className="slider_lock" type="range" value={click} onChange={(e)=>{
          setClick(e.target.value);
        }} min="0" max="5"/></div>
            {

              AppOnOff()
            }
    </div>
  );
}
