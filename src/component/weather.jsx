import { useState } from "react"
import axios from "axios"

function Weather()
{
    const[city,setcity]=useState("")
    const[weather,setweather]=useState("")
    const[temp,setttemp]=useState("")
    const[desc,setdesc]=useState("")
    function handlecity(event)
    {
        setcity(event.target.value)
    }
    function getweather()
    {
        var weatherdata= axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=49e2b416a0f4a01ffc28766e94aa1fe5`)
        weatherdata.then(function(sucess)
        {
            console.log(sucess.data)
            setweather(sucess.data.weather[0].main)
            setttemp(sucess.data.main.temp)
            setdesc(sucess.data.weather[0].description)
        })
    }
    return(
        <div className=" bg-black p-20">
            <div className=" bg-green-500 p-10 rounded-md">
                <h1 className=" text-2xl  font-medium">Weather Report</h1>
                <p>I can give a weather report about your city !</p>
                <input type="text" onChange={handlecity} placeholder="Enter your City Name" className=" border border-black rounded mt-2"></input><br />
                <button onClick={getweather} className=" bg-black text-white p-2  rounded-md mt-2">Report</button>
                <div>
                <h1><b>Weather: </b>{weather}</h1>
                <h1><b>Temperature: </b>{temp}</h1>
                <h1><b>Description: </b>{desc}</h1>
            </div>
            </div>

           

        </div>
    )
}
export default Weather