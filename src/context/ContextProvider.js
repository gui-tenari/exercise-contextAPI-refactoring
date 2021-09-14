import React  from "react";
import Cars from "../Cars";
import TrafficSignal from "../TrafficSignal";
import MyContext from "./MyContext";

class ContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
      traffic: 'red',
    }
    this.moveCar = this.moveCar.bind(this);
    this.changeSignal = this.changeSignal.bind(this);
  }

  moveCar(car, value) {
    this.setState(() => ({
      cars: {[car]: value},
    }))
  }

  changeSignal(color) {
    this.setState({ traffic: color })
  }

  render() {
    const values = {
      carValues: this.state.cars,
      moveCar: this.moveCar,
      traffic: this.state.traffic,
      changeSignal: this.changeSignal,
    }
    return(
      <MyContext.Provider value={values}>
        <Cars />
        <TrafficSignal />
      </MyContext.Provider>
    )
  }
}

export default ContextProvider