import { useState } from "react";
import "./css/style.css";
import { quizData } from "./components/quizData";

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
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  // restart game
  const handleRestartGame = () => {
    window.location.reload(false);
  };

  return (
    <div className="quiz-app-container">
      <div className="wrapper">
        <h2>Bible Quiz</h2>
        {showScore ? (
          <div className="score-section">
            You scored {score} out of {quizData.length}
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{quizData.length}
              </div>
              <div className="question-text">
                {quizData[currentQuestion].question}
              </div>
            </div>
            <div className="answer-section">
              {quizData[currentQuestion].answer.map((answer) => (
                <button
                  onClick={() => handleAnswer(answer.isCorrect)}
                  className="answer-btn"
                >
                  {answer.answerText}
                </button>
              ))}
            </div>
          </>
        )}

        <div className="restart">
          {currentQuestion ? (
            <button className="restart-btn" onClick={() => handleRestartGame()}>
              Restart
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
