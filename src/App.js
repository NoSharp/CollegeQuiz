
import './App.css';
import QABox from './qabox.js'
function App() {
  return (
   
    <div className="App">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous"/>
        <div class = "TestContainer">
          <QABox question="Test?" ></QABox>
        </div>
    </div>
  );
}

export default App;
