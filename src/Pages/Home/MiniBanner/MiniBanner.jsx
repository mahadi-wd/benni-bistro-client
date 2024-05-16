
import bgimg from '../../../assets/home/chef-service.jpg'
const MiniBanner = () => {
    return (
        <div  className='md:h-[600px] mt-20 max-w-screen-lg mx-auto '>
            <div style={{backgroundImage: `url(${bgimg})`, backgroundSize: 'cover', height: "100%", width: '100%'}} className='pt-32 ' >
               <div className="bg-white w-3/5 rounded-md text-center p-20 mx-auto ">
               <h3 className='text-5xl text-black '>Benni Bistro</h3>
                <p className='text-black mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorum debitis rerum itaque. Autem accusamus nulla perspiciatis quam libero accusantium.</p>
               </div>
            </div>
        </div>
    );
};

export default MiniBanner;