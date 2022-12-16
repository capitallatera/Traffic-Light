import "./App.css";
import { useState } from "react";
import Left from "./component/Left";
//             Top , Right, Bottom, Left
const timers = [6000, 6000, 6000, 6000];
let counter = -1;

const swtiching = (key) => {
	switch (key) {
		case 0:
			return "top";
		case 1:
			return "right";
		case 2:
			return "bottom";
		case 3:
			return "left";
		default:
			return "top";
	}
};

let nIntervId;
function App() {
	const [clockTurn, setClockTurn] = useState("");

	function traffic() {
		setClockTurn(swtiching(counter));
		if (counter < 3) return (counter += 1);
		counter = 0;
		clearInterval(nIntervId);
		nIntervId = null;
	}

	function changeLights() {
		if(counter === -1) counter+=1;
		if(clockTurn === '' && counter !== 0) setClockTurn('resume');
		if (!nIntervId) {
			nIntervId = setInterval(traffic, 3000);
		}
	}

	function stopLights() {
		clearInterval(nIntervId);
		nIntervId = null;
    	setClockTurn('')
	}
	return (
		<div className="relative">
			<div className="top" style={styling.top}>
				<Left clockTurn={clockTurn} active={counter ===0} styling={styling.topLeft} divStyle={styling.divStyling} />
			</div>

			<div style={styling.middle}>
				<div className="left">
					<Left clockTurn={clockTurn} active={counter === 3} />
				</div>

				<div className="right">
					<Left clockTurn={clockTurn} active={counter ===1} styling={styling.rightLeft} />
				</div>
			</div>

			<div className="bottom" style={styling.bottom}>
				<Left clockTurn={clockTurn} active={counter ===2} styling={styling.bottomLeft} divStyle={styling.divStyling} />
			</div>
			<div className="buttons" style={styling.top}>
				<button id="start" onClick={() => changeLights()}>
					Start
				</button>
				<button id="stop" onClick={() => stopLights()}>
					Stop
				</button>
			</div>
		</div>
	);
}

export default App;

const styling = {
	top: {
		display: "flex",
		justifyContent: "center",
	},

	bottom: {
		display: "flex",
		justifyContent: "center",
	},
	middle: {
		display: "flex",
		justifyContent: "space-around",
	},
	topLeft: {
		display: "flex",
		width: "fit-content",
		flexDirection: "row-reverse",
	},
	rightLeft: {
		flexDirection: "column-reverse",
		display: "flex",
	},
	bottomLeft: {
		display: "flex",
		width: "fit-content",
	},
	divStyling: { margin: "0px 5px" },
};
