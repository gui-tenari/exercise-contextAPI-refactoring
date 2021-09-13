import React  from "react";
import Cars from "../Cars";
import MyContext from "./MyContext";

class ContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      red: false,
      blue: false,
      yellow: false,
    }
    this.moveCar = this.moveCar.bind(this);
  }

  moveCar(car, value) {
    this.setState(() => ({
      [car]: value,
    }))
  }

  render() {
    const values = {
      carValues: this.state,
      moveCar: this.moveCar,
    }
    console.log(values)
    return(
      <MyContext.Provider value={values}>
        <Cars />
      </MyContext.Provider>
    )
  }
}

export default ContextProvider