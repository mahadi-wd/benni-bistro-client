import SectionTitle from "../../../Components/sectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';

const Featured = () => {
    return (
        <div style={{backgroundImage:`linear-gradient(to bottom, rgba(0,0,0,0.65), rgba(0,0,0,0.65)),url(${featuredImg})`,}} className="pb-32 pt-16 px-36  mt-20 bg-fixed " >
            <SectionTitle subTitle={'---Check it out---'} title={'Featured Item'}></SectionTitle>

            <div   className="flex justify-center items-center gap-20">
              <div > <img className="rounded-md" src={featuredImg} alt="" /></div>
                <div className="text-white">
                    <h3 className="text-xl ">March 20, 2023</h3>
                     <h2 className="text-2xl">Where can i get some?</h2>
                     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit ea dolorem culpa sapiente in tempora molestiae corrupti sequi itaque et numquam est expedita ipsa soluta repudiandae unde ullam voluptates cum aut nemo neque magni, accusantium libero? Temporibus distinctio sunt sed.</p>
                </div>
            </div>
        </div>
    );
};

export default Featured;