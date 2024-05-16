

const SectionTitle = ({title , subTitle}) => {
    return (
        <div className="my-20">
             <h3 className="text-center text-[#D99904]">---{subTitle}---</h3>
            <p className="text-2xl text-center border-y-2 py-4 mt-2 w-60 mx-auto uppercase">{title}</p>
           
        </div>
    );
};

export default SectionTitle;