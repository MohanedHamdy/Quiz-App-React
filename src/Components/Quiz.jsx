import { useState } from "react";
import QUESTIONS  from "../questions.js";
import quizCompletelogo from "../assets/quiz-complete.png";
export default function Quiz ( ) {
const [userAnswers, setUserAnswers] = useState([]);

const ActiveQuestionIndex = userAnswers.length;
const isquizComplete = ActiveQuestionIndex === QUESTIONS.length; 

function handleSelectAnswer(SelectedAnswer) {
    setUserAnswers((prevAnswers)=> [...prevAnswers, SelectedAnswer]); }

    if (isquizComplete) {
        const correctAnswers = QUESTIONS.map((question) => question.answers[0]);
        const score = userAnswers.filter((answer, index) => answer === correctAnswers[index]).length;
        return (
          <div id="summary">
            <img src={quizCompletelogo} alt="" />
            <h2>Quiz Complete!</h2>
            <p id ="summary-stats"> Your Score is {score} out of {QUESTIONS.length}</p>
          </div>
        );
      }
      const shuffledAnswers = [...QUESTIONS[ActiveQuestionIndex].answers].sort(() => Math.random() - 0.5);

return (
    <div id="quiz"> 
    <div id="question">
        <h2>{QUESTIONS[ActiveQuestionIndex].text}</h2>
        <ul id="answers">
            {shuffledAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
            </li>
          ))}
        </ul>
    </div>
    </div>
)
}
