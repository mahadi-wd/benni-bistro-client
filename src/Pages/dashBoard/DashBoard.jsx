import UseMenu from "../../Hooks/UseMenu";
import FoodCard from "../OurShop/FoodCard/FoodCard";
import shopImg from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Cover from "../../Components/Cover/Cover";
import { useState } from "react";
import FoodCategory from "../OurShop/FoodCategory/FoodCategory";
const DashBoard = () => {
    const [tabIndex, setTabIndex] = useState(0);
  const [menu] = UseMenu()
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const offered = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");

    return (
        <div className="pt-[77px]">
           <Cover
        img={shopImg}
        coverTitle={"Our Shop"}
        coverDiscrip={"Would you like to eat a dish."}
      ></Cover>
      <div className="mt-10 text-center">
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
           <FoodCategory items={soup} ></FoodCategory>
          </TabPanel>
          <TabPanel>
          <div>div toatal {menu.length}</div>
            {
              menu.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
            }
          </TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
        </Tabs>
      </div>
        </div>
    );
};

export default DashBoard;