// src/Cars.jsx

import React from 'react';
import MyContext from './context/MyContext';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';

class Cars extends React.Component {
  render() {
    return (
      <MyContext.Consumer>
        {({carValues, moveCar}) => (
           <div>
           <div>
             <img
               className={ carValues.red ? 'car-right' : 'car-left'}
               src={carRed}
               alt="red car"
             />
             <button
               onClick={() => moveCar('red', !carValues.red)}
               type="button"
             >
               Move
             </button>
           </div>
           <div>
             <img
               className={carValues.blue ? 'car-right' : 'car-left'}
               src={carBlue}
               alt="blue car"
             />
             <button
               onClick={() => moveCar('blue', !carValues.blue)}
               type="button"
             >
               Move
             </button>
           </div>
           <div>
             <img
               className={carValues.yellow ? 'car-right' : 'car-left'}
               src={carYellow}
               alt="yellow car"
             />
             <button
               onClick={() => moveCar('yellow', !carValues.yellow)}
               type="button"
             >
               Move
             </button>
           </div>
         </div>
        )}
      </MyContext.Consumer>
    );
  }
}

export default Cars;
