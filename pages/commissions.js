import Head from "next/head";
import { useEffect, useState } from "react";
import HomeLatestPosts from "../components/HomeLatestPosts";
import Gallery from "../components/ImageDetail";
import hbg from "/public/unnamed.jpg";
import styles from "../styles/Home.module.scss";
// import { SocialIcon } from "react-social-icons";
import { Container, Navbar, Text, Button, Grid, Col } from "@nextui-org/react";
import { useMediaQuery } from "../components/useMediaQuery";

export default function Home({ commissions }) {
  const [photosCommissions, setPhotos23] = useState(commissions);

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

      <h1>Commissions</h1>

      <main className={styles.main}>
        <div className={styles.fade}>
          <div className={styles.gridContainer}>
            <button className="prev" onClick={() => slide(-50)}>
              <i className="fa fa-angle-left"></i>
            </button>
            {photosCommissions &&
              photosCommissions.data.map((detail) => (
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
    </div>
  );
}
export async function getStaticProps() {
  const resultsCommissions = await fetch(
    "http://localhost:1337/api/commissions?populate=*"
  );
  const commissions = await resultsCommissions.json();

  return {
    props: { commissions },
  };
}
