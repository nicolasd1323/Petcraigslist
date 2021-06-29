import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getOnePet } from "../../services/pets";
import "./petDetail.css";
import { deleteComment, postComment } from "../../services/comments";
export default function PetDetail(props) {
  const { handleDelete } = props;

  const [pet, setPet] = useState({});
  const [comments, setComments] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();
  const [formData, setFormData] = useState({
    content: "",
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
      setComments(pet.comments);
      setLoaded(true);
    };
    fetchPet();
  }, [id]);
  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  const handleCreateComment = async (formData) => {
    const commentItem = await postComment(formData, id);
    setComments((prevState) => [...prevState, commentItem]);
  };
  const handleDeleteComment = async (commentId) => {
    await deleteComment(commentId);
    setComments((prevState) =>
      prevState.filter((comment) => comment.id !== Number(commentId))
    );
  };

  return (
    <div className="pet-detail">
      <img className="pet-detail-image" src={pet.image} alt={pet.name} />
      <div className="detail-pet">
        <h1>{pet.name}</h1>
        <h3>Details: {pet.description}</h3>
        <h3>Age:{pet.age}</h3>
        <div className="button-container">
          <Link to={`/pets/${pet.id}/edit`}>
            <button className="edit-button">Edit</button>
          </Link>
          <Link
            className="delete-button"
            to={`/pets`}
            onClick={() => handleDelete(pet.id)}
          >
            Delete
          </Link>
        </div>
        <h3>Comments</h3>
        <div className="comments">
          {comments.map((comment) => (
            <div key={comment.id}>
              <p className="ptag">{comment.content}</p>
              <button onClick={() => handleDeleteComment(comment.id)}>
                Delete
              </button>
            </div>
          ))}
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCreateComment(formData);
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
    </div>
  );
}
