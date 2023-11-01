import { useForm } from "react-hook-form";
import { useAuthenticationContext } from "../contexts/AuthenticationContext";


export default function AddFriend({className}) {

    const { register, errors, handleSubmit } = useForm();

    const { httpReqCreator } = useAuthenticationContext();

    function onSubmit(formData) {

        console.log(formData);
        httpReqCreator.post("/friends" ,formData)
        .then((resp) => console.log(resp))
        .catch((err) => console.error(err));
    }

	return (
		<div className={`${ className ? className : "" } form-div`}>
			<h1 className="form-title">ADD FRIEND</h1>

			<form className="form" onSubmit={handleSubmit(onSubmit)}>
				<label className="form__label" htmlFor="username">FRIEND NAME</label>
				<input
                    id="username"
                    className="form__input "
					type="text"
					{...register("name", { required: true, maxLength: 80 })}
				/>

                <label className="form__label" htmlFor="email">EMAIL</label>
				<input
                    id="email"
                    className="form__input"
					type="email"
					{...register("email", { required: true, maxLength: 80 })}
				/>

                <label className="form__label" htmlFor="age">AGE</label>
				<input
                    id="age"
                    className="form__input"
					type="number"
					{...register("age", { required: true, maxLength: 80 })}
				/>

				<input className="form__submit" type="submit" value="SUBMIT"/>
			</form>
		</div>
	);
}
