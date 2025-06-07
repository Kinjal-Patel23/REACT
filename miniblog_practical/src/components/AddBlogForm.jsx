import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { app } from '../firestore';
import { Link } from 'react-router-dom';

const db = getFirestore(app);

const AddBlogForm = () => {

    const [text, setText] = useState("");
    const [content, setContent] = useState("");

    const handlePost = async (e) => {
        e.preventDefault();

        try {
            await addDoc(collection(db, "blog"), {
                blogTitle: text,
                blogCont: content
            });

            setText("");
            setContent("");
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    return (
        <>
            <main className="container">
                <section id="hero" className="hero-section">
                    <h2>Welcome to Mini Blog!</h2>
                    <p>Share your thoughts, stories, and ideas with the world.</p>
                </section>

                <section id="create-post" className="create-post-section card">
                    <h3>Create a New Blog Post</h3>
                    <form id="blogPostForm" onSubmit={handlePost}>
                        <div className="form-group">
                            <label htmlFor="blogTitle">Blog Title</label>
                            <input type="text" value={text} id="blogTitle" onChange={(e) => setText(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="blogContent">Blog Content</label>
                            <textarea id="blogContent" value={content} rows="10" onChange={(e) => setContent(e.target.value)} required></textarea>
                        </div>
                        <button className="submit-btn">Publish Post</button>
                    </form>
                </section>

            </main>

             <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <Link to="/BlogList">
                    <button className="submit-btn">📄 Click to Show Blog List</button>
                </Link>
            </div>

            <footer className="footer">
                <div className="container">
                    <p>&copy; 2025 MiniBlog. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
};

export default AddBlogForm;
