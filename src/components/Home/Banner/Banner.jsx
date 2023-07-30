import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>SALES</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
            modi, placeat nam repellendus ea et odio debitis maiores labore id
            reiciendis ipsum inventore quidem sint quaerat perspiciatis in
            impedit culpa!
          </p>
          <div className="actions">
            <div className="banner-action">Read More</div>
            <div className="banner-action v2">Shop Now</div>
          </div>
        </div>
        <img className="banner-img" src={BannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
