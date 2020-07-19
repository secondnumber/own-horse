import React from 'react';
import classes from './StatisticFilter.module.scss';

const StatisticFilter = (props) => {
  return (
    <label className={classes.filter}>
      Show
      <select>
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
      </select>
      entries
    </label>
  );
};

export default StatisticFilter;
