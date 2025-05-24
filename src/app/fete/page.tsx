import styles from "@/scss/pages/cine.module.scss";
import fete_lumiere_1 from "@/assets/fete_lumiere_1.png";
import fete_lumiere_2 from "@/assets/fete_lumiere_2.png";
import fete_lumiere_3 from "@/assets/fete_lumiere_3.png";
import fete_lumiere_4 from "@/assets/fete_lumiere_4.png";

export default function Fete() {
  return (
    <div className={styles.wrapper}>
      <article>
        <h1>La fête des lumières</h1>
        <p>
          Chaque année en décembre, du 5 au 8, la ville de Lyon s'illumine lors
          de la Fête des Lumières, un événement spectaculaire mêlant créations
          artistiques, installations lumineuses et ambiance féérique, célébrant
          à la fois la tradition et l'innovation.{" "}
        </p>
        <h2> Quelles sont ses origines ?</h2>
        <p>
          Née du cœur de la tradition lyonnaise, la Fête des Lumières puise ses
          racines dans la ferveur du 8 décembre, jour de l’Immaculée Conception.
          En 1852, alors qu’une crue empêchait l’inauguration d’une statue de la
          Vierge sur la colline de Fourvière, les Lyonnais, dans un élan de foi,
          illuminèrent leurs fenêtres de mille bougies. Depuis ce geste
          d'espérance, la ville s’embrase chaque hiver de lumière et de poésie,
          attirant des millions d’âmes émerveillées.
        </p>
        <p>
          Pour voir les prochaines éditions :{" "}
          <a href="https://www.fetedeslumieres.lyon.fr/fr/actualite/rendez-vous-en-2025">
            Fête des lumières 2025
          </a>
        </p>
      </article>
      <section className={styles.imageGrid}>
        <img
          src={fete_lumiere_1.src}
          alt="Image d'un cinéconcert organisé à Lyon"
        />
        <img
          src={fete_lumiere_2.src}
          alt="Image d'un cinéconcert organisé à Lyon"
        />
        <img
          src={fete_lumiere_3.src}
          alt="Image d'un cinéconcert organisé à Lyon"
        />
        <img
          src={fete_lumiere_4.src}
          alt="Image d'un cinéconcert organisé à Lyon"
        />
      </section>
      <section className={styles["youtube-wrapper"]}>
        <iframe
          src="https://www.youtube.com/watch?v=tX7AVugxxIY&ab_channel=VilledeLyon"
          title="YouTube video player"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </section>
    </div>
  );
}
