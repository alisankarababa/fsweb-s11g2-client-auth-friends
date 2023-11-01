import { Route, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { useAuthenticationContext } from "../contexts/AuthenticationContext";


export default function PrivateRoute({ children, ...rest }) {
    
    const { isLoggedIn } = useAuthenticationContext();

    return (
      <Route
        {...rest}
        render={({ location }) =>
        isLoggedIn() ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }