import React, {useState,useEffect} from 'react'
import axios from 'axios';
import Day from './Day';
import { Container } from '@material-ui/core';
import { makeStyles} from '@material-ui/core/styles';

 function Weather() {
     const classes = useStyles()
     const days = ['Sunday','Monday','Tuesday','Wedensday','Thursday','Friday','Saturday']
     const [weather,setWeather] = useState([])
     // I put the city in a state variable incase in the future we want to change to another city, like montreal
     const [city, setCity] = useState('toronto')
     
     useEffect(()=>{
        async function getWeatherData(){
            const weatherDays = []
            const res =  await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${'ef789d33883afc2c00eb596fd81b40cd'}`)
         
            for(let i = 0 ; i <33;i=i+8){
                weatherDays.push(res.data.list[i])
            }
            const data = weatherDays.map((day)=>{
                let dayOfWeek = new Date(day.dt_txt).getDay()
                let temp = kelvinToCelcius(day.main.temp)
                let condition = day.weather[0].main
                return {dayofWeek:days[dayOfWeek], temp,condition}

            })       
          
            setWeather(data)
            
        }
        getWeatherData()
     },[])

    const kelvinToCelcius= (temp)=>{
        return (temp -273.15).toFixed(0)
    }

     
    return (
        <div>
            <h2>Weather Data for Toronto</h2>
            <Container className = {classes.root}>
                {weather.map(day=>{
                    return <Day dayofWeek = {day.dayofWeek} temp = {day.temp} condition = {day.condition} />
                })}
            </Container>
        </div>
    )
}




const useStyles = makeStyles({
   
    root: {
        display:"flex",
        marginTop:"10%"
    },

  });
export default Weather;
