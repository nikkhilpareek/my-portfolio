export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Nikhil Pareek</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">A Student</span>{" "}
            <br />
            trying Web Developement.
          </h1>

        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
