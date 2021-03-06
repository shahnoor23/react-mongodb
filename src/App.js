import React, { Component } from 'react';

import './App.css';

import { Switch, Route,  Link } from 'react-router-dom'
import Home from './views/Home.js'; // this is our newly created component. we have two page, home and register
import Register from './views/Register.js';
import Login from './views/Login.js';
import Post from './views/Post.js';



let token = localStorage.getItem('token');            

class App extends Component {
  ShowLogin(){
    let loginorlogout = <Link className="nav-link" to='/login'>Login</Link>;
    if(token){
      loginorlogout = <a className="nav-link" href="" onClick={this.logout}>Logout</a>;
    }
    return loginorlogout;
  }

  logout(){
    localStorage.removeItem('token');
    this.history.push('/');
  }

  showRegisterOrPost(){
    let registerOrPost = <Link className="nav-link" to='/register'>Register</Link>;
    if(token){
      registerOrPost = <Link className="nav-link" to='/post'>Fyp DataBase</Link>;
    }
    return registerOrPost;
  }

  render() {
    return (
      
      <div>

        <div className="header">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav mr-auto container">
								<li className="nav-item active">								
                  {/* Link is equal with a href	 */}
									<Link className="nav-link" to='/'>Home</Link> 
								</li>
								<li className="nav-item">
									{this.showRegisterOrPost()}
								</li>								
                <li className="nav-item">
                  {this.ShowLogin()}									
								</li>								
							</ul>    
						</div>
					</nav>
        </div>

        {/* child layout is  right here, it only change, master and footer not change */}
        <div className="container">
          {/* lets start route in right here */}
          <Switch>
            <Route exact path="/" component={Home} />  {/* this route reference to domain/  */}
            <Route path="/register" component={Register} /> {/* this route reference to domain/register  */}
            <Route path="/login" component={Login} />
            <Route path="/post" component={Post} />
          </Switch>
        </div>

        <footer className="page-footer font-small blue">
  <div  className="footer-copyright text-center py-3">© 2018 Copyright:
    <a href="#"> NED UNIVERISTY ENGINEERING AND TECHNOLOGY</a>
  </div>
</footer>

      </div>

    );
  }
}

export default App;