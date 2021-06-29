import { useState } from "react";
import "./petCreate.css";

export default function PetsCreate(props) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
    age: "",
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
    <div className="add-pet">
      <form
        className="add-pet-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleCreate(formData);
        }}
      >
        <h3>Pet for Adoption Info</h3>
        <label>
          Name:
          <input
            type="text"
            className="add-pet-name"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>
        <label>
          description:
          <input
            type="text"
            name="add-pet-description"
            value={description}
            onChange={handleChange}
          />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            name="add-pet-image"
            value={image}
            onChange={handleChange}
          />
        </label>
        <label>
          age:
          <input
            type="number"
            name="add-pet-age"
            value={age}
            onChange={handleChange}
          />
        </label>
        <button className="add-button">Submit</button>
      </form>
    </div>
  );
}
