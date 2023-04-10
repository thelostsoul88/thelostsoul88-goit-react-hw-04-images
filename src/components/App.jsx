import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import fetchImg from './Services/image-api';
import Searchbar from './Search/Searchbar';
import ImageGallery from './Image/ImageGallery';
import Loader from 'components/Utils/Loader';
import Button from 'components/Utils/Button';
import css from './styles.module.css';

const App = () => {
  const [query, setQuery] = useState('');
  const [imagesArr, setImagesArr] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [current, setCurrent] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!query) {
      return;
    }

    if (current !== query && current) {
      setCurrent(query);
      setImagesArr([]);
      setPage(1);
      return;
    }

    if (query && !current) {
      setCurrent(query);
      return;
    }

    const handleFetch = async () => {
      try {
        setIsLoading(true);

        const response = await fetchImg(page, query);

        if (!response.length) {
          toast.error('No images in your request.');
          setDisabled(false);
          setIsLoading(false);
          return;
        }

        if (response.length === 12) setDisabled(true);
        else setDisabled(false);

        setImagesArr(prev => [...prev, ...response]);
        setIsLoading(false);
      } catch (error) {
        setImagesArr([]);
        setPage(1);
        setIsLoading(false);
        setDisabled(false);
        toast.error(`${error.message}. Loading error. pls restart.`);
      }
    };
    handleFetch();
  }, [query, page, current]);

  const createSearchImg = query => {
    setQuery(query);
  };

  const nextRender = () => {
    setPage(page => page + 1);
  };

  return (
    <div className={css.App}>
      <Searchbar createSearchImg={createSearchImg} />
      <ImageGallery query={imagesArr} />
      {isLoading && <Loader />}
      {disabled && <Button nextRender={nextRender} />}
      <Toaster
        toastOptions={{
          duration: 1500,
          position: 'top-right',
        }}
      />
    </div>
  );
};

export default App;
