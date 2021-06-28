import { useState } from 'react';
import Footer from "../../others/Footer";
import './petCreate.css'

export default function PetsCreate(props) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: '',
    age: '',
	});
	const { name, description, image, age } = formData;
  const { handleCreate } = props;
  
  const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};
  return (
    <div className='add-pet'>
      <h3>Add Pet Info</h3>
		<form className='add-pet-form'
			onSubmit={(e) => {
				e.preventDefault();
				handleCreate(formData);
			}}
		>
			<label>
				Name:
				<input type='text' name='name' value={name} onChange={handleChange} />
      </label>
      <label>
				description:
				<input type='text' name='description' value={description} onChange={handleChange} />
      </label>
      <label>
				Image URL:
				<input type='text' name='image' value={image} onChange={handleChange} />
      </label>
      <label>
				age:
				<input type='number' name='age' value={age} onChange={handleChange} />
      </label>
			<button>Submit</button>
      </form>
      </div>
	);
}