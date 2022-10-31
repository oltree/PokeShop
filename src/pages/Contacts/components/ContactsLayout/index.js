import ContactImage from "../../../../static/images/ContactImage.png";

import styles from "./index.module.scss";

const ContactsLayout = () => (
  <div className={styles.wrapper}>
    <div className={styles.imageContainer}>
      <img className={styles.image} src={ContactImage} alt="pokenon" />
    </div>

    <div className={styles.contactsContainer}>
      <h1 className={styles.title}>PokéShop</h1>
      <h2 className={styles.subtitle}>
        The concept of the PokéShop is a Pokemon casual shop. This is a small
        shop with a revamped inventory of goods selected from the more than
        2,500 products available in the official Pokemon shops, &#34;Pokemon
        Center&#34;. From children and family groups to adults brought up with
        Pokemon, all will enjoy the casual shopping in an atmosphere of the
        Pokemon world.
      </h2>

      <div className={styles.infoContainer}>
        <div className={styles.info}>
          <p className={styles.field}>Business Hours</p>
          <p className={styles.field}>Location</p>
          <p className={styles.field}>Telephone Number</p>
          <p className={styles.field}>Website</p>
          <p className={styles.field}>Email</p>
        </div>

        <div className={styles.info}>
          <p>10:00-17:00</p>
          <p>Belarus, Minsk</p>
          <p>80 (33) 333-33-33</p>
          <p>PokeShop.com</p>
          <p>PokeShop@gmail.com</p>
        </div>
      </div>
    </div>
  </div>
);

export default ContactsLayout;
