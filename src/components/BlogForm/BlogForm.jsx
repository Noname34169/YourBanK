import React, { useState } from 'react';
import './BlogForm.scss';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Подключаем стили для AOS

const BlogForm = () => {
  const [postId, setPostId] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');

  const addPost = async (e) => {
    e.preventDefault();
    const newPost = { id: postId, name, description, image, location, date };
    await axios.post('http://localhost:5000/blogs', newPost);
    alert('Post added successfully!');
  };

  const updatePost = async (e) => {
    e.preventDefault();
    const updatedPost = { name, description, image, location, date };
    await axios.put(`http://localhost:5000/blogs/${postId}`, updatedPost);
    alert('Post updated successfully!');
  };

  const deletePost = async (id) => {
    await axios.delete(`http://localhost:5000/blogs/${id}`);
    alert('Post deleted successfully!');
  };

  React.useEffect(() => {
    AOS.init({
      duration: 1000, // Длительность анимации
      easing: 'ease-out',
      once: true, // Анимация запускается один раз
    });
  }, []);

  return (
    <>
      <section>
        <div className="container">
          <div className="blogform__wrapper">
            {/* Add Post Form */}
            <form onSubmit={addPost} data-aos="fade-up" data-aos-delay="100">
              <div className="blogform__box">
                <input
                  className="blogform__title"
                  value={postId}
                  onChange={(e) => setPostId(e.target.value)}
                  type="text"
                  placeholder="Enter ID"
                  data-aos="fade-up"
                  data-aos-delay="100"
                />
                <input
                  className="blogform__title"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  type="text"
                  placeholder="Enter Link to Image"
                  data-aos="fade-up"
                  data-aos-delay="200"
                />
                <input
                  className="blogform__title"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Enter Name"
                  data-aos="fade-up"
                  data-aos-delay="300"
                />
                <input
                  className="blogform__title"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  type="text"
                  placeholder="Enter Location"
                  data-aos="fade-up"
                  data-aos-delay="400"
                />
                <input
                  className="blogform__title"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  type="text"
                  placeholder="Enter Date"
                  data-aos="fade-up"
                  data-aos-delay="500"
                />
                <input
                  className="blogform__title"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  type="text"
                  placeholder="Enter Description"
                  data-aos="fade-up"
                  data-aos-delay="600"
                />
              </div>
              <button className="blogform__btn" type="submit" data-aos="fade-up" data-aos-delay="700">
                Add Post
              </button>
            </form>

            {/* Update Post Form */}
            <form onSubmit={updatePost} data-aos="fade-up" data-aos-delay="800">
              <div className="blogform__box">
                <input
                  className="blogform__title"
                  value={postId}
                  onChange={(e) => setPostId(e.target.value)}
                  type="text"
                  placeholder="Enter ID to Update"
                  data-aos="fade-up"
                  data-aos-delay="100"
                />
                <input
                  className="blogform__title"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  type="text"
                  placeholder="Update Link to Image"
                  data-aos="fade-up"
                  data-aos-delay="200"
                />
                <input
                  className="blogform__title"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Update Name"
                  data-aos="fade-up"
                  data-aos-delay="300"
                />
                <input
                  className="blogform__title"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  type="text"
                  placeholder="Update Location"
                  data-aos="fade-up"
                  data-aos-delay="400"
                />
                <input
                  className="blogform__title"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  type="text"
                  placeholder="Update Date"
                  data-aos="fade-up"
                  data-aos-delay="500"
                />
                <input
                  className="blogform__title"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  type="text"
                  placeholder="Update Description"
                  data-aos="fade-up"
                  data-aos-delay="600"
                />
              </div>
              <button className="blogform__btn" type="submit" data-aos="fade-up" data-aos-delay="700">
                Update Post
              </button>
            </form>

            {/* Delete Post Section */}
            <div className="blogform__delete" data-aos="fade-up" data-aos-delay="900">
              <input
                className="blogform__title"
                type="text"
                placeholder="Enter ID to Delete"
                onChange={(e) => setPostId(e.target.value)}
                data-aos="fade-up"
                data-aos-delay="100"
              />
              <button className="blogform__btn" onClick={() => deletePost(postId)} data-aos="fade-up" data-aos-delay="1100">
                Delete Post
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogForm;
