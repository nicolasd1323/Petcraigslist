import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getOnePet } from "../../services/pets";
import Footer from "../../others/Footer";
import './petDetail.css'


export default function PetDetail(props) {
  
  
  const { handleDelete, handleCreateComment, handleDeleteComment } = props;


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
    fetchPet(id);
  }, [pet]);
  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }
  console.log(pet)

  return (
    <div className="pet-detail">
      <img className="pet-detail-image" src={pet.image} alt={pet.name} />
      <div className='detail-pet'>
      <h1>{pet.name}</h1>
      <h3>Details: {pet.description}</h3>
        <h3>Age:{pet.age}</h3>
        <div className='button-container'>
      <Link   to={`/pets/${pet.id}/edit`}>
        <button className="edit-button">Edit</button>
      </Link>
      <Link className="delete-button" to={`/pets`} onClick={() => handleDelete(pet.id)}>
        Delete
        </Link>
        </div>
        {/* <button onClick={() => handleDeleteComment(comments.id)}>Delete</button> */}
        <h3>Comments</h3>
        <div className='comments'>
      {pet?.comments.map((comment) => <p className='ptag' key={comment.id}>{comment.content}</p>)}
      </div>
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
            </div>
      {/* <Footer /> */}
    </div>
  );
}
