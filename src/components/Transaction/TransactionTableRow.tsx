import { Transaction } from '../../types/transaction'
import { BalanceCell } from './Table/cells/BalanceCell'
import { CategoryCell } from './Table/cells/CategoryCell'
import { DateCell } from './Table/cells/DateCell'
import { DepositCell } from './Table/cells/DepositCell'
import { MemoCell } from './Table/cells/MemoCell'
import { PayeeCell } from './Table/cells/PayeeCell'
import { useTransactions } from '../../state/transactions/TransactionProvider'

type TableRowProps = {
	transaction: Transaction
}

export default function TableRow({ transaction }: TableRowProps) {
	const { transactions, updateTransactionField } = useTransactions()

	return (
		<tr key={transaction.id} className="border-t hover:bg-gray-50">
			<DateCell value={transaction.date} />
			<PayeeCell value={transaction.payee} />
			<CategoryCell value={transaction.category} />
			<MemoCell
				value={transaction.memo || ''}
				onCommit={(v) =>
					updateTransactionField(transaction.id, 'memo', v)
				}
			/>
			<DepositCell
				value={transaction.amount}
				onCommit={(v) =>
					updateTransactionField(transaction.id, 'amount', v)
				}
			/>
			<BalanceCell value={transaction.balance} />
		</tr>
	)
}
