import css from "./transaction.module.css"
import TransactionList from "./transactionlist"

export default function TransactionHistory({items}) {
    return (
      <div>
        <table className={css.table}>
          <thead>
            <tr className={css.title}>
              <th className={css.titleText}>Type</th>
              <th className={css.titleText}>Amount</th>
              <th className={css.titleText}>Currency</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <TransactionList
                  type={item.type}
                  amount={item.amount}
                  currency={item.currency}
                />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}