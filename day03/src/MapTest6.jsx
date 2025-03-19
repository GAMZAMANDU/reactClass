import React, { useState } from "react";
import "./PostList.css";

const posts = [
  {
    name: "오주현",
    comment: "안녕하세요. 오주현입니다.",
    time: "2시간 전",
    avatar: "https://www.w3schools.com/howto/img_avatar.png",
    likes: 0, // Initial likes count
  },
  {
    name: "문소정",
    comment: "리액트로 프로젝트 만들고 있습니다.",
    time: "3시간 전",
    avatar: "https://www.w3schools.com/howto/img_avatar2.png",
    likes: 0,
  },
  {
    name: "황지영",
    comment: "리액트 재미있어요.",
    time: "5시간 전",
    avatar: " https://www.w3schools.com/w3images/avatar6.png",
    likes: 0,
  },
  {
    name: "공덕현",
    comment: "리액트 벌써 3주차라니........",
    time: "5시간 전",
    avatar: " https://www.w3schools.com/w3images/avatar5.png",
    likes: 0,
  },
];

const PostList = () => {
  const [postList, setPostList] = useState(posts);
  const [deleteList, setDeleteList] = useState([]);

  const handleLike = (index) => {
    const newPostList = [...postList];
    newPostList[index].likes += 1;
    setPostList(newPostList);
  };

  const handleDelete = (index) => {
    setDeleteList([...deleteList, index]);
  }

  return (
    <div className="comment-list">
      {postList.filter((_, index) => !deleteList.includes(_.name)).map((post, index) => (
        <PostItem key={index} post={post} onLike={() => handleLike(index)} onDelete={() => handleDelete(post.name)} />
      ))}
    </div>
  );
};

const PostItem = ({ post, onLike, onDelete }) => {
  return (
    <div className="comment">
      <img className="avatar" src={post.avatar} alt={post.name} />
      <div className="comment-details">
        <b className="user-name">{post.name}</b>
        <p className="comment-text">{post.comment}</p>
        <p className="comment-time">{post.time}</p>
        <div className="like-section">
          <button className="like-button" onClick={onLike}>
            ♥︎
          </button>
          <span>{post.likes}개</span>
        </div>
      </div>
      <button className="delete-button" onClick={onDelete}>삭제하기</button>
    </div>
  );
};

export default PostList;
