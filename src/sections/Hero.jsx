const Hero = () => {
  return (
    <section className="hero-section">
      <div className="size-full mask-wrpper">
        <img src="/images/hero-bg.webp" alt="Hero bg" className="scale-out" />
        <img
          src="/images/hero-text.webp"
          alt="Hero logo"
          className="title-logo fade-out"
        />
        <img
          src="/images/watch-trailer.png"
          alt="Hero logo"
          className="trailer-logo fade-out"
        />
        <div className="play-img fade-out">
          <img src="/images/play.png" alt="play" className="w-7 ml-1" />
        </div>
        <div>
          <img
            src="/images/big-hero-text.svg"
            alt="logo"
            className="size-full object-cover mask-logo"
          />
        </div>
        <div className="fake-logo-wrapper">
          <img
            src="/images/big-hero-text.svg"
            alt="logo"
            className="overlay-logo"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
