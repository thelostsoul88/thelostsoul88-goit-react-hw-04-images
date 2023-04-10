import { useState } from 'react';
import css from '../styles.module.css';
import Modal from 'components/Utils/Modal';

const ImageGalleryItem = ({ webURL, largeURL, tags }) => {
  const [isModalShow, setIsModalShow] = useState(false);

  const handleModal = () => {
    setIsModalShow(!isModalShow);
  };

  return (
    <li className={css.ImageGalleryItem}>
      <img
        src={webURL}
        alt={tags}
        onClick={handleModal}
        className={css.ImageGalleryItemImage}
      />
      {isModalShow && (
        <Modal onClose={handleModal} largeURL={largeURL} tags={tags}>
          <img src={largeURL} alt={tags} />
        </Modal>
      )}
    </li>
  );
};

export default ImageGalleryItem;
