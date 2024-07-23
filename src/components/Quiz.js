import React,{useState} from "react";
import {QUESTIONS} from "../questions";
import Question from "./Question";

const Quiz=()=>{
  
  const [showScore, setShowScore] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    sessionId:'',
    score: 0,
    yesAnswers: 0,
    noAnswers: 0,
  });



    return (
      <div className="quiz-container">
       
       
          {!showResult ? (
          <Question questions={QUESTIONS} result={result} setShowResult={setShowResult} setResult={setResult} totalQuestions={QUESTIONS && Object.keys(QUESTIONS).length}/>
      ) : (
        <div className="result">
          <h3>Result</h3>
          <p>
            <span>Thank you for appearing this quiz!</span>
          </p>
          <p>
            Here is your score:<span> {result.score}</span>
          </p>
          
        </div>
      )}
  
       
      </div>
    );
  
}

export default Quiz;
