import React from "react";
export const DropDown = props => {
  return (
   <div>
            <h3> Please Select Your City </h3>            
              <select className="browser-default"
                onChange={event => { props.onDDLChangeHandler(event); }}>
                {props.data.map((row, i) => {
                  return (<option key={i} value={row.name}>{row.name}</option>
                  );
                })}
              </select>            
      </div>
  );
};