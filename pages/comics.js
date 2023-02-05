import Head from "next/head";
import { useEffect, useState } from "react";
import HomeLatestPosts from "../components/HomeLatestPosts";
import Gallery from "../components/ImageDetail";
import hbg from "/public/unnamed.jpg";
import styles from "../styles/Home.module.scss";
// import { SocialIcon } from "react-social-icons";
import { Container, Navbar, Text, Button, Grid, Col } from "@nextui-org/react";
import { useMediaQuery } from "../components/useMediaQuery";

export default function Home({ amens, world }) {
  const [photosAmens, setPhotos23] = useState(amens);
  const [photosWorlds, setPhotos22] = useState(world);

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

      <h1>Amens</h1>

      <main className={styles.main}>
        <div className={styles.fade}>
          <div className={styles.gridContainer}>
            <button className="prev" onClick={() => slide(-50)}>
              <i className="fa fa-angle-left"></i>
            </button>
            {photosAmens &&
              photosAmens.data.map((detail) => (
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
      <h1>Psycho World</h1>

      <main className={styles.main}>
        <div className={styles.fade}>
          <div className={styles.gridContainer}>
            {photosWorlds &&
              photosWorlds.data.map((detail) => (
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
  const resultsAmens = await fetch(
    "http://localhost:1337/api/amens?populate=*"
  );
  const amens = await resultsAmens.json();

  const resultsWorld = await fetch(
    "http://localhost:1337/api/psycho-worlds?populate=*"
  );
  const world = await resultsWorld.json();

  return {
    props: { amens, world },
  };
}
