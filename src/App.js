import React from "react"
import "./style.css"
import Button from "./Button"

function App(){
    return(
        <div>
          <h1 style={{textAlign:"center"}}>Hello  World</h1>
          <h2>Hello Youtubers,</h2>
          <h3 style={{textAlign:"center"}}> To Fill Participation Form  "Click On Buttons" Below</h3>
          <Button buttonText="Start"/>
          <Button buttonText="Reset"/>
          <Button buttonText="Cancle"/>
          
        </div>
    )
}

export default  App