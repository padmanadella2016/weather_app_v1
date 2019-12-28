import React, { Component } from "react";
import "./styles.css";
import styled from '@emotion/styled';
import { DropDown } from "./components/DropDown";
import {Weather} from "./components/Weather";
import data from "./data.json"

const Container = styled.div`
  background-color: #ededed;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient( to bottom, #1336a6, #284cb8, #3a61ca, #4c77db, #5f8deb );
`;

const WeatherCard = styled.div`
  position: relative;
  min-width: 360px;
  box-shadow: 0 1px 3px 0 #999999;
  background-color: #f9f9f9;
  box-sizing: border-box;
  padding: 30px 15px;
`;
const DropDownDescription = styled.div`
  font-size: 16px;
  color: #828282;
  margin-bottom: 4em;;
  line-height:2em;
`;

class WeatherInfo {
  constructor(icon, main, description, temp, humidity) {
    this.temp = temp;
    this.main = main;
    this.icon = icon;
    this.humidity = humidity;
    this.description = description;
    
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [" "],     
      info: ""
    };
  }
   
  onDDLChangeHandler = event => {
    //console.log(event, data);
    const datainfo =data.find(data => data.name === event.target.value) 
    //console.log(datainfo.main.temp);
     {  
      const info = new WeatherInfo (
        datainfo.weather[0].icon,
        datainfo.weather[0].main,
        datainfo.weather[0].description,
        datainfo.main.temp,
        datainfo.main.humidity
      );
      this.setState({
        info: info
      });
     
    }
   
  };   
  render() {
    return (
      <Container>
        <WeatherCard>          
          <DropDownDescription>
          <DropDown data={data}        
           onDDLChangeHandler={this.onDDLChangeHandler}
          />
          </DropDownDescription>
           <Weather info={this.state.info} />         
           </WeatherCard>
      </Container>
    );
  }
}

