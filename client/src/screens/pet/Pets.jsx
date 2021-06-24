import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../others/Footer'
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
		
      
      <Footer />
		</div>
	);
}

export default Pets;