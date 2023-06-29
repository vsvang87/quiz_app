import { useState } from "react";
import "./css/style.css";
import { quizzes } from "./components/quizData";

function App() {
  // set state for questions, score, and show score
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  // checking to see if answer is correct
  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    // setting up next questions
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizzes.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {quizzes.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{quizzes.length}
            </div>
            <div className="question-text">
              {quizzes[currentQuestion].question}
            </div>
          </div>
          <div className="answer-section">
            {quizzes[currentQuestion].answer.map((answer) => (
              <button onClick={() => handleAnswer(answer.isCorrect)}>
                {answer.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
