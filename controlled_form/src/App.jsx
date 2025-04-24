import { useState } from 'react'

function App() {

  let [user, setUser] = useState({ username: "", comment: "" })
  let [postData, setPostData] = useState();

  let handleInput = (e) => {
    const { name, value } = e.target;
    console.log(`${name}, ${value}`);

    setUser((p) => ({ ...p, [name]: value }));
  }

  let handleSubmit = (e) => {
    e.preventDefault();

    if (user.username === "") {
      alert("please enter your name...");
      return;
    }

    if (user.comment === "") {
      alert("please enter your comment...");
      return;
    }

    console.log(user);

    setPostData(user);
    setUser({username: "", comment: ""});
  }

  return (
    <>
      <div className="comment-form-container">
        <h2>Leave a Comment/Review</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" value={user.username} id="name" name="username" placeholder="Enter your name" onChange={handleInput}/>
          </div>
          <div className="form-group">
            <label htmlFor="comment">Your Comment/Review:</label>
            <textarea id="comment" value={user.comment} name="comment" placeholder="Write your comment or review here" onChange={handleInput}/>
          </div>
          <button type="submit" className="btn-post">Post Comment</button>
        </form>
      </div>

      {postData && (
        <div className='display'>
        <h2>Comment / Review</h2>
        <p>{postData.username}</p>
        <p>{postData.comment}</p>
      </div>
      )}
      
    </>
  )
}

export default App
