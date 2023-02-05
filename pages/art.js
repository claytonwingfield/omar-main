import Head from "next/head";
import { useEffect, useState } from "react";
import HomeLatestPosts from "../components/HomeLatestPosts";
import Gallery from "../components/ImageDetail";
import hbg from "/public/unnamed.jpg";
import styles from "../styles/Home.module.scss";
// import { SocialIcon } from "react-social-icons";
import { Container, Navbar, Text, Button, Grid, Col } from "@nextui-org/react";
import { useMediaQuery } from "../components/useMediaQuery";

export default function Home({ art23, art22, art21, art20 }) {
  const [photos23, setPhotos23] = useState(art23);
  const [photos22, setPhotos22] = useState(art22);
  const [photos21, setPhotos21] = useState(art21);
  const [photos20, setPhotos20] = useState(art20);

  const [search, setSearch] = useState("");
  const isMd = useMediaQuery(800);

  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);

    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };
  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Tabogoo</title>
        <link rel="icon" href="/public/logo.png" />
      </Head>

      <h1>2023</h1>

      <main className={styles.main}>
        <div className={styles.fade}>
          <div className={styles.gridContainer}>
            <button className="prev" onClick={() => slide(-50)}>
              <i className="fa fa-angle-left"></i>
            </button>
            {photos23 &&
              photos23.data.map((detail) => (
                <Gallery
                  height={
                    detail.attributes.art.data.attributes.formats.small.height
                  }
                  width={
                    detail.attributes.art.data.attributes.formats.small.width
                  }
                  key={detail.id}
                  thumbnailUrl={
                    detail.attributes.art.data.attributes.formats.small.url
                  }
                  // title={detail.attributes.name}
                  id={detail.id}
                />
              ))}
            <button className="prev" onClick={() => slide(-50)}>
              <i className="fa fa-angle-left"></i>
            </button>
          </div>
        </div>
      </main>
      <h1>2022</h1>

      <main className={styles.main}>
        <div className={styles.fade}>
          <div className={styles.gridContainer}>
            {photos22 &&
              photos22.data.map((detail) => (
                <Gallery
                  height={
                    detail.attributes.art.data.attributes.formats.small.height
                  }
                  width={
                    detail.attributes.art.data.attributes.formats.small.width
                  }
                  key={detail.id}
                  thumbnailUrl={
                    detail.attributes.art.data.attributes.formats.small.url
                  }
                  // title={detail.attributes.name}
                  id={detail.id}
                />
              ))}
          </div>
        </div>
      </main>
      <h1>2021</h1>
      <main className={styles.main}>
        <div className={styles.fade}>
          <div className={styles.gridContainer}>
            {photos21 &&
              photos21.data.map((detail) => (
                <Gallery
                  height={
                    detail.attributes.art.data.attributes.formats.small.height
                  }
                  width={
                    detail.attributes.art.data.attributes.formats.small.width
                  }
                  key={detail.id}
                  thumbnailUrl={
                    detail.attributes.art.data.attributes.formats.small.url
                  }
                  // title={detail.attributes.name}
                  id={detail.id}
                />
              ))}
          </div>
        </div>
      </main>
      <h1>2020</h1>
      <main className={styles.main}>
        <div className={styles.fade}>
          <div className={styles.gridContainer}>
            {photos20 &&
              photos20.data.map((detail) => (
                <Gallery
                  height={
                    detail.attributes.art.data.attributes.formats.small.height
                  }
                  width={
                    detail.attributes.art.data.attributes.formats.small.width
                  }
                  key={detail.id}
                  thumbnailUrl={
                    detail.attributes.art.data.attributes.formats.small.url
                  }
                  // title={detail.attributes.name}
                  id={detail.id}
                />
              ))}
          </div>
        </div>
      </main>
    </div>
  );
}
export async function getStaticProps() {
  const results23 = await fetch("http://localhost:1337/api/art23s?populate=*");
  const art23 = await results23.json();

  const results22 = await fetch("http://localhost:1337/api/art22s?populate=*");
  const art22 = await results22.json();

  const results21 = await fetch("http://localhost:1337/api/art21s?populate=*");
  const art21 = await results21.json();

  const results20 = await fetch("http://localhost:1337/api/art20s?populate=*");
  const art20 = await results20.json();

  return {
    props: { art23, art22, art21, art20 },
  };
}
