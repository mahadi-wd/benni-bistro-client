import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/sectionTitle/SectionTitle";
import MenuItem from "../../Shered/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItem = data.filter((menu) => menu.category === "popular");
        setMenu(popularItem);
      });
  }, []);
  return (
    <section className="mb-20 max-w-screen-lg mx-auto">
      <SectionTitle
        subTitle={"---Popular Item---"}
        title={"FROM OUR MENU"}
      ></SectionTitle>

     <div className="grid md:grid-cols-2 gap-14">
     {
        menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
      }
     </div>
    </section>
  );
};

export default PopularMenu;
