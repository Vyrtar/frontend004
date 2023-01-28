import logo from './logo.svg';
import './App.css';
import UpDownBtn from './components/ui-jsx/UpDownBtn';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState(0);


  return (
    <div className="App">
        <UpDownBtn UpDown={true} value={value} valueSetter={setValue} />
        <UpDownBtn UpDown={false} value={value} valueSetter={setValue} />
      value: {value}
    </div>
  );
}

export default App;
