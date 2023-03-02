import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import './index.css';
export default function navbar() {
      return (
            <div className="navbar">
                  <nav className="navbar-container">
                        <ul>
                              <li>sho</li>
                              <li>Collection</li>
                              <li>About</li>
                              <li>Contacts</li>
                        </ul>
                        <div>
                              <h1 className="test">
                                    <span>C.P.</span> Company
                              </h1>
                        </div>

                        <ul>
                              <li>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                              </li>
                              <li>
                                    <FontAwesomeIcon icon={faUser} />
                              </li>
                              <li>
                                    <FontAwesomeIcon icon={faHeart} />
                              </li>
                              <li>
                                    <FontAwesomeIcon icon={faBagShopping} />
                              </li>
                        </ul>
                  </nav>
            </div>
      );
}
