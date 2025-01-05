import React, { useEffect, useState } from 'react'
import './BlogList.scss'
import axios from 'axios'

const BlogList = () => {

      const [posts, setPosts] = useState([])
  
      useEffect(() => {
        
      const fetchPosts = async () => {
        const response = await axios.get("http://localhost:5000/blogs")
        setPosts(response.data)
      }

      fetchPosts()
        
      }, [])
      

  return (
    <section className="postlist">
        <div className="container">
            <div className="bloglist__wrapper">
              
              {posts.map(post => (              
                <div key={post.id} className="bloglist__card">
                    <img src={post.image} alt="" />
                    <h2>{post.name}</h2>
                    <div className="bloglist__box">
                    <b>{post.location}</b>
                    <b>{post.date}</b>  
                    </div>
                    
                    <p>{post.description}</p>
                    
                </div>
              ))}
            </div>
        </div>
    </section>
  )
}

export default BlogList