import React from 'react';
import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Pets from '../../screens/Pets'
import PetsCreate from '../../screens/PetsCreate'
import PetDetail from '../../screens/PetDetail'

import { deletePet, getAllPets, postPet, putPet, } from '../../services/pets'


function MainContainer() {
  const [pets, setPets] = useState([]);
  const history = useHistory();
  

  useEffect(() => {
		const fetchPets = async () => {
			const petList = await getAllPets();
			setPets(petList);
		};
		fetchPets();
  }, []);
  

  
	const handleCreate = async (formData) => {
		const petItem = await postPet(formData);
		setPets((prevState) => [...prevState, petItem]);
		history.push('/pets');
  };

  const handleUpdate = async (id, formData) => {
		const petItem = await putPet(id, formData);
		setPets((prevState) =>
			prevState.map((pet) => {
				return pet.id === Number(id) ? petItem : pet;
			})
		);
		history.push('/pets');
	};
	const handleDelete = async (id) => {
		await deletePet(id);
		setPets((prevState) => prevState.filter((pet) => pet.id !== id));
	};

  return (
    <div>
      <Switch>
				{/* <Route path='/pets/:id/edit'>
					<PetEdit pets={pets} handleUpdate={handleUpdate} />
				</Route> */}
				<Route path='/pets/new'>
					<PetsCreate handleCreate={handleCreate} />
				</Route>
				<Route path='/pets/:id'>
					<PetDetail pets={pets} />
				</Route>
				<Route path='/pets'>
          <Pets pets={pets} />
        </Route>
			</Switch>
    </div>
  );
}

export default MainContainer;