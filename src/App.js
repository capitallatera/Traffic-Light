import { useState } from "react";
import "./App.css";

const innerObj = (top, left, bottom, right) =>({
	top: top,
	left: left,
	bottom: bottom,
	right: right,
})
const obj ={
	0:innerObj(1,3,3,3),
	1:innerObj(2,3,3,3),
	
	2:innerObj(3,1,3,3),
	3:innerObj(3,2,3,3),
	
	4:innerObj(3,3,1,3),
	5:innerObj(3,3,2,3),
	
	6:innerObj(3,3,3,1),
	7:innerObj(3,3,3,2),
	
	8:innerObj(1,3,3,3),
}
let timeOut;
let count=0;
function App() {
	const [counting, setCounting] = useState(0);
	function iterateSecond (){
		if(count<8){
			count+=1;
			setCounting(count)
			if(timeOut) {
				onStop();
				onStart();
				return;
			}
		} 
		count = 0;
		onStop();
	}
	function onStart() {
		// console.log(timeOut, 'Timeout');
		if(!timeOut) {
			timeOut = setTimeout(iterateSecond, 2000);
		}
	}
	function onStop () {
		clearTimeout(timeOut);
		timeOut = null;
	}
	const passSignal = (Ctype) => obj[counting][Ctype] ? obj[counting][Ctype] : 3 
	// console.log(count, 'count')
	return <div>
		<div className="flex-center"><LightTop className="center row-reverse" turnOn={passSignal('top')} /></div>
		<div className="flex-around"><LightLeft turnOn={passSignal('left')} /> <LightRight className="column-reverse" turnOn={passSignal('right')} /></div>
		<div className="flex-center"><LightBottom className="center" turnOn={passSignal('bottom')} /></div>
		<button onClick={()=>onStart()}>start</button>
		<button onClick={()=>onStop()}>stop</button>
	</div>
}

export default App;

function switchStyle (key) {
	switch (key) {
		case 1: return 'green';
		case 2: return 'yellow';
		case 3: return 'red';
		default: return;
	}
}
const Light = ({className, turnOn}) => {
	const lights = [1,2,3]
	return <div className={`isiqfor ${className || ''}`}>{lights?.map((item) => <div className={`light ${switchStyle(item)} ${item === turnOn ?  'on' : ''}`} />)}</div>
}
const LightTop =(props)=> <Light {...props}/> 
const LightLeft =(props)=> <Light {...props}/> 
const LightRight =(props)=> <Light {...props}/> 
const LightBottom =(props)=> <Light {...props}/> 