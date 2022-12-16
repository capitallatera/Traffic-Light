import "../App.css";
import { useEffect, useState } from "react";
const timers = [2000, 2000, 2000];
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
// let nIntervId;
function Left({ nIntervId, clockTurn, active, styling, divStyle }) {
	const [turn, setTurn] = useState("");
	function traffic() {
		setTurn(swtiching(counter));
    	stopTextColor();
		if (counter < 2) {
			counter += 1;
			changeColor();
			return;
		};
		counter = 0;
	}
	const changeColor = () => {
		if (!nIntervId) {
			nIntervId = setTimeout(traffic, 1000);
		}
	};
	function stopTextColor() {
		clearTimeout(nIntervId);
		nIntervId = null;
		
	}
  useEffect(() =>{
    // setTurn(active ? "green" : "red");
	if(active && clockTurn) return changeColor();
	active && console.log(turn, 'Turn')
	return stopTextColor();
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
			{/* <button id="start" onClick={() => changeColor()}>
				Start
			</button>
			<button id="stop" onClick={() => stopTextColor()}>
				Stop
			</button> */}
		</div>
	);
}

export default Left;
