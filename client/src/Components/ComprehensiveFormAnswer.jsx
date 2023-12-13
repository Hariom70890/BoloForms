// ComprehensiveForm.js

import React, { useState } from "react";
import "../App.css";
const ComprehensiveFormAnswer = () => {
   const [selectedAnswer, setSelectedAnswer] = useState(null);

   const passage = `This is the reference text that you want users to read and answer questions based on. You can have multiple questions based on this text.`;

   const questions = [
      {
         question: "What is the capital of France?",
         options: ["Berlin", "Madrid", "Paris", "Rome"],
         correctAnswer: "Paris",
      },
      {
         question: "Which planet is known as the Red Planet?",
         options: ["Mars", "Earth", "Venus", "Jupiter"],
         correctAnswer: "Mars",
      },
      // Add more questions as needed
   ];

   const handleAnswerSelection = (questionIndex, selectedOption) => {
      setSelectedAnswer({ questionIndex, selectedOption });
   };

   

   return (
      <div className="comprehensive-form">
         <div className="passage">
            <p>{passage}</p>
         </div>
         <div className="questions">
            {questions.map((question, index) => (
               <div key={index} className="question">
                  <p>{question.question}</p>
                  <ul className="options">
                     {question.options.map((option, optionIndex) => (
                        <li
                           key={optionIndex}
                           className={
                              selectedAnswer &&
                              selectedAnswer.questionIndex === index &&
                              selectedAnswer.selectedOption === option
                                 ? "selected"
                                 : ""
                           }
                           

                           onClick={() => handleAnswerSelection(index, option)}
                        >
                           {option}
                        </li>
                     ))}
                  </ul>
               </div>
            ))}
         </div>
      </div>
   );
};

export default ComprehensiveFormAnswer;
