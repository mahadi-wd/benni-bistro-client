const ShefChoseItem = ({ item }) => {

    const {image, name, recipe} = item
  return (
    <div>
      <div className="card card-compact h-80  bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name.slice(1, 18)}</h2>
          <p>{recipe.slice(1, 25)}</p>
          <div className="card-actions justify-center">
            <button className="btn text-[#BB8506] bg-[#E8E8E8] border-b-4 border-[#BB8506] hover:bg-[#1F2937] hover:text-white">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShefChoseItem;
