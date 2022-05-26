import React from "react";

export default class StateVariables extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      colour1: "",
      colour2: "",
      
    }
  }

  render() {
    let colour3 = "";

    return (
      <>
      
      <div>
      <h2> Enter the colour to be shown </h2>
      <div style={{ backgroundColor: this.state.color1, height: 200, width: 300 }}>
        <input
          type="text"
          name="username"
          placeholder="Enter the Color"
          onChange={(e) => {
            this.setState({ color1: e.target.value });
          } } />
      </div>
    </div><br /><div>
        <h2> Enter the colour to be shown on click </h2>
        <div style={{ backgroundColor: this.state.colour2, height: 200, width: 300 }}>
          <input
            type="text"
            name="username"
            placeholder="Enter the Color" 
           onChange={(e) => colour3= e.target.value}
           />
          <button
          name="Click Me"
          onClick={(e) => this.setState({ colour2:colour3 })}
          >
          Click Here
          </button>
        </div>
      </div>
      </>

    );
  }
}
