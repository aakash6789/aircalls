import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.jsx';
import ActivityTab from './components/ActivityTab.jsx';

const App = () => {
  return (
      <div className='container'>
      <Header/>
      <div className="container-view">Some activities should be here</div>
      </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
