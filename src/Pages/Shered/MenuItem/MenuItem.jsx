

const MenuItem = ({item}) => {
    const {name, image, price, recipe} = item
    return (
        <div className="flex gap-4">
            <img style={{borderRadius:'0px 200px 200px 200px'}} className="w-[100px]" src={image} alt="" />
            <div>
                <p className="text-xl font-semibold">{name}-----</p>
                <p>{recipe}</p>
            </div>
            <p className="text-[#BB8506]">${price}</p>
        </div>
    );
};

export default MenuItem;