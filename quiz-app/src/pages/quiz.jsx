import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import QuizItem from '../components/QuizItem';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://your-glitch-url.com/api/questions')
      .then(response => setQuestions(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleAnswerSelect = (questionId, selectedAnswer) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: selectedAnswer,
    }));
  };

  const handleSubmit = async () => {
    const userId = localStorage.getItem('userId');
    try {
      await axios.post('https://your-glitch-url.com/api/submit', {
        userId,
        answers: userAnswers,
      });
      navigate('/result');
    } catch (error) {
      console.error(error);
      alert('Submission failed');
    }
  };

  return (
    <div>
      <h1>Quiz</h1>
      {questions.map((q) => (
        <QuizItem 
          key={q.id} 
          question={q} 
          selectedAnswer={userAnswers[q.id]} 
          onSelectAnswer={handleAnswerSelect} 
        />
      ))}
      <button onClick={handleSubmit}>Submit Quiz</button>
    </div>
  );
};

export default Quiz;
