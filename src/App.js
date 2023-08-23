import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function Steps() {
  const styles = {backgroundColor:"#7950f2",color:"#fff"}
  let [step,setStep] = useState(1)
  const [isOpen, setIsOpen] = useState(true);


  function handleClick(event){
    const  {name} = event.target
    if(name === "previous"){
      if(step > 1) { setStep(currentStepState=>currentStepState-1)}
     
    }else if(name === "next"){
      if(step < 3)  {setStep(currentStepState=>currentStepState+1)}
    }
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
      
      <p className="message">Step {step} : {messages[step - 1]}</p>
      <div className="buttons">
        <button name="previous" style={styles} onClick={e=>handleClick(e)}>Previous</button>
        <button name="next" style={styles} onClick={e=>handleClick(e)}>Next</button>
      </div>
    </div>
  )}
      </div>
  );
}

function App(){
  return <div>
  <Steps/>
  <Steps/>

  </div> 
}


export default App;
