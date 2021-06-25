import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getOnePet } from "../../services/pets";
import Footer from "../../others/Footer";


export default function PetDetail(props) {
  
  
  const { handleDelete, handleCreateComment, comments } = props;


  const [pet, setPet] = useState({});
  const [isLoaded, setLoaded] = useState(false);
  const { id} = useParams();
  const [formData, setFormData] = useState({
    content: '',
  });

  const { content } = formData;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


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
      <img className="pet-detail-image" src={pet.image} alt={pet.name} />
      <h1>{pet.name}</h1>
      <h6>Details: {pet.description}</h6>
      <h6>Age:{pet.age}</h6>
      <Link to={`/pets/${pet.id}/edit`}>
        <button>Edit</button>
      </Link>
      <Link to={`/pets`} onClick={() => handleDelete(pet.id)}>
        Delete
      </Link>

      <h3>Comments</h3>
      {pet?.comments.map((comment) => <p key={comment.id}>{comment.content}</p>)}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCreateComment(formData, id);
        }}
      >
        <label>
          Comment:
          <input
            type="text"
            name="content"
            value={content}
            onChange={handleChange}
          />
        </label>
        <button>Submit</button>
      </form>
      <Footer />
    </div>
  );
}
