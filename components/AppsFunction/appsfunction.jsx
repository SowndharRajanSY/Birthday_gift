import React,{useState,useEffect} from 'react';
import Whatsapp from '../whatsapp/whatsapp';

export default function AppsFunction(props){
  const [isWhatsapp,setWhatsapp] = useState(true);
  useEffect(()=>{
    setWhatsapp(props.status);
  })
  const condition = ()=>{
    if(isWhatsapp){
      return(
        <Whatsapp/>
      )
    }else{
      return null;
    }
  }
  return(
    <div>
      {condition()}
    </div>
  )
}