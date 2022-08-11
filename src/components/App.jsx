import Profile from './profile/profile';
import User from './user.json';

import Statistics from './statistics/statistics';
import Data from './data.json';

import FriendsList from './friendList/friendList';
import Friends from './friends.json';

import TransactionsList from './transactions/transactions';
import transactions from './transactions.json';

import './App.scss';

export const App = () => {
  return (
    <div className='body'>
      <Profile
        username={User.username}
        tag={User.tag}
        location={User.location}
        avatar={User.avatar}
        followers={User.stats.followers}
        views={User.stats.views}
        likes={User.stats.likes}
      />
      <Statistics title="Upload stats" stats={Data} />
      <FriendsList friends={Friends} />
      <TransactionsList items={transactions} />
      </div>
  );
};
