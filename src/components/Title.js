import React from 'react';
import "./Title.scss";

function Title(props){
  return (
    <h1 className = "contTitle" aria-label = {props.text[2]}>
      <span aria-hidden = "true">{props.text[0]}</span>
      <span aria-hidden = "true">{props.text[1]}</span>
    </h1>
  ) 
}
export default Title;