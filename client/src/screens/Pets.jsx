import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './pet.css'


function Pets(props) {
  const { pets } = props;
	return (
    <div className='allPets'>
    <div className='create'>
      <Link to='/pets/new'>
				<button>Add Pet for adoption</button>
        </Link>
        </div>
      <br />
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
		
		
		</div>
	);
}

export default Pets;