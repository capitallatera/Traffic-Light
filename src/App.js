import "./App.css";
import { useState } from "react";
import Left from "./component/Left";

const timers = [7000, 7000, 7000, 7000];
let counter = 0;

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
		if (counter <= 3) return (counter += 1);
		counter = 0;
    stopLights();
	}

	function changeLights() {
		if (!nIntervId) {
			nIntervId = setInterval(traffic, timers[counter]);
		}
	}

	function stopLights() {
		clearInterval(nIntervId);
		nIntervId = null;
	}
  console.log(counter, 'counter')
	return (
		<div className="relative">
			<div className="top" style={styling.top}>
				<Left styling={styling.topLeft} divStyle={styling.divStyling} active={counter ===0} initial={counter} clockTurn={clockTurn}/>
			</div>

			<div style={styling.middle}>
				<div className="left">
					<Left active={counter === 3} initial={counter} clockTurn={clockTurn}/>
				</div>

				<div className="right">
					<Left styling={styling.rightLeft} active={counter ===1} initial={counter} clockTurn={clockTurn}/>
				</div>
			</div>

			<div className="bottom" style={styling.bottom}>
				<Left styling={styling.bottomLeft} divStyle={styling.divStyling} active={counter ===2} initial={counter} clockTurn={clockTurn}/>
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
