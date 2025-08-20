import useFetch from "./hooks/useFetch";
import './assets/styles/style.css';
import icons from './assets/icons.svg';
import { useState } from "react";
import type { MenuPosition } from "./contstants/types";
import Loader from "./components/loader";

const App=()=> {
  const API_KEY= import.meta.env.VITE_NASA_API_KEY;
  const POD_URL = import.meta.env.VITE_PIC_DAY;
  const url = `${POD_URL}?api_key=${API_KEY}`

  const [menuState, setMenuState] = useState<MenuPosition>('idle');

  const {error, loading, data} = useFetch(url);

  if(loading){
    return <Loader />
  }

  if(error){
    return<p>Unable to load the image</p>
  }

  const handleMenuClick =()=>{
    if(menuState === 'idle'){
      setMenuState('open')
    }else if(menuState === 'open'){
      setMenuState('close')
    }else{
      setMenuState('open')
    }
  }


  return (
    <div className="pod" style={{backgroundImage:`url(${data?.hdurl})`}}>
      <div className="title">
        <p className="title-text">
          Picture of the day
        </p>
        <p className="title-pod">
          {data?.title}
        </p>
      </div>
      <div className="info-box" onClick={handleMenuClick}>
        <svg className="info-box-icon">
          <use xlinkHref={`${icons}#${menuState === 'open' ? 'icon-cancel' :'icon-menu_open'}`}></use>
        </svg>
      </div>
      <div className={`explanation-box ${ menuState === 'open' ? 'explanation-box-open' : menuState === 'close' ? 'explanation-box-close':''}`}>
        <div className="explanation-text">
          {data?.explanation}
        </div>
      </div>
    </div>
  )
}

export default App
