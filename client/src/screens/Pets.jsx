import { Fragment } from 'react';
import { Link } from 'react-router-dom';

function Pets(props) {
  const { pets, handleDelete } = props;
	return (
		<div>
			<h3>Pets for Adoption</h3>
			{pets.map((pet) => (
				<Fragment key={pet.id}>
					<Link to={`/pets/${pet.id}`}>
            <img
              className="pet-images"
              src={pet.image}
              alt={pet.name}
            
            />
					</Link>
					<Link to={`/pets/${pet.id}/edit`}>
						<button>Edit</button>
					</Link>
					<button onClick={() => handleDelete(pet.id)}>Delete</button>
				</Fragment>
			))}
			<br />
			<Link to='/pets/new'>
				<button>Create</button>
			</Link>
		</div>
	);
}

export default Pets;