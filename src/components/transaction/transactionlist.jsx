import css from "./transaction.module.css"
//  приклад з деструктуризацією
export default function TransactionList({type, amount, currency }) {
    return (
        <>
            <td className={css.textAction}>{type}</td>
            <td className={css.textAction}>{amount}</td>
            <td className={css.textAction}>{currency}</td>
        </>
        
            
        
    )
  
}