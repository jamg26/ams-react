import React from 'react';
import Dashboard from '../pages/dashboard';
import Bulletin from '../pages/bulletin';
import Ceo from '../pages/ceo';

const Body = props => {
  const { navigation } = props;

  const navigate = () => {
    switch (navigation) {
      case 'dashboard':
        return <Dashboard />;
      case 'bulletin':
        return <Bulletin />;
      case 'ceo':
        return <Ceo />;
    }
  };

  return <div style={{ padding: 30 }}>{navigate()}</div>;
};

export default Body;
