import React from "react";
import Blog from "./Components/Blog/Blog";
import Quiz from "./Components/Quiz/Quiz";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import LoginFormContainer from './Components/LoginForm/Container';
import SignupFormContainer from './Components/SignupForm/Container';
import Consulting from "./Components/Consulting/Consulting";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Lectures from "./Components/Lectures/Lectures";


export default function App() {
  const sections = [
    { title: "quiz", url: "/quiz" },
    { title: "lectures", url: "/lectures" },
    { title: "login", url: "/login" },
    { title: "signup", url: "/signup" },
    { title: "forum", url: "/forum" },
    { title: "consulting", url: "/consulting" }
  ];
  return (
    <Router>
      <div> 
        <Route
        path="/"        render={(props) => <Header {...props} sections={sections} />}
      />
      <Switch>
     
        <Route path="/blog" component={Blog} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/lectures" component={Lectures} />          
        <Route path='/login' component={LoginFormContainer} />
        <Route path='/signup' component={SignupFormContainer} />
        <Route path="/consulting" component={Consulting} />
      </Switch>
      <Route path="/" render={(props) => <Footer {...props} />} />
      </div>
    </Router>
 
  );
}
