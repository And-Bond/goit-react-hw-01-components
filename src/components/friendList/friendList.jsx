import React from 'react';

const FriendsList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => {
        return (
          <li className="item">
            <span
              className={`status ${friend.isOnline ? 'online' : 'offline'}`}
            ></span>
            <img
              className="avatar"
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <p className="name">{friend.name}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default FriendsList;
