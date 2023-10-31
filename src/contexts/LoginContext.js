import axios from "axios";
import { createContext } from "react";
import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { api } from "../api/api";

export const LoginContext = createContext();

export default function LoginProvider({ children }) {

    const history = useHistory();
    const location = useLocation();

	function hLogin(credentials) {

		api.post("/login", credentials)
			.then(function (response) {
                const token = response.data.token;
                localStorage.setItem("token", token);
                api.defaults.headers.common['Authorization'] = token;

                if ( location.state && location.state.referrer ) {
                    history.push(location.state.referrer);
                } else {
                    history.push("/friends");
                }
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	return (
		<LoginContext.Provider value={{ hLogin }}>
			{children}
		</LoginContext.Provider>
	);
}
