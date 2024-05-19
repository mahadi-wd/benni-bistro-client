import { Link } from "react-router-dom";
import MenuItem from "../../Pages/Shered/MenuItem/MenuItem";


const CategoryMenu = ({items, title}) => {

  return (
    <>
      <div className="grid md:grid-cols-2 gap-10 max-w-screen-lg mx-auto my-14">
        { items && items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>

      {/* show all menu button  */}

      <div className="text-center">

        <Link to={`/ourShope/${title}`}><button className=" mb-10 w-64  textt-center btn text-[#BB8506] bg-[#E8E8E8] border-b-4 border-[#BB8506] hover:bg-[#1F2937] hover:text-white">Order Your favourite food</button></Link>
      </div>
    </>
  );
};

export default CategoryMenu;
