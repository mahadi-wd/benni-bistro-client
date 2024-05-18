import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/sectionTitle/SectionTitle";
import ShefChoseItem from "../../Shered/shefChoiseItem/ShefChoseItem";

const ShefChoise = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const chefChoise = data.filter((item) => item.category === "offered");
        setMenu(chefChoise);
      });
  }, []);
  return (
    <section className="max-w-screen-lg mx-auto">
      <SectionTitle
        subTitle={"---Should try---"}
        title={"Chef Recommends"}
      ></SectionTitle>

      <div className="grid md:grid-cols-4 gap-3  ">
        {
            menu.map(item => <ShefChoseItem key={item._id} item={item}></ShefChoseItem>)
        }
      </div>
    </section>
  );
};

export default ShefChoise;
