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
    <container className="w-screen bg-black">
      <div className="flex justify-center items-center flex-col max-w-7xl mx-auto sm:px-16 px-6">
        <Carousel activeIndex={index} onSelect={handleSelect} > 
          {bootstrap.map((item) => (
              <Carousel.Item key={item.id} interval={4000}>
                  <Image
                    src={item.imageUrl}
                    alt="slides"
                    width={0}
                    height={0}
                    sizes={"100vw"}
                    style={{ width: '1024px', height: '350px', objectFit: "fill"}} //widht: 100% objectFit: "contain"
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
      </div>
    </container>

  );
}

export default BootstrapCarousel;