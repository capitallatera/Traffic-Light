import "../App.css";
import { useEffect, useState } from "react";
const timers = [2000, 2000, 2000];
let counter = 1;
const swtiching = (key) => {
	switch (key) {
		case 0:
			return "green";
		case 1:
			return "yellow";
		case 2:
			return "red";
		default:
			return "red";
	}
};
let nIntervId;
function Left({ clockTurn, active, styling, divStyle }) {
	const [turn, setTurn] = useState("red");
	function traffic() {
		setTurn(swtiching(counter));
		if (counter < 2) return (counter += 1);
		counter = 0;
    stopTextColor();
	}
	const changeColor = () => {
		if (!nIntervId) {
			nIntervId = setInterval(traffic, timers[counter]);
		}
	};
	function stopTextColor() {
		clearInterval(nIntervId);
		nIntervId = null;
    counter = 0;
	}
  useEffect(() =>{
    setTurn(active ? "green" : "red");
      if(active) return changeColor();
      return ()=> stopTextColor();
  },[active]);
  
  useEffect(() =>{
    if(active && clockTurn === '') {
      clearInterval(nIntervId);
		  nIntervId = null;
    }
  },[active, clockTurn]);
	return (
		<div id="isiqfor" style={styling}>
			<div
				className={`red ${turn === "red" ? "on" : ""}`}
				style={divStyle}
			></div>
			<div
				className={`yellow ${turn === "yellow" ? "on" : ""}`}
				style={divStyle}
			></div>
			<div
				className={`green ${turn === "green" ? "on" : ""}`}
				style={divStyle}
			></div>
			<button id="start" onClick={() => changeColor()}>
				Start
			</button>
			<button id="stop" onClick={() => stopTextColor()}>
				Stop
			</button>
		</div>
	);
}

export default Left;
