export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hi, I'm Lord Jhon</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">BSIT</span>
          </h1>
          <p className="hero--section-description">
          I have a passion for technology and enjoy learning about programming, web development, and network systems.  
            <br /> I’m excited about the opportunities in the IT field and eager to apply my skills in real-world situations.
          </p>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/about.png" alt="Hero Section" />
      </div>
    </section>
  );
}
