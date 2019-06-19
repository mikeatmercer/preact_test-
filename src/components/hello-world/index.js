import { h, Component } from "preact";
import {HashRouter, Route} from "react-router-dom";
import Home from "../home_page";
import Profile from "../profile";
import "./style.scss";


export default class App extends Component {

  render(props) {
    return (
    <div>
    
      <HashRouter>
        <div>
         <Route exact path="/" component={Home} />
         <Route exact path="/profile" component={Profile} />
       </div>
     </HashRouter> 
    </div>
     
      
    );
  }
}
