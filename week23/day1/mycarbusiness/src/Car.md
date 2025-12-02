import { useEffect, useState } from "react"


function Car(props){
    const[make, setMake] = useState(props.brand)
    const[speed, setSpeed] = useState(0)
    const[model, setModel]= useState(props.name)
    const[fuel,setFuel]= useState(20)
    const[color, setColor] = useState("Green")
    const [sunrise, setSunrise] = useState("00:00")
    const[city,setCity] = useState("")
    const[lat,setLat] = useState(51.5074)
    const[lng,setLng] = useState(0.1278)


    const accelerate=()=>{
        setSpeed(speed+10)
    }
    const decelerate=()=>{
        setSpeed(speed-10)
    }
    const fuelLevel=()=>{
        if(fuel>0){
            setFuel(fuel-10)
        }else {
           alert("Out of fuel! Please refuel to continue."); 
        }
    }
    const refuel=()=>{
        setFuel(100)
    }
//this will run whenever the page has finshed loading or rerendered 
    useEffect(function(){
        fetch('https://api.sunrise-sunset.org/json?lat='+ lat +'&lng=' + lng)
        .then(data=>data.json())
        .then(data=>{
            setSunrise(data.results.sunrise)
        })
    })
    const setParis=()=>{
    setCity("Paris");
    setLat(48.864716);
    setLng(2.349014);  
    }

    const setNewYork=()=>{
        setCity("New York");
        setLat(40.730610);
        setLng(-73.935242);;  
}


    return(
        <>
        {/* <h1>I am a Car of {color} {make} {model} going at {speed} km/h with {fuel} Lts of fuel. I will reach {city} sunrise at {sunrise} O'clock </h1> */}
        <h1>Make: {make}  </h1>
        <h2>Model: {model} </h2>
        <h2>Color: {color} </h2>
        {/* <button onClick={accelerate}>Accelerate</button>
        <button onClick={decelerate}>Decelerate</button>
        <button onClick={fuelLevel}>Use Fuel</button>
        <button onClick={refuel}>Refuel </button>
        <button onClick={setNewYork}>Select New York</button>
        <button onClick={setParis}>Select Paris</button>             */}
        </>
    )
}

export default Car