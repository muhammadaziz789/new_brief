import styles from "./style.module.scss";
import { Contents } from "./Contents";
import { Parallax } from "react-parallax";

export default function BannerDesktop({ podcast, statistics = {} }) {
  return (
    <div className={styles.desktop}>
      <Parallax bgImage={"/images/mainBackground.png"} strength={-100}>
        <div className={styles.paralaxContent}></div>
      </Parallax>

      <Contents statistics={statistics} podcast={podcast} />
    </div>
  );
}
