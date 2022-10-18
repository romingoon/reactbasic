import React, { useState } from 'react';
import './App.css';
import { Hello } from './components/Hello';
import { My } from './components/My';

const sampleSession = {
  loginUser: { id: 1, name: 'Hong' },
};

function App() {
  const [session, setSession] = useState(sampleSession);
  const [count, setCount] = useState(0);

  const logout = () => {
    console.log('App.logout!!');
    session.loginUser = null;
    // setSession({});
    console.log('App.session>>>', session);
  };

  const plusCount = (evt) => {
    console.log('111>>', count);
    setCount((count) => {
      count += 1;
      console.log('222>>', count);
      return count;
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <Hello name="Hong" isMale={true} />
        <Hello />
        <Hello name="홍길동" age={30}>
          <h3>반갑습니다!</h3>
        </Hello>
      </header>
    </div>
  );
}

export default App;
