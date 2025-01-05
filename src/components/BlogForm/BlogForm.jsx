import React, { useState } from 'react';
import './BlogForm.scss';
import axios from 'axios';

const BlogForm = () => {
  const [postId, setPostId] = useState(''); // ID для объекта
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

  return (
    <>
      <section>
        <div className="container">
          <div className="blogform__wrapper">
            <form onSubmit={addPost}>
              <div className="blogform__box">
                <input
                  className="blogform__title"
                  value={postId}
                  onChange={(e) => setPostId(e.target.value)}
                  type="text"
                  placeholder="Enter ID"
                />
                <input
                  className="blogform__title"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  type="text"
                  placeholder="Enter Link to Image"
                />
                <input
                  className="blogform__title"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Enter Name"
                />
                <input
                  className="blogform__title"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  type="text"
                  placeholder="Enter Location"
                />
                <input
                  className="blogform__title"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  type="text"
                  placeholder="Enter Date"
                />
                <input
                  className="blogform__title"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  type="text"
                  placeholder="Enter Description"
                />
              </div>
              <button type="submit">Добавить поста</button>
            </form>

            <form onSubmit={updatePost}>
              <div className="blogform__box">
                <input
                  className="blogform__title"
                  value={postId}
                  onChange={(e) => setPostId(e.target.value)}
                  type="text"
                  placeholder="Enter ID to Update"
                />
                <input
                  className="blogform__title"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  type="text"
                  placeholder="Update Link to Image"
                />
                <input
                  className="blogform__title"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Update Name"
                />
                <input
                  className="blogform__title"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  type="text"
                  placeholder="Update Location"
                />
                <input
                  className="blogform__title"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  type="text"
                  placeholder="Update Date"
                />
                <input
                  className="blogform__title"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  type="text"
                  placeholder="Update Description"
                />
              </div>
              <button type="submit">Изменить пост</button>
            </form>

            <div className="blogform__delete">
              <input
                className="blogform__title"
                type="text"
                placeholder="Enter ID to Delete"
                onChange={(e) => setPostId(e.target.value)}
              />
              <button className="blogform__btn" onClick={() => deletePost(postId)}>
                Удалить пост
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogForm;
