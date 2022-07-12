import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h2>Sobre mi</h2>

      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"></FaAward>
              <h5>Desarrollador de ecommerce</h5>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon"></VscFolderLibrary>
              <h5>Proyectos</h5>
              <small>2 proyectos hechos con javascript y react</small>
            </article>
          </div>
          
        </div>
        <div className="about__info">
            <h1>!Hola</h1>
            <p> soy Lautaro Atencio y me estoy formando como desarrollador front end react, estudio programación desde hace casi 1 año actualmente estoy estudiando tecnicatura en programación informática, que en la misma fue donde empecé a programar trabajando con consultas en MySQL. Estoy en constante formación sobre el desarrollo web enfocado en react, mas que nada en aplicaciones como eCommerce u otras aplicaciones que tenga mas demandas. Te invito a revisar mis <a href='#portfolio'>proyectos</a>.!
        </p>
          </div>
      </div>
    </section>
  );
};

export default About;
