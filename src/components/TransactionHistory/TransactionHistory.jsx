import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

function TransactionHistory({ items }) {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <th className={s.titles}>Type</th>
          <th className={s.titles}>Amount</th>
          <th className={s.titles}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) =>
          index % 2 === 0 ? (
            <tr key={item.id}>
              <td className={s.item}>{item.type}</td>
              <td className={s.item}>{item.amount}</td>
              <td className={s.item}>{item.currency}</td>
            </tr>
          ) : (
            <tr key={item.id}>
              <td className={s.odd}>{item.type}</td>
              <td className={s.odd}>{item.amount}</td>
              <td className={s.odd}>{item.currency}</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export { TransactionHistory };
