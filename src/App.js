import React,{useEffect,useState} from "react";
import Quiz from "./components/Quiz";
import { getResult } from "./utils/getResult";


const App=()=>{
  
  const [showPreScore, setShowPrevScore] = useState(false);
  const [average,setAverage]=useState(0);

  const onClick=()=>{
    setShowPrevScore(false)
  }
// check previously appeared tests? if yes get average of all test score
useEffect(()=>{
  const prevScores=getResult();
  if(prevScores && prevScores.length>0)
  {
    setShowPrevScore(true)
    let total=prevScores.reduce(function (acc, obj) { return acc + obj.score; }, 0)    
    let avg=total/prevScores.length
      setAverage(avg)
  }
},[]);


    return (
      <div className="main__wrap">
        <main className="container">
          <h1 className="title">
            TECH QUIZ
          </h1>
          {!showPreScore ? (
          <Quiz/>
      ) : (
        <div className="result">
          <h3>Average Score</h3>
          <p>
            <span>Hey! Welcome back,</span>
          </p>
          <p>
            Here is your overall average rating:<span> {average}</span>
          </p>
          <div className="align-right">
            <button onClick={onClick} >
              Let's Begin Again!
            </button>
          </div>
        </div>
      )}
  
        </main>
      </div>
    );
  
}

export default App;
