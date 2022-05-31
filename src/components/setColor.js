import React from "react";

export default class setColor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
	
	storecolor: "",
     color1: "",
     color2: "",
      

    }
  }

  render() {
    
    return (
      <>

        
        <div>
          <h2> Enter the colour to be shown on click </h2>
          <input
            type="text"
            name="username"
            placeholder="Enter the Color"
            onChange={(e) => this.setState({storecolor: e.target.value})}
            ></input>
          
            <div
            id="d1"
            style={{
              backgroundColor: this.state.color1,
              width: 50,
              height: 60,
              marginBottom: 10,
              borderStyle:'solid',
              borderColor:'gray'
            }}
            onClick={(e) =>
              this.state.storecolor !== "" ?
              this.setState({ color1: this.state.storecolor }): this.setState({ color1: "" })
            }
          ></div>

            <div
            id="d2"
            style={{
              backgroundColor: this.state.color2,
              width: 50,
              height: 60,
              marginBottom: 10,
              borderStyle:'solid',
              borderColor:'gray'
            }}
            onClick={(e) =>
              this.state.storecolor !== "" ?
              this.setState({ color2: this.state.storecolor }): this.setState({ color2: "" })
            }
          ></div>

           <div
            id="d3"
            style={{
              backgroundColor: this.state.color3,
              width: 50,
              height: 60,
              marginBottom: 10,
              borderStyle:'solid',
              borderColor:'gray'
            }}
            onClick={(e) =>
              this.state.storecolor !== "" ?
              this.setState({ color3: this.state.storecolor }): this.setState({ color3: "" })
            }
          ></div>
          
        </div>
        

      </>

    );
  }
}