import React from "react";
import "./inlineBox.css";

const InlineBox = () => {
  const [bmi, setBmi] = React.useState();
  const [info, setInfo] = React.useState();
  const [height, setHeight] = React.useState(0);
  const [weight, setWeight] = React.useState(0);
  const [input, setInput] = React.useState();

  const reload = () => {
    setWeight(0);
    setHeight(0);
    setInfo('');
    setBmi(0);
  }

  const calculateBMI = () => {
    let val = (
      [Number(weight) / (Number(height) * Number(height))] * 10000
    ).toFixed(1);
    setBmi(val);
    if (val < 18.5) {
      setInfo("Underweight");
    } else if (val > 18.5 && val <= 24.9) {
      setInfo("Normal weight");
    } else if (val > 24.9 && val < 30) {
      setInfo("Overweight");
    } else if (val > 29.9 && val < 35) {
      setInfo("Obesity class 1");
    } else if (val > 34.9 && val < 40.1) {
      setInfo("Obesity class 2");
    } else if(val > 40) {
      setInfo("Obesity class 3");
    }
    else{
      setInfo("Please fill weight and height");
    }
  };

  return (
    <div className="inline-box">
      <h4>
        BMI = <b id="bmi">{bmi}</b> - <b id="weight">{info}</b>{" "}
      </h4>

      <div className="input">
        <span>
          {" "}
          <b>Height (cm)</b>
        </span>
        <input type="text" value={height} onChange={(e) => setHeight(e.target.value)}/>
      </div>

      <div className="input">
        <span>
          <b>Weight (kg)</b>
        </span>
        <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)}/>
      </div>

      <div className="buttons">
      <button onClick={calculateBMI} className="calculate-btn">Calculate</button>
      <button onClick={reload} className="calculate-btn">Reset</button> 
      </div>

    </div>
  );
};

export default InlineBox;
