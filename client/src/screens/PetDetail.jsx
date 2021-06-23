import { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { getOnePet} from "../services/pets";

export default function PetDetail(props) {
  
  const [pet, setPet] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchPet = async () => {
      const pet = await getOnePet(id);
      setPet(pet);
      setLoaded(true);
    };
    fetchPet();
  }, [id]);
  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  return (
  
    <div className="pet-detail">
        <img
          className="pet-detail-image"
          src={pet.image}
          alt={pet.name}
      />
      <h1>{pet.name}</h1>
      <h6>Details: {pet.description}</h6>
      <h6>Age:{pet.age}</h6>
    </div>

  );
}
