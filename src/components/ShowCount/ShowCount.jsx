import "./ShowCount.css"

const ShowCount = (props) => {
  return(

    <div>
      <h2>You clicked {props.counter} {props.counter === 1 ? "time" : "times"} </h2>
    </div>

  )
}



export default ShowCount