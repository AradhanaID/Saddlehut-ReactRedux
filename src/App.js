import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Post from './components/Post/Post';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllPosts, fetchPosts, allPostsLoaded } from './features/posts/postsSlice';

import './app.css'
function App() {
  const dispatch = useDispatch();
  let postIsLoaded = useSelector(allPostsLoaded);
  if(!postIsLoaded){
    dispatch(fetchPosts());
  }
  const posts = useSelector(selectAllPosts)

  return (
    <div className="App">
      <Navbar />
      {postIsLoaded ? (
        <Routes>
          <Route path="/" element={<Home posts={posts} />} />
          <Route path="/post/:postId" element={<Post posts={posts} />} />
        </Routes>
      ) : <h1>Loading...</h1>}
    </div>
  );
}

export default App;
