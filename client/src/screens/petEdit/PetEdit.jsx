import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOnePet } from "../../services/pets";
import "./petEdit.css";

function PetEdit(props) {
  const [pet, setPet] = useState({});
  const [isLoaded, setLoaded] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    age: "",
    image: "",
  });
  const { name, description, age, image } = formData;
  const { pets, handleUpdate } = props;
  const { id } = useParams();
  useEffect(() => {
    const fetchPet = async () => {
      const pet = await getOnePet(id);
      setPet(pet);
      setLoaded(true);
    };
    fetchPet();
  }, [id]);

  useEffect(() => {
    const preFillFormData = () => {
      const singlePet = pets.find((pet) => pet.id === Number(id));
      setFormData({
        name: singlePet.name,
        description: singlePet.description,
        age: singlePet.age,
        image: singlePet.image,
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
    <div className="editPet">
      <img className="pet-edit-image" src={pet.image} alt={pet.name} />
      <form
        className="formEdit"
        onSubmit={(e) => {
          e.preventDefault();
          handleUpdate(id, formData);
        }}
      >
        <h3>Edit Pet</h3>
        <label>
          Name:
          <input
            className="input-name"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>
        <label>
          description:
          <input
            className="textarea-description"
            type="text"
            name="description"
            value={description}
            onChange={handleChange}
          />
        </label>
        <label>
          age:
          <input
            className="age"
            type="number"
            name="age"
            value={age}
            onChange={handleChange}
          />
        </label>
        <label>
          Image URL:
          <input
            className="edit-input-image-link"
            type="text"
            name="image"
            value={image}
            onChange={handleChange}
          />
        </label>
        <button className="save-button">Save</button>
      </form>
    </div>
  );
}

export default PetEdit;
