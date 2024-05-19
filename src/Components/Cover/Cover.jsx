import { Parallax } from 'react-parallax';


const Cover = ({img, coverTitle, coverDiscrip}) => {


  return (

    <Parallax
    blur={{ min: -50, max: 50 }}
    bgImage={img}
    bgImageAlt="the dog"
    strength={-200}
>
<div
      className="hero h-[500px] "
    //   style={{
    //     backgroundImage:
    //       `url("${img}")`,
    //   }}
    >
      <div className=" "></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-xl px-32 py-14 bg-black bg-opacity-60 text-white">
          <h1 className="mb-5 text-4xl font-semibold uppercase">{coverTitle}</h1>
          <p className="mb-5">
           {coverDiscrip}
          </p>
        </div>
      </div>
    </div>
</Parallax>
    
  );
};

export default Cover;
