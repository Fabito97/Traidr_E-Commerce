import buying from "../../assets/buyingtraidbr.jpg";
import Search from "./Search";

const Hiro = () => {
  return (
    <div  className="hiro-section">
      <div className="hiro m-3 mt-5">
        <div className="hiro_Text">
         
          <div className="hiro_Text_Writing">
            <h1 className="mb-2">
              Start <span className="text-primary">Trading</span> Today - Sign
              up and begin buying and 
              selling
            </h1>
          </div>
          <p className="hiro_Text_Never">
            Never Pay Retail Again - Find great discounts on pre-owned items.
            Trade your Way - Barter for goods and services on our platform.
          </p>
          <div className="searchComponent">
            <Search />
          </div>
        </div>
        <div className="hiro_img">
          <img src={buying} alt="" className="buying" />
        </div>
        
      </div>
    </div>
  );
};

export default Hiro;
