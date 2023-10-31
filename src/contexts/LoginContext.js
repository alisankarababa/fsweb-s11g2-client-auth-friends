import axios from "axios";
import { createContext } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const LoginContext = createContext();

export default function LoginProvider({ children }) {

    const history = useHistory();

	function hLogin(credentials) {

		api.post("/login", credentials)
			.then(function (response) {
				console.log(response);
                localStorage.setItem("token", response.data.token);


                history.push("/friends");
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
