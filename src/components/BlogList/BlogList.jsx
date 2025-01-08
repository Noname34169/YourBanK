import React, { useEffect, useState } from 'react'
import './BlogList.scss'
import axios from 'axios'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css' // Импортируем стили AOS

const BlogList = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    // Инициализируем AOS
    AOS.init({ duration: 1200, easing: 'ease-out', once: true })

    const fetchPosts = async () => {
      const response = await axios.get("http://localhost:5000/blogs")
      setPosts(response.data)
    }

    fetchPosts()
  }, [])

  return (
    <section className="postlist">
      <div className="container">
        {/* Верхний заголовок и параграф с анимацией выхода из ничего */}
        <div className="postlist__heading" data-aos="fade-up" data-aos-delay="100">
          <Link to={'/admin'} className="lime-text postlist-a">Press Releases</Link>
          <p className='postlist-p'>Stay updated with the latest happenings and exciting developments at YourBank through our press releases.</p>
        </div>

        {/* Блоки блога с анимацией выхода друг с другом */}
        <div className="bloglist__wrapper">
          {posts.map((post, index) => (
            <div
              key={post.id}
              className="bloglist__card"
              data-aos={index % 2 === 0 ? "fade-left" : "fade-right"} // Альтернативные анимации для карточек
              data-aos-delay={index * 200} // Увеличение задержки для последовательного появления
            >
              {/* Изображение с анимацией */}
              <img
                src={post.image}
                alt={post.name}
                data-aos="zoom-in"
                data-aos-delay="200"
                className="bloglist__image"
              />

              {/* Заголовок с анимацией появления */}
              <h2 data-aos="fade-up" data-aos-delay="300">{post.name}</h2>

              {/* Бокс с метками с анимацией */}
              <div className="bloglist__box" data-aos="fade-up" data-aos-delay="400">
                <b>{post.location}</b>
                <b>{post.date}</b>
              </div>

              {/* Описание с анимацией */}
              <p data-aos="fade-up" data-aos-delay="500">{post.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogList
