import SectionTile from "../../../components/SectionTitle/SectionTile";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-items bg-fixed text-white pt-8 my-20">
            <SectionTile
            subHeading='Check it out'
            heading='Featured Item'
            ></SectionTile>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 22, 2023</p>
                    <p className="uppercase">where can i get some</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente libero tenetur accusantium nesciunt totam porro aspernatur, numquam temporibus natus quo doloribus ipsum, veritatis ex vitae! Expedita odio illo, perspiciatis minus eum eveniet? A distinctio culpa quasi expedita. Vel, cum? Recusandae eligendi iure libero distinctio similique cumque ab quae ducimus ipsam!</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;