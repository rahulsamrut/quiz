import React,{useState,useEffect} from 'react'
import { saveResult } from '../utils/saveResult';
const Question=({questions,result,setShowResult,setResult,totalQuestions})=>{
    const [currentQues, setCurrentQues] = useState(1);
    const [selectedAnswer, setSelectedAnswer] = useState('')
    const [selectedOption, setSelectedOption] = useState(null)   
    const [isFinish,setIsFinish]= useState(false);
   
    const choices=['Yes','No'];

    const addLeadingZero = (number) => (number > 9 ? number : `0${number}`)
    const onClickNext = () => {
        setSelectedOption(null)
        setResult((prev) =>
          selectedAnswer==='Yes'
            ? {
                ...prev,
                yesAnswers: prev.yesAnswers + 1,
              }
            : { ...prev, noAnswers: prev.noAnswers + 1 }
        )
        if (currentQues !== totalQuestions) {
          setCurrentQues((prev) => prev + 1)
        } else {
          setCurrentQues(1)
          setResult((prev)=>{
            let score=(prev.yesAnswers*100)/totalQuestions; 
            return {...prev,score:score}
           });
          setIsFinish(true);     
          
        }
      }
    
      const onAnswerSelected = (e,answer, index) => {        
          setSelectedOption(index)       
          setSelectedAnswer(answer)
      }

      
      useEffect(()=>{
       
        if(isFinish)
        {          
        saveResult(result);
        setShowResult(true)
        }
      },[isFinish]);

return(
    <div>
          <div>
            <span className="active">{addLeadingZero(currentQues)}</span>
            <span className="totalquestions">/{addLeadingZero(totalQuestions)}</span>
          </div>
          <h2>{questions[currentQues]}</h2>
          <ul>
            {choices.map((answer, index) => (
              <li
              onClick={(e) => onAnswerSelected(e,answer, index)}
                key={answer}
                className={selectedOption === index ? 'selected' : null}>                   
                {answer}
              </li>
            ))}
          </ul>
          <div className="align-right">
            <button onClick={onClickNext} disabled={selectedOption === null}>
              {currentQues === totalQuestions  ? 'Finish' : 'Next'}
            </button>
          </div>
    </div>
)
}
export default Question;