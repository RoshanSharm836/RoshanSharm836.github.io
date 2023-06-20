import "./App.css";
function Main() {
  return (
    <div className="portfolio-home" id="home">
      <div>
        <span className="heading-pry">
          hi {""}
          <img
            src="https://media.tenor.com/nebZyl8oN7IAAAAj/wave-hello.gif"
            width="48px"
            alt="logo"
          />
        </span>
        <br />
        <span>
          i'm
          <span className="home-name"> roshan Kumar</span>
        </span>
      </div>

      <div>
        <img
          className="giflogo"
          src="https://www.bing.com/th/id/OGC.81178b47a8598f0c81c4799f2cdd4057?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f2131993%2fscreenshots%2f4948736%2fthoughtworks-gif_dribbble.gif&ehk=NNfOMQ6dfiA3eWWZAhI73QT3tX1lMjqFSSH4bXYrTAo%3d"
        />
      </div>
      <button className="home-btm center">
        <a href="#about">about me</a>
      </button>
    </div>
  );
}

export default Main;
