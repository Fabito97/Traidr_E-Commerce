
import logo from "../../assets/logo.png";
import main from '../../assets/main.jpeg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckField, faSuitcase, faUser, faHouse } from '@fortawesome/free-solid-svg-icons';

const Main = () => {
  // Define the repeated text elements and their corresponding icons
  const repeatedElements = [
    { text: "Find great discounts on pre-owned items. Trade your Way-Barter for good and services on our platform.", icon: faTruckField },
    { text: "Find great discounts on pre-owned items. Trade your Way-Barter for good and services on our platform.", icon: faSuitcase },
    { text: "Find great discounts on pre-owned items. Trade your Way-Barter for good and services on our platform.", icon: faUser },
    { text: "Find great discounts on pre-owned items. Trade your Way-Barter for good and services on our platform.", icon: faHouse },
  ];

  return (
    
      <div className="main p-3 mt-5 mb-4">
        <div className="main_why">
          <div className='main_why_h1'>
            <h1 className='mb-3'>
              Why use <span className='text-primary'>traidr</span>?
            </h1>
          </div>
          <div className="main_why_section">
            {repeatedElements.map((element, index) => (
              <div key={index} className="main_why_section_text">
                <div className='main_why_section_text_p'>
                <div className="icon-container">
                     <FontAwesomeIcon icon={element.icon} className="icon" />
                </div>
                 <p className="mt-1">{element.text} </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="main_img">
          <img src={main} alt="main" className="mainImage" />
        </div>
      </div>
   
  );
}

export default Main;
