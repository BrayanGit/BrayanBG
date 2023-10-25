import { back } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Backend technologies <br className="sm:block hidden" />& testing.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        We implement servers and databases to store information, 
        ensuring security and good practices is our commitment.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={back} alt="billing" className="w-[100%] h-[100%]" class="rounded-full" />
    </div>
  </section>
);

export default CardDeal;