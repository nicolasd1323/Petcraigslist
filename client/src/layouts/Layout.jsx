import { Link } from 'react-router-dom';

export default function Layout(props) {
	const { currentUser, handleLogout, children } = props;
	return (
		<div className='layout'>
			<header>
				<h1>Paws For Life</h1>
				{currentUser ? (
					<>
						<p>{currentUser.username}</p>
						<button onClick={handleLogout}>Logout</button>
					</>
				) : (
					<Link to='/login'>Login/Register</Link>
				)}
				<hr />
        {
          currentUser && 
          <>
            <Link to='/pets'>Pets For Adoption</Link>
          </>
        }
			</header>
			{children}
		</div>
	);
}