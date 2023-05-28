import React from 'react';
function Greeting(props) {
  if (props.lang === "de") {
    return <div class="box">Ludwig {props.name}</div>
  } 
  if (props.lang === "fr") {
    return <div class="box">François {props.name}</div>
  } 
  if (props.lang === "es") {
    return <div class="box">Hola {props.name}</div>
  } 
  else {
    return ( <div class="box">Hello {props.name}</div>
    );
  } 
}
export default Greeting;