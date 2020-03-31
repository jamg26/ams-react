import React from 'react';
import Header from './components/header';
import Layouts from './layout';
import Sidebar from './components/sidebar';
import Body from './components/body';

const App = () => {
  return (
    <div>
      <Layouts
        header={() => <Header />}
        sidebar={() => <Sidebar />}
        body={() => <Body />}
      />
    </div>
  );
};

export default App;
