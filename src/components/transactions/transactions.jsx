import React from 'react';
import styles from './transactions.module.scss';

const TransactionsList = ({ items }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead className={styles.thead}>
        <tr className="tr">
          <th className={styles.th}>Type</th>
          <th className={styles.th}>Amount</th>
          <th className={styles.th}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => {
          return (
            <tr>
              <td className={styles.td}>{item.type}</td>
              <td className={styles.td}>{item.amount}</td>
              <td className={styles.td}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionsList;
