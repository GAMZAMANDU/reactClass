import React, { useState } from 'react'
import './PostList.css'

export const posts = [
  {
    name: '오주현',
    comment: '안녕하세요. 오주현입니다.',
    time: '2시간 전',
    avatar: 'https://www.w3schools.com/howto/img_avatar.png',
    likes: 0, // Initial likes count
  },
  {
    name: '문소정',
    comment: '리액트로 프로젝트 만들고 있습니다.',
    avatar: 'https://www.w3schools.com/howto/img_avatar2.png', // 기본 아바타 이미지 URL
  },
  {
    name: '황지영',
    comment: '리액트 재미있어요.',
    time: '5시간 전',
    avatar: ' https://www.w3schools.com/w3images/avatar6.png', // 기본 아바타 이미지 URL
  },
  {
    name: '공덕현',
    comment: '리액트 벌써 3주차라니........',
    time: '5시간 전',
    avatar: ' https://www.w3schools.com/w3images/avatar5.png', // 기본 아바타 이미지 URL
  },
];

const PostList = () => {
return (
  <div className='comment-list'>
      {posts.map((post, index) => (
        <PostItem key={index} post={post} />
      ))}
    </div>
  );
}

const PostItem = ({ post }) => {
  return (
    <div className='comment'>
      <img className='avatar' src={post.avatar} alt={post.name} />
      <div className='comment-details'>
        <b className='user-name'>{post.name}</b>
        <p className='comment-text'>{post.comment}</p>
        <p className='comment-time'>{post.time}</p>
      </div>
    </div>
  );
}

export default PostList