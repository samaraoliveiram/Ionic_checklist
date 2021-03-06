import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import withAuth from "./components/WithAuth";
import { theme, ThemeProvider, GlobalStyle } from "./components/Theme";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Lists from "./pages/Lists";
import Todos from "./pages/Todos";
import NewTodo from "./pages/NewTodo";
import EditList from "./pages/EditList";
import CreateListPage from "./pages/CreateList";
import EditTodo from "./pages/EditTodo";
import Profile from "./pages/Profile";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <GlobalStyle />
          <div className="App">
            <Switch>
              <Route path="/signin" component={Signin} />
              <Route path="/signup" component={Signup} />
              <Route path="/profile" component={withAuth(Profile)} />
              <Route path="/todo/:id/edit" component={withAuth(EditTodo)} />
              <Route
                path="/lists/:id/todo/create"
                component={withAuth(NewTodo)}
              />
              <Route
                path="/lists/create"
                component={withAuth(CreateListPage)}
              />
              <Route path="/lists/:id/edit" component={withAuth(EditList)} />
              <Route path="/lists/:id" component={withAuth(Todos)} />
              <Route path="/lists" component={withAuth(Lists)} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
