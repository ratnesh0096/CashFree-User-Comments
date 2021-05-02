
const CommentBox = ({ text, setText, handleTextArea, isCommentable, handleComment }) => {

    return (
        <div>
            <textarea
                className="comment-box"
                name="comment"
                cols="20"
                rows="3"
                onChange={handleTextArea}
            />
            <br />
            {text && <button onClick={handleComment}>Add Comment</button>}
        </div>
    );
};

export default CommentBox;