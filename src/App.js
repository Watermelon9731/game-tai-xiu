import logo from './logo.svg';
import './App.css';
import DiceGame from './GameTaiXiu/DiceGame';


//Component App sẽ là nơi chứa toàn bộ giao diện của ứng dụng
function App() {

  return (
    <div className="App">
      <DiceGame />
    </div>
  );
}

export default App;
