import { useState } from 'react';
import { toast } from 'react-hot-toast';
import css from '../styles.module.css';
import Search from 'components/Utils/_Search';

const Searchbar = ({ createSearchImg }) => {
  const [value, setValue] = useState('');

  const handleChange = ({ target: { value } }) => {
    setValue(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (value.trim() === '') {
      toast.error('Enter smth to search.');
      return;
    }
    createSearchImg(value.toLowerCase().trim());
    setValue('');
  };
  return (
    <div className={css.Searchbar}>
      <form onSubmit={handleSubmit} className={css.SearchForm}>
        <button type="submit" className={css.SearchFormButton}>
          <Search />
        </button>
        <input
          type="text"
          placeholder=" Search"
          value={value}
          onChange={handleChange}
          className={css.SearchFormInput}
          autoComplete="off"
        />
      </form>
    </div>
  );
};

export default Searchbar;
