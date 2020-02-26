import React, { Component } from "react";
import Main from "./components/main";
import IMDview from "./components/IMDview";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
class App extends Component{
    render(){
        return(
            <Router history={this.props.history}>
                <Switch>
                    <Route exact path="/" component={Main}/>

                    <Route exact path="/:imdbID" component={IMDview}/>

                </Switch>
            </Router>
        )
    }
}
export default App;