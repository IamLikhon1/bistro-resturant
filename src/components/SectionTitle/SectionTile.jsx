
const SectionTile = ({heading,subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8">
            <p className="text-yellow-500 font-serif mb-2">--- {subHeading} ---</p>
            <h3 className="text-4xl font-serif border-y-4 py-4 uppercase">{heading}</h3>
        </div>
    );
};

export default SectionTile;