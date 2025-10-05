import React, { useEffect, useRef, useState } from 'react'
import "./Weather.css"
import Search_icon from "../../assets/search.png"
import Cloud_icon from "../../assets/cloud.png"
import Drizzle_icon from "../../assets/drizzle.png"
import Rain_icon from "../../assets/rain.png"
import Snow_icon from "../../assets/snow.png"
import Clear_icon from "../../assets/clear.png"
import Humidity_icon from "../../assets/humidity.png"
import Wind_icon from "../../assets/wind.png"

function Weather() {
    let inputRef = useRef()
    const [loading, setLoading] = useState(false)
    const [weatherdata, setWeatherdata] = useState(false)

    const allIcons = {
        "01d": Clear_icon,
        "01n": Clear_icon,
        "02d": Cloud_icon,
        "02n": Cloud_icon,
        "03d": Cloud_icon,
        "03n": Cloud_icon,
        "04d": Drizzle_icon,
        "04n": Drizzle_icon,
        "09d": Rain_icon,
        "09n": Rain_icon,
        "10d": Rain_icon,
        "10n": Rain_icon,
        "13d": Snow_icon,
        "13n": Snow_icon,
    }
    const search = async (city) => {
        if(city === ""){
            alert("Enter City Name")
            return;
        }
        try {
            setLoading(true)
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`

            const response = await fetch(url);
            const data = await response.json();

            if(!response.ok){
                alert(data.message)
                setLoading(false)
                return;
            }

            console.log(data)
            inputRef.current.value = "";
            setLoading(false)

            const icon = allIcons[data.weather[0].icon] || Clear_icon;
            setWeatherdata({
                humidity: data.main.humidity,
                temperature: Math.floor(data.main.temp),
                location: data.name,
                windSpeed: data.wind.speed,
                icon: icon
            })
        } catch (error) {
            setWeatherdata(false)
            setLoading(false)
            console.error("Error in fetching weather data")
        }
    }
    useEffect(() => {
        search("Karachi")
    }, [])
    return (
        <div className='d-flex flex-column align-items-center p-5 rounded-3 weather'>
            <div className="d-flex align-items-center gap-2 search_bar">
                <input className='border-0 fs-5 rounded-5' type="text" name="" placeholder='Search' ref={inputRef} onKeyDown={(e) => { e.key === "Enter" && search(inputRef.current.value) }} />
                <img src={Search_icon} alt="" onClick={() => { search(inputRef.current.value) }} />
            </div>
            {loading ? <>
                <p className='text-white my-3 fs-2'>Loading...</p>
            </> : <>
                <img src={weatherdata.icon} alt="" className='my-3 weather-icon' />
                <p className='temperature m-0'>{weatherdata.temperature}ºc</p>
                <p className='fs-1 location m-0'>{weatherdata.location}</p>
                <div className="weather-data w-100 mt-4 d-flex align-items-center justify-content-between text-white">
                    <div className="coli d-flex align-items-start justify-content-center">
                        <img src={Humidity_icon} alt="" className='mt-1' />
                        <div className='d-flex align-items-center flex-column mx-2'>
                            <p className='m-0'>{weatherdata.humidity} %</p>
                            <p>Humidity</p>
                        </div>
                    </div>
                    <div className="coli d-flex align-items-start justify-content-center">
                        <img src={Wind_icon} alt="" />
                        <div className='d-flex align-items-center flex-column mx-2'>
                            <p className='m-0'>{weatherdata.windSpeed} km/h</p>
                            <p>Wind Speed</p>
                        </div>
                    </div>
                </div>
            </>
            }
        </div>
    )
}

export default Weather