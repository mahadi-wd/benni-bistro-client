import MenuItem from "../Shered/MenuItem/MenuItem";

const ShowAllMenu = ({items}) => {
    // if (!Array.isArray(items)) {
    //     return <div>No items to display</div>; // Or handle it in another appropriate way
    //   }
    return (
        <div>
             <div className="grid md:grid-cols-2 gap-10 max-w-screen-lg mx-auto mb-10 ">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
        </div>
    );
};

export default ShowAllMenu;