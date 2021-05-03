import { useState } from "react";

// import React, { useState } from 'react';
const DisplayComments = ({ comments, setCommentObj }) => {
    const [replyText, setReplyText] = useState();
    const copiedComments = [...comments];
    const setReply = (e) => {
        // alert(e.t    arget.id);
        const commentId = parseInt(e.target.id);
        const comment = copiedComments.find(comment => comment.id === commentId);
        comment.doReply = true;
        setCommentObj(copiedComments);
        setReplyText("");
    }

    const handleTextArea = (e) => {
        setReplyText(e.target.value)
    }

    const addReply = (e) => {
        // alert(replyText);
        const commentId = parseInt(e.target.id);
        const comment = copiedComments.find(comment => comment.id === commentId);
        comment.doReply = false;
        comment.replies.push(replyText);
        setCommentObj(copiedComments);
    }
    const deleteReply = (e, userId) => {
        const commentId = parseInt(userId);
        const comment = copiedComments.find(comment => comment.id === commentId);
        const deleteIndex=parseInt(e.target.id);
        comment.replies.splice(deleteIndex,1);
        setCommentObj(copiedComments);
    }

    const deleteComment = (e) => {
        // const commentId = parseInt(e.target.id);
        // const comment = copiedComments.find(comment => comment.id === commentId);
        const deleteIndex=parseInt(e.target.id);
        copiedComments.splice(deleteIndex,1);
        setCommentObj(copiedComments);
    }

    return (
        <div >
            {
                copiedComments.map((comment, index) => {
                    return <div>
                        <div className="display-comments">
                            <h3>{comment.comment}</h3>
                            <p>{comment.name}</p>
                            <p>{comment.date}</p>
                        </div>
                        <br/>
                        <button className="button" id={index} onClick={deleteComment}>Delete Comment</button>
                        <br/>
                        {
                            comment.replies.map((reply, index) => {
                                return <>
                                    <div className="display-reply">
                                        <h3>{reply}</h3>
                                        <p>{comment.name}</p>
                                        <p>{comment.date}</p>
                                    </div>
                                    <br/>
                                    <button className="button" id={index} onClick={(e)=>deleteReply(e, comment.id)}>Delete Reply</button>
                                    <br/>
                                </>
                            }
                            )
                        }

                        {comment.doReply &&
                            <>
                                <textarea
                                    value={replyText}
                                    className="comment-box reply"
                                    name="comment"
                                    cols="20"
                                    rows="3"
                                    onChange={handleTextArea}
                                />
                                <br />
                                <button className="button" id={comment.id} onClick={addReply}>Add Reply</button>

                            </>
                        }
                        <br />
                        {!comment.doReply &&
                            <button className="button" id={comment.id} onClick={setReply}>Reply</button>
                        }
                    </div>
                })
            }
        </div>
    );
};

export default DisplayComments;