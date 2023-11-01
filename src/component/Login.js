import { useForm } from "react-hook-form";

import { useAuthenticationContext } from "../contexts/AuthenticationContext";


export default function Login({className}) {

    const { register, handleSubmit } = useForm();
    const { hLogin } = useAuthenticationContext();

    function onSubmit(credentials) {
        hLogin(credentials);
    }

	return (
		<div className={`${ className ? className : "" } form-div`}>
			<h1 className="form-title">LOGIN</h1>

			<form className="form" onSubmit={handleSubmit(onSubmit)}>
				<label className="form__label" htmlFor="username">USERNAME</label>
				<input
                    id="username"
                    className="form__input "
					type="text"
					{...register("username")}
				/>

                <label className="form__label" htmlFor="password">PASSWORD</label>
				<input
                    id="password"
                    className="form__input"
					type="password"
					{...register("password")}
				/>

				<input className="form__submit" type="submit" value="SUBMIT"/>
			</form>
		</div>
	);
}
