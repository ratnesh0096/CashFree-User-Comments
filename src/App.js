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
    const tempUserId = parseInt(e.target.value);
    const tempUser = userList.find(user => tempUserId === user.id)
    setCurrentUser(tempUser);
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
      "id": currentUser.id,
      "name": currentUser.name,
      "comment": text,
      "date": todayDate,
      "doReply": false,
      "replies":[]
      // "replies": 
    }

    copiedComments.push(singleComment);
    copiedComments.reverse();
    setCommentObj(copiedComments);
    setComment(false);
    setText('');
    console.log(currentUser);
    console.log(comments);
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
      <DisplayComments comments={comments} setCommentObj={setCommentObj} />
    </div>
  );
}

export default App;
