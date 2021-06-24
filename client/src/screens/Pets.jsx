import { Fragment } from 'react';
import { Link } from 'react-router-dom';

function Pets(props) {
  const { pets } = props;
	return (
		<div>
			<h3>Pets for Adoption</h3>
			{pets.map((pet) => (
				<Fragment key={pet.id}>
          <Link to={`/pets/${pet.id}`}>
          {pet.name}
            <img
              className="pet-images"
              src={pet.image}
              alt={pet.name}
            
            />
					</Link>
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