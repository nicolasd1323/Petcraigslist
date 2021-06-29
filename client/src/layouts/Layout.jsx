import { Link } from 'react-router-dom';
import './layout.css'


export default function Layout(props) {
	const { currentUser, handleLogout, children } = props;
	return (
    <div className='layout'>
      <header className='nav'>
				<h1>Paws For Life</h1>
				{currentUser ? (
					<>
						<p>Welcome, {currentUser.username}</p>
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
      <footer>
    
      </footer>
			{children}
    </div>
    
	);
}