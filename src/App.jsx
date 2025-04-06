import React from "react";
import "./styles.css";

function App() {
  return (
    <div className="portfolio">
      <header className="navbar">
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="home" className="home">
        <h1>Hello There! <span role="img" aria-label="wave">👋</span></h1>
        <img src="kier.jpeg.jpg" alt="gonzaga" />
       <h2>I`m Trishan Kier Gonzaga </h2> 
        <h4 className="Course and Year">BSIT-3</h4>
      </section>

      <section id="about" className="about">
        <h3> About Me</h3>
       <i> <p>
          I’m a 3rd year BS Information Technology  student at Western Institule of Technology.
          I'm driven by the desire to continually learn and improve, both in my studies and in life.
        </p> </i>
      </section>

      <section id="projects" className="projects">
        <h3>Projects</h3>
        <br></br>
        <br></br>
        <div classname="project-list">
            <img src="project.jpg" alt="" />
            <h3>Project : Website Portfolio</h3>
            <p> A digital collection of my work, achievements. It is used to showcase my experience and creative projects, especially in field of software development.</p>
          </div>
      </section>

      <section id="contact" className="contact">
        <h3>Contact Me</h3>
        <p>Facebook: <a href="https://www.facebook.com/share/19YgjNosuU/">Kier Gonzaga</a></p>
        <p>Gmail: <a href="https://mail.google.com/mail/u/0/#inbox">@trishankier1</a></p>
      </section>
    </div>
  );
}

export default App;
