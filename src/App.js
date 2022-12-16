import { useState } from "react";
import "./App.css";
let parentTimeout, childTimeout;
let counter = 0;
let counterChild = 0;
const switchCompoent = (key) =>{
	switch (key) {
		case 0: return 'top'
		case 1: return 'right'
		case 2: return 'bottom'
		case 3: return 'left'
		default: return;
	}
}
const switchLight = (key) =>{
	switch (key) {
		case 0: return 1
		case 1: return 2
		// case 2: return 3
		default: return;
	}
}
function App() {
	const [current, setCurrent] = useState('');
	const [lights, setLights] = useState('');
	function iterateLightComponent(){
		setCurrent(switchCompoent(counter));
		onStop()
		iterateLights()
		if(counter < 3) {
			counter+=1
			onStart()
			return
		}
		return counter = 0
	}

	function iterateLights(){
		setLights(switchLight(counterChild));
		onStopChild()
		if(counterChild < 1) {
			counterChild+=1
			onStartChild()
			return
		}
		return counterChild = 0
	}

	function onStart(delay){
		if(!parentTimeout){
			parentTimeout = setTimeout(iterateLightComponent, 2000);
		}
	}

	function onStartChild(delay){
		if(!childTimeout){
			childTimeout = setTimeout(iterateLights, 1000);
		}
	}
	
	function onStop(){
		onStopChild()
		clearTimeout(parentTimeout)
		parentTimeout=null;
	}

	function onStopChild(){
		clearTimeout(childTimeout)
		childTimeout=null;
	}
	console.log(current, 'currentcurrent');
	const passSignal = (Ctype) => current === Ctype ? lights : 3 
	return <div>
		<div className="flex-center"><LightTop className="center" turnOn={passSignal('top')} /></div>
		<div className="flex-around"><LightLeft className="column-reverse"turnOn={passSignal('left')} /> <LightRight turnOn={passSignal('right')} /></div>
		<div className="flex-center"><LightBottom className="center row-reverse" turnOn={passSignal('bottom')} /></div>
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