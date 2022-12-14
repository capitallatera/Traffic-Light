import logo from "./logo.svg"
import "./App.css"
import { useEffect, useState } from "react"
import Left from "./component/Left"

const timers = [7000, 7000, 7000, 7000]
let counter = 0

const swtiching = (key) => {
  switch (key) {
    case 0:
      return "top"
    case 1:
      return "right"
    case 2:
      return "bottom"
    case 3:
      return "left";
    default: return 'top';
  }
}

let nIntervId;
function App() {
  const [clockTurn, setClockTurn] = useState('');
  const [store, setStore] = useState('');

  function traffic() {
    console.log(swtiching(counter), counter, 'Working');
    setClockTurn(swtiching(counter))
    if (counter <= 3) return (counter += 1)
    counter = 0
    stopLights();

    console.log("It's Stopped");
  }

  function changeLights() {
    if (clockTurn === 'shut') setClockTurn(store);
    else traffic();
    
    if (!nIntervId) {
      nIntervId = setInterval(traffic, timers[counter])
      
    }
  }

  function stopLights() {
    clearInterval(nIntervId)
    nIntervId = null
    setClockTurn(value => {
      setStore(value);
      return 'shut'
    } );
  }
  console.log(clockTurn, 'clockTurn');
  return (
    <div className="relative">
      <div className="top" style={styling.top}>
        <Left  styling ={{    
          display: 'flex',
          width: 'fit-content',
          flexDirection: 'row-reverse',
        }} 
        check={clockTurn === 'top'}
        clockTurn={clockTurn}
        divStyle={{margin: '0px 5px'}}
      />
      </div>

      <div style={styling.middle}>
        <div className="left">
        <Left check={clockTurn === 'left'}
        clockTurn={clockTurn}/>
      </div>

      <div className="right">
        <Left 
          styling={{
            flexDirection: 'column-reverse',
            display: 'flex',
          }}
        
        check={clockTurn === 'right'}
        clockTurn={clockTurn}/>
      </div>
      </div>

      <div className="bottom" style={styling.bottom}>
        <Left styling ={{    
          display: 'flex',
          width: 'fit-content'}} 
          check={clockTurn === 'bottom'}
          clockTurn={clockTurn}
          divStyle={{margin: '0px 5px'}}
        />
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
  )
}

export default App

const styling = {
  top : {
    display: 'flex',
    justifyContent: 'center',
  },

  bottom : {
    display: 'flex',
    justifyContent: 'center',
  },
  middle : {
    display: 'flex',
    justifyContent: 'space-around',
  }
}

