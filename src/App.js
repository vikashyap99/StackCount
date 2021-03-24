import logo from './logo.svg';
import Home from './home'
import AnswerList from './AnswerList' 
import {Switch, Router, Route,} from 'react-router-dom'

function App() {
  return (
    <div>
      <h1>Welcome </h1>

    


      
        
        <Switch>
          <Route path="/home" component = {Home} />
          <Route path = "/answers" component ={AnswerList} />
          <Route component = {Home} />
          </Switch>
       
     

    </div>
  );
}

export default App;
