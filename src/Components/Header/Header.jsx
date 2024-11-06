import images from "../../assets/images.jpg"
import './Header.css';

function Header() {
    return (
        <div className="header-wrapper">
          <h1
            className="header-text"
          >Shopping List</h1>
          <div className="header-image-wrapper">
            <img
                    className="header-image"
                    src={images}
            />
          </div>
        </div>
    )
}

export default Header;