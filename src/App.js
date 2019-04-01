import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import { ContentBlock } from "material-ui/svg-icons";
import axios from "axios";

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
  };

  offLampHandler = () => {
    //hey
    console.log("off lamp clicked");
    axios.get(offReq).then(response => console.log(response));
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <br />
        <h2> Jacob's home lamp </h2>
        <br />
        <div style={{textAlign: "center", fontSize: "7px"}}> Fuck you lil bitch</div>
        <br />
        <Button
          color="primary"
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
          color="secondary"
          variant="contained"
          size="large"
          onClick={this.offLampHandler}
        >
          {" "}
          Turn off lamp{" "}
        </Button>
      </div>
    );
  }
}


export default App;
