"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import items from "@/public/assets/items.json";
import styles from "@/styles/Bootstrap.module.css";
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import Image from "next/image";

function BootstrapCarousel() {
  const { bootstrap } = items.items;
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex+1);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}  className="w-screen bg-black"> 
      {bootstrap.map((item) => (
          <Carousel.Item key={item.id} interval={4000}  className="flex justify-center w-0.5">
              <Image
                src={item.imageUrl}
                alt="slides"
                width={0}
                height={0}
                sizes={"100vw"}
                style={{ width: '100%', height: '350px', objectFit: "contain"}}
              />

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