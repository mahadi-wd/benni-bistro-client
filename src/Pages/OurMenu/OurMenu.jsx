import { Helmet } from "react-helmet-async";
import Cover from "../../Components/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";



const OurMenu = () => {
  return (
    <div className="pt-[77px]">
      <Helmet>
        <title>Benni | Our Menu</title>
      </Helmet>

      <Cover img={menuImg}></Cover>
      
     
    </div>
  );
};

export default OurMenu;
