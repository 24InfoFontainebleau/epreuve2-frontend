import styles from "@/scss/pages/cine.module.scss";
import cine_concert_1 from '@/assets/cine_concert_1.jpg'
import cine_concert_2 from '@/assets/cine_concert_2.jpg'
import cine_concert_3 from '@/assets/cine_concert_3.png'
import cine_concert_4 from '@/assets/cine_concert_4.jpg'


export default function Cine() {
  return (
    <>
      <div className={styles.wrapper} >
        <article>
          <h1>Les cinéconcerts de Lyon</h1>
          <p>Organisés à l'auditorium de Lyon par l'orchestre national de Lyon, ces évènements lient la grandeur des films d'autrefois mais également ceux de films plus récents à travers des bandes son interprétées en live</p>
          <p>Pour voir les prochaines éditions : <a href="https://www.auditorium-lyon.com/fr/cine-concerts-auditorium">Auditorium de Lyon</a></p>
        </article>
        <section className={styles.imageGrid}>
          <img src={cine_concert_1.src} alt="Image d'un cinéconcert organisé à Lyon" />
          <img src={cine_concert_2.src} alt="Image d'un cinéconcert organisé à Lyon" />
          <img src={cine_concert_3.src} alt="Image d'un cinéconcert organisé à Lyon" />
          <img src={cine_concert_4.src} alt="Image d'un cinéconcert organisé à Lyon" />
        </section>
        <section className={styles["youtube-wrapper"]}>
          <iframe
            src="https://www.youtube.com/embed/gAOBLXDVFEc"
            title="YouTube video player"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </section>
      </div>
    </>
  )
}
