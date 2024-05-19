import { Helmet } from "react-helmet-async";
import Cover from "../../Components/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import UseMenu from "../../Hooks/UseMenu";
import SectionTitle from "../../Components/sectionTitle/SectionTitle";
import CategoryMenu from "../../Components/categoryMenu/CategoryMenu";
import dessertImg from '../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../assets/menu/pizza-bg.jpg';
import saladImg from '../../assets/menu/salad-bg.jpg';
import soupImg from '../../assets/menu/soup-bg.jpg';



const OurMenu = () => {
  const [menu] = UseMenu()
  const soup = menu.filter(item => item.category === 'soup')
  const pizza = menu.filter(item => item.category === 'pizza')
  const salad = menu.filter(item => item.category === 'salad')
  const offered = menu.filter(item => item.category === "offered")
  const dessert = menu.filter(item => item.category === 'dessert')

  return (
    <div className="pt-[77px]">
      <Helmet>
        <title>Benni | Our Menu</title>
      </Helmet>

      <Cover img={menuImg} coverTitle={'OUR MENU'} coverDiscrip={'Would you like to try a dish.'}></Cover>
      <SectionTitle subTitle={"Don't miss"} title={"Todays Offers"}></SectionTitle>
      <CategoryMenu items={offered} title={'offered'}></CategoryMenu>

      {/* dessert item */}
      <Cover img={dessertImg} coverTitle={'Dessert'} coverDiscrip={'This is an treditional dessert item. We strongly recommended to try it.'}></Cover>
      <CategoryMenu items={dessert} title={'dessert'} ></CategoryMenu>

      {/* pizza items */}

      <Cover img={pizzaImg} coverTitle={'Pizza'}  coverDiscrip={"We have lot's of varient pizza like italian, mexican, american. You can try anyone."}></Cover>
      <CategoryMenu items={pizza} title={'pizza'}></CategoryMenu>
     
     {/* salad items  */}

     <Cover img={saladImg} coverTitle={'Salad'} coverDiscrip={"Hey dude, take me and meke you the hapyest person of tghe persion "}></Cover>
     <CategoryMenu items={salad} title={'salad'}></CategoryMenu>

     {/* soup items */}

     <Cover img={soupImg} coverTitle={'Soup'} coverDiscrip={"There we have lot's of varient soups. like Thai , Japaniz, India ets. "}></Cover>

     <CategoryMenu items={soup} title={'soup'}></CategoryMenu>

    </div>
  );
};

export default OurMenu;
