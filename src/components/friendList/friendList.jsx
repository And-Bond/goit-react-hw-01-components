import React from 'react';
import styles from './friendList.module.scss';
import PropTypes from 'prop-types';

const FriendsList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(friend => {
        return (
          <li className={styles.item}>
            <span
              className={`${styles.status} ${
                friend.isOnline ? styles.online : styles.offline
              }`}
            ></span>
            <img
              className={styles.avatar}
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <p className={styles.name}>{friend.name}</p>
          </li>
        );
      })}
    </ul>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.array,
};
export default FriendsList;
