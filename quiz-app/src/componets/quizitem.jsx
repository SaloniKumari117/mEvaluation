import { useState } from 'react';

const QuizItem = ({ question, selectedAnswer, onSelectAnswer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div>
      <h3>{question.text}</h3>
      {question.options.map((option) => (
        <button
          key={option}
          onClick={() => onSelectAnswer(question.id, option)}
          style={{
            backgroundColor: selectedAnswer 
              ? option === question.correctAnswer 
                ? 'lightgreen' 
                : 'salmon' 
              : 'white'
          }}
        >
          {option}
        </button>
      ))}
      <button onClick={() => setShowAnswer(!showAnswer)}>
        {showAnswer ? 'Hide' : 'Show'} Answer
      </button>
      {showAnswer && (
        <p>{selectedAnswer === question.correctAnswer ? '✅ Correct!' : `❌ Incorrect! The correct answer is ${question.correctAnswer}`}</p>
      )}
    </div>
  );
};

export default QuizItem;
