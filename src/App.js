import React from "react";
//import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
//import { ContentBlock } from "material-ui/svg-icons";
import axios from "axios";
import "./styles.css";

const apiKey = "mMqNcOe88sAYCMRMSeAyEl8eR2Mmc2EeZji6SqiLWpD";
const onReq = `https://maker.ifttt.com/trigger/Lamp on/with/key/${apiKey}`;
const offReq = `https://maker.ifttt.com/trigger/Lamp off/with/key/${apiKey}`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onLampHandler = () => {
    //hey
    console.log("on lamp clicked");
    axios.get(onReq).then(response => console.log(response));
    //window.open('http://www.pornhub.com', '_blank')
    //zalert("lamp not gonna turn on ya shit")
  };

  offLampHandler = () => {
    //hey
    console.log("off lamp clicked");
    axios.get(offReq).then(response => console.log(response));
    //window.open('http://www.pornhub.com', '_blank')
    //alert("not gonna mf go on stopit")
  };

  testHandler = () => {
    //
    window.open("https://jingalls1.github.io/nbareact2", "_self")
  }

  render() {
    console.log('just checking if it updated 4/10')
    return (
      <div style={{ textAlign: "center" }}>
        <br />
        <br/>
        <h2 className="title"> Jacob's home lamp </h2>
        <br />
        <br />
        <div style={{width: window.innerWidth}}>
        <Button
        style={{
          borderRadius: 40,
            padding: "18px 36px",
            fontSize: "18px",
            color: "white",
            textShadow: "2px 2px 7px black",
            backgroundColor: "#51D851"
        }}
          variant="contained"
          size="large"
          onClick={this.onLampHandler}
        >
          {" "}
          Turn on the lamp
        </Button>
        <br />
        <br />
        <Button
        style={{
          borderRadius: 40,
            padding: "25px 36px",
            fontSize: "18px",
            textShadow: "1px 1px 5px black",
            color: "white",
            backgroundColor: "#FD706B"
        }}
        variant="contained"
          size="large"
          onClick={this.offLampHandler}
        >
          {" "}
          <span className="power">
          	{"\u23FB"}
          </span>
        </Button>
        </div>
      </div>
    );
  }
}


export default App;
