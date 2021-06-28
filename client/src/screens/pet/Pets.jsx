import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../others/Footer'
import './pet.css'


function Pets(props) {
  const { pets } = props;
	return (
    <div className='allPets'>
      <Link to='/pets/new'>
				<button className='add-pet-button'>Add Pet for adoption</button>
        </Link>
      <br />
      <h2>Pets for Adoption</h2>
      <div className='display-pets'>
			{pets.map((pet) => (
				<Fragment key={pet.id}>
          <Link to={`/pets/${pet.id}`}>
            <img
              className="pet-images"
              src={pet.image}
              alt={pet.name}
            />
          </Link>
				</Fragment>
			))}
		</div>
      
      {/* <Footer /> */}
		</div>
	);
}

export default Pets;