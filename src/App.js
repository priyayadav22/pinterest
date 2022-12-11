import './App.css';
// import MenuContainer from './Components/MenuContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faComment, faHeart, faPlus, faQuestion, faShare, faUser } from '@fortawesome/free-solid-svg-icons'
import pintrest_logo from './images/pintrest_logo.png';
import { useEffect } from 'react';
import Pin from './Components/Pin';

import Data from './Components/Data';

function App() {

  useEffect(() => {
    const allIcon = document.querySelectorAll(".iconContainer");
    function setMenuActive() {
      allIcon.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
      //console.log("hii");
    }

    allIcon.forEach((n) => n.addEventListener("click", setMenuActive));
  }, []);

  return (
    <div className="App">
      <div className="menuContainer">
        <img src={pintrest_logo}
          alt='pintrestlogo'
          className="logo"
        />

        <div className="subMenu">
          <div>

            <FontAwesomeIcon className='iconContainer' icon={faUser} />
            <FontAwesomeIcon className='iconContainer' icon={faBell} />
            <FontAwesomeIcon className='iconContainer' icon={faComment} />
          </div>

          <div>
            <FontAwesomeIcon className='iconContainer' icon={faHeart} />
          </div>

          <div>
            <FontAwesomeIcon className='iconContainer' icon={faQuestion} />
            <FontAwesomeIcon className='iconContainer' icon={faPlus} />
          </div>
        </div>

      </div>

      <main>

        <div className="searchBox">
          <input type="text" placeholder="Search..." />
          <div className='search'>
            <FontAwesomeIcon icon={faShare} />
          </div>
        </div>
        <div className="mainContainer">
        {
          Data && Data.map((data) => (
            <Pin 
          key={data.id} 
          pinSize = {data.size}
            imgSrc ={data.imgSrc}
            name = {data.name}
            link = {data.link}
          />
          ))
        }
          
        </div>
      </main>
    </div>
  );
}

export default App;
