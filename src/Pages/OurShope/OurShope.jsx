import UseMenu from "../../Hooks/UseMenu";
import shopImg from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Cover from "../../Components/Cover/Cover";
import { useState } from "react";
import FoodCategory from "../OurShop/FoodCategory/FoodCategory";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const OurShope = () => {
  const categoris = ['Salad', 'pizza', 'soup', 'dessert', 'drinks']
  const {category} = useParams()
  const initialIndx = categoris.indexOf(category)
  const [tabIndex, setTabIndex] = useState(initialIndx);
  const [menu] = UseMenu();
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const drinks = menu.filter((item) => item.category === "drinks");
  const dessert = menu.filter((item) => item.category === "dessert");

  return (
    <div className="pt-[77px]">
       <Helmet>
        <title>Benni | Our Shop</title>
      </Helmet>
      <Cover
        img={shopImg}
        coverTitle={"Our Shop"}
        coverDiscrip={"Would you like to eat a dish."}
      ></Cover>
      <div className="mt-10 text-center max-w-screen-lg mx-auto ">
        <Tabs
          className=""
          defaultIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
        >
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanel>
            <FoodCategory items={salad}></FoodCategory>
          </TabPanel>
          <TabPanel>
          <FoodCategory items={pizza}></FoodCategory>
          </TabPanel>
          <TabPanel>
          <FoodCategory items={soup}></FoodCategory>
          </TabPanel>
          <TabPanel>
          <FoodCategory items={dessert}></FoodCategory>
          </TabPanel>
          <TabPanel>
          <FoodCategory items={drinks}></FoodCategory>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OurShope;
