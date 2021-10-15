import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/selectors';
import phonebookActions from '../../redux/actions';
import s from "./Filter.module.css";

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = e => dispatch(phonebookActions.changeFilter(e.currentTarget.value));

  return (
  <div className = {s.filter}>
  <label className={s.label}>
      Find contacts by name
      <div className={s.castomInput}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={s.input}
        />
     </div>
  </label>
  </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}

export default Filter;