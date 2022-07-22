import React from 'react';
import styles from './statistics.module.scss';

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>

      <ul className={styles.statList}>
        {stats.map(stat => {
          return (
            <li className={styles.item} style={{backgroundColor: "red"}}>
              <span className={styles.label}>{stat.label} </span>
              <span className={styles.statistics}>{stat.percentage}% </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Statistics;
