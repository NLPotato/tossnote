"use client";

import { useState } from "react";
import items from "@/public/assets/items.json";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "@/styles/Bootstrap.module.css";


function BootstrapCarousel() {
  const { bootstrap } = items.items;
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex+1);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {bootstrap.map((item) => (
        // <Carousel.Item key={item.id} interval={4000}>
        <Carousel.Item key={item.id} className={styles.itemP} interval={4000}>
          <img src={item.imageUrl} alt="slides" />
          <Carousel.Caption>
          {/* <Carousel.Caption className={styles.caption}> */}
            <h3>{item.title}</h3>
            {/* <p>{item.body}</p> */}
            <button className="btn btn-danger">Visit Docs</button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default BootstrapCarousel;