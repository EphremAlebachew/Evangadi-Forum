import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AnswerList.css";

const AnswerList = ({ questionId }) => {
  const [answer, setAnswer] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAnswer = async () => {
      try {
        const res = await axios.post("http://localhost:4004/api/answer/post",answer);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAnswer();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:4004/api/answer/", {
        answer,
        questionId: questionId,
      });

      // Reset the answer input field after successful submission
      setAnswer("");

      // Navigate to the desired location
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setAnswer(value);
  };

  return (
    <div style={{ margin: "400px" }}>
    
          <input type="text">answer</input>
          {answer.map(answer => (
              <div><h1>{answer.answer_id} </h1></div>
          ))}
    </div>
  );
};

export default AnswerList;







