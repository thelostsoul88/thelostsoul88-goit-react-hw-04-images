import css from '../styles.module.css';
import ImageGalleryItem from './ImageGalleryItem';

const ImageGallery = ({ query }) => {
  return (
    <>
      <ul className={css.ImageGallery}>
        {' '}
        {query.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ImageGalleryItem
            key={id}
            id={id}
            webURL={webformatURL}
            largeURL={largeImageURL}
            tags={tags}
          />
        ))}
      </ul>
    </>
  );
};

export default ImageGallery;
