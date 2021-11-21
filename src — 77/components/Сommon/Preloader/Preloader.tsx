import spinner from "../../../images/Spinner-1s-273px.svg";
import React from "react";

export const Preloader = () => {
  return (
    <div>
      <img style={{width: '64px', height: '64px'}} src={spinner} alt={'circle'}/>
    </div>
  )
}