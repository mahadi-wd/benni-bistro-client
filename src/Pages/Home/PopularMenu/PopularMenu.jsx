
import SectionTitle from "../../../Components/sectionTitle/SectionTitle";
import MenuItem from "../../Shered/MenuItem/MenuItem";
import UseMenu from "../../../Hooks/UseMenu";

const PopularMenu = () => {
 
  const [menu] = UseMenu()
  const popularMenu = menu.filter(item => item.category === 'popular')

  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularItem = data.filter((menu) => menu.category === "popular");
  //       setMenu(popularItem);
  //     });
  // }, []);
  return (
    <section className="mb-20 max-w-screen-lg mx-auto">
      <SectionTitle
        subTitle={"---Popular Item---"}
        title={"FROM OUR MENU"}
      ></SectionTitle>

     <div className="grid md:grid-cols-2 gap-14">
     {
        popularMenu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
      }
     </div>
    </section>
  );
};

export default PopularMenu;
