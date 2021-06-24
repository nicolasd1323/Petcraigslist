import { useState, useEffect, Fragment } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { addComment, getOnePet } from "../services/pets";

export default function PetDetail(props) {
  const { handleDelete, comments } = props;


  const [pet, setPet] = useState({});
  const [comment, setComment] = useState([]);
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
 

  useEffect(() => {
    
    const getComments = () => {
    
      const currComments = comments && comments.filter((message) => {
        return message.pet_id === pet.id
      })
     setComment(currComments)
      
    };
    getComments()
  }, [pet]);
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
      <Link to={`/pets/${pet.id}/edit`}>
						<button>Edit</button>
					</Link>
					<Link to={`/pets`} onClick={() => handleDelete(pet.id)}>Delete</Link>
    
    
		
          <h3>Comments</h3>
			{comment && comment.map((comment) => (
				<p key={comment.id}>{comment.content}</p>
			))}
    
    </div>

  );
}
