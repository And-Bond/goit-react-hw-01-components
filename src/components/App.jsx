import Profile from './profile/profile';
import User from './user.json';
import Statistics from './Statistics/statistics';
import Data from './data.json';
import PropTypes from 'prop-types';

export const App = () => {
  return (
    <>
      <Profile
        username={User.username}
        tag={User.tag}
        location={User.location}
        avatar={User.avatar}
        followers={User.stats.followers}
        views={User.stats.views}
        likes={User.stats.likes}
      />
      <Statistics title="Upload" stats={Data} />
    </>
  );
};
