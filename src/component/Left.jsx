import "../App.css";
import { useEffect, useState } from "react";
const timers = [1000, 1000, 1000];
let counter = 0;
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
function Left({ styling, divStyle, active, initial, clockTurn }) {
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
	}
  useEffect(() =>{
    setTurn(active ? "green" : "red")
  },[active]);

  // useEffect(()=>{
  //   if(active) return changeColor();
  //   return ()=> stopTextColor();
  // },[active]);
  // console.log(active && initial, turn, 'initialinitial');
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
