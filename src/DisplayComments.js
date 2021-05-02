import React, { useState } from 'react';

const DisplayComments = ({ comments }) => {
    const [isReply, setReply] = useState(false);
    return (
        <div >
            {
                comments.map((comment) => {
                    return <div>
                        <div className="display-comments">
                            <h3>{comment.comment}</h3>
                            <p>{comment.name}</p>
                            <p>{comment.date}</p>
                        </div>
                        {isReply && <textarea
                            className="comment-box reply"
                            name="comment"
                            cols="20"
                            rows="3"
                        // onChange={handleTextArea}
                        />}
                        <br />
                        <button class="button" id={comment.id} onClick={() => setReply(true)}>Add Reply</button>
                    </div>
                })
            }
        </div>
    );
};

export default DisplayComments;