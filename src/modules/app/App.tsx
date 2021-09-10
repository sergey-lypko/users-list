import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";
import { queryClient } from "query";

// TODO: make imports from one place
import { UsersList } from "modules/usersList";
import UserDetails from "modules/userDetails";

import AppContainer from "components/appContainer";

import { theme } from "style";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <AppContainer>
          <Router>
            <Switch>
              <Route exact path="/">
                <UsersList />
              </Route>

              <Route path={`/users/:userId`}>
                <UserDetails />
              </Route>

              <Redirect to="" />
            </Switch>
          </Router>
        </AppContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
