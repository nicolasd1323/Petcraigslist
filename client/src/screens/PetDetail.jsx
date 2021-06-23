// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { getOnePet, addComment } from '../services/pets'


// export default function PetDetail(props) {

//   const [petItem, setPetItem] = useState();
//   const [commentId, setCommentId] = useState('')
//   const { comments } = props
//   const { id } = useParams();
  
// 	useEffect(() => {
// 		const fetchPetItem = async () => {
// 			const petData = await getOnePet(id);
// 			setPetItem(petData);
// 		};
// 		fetchPetItem();
// 	}, [id]);

//   const handleSubmit = async (e) => {
// 		e.preventDefault();
// 		const petItem = await addComment(id, commentId);
// 		setPetItem(petItem);
// 	};
//   const handleChange = (e) => {
// 		const { value } = e.target;
// 		setCommentId(value);
// 	};


//   return (
//     <div>
//       <h3>{petItem?.image}</h3>
//       {petItem?.comments.map((comment) => (
// 				<p key={comment.id}>{comment.content}</p>
// 			))}
//     </div>
//   );
// }

