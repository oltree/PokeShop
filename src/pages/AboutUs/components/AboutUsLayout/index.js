import AboutUsBg1 from "../../../../static/images/AboutUsBg1.jpg";
import AboutUsImage1 from "../../../../static/images/AboutUsImage1.jpg";
import AboutUsImage2 from "../../../../static/images/AboutUsImage2.jpg";
import Shop1 from "../../../../static/images/Shop1.jpg";
import Shop2 from "../../../../static/images/Shop2.jpg";
import Shop3 from "../../../../static/images/Shop3.jpg";

import styles from "./index.module.scss";

const AboutUsLayout = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.banner}>
        <img src={AboutUsBg1} alt="background-pokemons" />
      </div>

      <div className={styles.pokeshop}>
        <h1 className={styles.title}>What is PokéShop?</h1>

        <div className={styles.contentContainer}>
          <div className={styles.content}>
            <p>
              PokemonCenter.com is our official online store for Pokémon Center
              merchandise, focusing on unique designs and high quality products
              for all ages. Pokémon launched in Japan in 1996 and today is one
              of the most popular children’s entertainment properties in the
              world.
            </p>
            <p>
              Whether you are a player, collector, parent, professor, or fan, we
              strive to offer items featuring a wide range of Pokémon to allow
              you to express yourself.
            </p>
            <p>
              We’re always open. Come say hello and take a look at the wide
              world of Pokémon!
            </p>
          </div>

          <div className={styles.image}>
            <img src={AboutUsImage1} alt="background-pokemons" />
          </div>
        </div>
      </div>

      <div className={styles.products}>
        <h2 className={styles.title__center}>PokéShop Products</h2>

        <div className={styles.contentContainer}>
          <div className={styles.image}>
            <img width={250} src={AboutUsImage2} alt="background-pokemons" />
          </div>

          <div className={styles.content}>
            <p>
              Managed by The Pokémon Company International, PokéShop offers an
              authentic collection cards
            </p>
            <p>
              The Pokémon Company International, a subsidiary of The Pokémon
              Company in Japan, manages the property outside of Asia and is
              responsible for brand management, licensing, marketing, the
              Pokémon Trading Card Game, the animated TV series, home
              entertainment, and the official Pokémon website.
            </p>
            <p>
              True to the Pokémon spirit, the Pokémon Center products are made
              to our high standards.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.story}>
        <h1 className={styles.title__center}>The PokéShop Story</h1>

        <div className={styles.content__story}>
          <p>
            PokéShop is inspired by the Pokémon video game, where Pokémon
            Centers are important destinations that help Trainers on their
            journey. In that tradition, physical Pokémon Centers were first
            introduced in Japan by The Pokémon Company and continues to thrive
            in a new online form at PokemonCenter.com.
          </p>
          <p>
            More than a dozen physical Pokémon Centers serve Pokémon fans in
            Japan. These Pokémon Centers are a nation-wide retail chain that
            offers a wide range of Pokémon products in major Japanese cities and
            central transit hubs.
          </p>
        </div>

        <div className={styles.images}>
          <img src={Shop1} alt="shop-1" />
          <img src={Shop2} alt="shop2" />
          <img src={Shop3} alt="shop-3" />
        </div>
      </div>
    </div>
  );
};

export default AboutUsLayout;
