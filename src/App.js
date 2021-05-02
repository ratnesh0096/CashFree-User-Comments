import { useState } from 'react';
import './App.css';
import SelectUser from './SelectUser';
import userData from './commentsDB.json';
import CommentBox from './CommentBox';
import DisplayComments from './DisplayComments';

function App() {
  const [userList, setUserList] = useState(userData);
  const [isCommentable, setComment] = useState(false);
  const [comments, setCommentObj] = useState([]);
  const [text, setText] = useState('');
  const [currentUser, setCurrentUser] = useState('');
  // const [date, setDate] = useState('');
  const handleSelect = (e) => {
    setCurrentUser(e.target.value);
    setComment(true);
    // alert("hello");
  }

  const handleTextArea = (e) => {
    setText(e.target.value)
  }

  const handleComment = () => {
    // setDate(Date().toLocaleString());
    const today = Date.now();

    const todayDate = new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      // second: '2-digit'
    }).format(today);
    // setDate(todayDate);
    const copiedComments = [...comments];
    const singleComment = {
      "name": currentUser,
      "comment": text,
      "date": todayDate,
      // "replies": 
    }

    copiedComments.push(singleComment);
    copiedComments.reverse();
    setCommentObj(copiedComments);
    setComment(false);
    setText('');
  }
  return (
    <div className="App">
      <h1>User Comments</h1>
      <SelectUser userList={userList} handleSelect={handleSelect} setUserList={setUserList} />
      {isCommentable && <CommentBox
        text={text}
        setText={setText}
        handleTextArea={handleTextArea}
        isCommentable={isCommentable}
        handleComment={handleComment} />}
      <DisplayComments comments={comments} />
    </div>
  );
}

export default App;
