//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";


// include your styles into the webpack bundle
import "../styles/index.css";

function SimpleCounter(props){
    return( <div className="mainCounter">
                <div className="clock"><i class="far fa-clock"></i></div>
                <div className="six">{props.sixthDigit % 10}</div>
                <div className="five">{props.fifthDigit % 10}</div>
                <div className="four">{props.fourthDigit % 10}</div>
                <div className="three">{props.thirdDigit % 10}</div>
                <div className="two">{props.secondDigit % 10}</div>
                <div className="one">{props.firstDigit % 10}</div>
                
                
                
                
                
    </div>)
}
SimpleCounter.protoTypes={
    firstDigit: PropTypes.number,
    secondDigit: PropTypes.number,
    thirdDigit: PropTypes.number,
    fourthDigit: PropTypes.number,
    fifthDigit: PropTypes.number,
    sixthDigit: PropTypes.number,  
};

let counter = 0;
setInterval(function(){
    const six = Math.floor(counter/100000);
    const five = Math.floor(counter/10000);
    const four = Math.floor(counter/1000);
    const three = Math.floor(counter/100);
    const two = Math.floor(counter/10);
    const one = Math.floor(counter/1);
    counter++
    ReactDOM.render(<SimpleCounter firstDigit={one} secondDigit={two} thirdDigit={three} fourthDigit={four} fifthDigit={five} sixthDigit={six} />, document.querySelector("#app"));
},1000);


