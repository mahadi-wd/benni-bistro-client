

const FoodCard = ({item}) => {
    const {image, name, recipe, price} = item
    return (
        <div className="card card-compact h-96 bg-base-100 shadow-xl">
        <figure >
          <img
             className="relative"
            src={image}
            alt="Shoes"
          />
          <p className="absolute right-0 top-0 mt-4 mr-5 bg-black text-white px-4">{price}</p>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe.slice(0, 70)}</p>
          <div className="card-actions justify-center">
            <button className="btn text-[#BB8506] bg-[#E8E8E8] border-b-4 border-[#BB8506] hover:bg-[#1F2937] hover:text-white">Add to cart</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;