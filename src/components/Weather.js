import React from "react";
import styled from '@emotion/styled';

const CurrentWeather = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; 
`;
const Temperature = styled.div`
  color: #757575;
  font-size: 3em;
  font-weight: 300;
  display: flex;
`;
const Description = styled.div`
  color: #757575;
  font-size: 1em;
  font-weight: 300;  
`;

export const Weather = props => {
   if(!props){
    return<div>no data</div>
  }
  return (
      <div data-testid= "weather-data">
    <CurrentWeather> 
    <Temperature>{props.info.temp &&<span>{props.info.temp} °C</span>} </Temperature>      
    {props.info.icon &&<img src={props.info.icon} alt="forecast" />}
    </CurrentWeather>
    <CurrentWeather>{props.info.main}{props.info.humidity && <p>Humidity: {props.info.humidity}</p>} </CurrentWeather> 
    <Description>{props.info.description}</Description> </div>
  );
};