import { useForm } from "react-hook-form";


export default function Login({className}) {


    const { register, errors, handleSubmit } = useForm();


    function onSubmit(formData) {
        console.log(formData);
    }

    console.log("className", className);
	return (
		<div className={`${ className ? className : "" } form-div`}>
			<h1 className="form-title">ADD FRIEND</h1>

			<form className="form" onSubmit={handleSubmit(onSubmit)}>
				<label className="form__label" htmlFor="username">FRIEND NAME</label>
				<input
                    id="username"
                    className="form__input "
					type="text"
					{...register("friend_name", { required: true, maxLength: 80 })}
				/>

                <label className="form__label" htmlFor="password">PASSWORD</label>
				<input
                    id="password"
                    className="form__input"
					type="email"
					{...register("friend_email", { required: true, maxLength: 80 })}
				/>

				<input className="form__submit" type="submit" value="SUBMIT"/>
			</form>
		</div>
	);
}
