import React from "react";
import Blog from "./Components/Blog/Blog";
import Quiz from "./Components/Quiz/Quiz";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Consulting from "./Components/Consulting/Consulting";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Lectures from "./Components/Lectures/Lectures";
import LoginScreen from "./Components/screens/LoginScreen";
import RegisterScreen from "./Components/screens/RegisterScreen";
import ForgotPasswordScreen from "./Components/screens/ForgotPasswordScreen";
import ResetPasswordScreen from "./Components/screens/ResetPasswordScreen";

export default function App() {
  const sections = [
    { title: "blog", url: "/blog" },
    { title: "quiz", url: "/quiz" },
    { title: "lectures", url: "/lectures" },
    { title: "forum", url: "/forum" },
    { title: "consulting", url: "/consulting" },
  ];
  return (
    <Router>
      <div>
        <Route
          path="/"
          render={(props) => <Header {...props} sections={sections} />}
        />
        <Switch>
          <Route path="/blog" component={Blog} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/lectures" component={Lectures} />
          <Route path="/consulting" component={Consulting} />
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/register" component={RegisterScreen} />
          <Route
            exact
            path="/forgotpassword"
            component={ForgotPasswordScreen}
          />
          <Route
            exact
            path="/passwordreset/:resetToken"
            component={ResetPasswordScreen}
          />
        </Switch>
        <Route path="/" render={(props) => <Footer {...props} />} />
      </div>
    </Router>
  );
}
