import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import Logo from './images/logo.png';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  return (
      <div className="topbar">
          <div className="topbar-home">
            <Link to="/">
            <img className="logoImg" src={Logo} alt="logo">
            </img>
            </Link>
          </div>
          
          <div className="topbar-profile">
            {sessionUser && (
              <Link to="/spots/new" className="create-spot">Create a New Spot</Link>
            )}
            
            {isLoaded && (
                <ProfileButton user={sessionUser} />
            )}
          </div>
      </div>
  );
}

export default Navigation;
