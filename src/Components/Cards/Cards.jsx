import React from "react";
import data from "./data.js";
import "./cards.css";
import "./cards.scss";
const Cards = () => {
  return (
    <section className="card">
      <h1>My Gallery</h1>
      <h3>Hope you enjoy</h3>

      <div className="container">
        {data.map((items) => {
          return (
            <article className="card_article" key={items.id}>
              <div className="imageTag">
                <img src={items.img} alt="" />
              </div>
              <div className="textTag">
                <h2>{items.name}</h2>
              </div>
              <div className="linkTag">
                <a target="_blank" href={items.github}>
                  GitHub
                </a>
                <a target="_blank" href={items.github}>
                  Website
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Cards;

// Flip Card needs to be added
