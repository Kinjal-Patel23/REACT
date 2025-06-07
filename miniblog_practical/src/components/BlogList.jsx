import React, { useEffect, useState } from 'react'
import { getDocs, collection, getFirestore, deleteDoc, doc } from 'firebase/firestore'
import { app } from '../firestore'
import { Link } from 'react-router-dom';

const db = getFirestore(app);

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "blog"));
    const blogData = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    setBlogs(blogData);
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "blog", id));
      getData();
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <section className="blog-list-section">
        <h2 className="blog-list-title">All Blog Posts</h2>
        {blogs.map((item) => (
          <div className="blog-card" key={item.id}>
            <div className="blog-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h4 className="blog-title">{item.blogTitle}</h4>
              <button
                onClick={() => handleDelete(item.id)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '1.2rem',
                  color: 'red'
                }}
                title="Delete Blog Post"
                aria-label={`Delete ${item.blogTitle}`}
              >
                🗑
              </button>
            </div>
            <p className="blog-content">{item.blogCont}</p>
          </div>
        ))}
      </section>

      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <Link to="/">
          <button className="submit-btn">➕ Add New Blog</button>
        </Link>
      </div>
    </>
  )
}

export default BlogList
