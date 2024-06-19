import { useState } from "react"
import "./App.css"
import ShowCount from "./components/ShowCount/ShowCount"

const App = () => {
const [counter, setCounter] = useState(0)

return(
  <div className="app">
  
  <ShowCount counter={counter}/>

  <div>
    <button className="rest" onClick={() => {counter < 1 ? setCounter(counter) : setCounter(counter -1)}}>
        rest
    </button>
    <button onClick={() => {setCounter(counter +1)}}>
        sum
    </button>
  </div>
</div>
)
}



export default App