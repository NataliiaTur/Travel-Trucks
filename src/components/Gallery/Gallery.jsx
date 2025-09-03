import css from "./Gallery.module.css";

function Gallery({ images }) {
  if (!images?.length) return null;

  return (
    <section className={css.gallery}>
      <ul className={css.galleryRow}>
        {images.map((image, index) => (
          <li key={index} className={css.galleryItem}>
            <img
              src={image.thumb}
              alt={`Gallery image ${index + 1}`}
              className={css.galleryItemImage}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Gallery;
