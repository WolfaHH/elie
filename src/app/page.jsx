import Image from "next/image";
import styles from "@/style/home.module.scss";
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.jumbotron}>
        <div className={styles.logo}><span>e</span>llie</div>
        <div className={styles.title}>
          Bienvenue chez ellie, centre médical pluridisciplinaire de la femme
        </div>
      </div>
    </main>
  );
}
