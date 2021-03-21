import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router";
import { ToastContainer } from "react-toastify";
import auth from "./services/authService";
import Navbar from "./components/navbar";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/not-found";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/loginForm";
import Logout from "./components/logout";
import Register from "./components/register";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./components/common/protectedRoute";

console.log("superman", process.env.REACT_APP_NAME);

class App extends Component {
  state = {};
  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    return (
      <main className="container">
        <ToastContainer />
        <Navbar user={user} />
        <Switch>
          <ProtectedRoute path="/movies/:id" component={MovieForm} />
          {/* <Route
            path="/movies/:id"
            render={(props) => {
              if (!user) return <Redirect to="/login" />;
              return <MovieForm {...props} />;
            }}
          /> */}
          <Route
            path="/movies"
            render={(props) => <Movies {...props} user={user} />}
          />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/logout" component={Logout} />
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={Register} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    );
  }
}

export default App;
