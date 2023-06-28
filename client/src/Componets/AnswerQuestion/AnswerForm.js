import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import './AnswerQuestion.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AnswerQuestion = ({ questionId }) => {
  const [userData, setUserData] = useContext(UserContext);
  const [value, setValue] = useState('');
  // const [form, setForm] = useState({});

  const PostYourAnswer = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4004/api/answer",
        {
          id: userData.user.id,
          questionId: questionId,
          answer: value,
        }
      );   
      window.location.reload(false);
    } catch (err) {
      console.log("problem", err);
    }
  }
  
  return (
    <div className="container my-5">
     
      <form onSubmit={handleSubmit} className="d-flex flex-column p-5 answer_form  justify-content-between">
        <h3 className="">Answer The Top Question</h3>
        <Link to="/" className="text-decoration-none text-reset cursor-pointer">
          Go to Question page
        </Link>

        <ReactQuill
          className="w-100 quill my-2"
          theme="snow"
          value={value}
          onChange={setValue}          
          placeholder="answer Description..."
        />
 <Link to="/postYourAnswer">
        <button onClick={PostYourAnswer} className="answer_post_btn bg-primary rounded py-2 " style={{ width: '980px', color: 'white', alignItems:'center' }} type="submit">
          Post Your Answer
          </button>
          </Link>
      </form>
    </div>
  )
}

export default AnswerQuestion;