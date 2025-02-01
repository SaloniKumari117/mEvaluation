import { useEffect, useState } from 'react';
import axios from 'axios';

const Result = () => {
  const [score, setScore] = useState(null);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    axios.get(`https://your-glitch-url.com/api/result/${userId}`)
      .then(response => setScore(response.data))
      .catch(error => console.error(error));
  }, [userId]);

  return (
    <div>
      <h1>Quiz Result</h1>
      {score && (
        <p>You answered {score.correctAnswers} out of {score.totalQuestions} correctly.</p>
      )}
    </div>
  );
};

export default Result;
