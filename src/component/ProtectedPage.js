import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

export default function ProtectedPage({ PageComponent, referredFrom, ...rest }) {
	
    const token = localStorage.getItem("token");

	return token ? (
		<PageComponent {...rest} />
	) : (
		<Redirect
			to={{
				pathname: "/login",
				state: { referrer: referredFrom },
			}}
		/>
	);
}
