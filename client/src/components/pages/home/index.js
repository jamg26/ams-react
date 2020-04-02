import React from 'react';
import { Link } from 'react-router-dom';

const Home = props => {
  return (
    <div>
      Go to <Link to='/bulletin'>bulletin</Link>
    </div>
  );
};

export default Home;
