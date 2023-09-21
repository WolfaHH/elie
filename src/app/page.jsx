import Image from "next/image";
import styles from "@/style/home.module.scss";
import { useClient } from 'next/client';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.jumbotron}>
        <div className={styles.pedale1}>
          <Image src="/petale1.webp" alt="pedale1" width={300} height={300} />
        </div>
        <div className={styles.pedale2}>
          <Image src="/pedale2.svg" alt="pedale2" width={300} height={300} />
        </div>
        <div className={styles.logo}>
          <span>e</span>llie
        </div>
        <div className={styles.title}>
          Bienvenue chez ellie,<br/> centre médical<br/>  pluridisciplinaire<br/>  de la femme<br/> 
        </div>
        <div className={styles.last}>
          <div className={styles.text}>
            Une équipe spécialisée et bienveillante de<br/> médecins gynécologues,
            sages-femmes,<br/> ostéopathe, physiothérapeute, diététicienne et<br/>
            psychologue vous propose des consultations <br/>et des soins de qualités
            pour les femmes.
          </div>
        </div>
      </div>
    </main>
  );
}
