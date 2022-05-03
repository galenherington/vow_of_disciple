import React from "react"

 let i=-1;
export default function App () {

     const [callOuts, setCallOuts] = React.useState([])
    

     function updateCallOuts(event){
          i++
                
          setCallOuts(prevCallOuts => {
               
               return [...prevCallOuts, event.target.name]
                    
          }) 
          console.log(callOuts)
          }

     function resetCallOuts(){
          setCallOuts("")
     }

     
     

     return(
               <div className="callOutContainer">
                    <div className="current--callouts">
                         <img className="current--callout--pics"  src={callOuts[0] ? `images/${callOuts[0]}.jpg` : "./images/blank.jpg"}/>
                         <img className="current--callout--pics" src={callOuts[1] ? `images/${callOuts[1]}.jpg` : "./images/blank.jpg"}/>
                         <img className="current--callout--pics" src={callOuts[2] ? `images/${callOuts[2]}.jpg`: "./images/blank.jpg"}/>
                         <div className="reset--button" onClick={resetCallOuts}>Reset</div>
                    </div>
                    
                    <div className="callout--choices" >
                         <img className="symbols" src="images/blackheart.jpg" onClick={updateCallOuts} name="blackheart"/>
                         <img className="symbols" src="images/brain.jpg" onClick={updateCallOuts} name="brain"/>
                         <img className="symbols" src="images/commune.jpg" onClick={updateCallOuts} name="commune"/>
                         <img className="symbols" src="images/darkness.jpg" onClick={updateCallOuts} name="darkness"/>
                         <img className="symbols" src="images/drink.jpg" onClick={updateCallOuts} name="drink"/>
                         <img className="symbols" src="images/earth.jpg" onClick={updateCallOuts} name="earth"/>
                         <img className="symbols" src="images/enter.jpg" onClick={updateCallOuts} name="enter"/>
                         <img className="symbols" src="images/fleet.jpg" onClick={updateCallOuts} name="fleet"/>
                         <img className="symbols" src="images/give.jpg" onClick={updateCallOuts} name="give"/>
                         <img className="symbols" src="images/grief.jpg" onClick={updateCallOuts} name="grief"/>
                         <img className="symbols" src="images/guardian.jpg" onClick={updateCallOuts} name="guardian"/>
                         <img className="symbols" src="images/hive.jpg" onClick={updateCallOuts} name="hive"/>
                         <img className="symbols" src="images/kill.jpg" onClick={updateCallOuts} name="kill"/>
                         <img className="symbols" src="images/light.jpg" onClick={updateCallOuts} name="light"/>
                         <img className="symbols" src="images/love.jpg" onClick={updateCallOuts} name="love"/>
                         <img className="symbols" src="images/mesa.jpg" onClick={updateCallOuts} name="mesa"/>
                         <img className="symbols" src="images/pyramid.jpg" onClick={updateCallOuts} name="pyramid"/>
                         <img className="symbols" src="images/scorn.jpg" onClick={updateCallOuts} name="scorn"/>
                         <img className="symbols" src="images/stop.jpg" onClick={updateCallOuts} name="stop"/>
                         <img className="symbols" src="images/tower.jpg" onClick={updateCallOuts} name="tower"/>
                         <img className="symbols" src="images/traveller.jpg" onClick={updateCallOuts} name="traveller"/>
                         <img className="symbols" src="images/umbrellas.jpg" onClick={updateCallOuts} name="umbrellas"/>
                         <img className="symbols" src="images/witchqueen.jpg" onClick={updateCallOuts} name="witchqueen"/>
                         <img className="symbols" src="images/witness.jpg" onClick={updateCallOuts} name="witness"/>
                         <img className="symbols" src="images/worm.jpg" onClick={updateCallOuts} name="worm"/>
                         <img className="symbols" src="images/worship.jpg" onClick={updateCallOuts} name="worship"/>

                    </div>

               </div>
          )
}

