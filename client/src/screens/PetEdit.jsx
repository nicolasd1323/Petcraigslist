import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function PetEdit(props) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    age: '',
    image: '',
  });
  const { name, description, age, image } = formData;
	const { pets, handleUpdate } = props;
	const { id } = useParams();
  
  useEffect(() => {
		const preFillFormData = () => {
			const singlePet = pets.find((pet) => pet.id === Number(id));
			setFormData({
        name: singlePet.name,
        description: singlePet.description,
        age: singlePet.age,
        image: singlePet.image
			});
		};
		if (pets.length) {
			preFillFormData();
		}
  }, [pets]);
  
  const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

  return (
    <div>
      <form
			onSubmit={(e) => {
				e.preventDefault();
				handleUpdate(id, formData);
			}}
		>
			<h3>Edit Pet</h3>
			<label>
				Name:
				<input type='text' name='name' value={name} onChange={handleChange} />
        </label>
        <label>
				description:
				<input type='text' name='description' value={description} onChange={handleChange} />
      </label>
      <label>
				age:
				<input type='number' name='age' value={age} onChange={handleChange} />
        </label>
        <label>
				Image URL:
				<input type='text' name='image' value={image} onChange={handleChange} />
      </label>
			<button>Submit</button>
		</form>
    </div>
  );
}

export default PetEdit;