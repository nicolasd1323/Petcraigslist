import {useState} from 'react'
import './Register.css'

export default function Register(props) {
  const [formData, setFormData] = useState({
		username: '',
    email: '',
		password: '',
	});
	const { username, email, password } = formData;
	const { handleRegister } = props;

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

  return (
    <div className='register-page'>
      			

      <form className='form-register'
        
			onSubmit={(e) => {
				e.preventDefault();
				handleRegister(formData);
      }}
        
      >
        <h3>Register with us!!</h3>
			<label>
				Username:
				<input
            type='text'
					name='username'
					value={username}
					onChange={handleChange}
				/>
			</label>
			<br />
			<label>
				Email:
				<input
					type='text'
            name='email'
            className='e-mail'
					value={email}
					onChange={handleChange}
				/>
			</label>
			<br />
			<label>
				Password:
				<input
					type='password'
					name='password'
					value={password}
					onChange={handleChange}
				/>
			</label>
			<br />
			<button className='button'>Submit</button>
      </form>
      </div>
  )
}
