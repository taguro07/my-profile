import { useState } from 'react';

// Components
import Navagition from 'components/nav';

// Constants
import { NAME } from 'constants/common';

// Jsons
import SocialMedias from 'jsons/social-medias.json';

// Styles
import './header.scss';

const Header = () => {
  const [listIcon, xIcon] = ['list', 'x'];
  const [menuIcon, setMenuIcon] = useState<string>(listIcon);

  const handleToggleIcon = () => {
    setMenuIcon((prev) => (prev === listIcon ? xIcon : listIcon));
  };

  const handleNavClick = () => {
    setMenuIcon(listIcon);
  };

  return (
    <div className={`${menuIcon === xIcon ? 'mobile-nav-active' : ''}`}>
      <i
        className={`mobile-nav-toggle d-xl-none bi bi-${menuIcon}`}
        onClick={handleToggleIcon}
      ></i>
      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <img
              src="https://scontent.xx.fbcdn.net/v/t1.15752-9/386440999_1724264871415095_8446253409088533306_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeH-RmGF_PO8rwmBvZGg0GIYOqT5YVZU4-E6pPlhVlTj4SlwfUpG3MrExeZUGuDIXsdIF2LZSw8tLmFJWmNnG2lw&_nc_ohc=gDz_SnUVqAcQ7kNvgHgl1jW&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QHuUekA3eWD821FCTUV-1fMeB1uM6NHWt6cQpkNOlHyWg&oe=66FBF52A"
              alt=""
              className="img-fluid rounded-circle"
              style={{ width: '150px', height: '160px'}}
            />
            <h1 className="text-light">{NAME}</h1>
            <div className="social-links mt-3 text-center">
              {SocialMedias.medias.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className={item.name}
                  target="blank"
                >
                  <i className={`bi bi-${item.name}`}></i>
                </a>
              ))}
            </div>
          </div>
          <Navagition handleNavClick={handleNavClick} />
        </div>
      </header>
    </div>
  );
};

export default Header;
