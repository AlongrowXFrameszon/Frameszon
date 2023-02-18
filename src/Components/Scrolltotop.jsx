import { IoIosArrowDropupCircle } from "react-icons/io";
import "./Wishlist.css";

const Wishlist = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
      /* you can also use 'auto' behaviour
           in place of 'smooth' */
    });
  };
  return (
    <div style={{ overflowX: "hidden" }}>
      <div className="wishlist-back-to-top">
        <IoIosArrowDropupCircle
          className="wishlist-back-to-top-icon"
          onClick={scrollToTop}
        />
      </div>
    </div>
  );
};
export default Wishlist;
