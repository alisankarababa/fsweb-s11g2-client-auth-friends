import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useLocalStorage } from "../hooks/useLocalStorage"

export const AuthenticationContext = createContext(null);


export function useAuthenticationContext() {
    return useContext(AuthenticationContext);
}

export default function AuthenticationProvider({ children }) {

    const history = useHistory();
    const location = useLocation();

    const [loggedInUser, setLoggedInUser] = useLocalStorage("loggedInUser", {});
    
    const httpReqCreator = axios.create({
        baseURL: 'http://localhost:9000/api',
        timeout: 1000,
        headers: { "authorization" : loggedInUser.token }
    });

    function isLoggedIn() {
        return loggedInUser.hasOwnProperty("token");
    }

    function hLogout() {
        setLoggedInUser({});
    }

	function hLogin(credentials) {

		httpReqCreator.post("/login", credentials)
			.then(function (response) {
                setLoggedInUser(response.data);

                if(location.state && location.state.from)
                    history.push(location.state.from);
                else
                    history.push("/friends");
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	return (
		<AuthenticationContext.Provider value={{ isLoggedIn, hLogin, hLogout, httpReqCreator}}>
			{children}
		</AuthenticationContext.Provider>
	);
}
