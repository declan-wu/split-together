import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AuthProvider } from './firebase/auth.context';
import PrivateRoute from './firebase/private-route.component';

import HomePage from './pages/home/homepage.component';
import MainPage from './pages/main/main.component';
import LoginPage from './pages/login/login.component';
import SignupPage from './pages/signup/signup.component';
import RoomInvitationPage from './pages/room-invitation/room-invitation.component';
import RoomPage from './pages/room/room.component';

import './App.css';

function App() {
  
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignupPage} />
          <PrivateRoute exact path="/main" component={MainPage} />
          <Route
            exact
            path="/roominvitation/:id"
            component={RoomInvitationPage}
          />
          <Route exact path="/room/:id" component={RoomPage} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
