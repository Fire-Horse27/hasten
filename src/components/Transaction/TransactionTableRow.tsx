import { Transaction } from '../../types/transaction'
import { BalanceCell } from './cells/BalanceCell'
import { CategoryCell } from './cells/CategoryCell'
import { DateCell } from './cells/DateCell'
import { DepositCell } from './cells/DepositCell'
import { MemoCell } from './cells/MemoCell'
import { PayeeCell } from './cells/PayeeCell'

type TableRowProps = {
	transaction: Transaction
}

export default function TableRow({ transaction }: TableRowProps) {
	return (
		<tr key={transaction.id} className="border-t hover:bg-gray-50">
			<DateCell value={transaction.date} />
			<PayeeCell value={transaction.payee} />
			<CategoryCell value={transaction.category} />
			<MemoCell value={transaction.memo || ''} />
			<DepositCell value={transaction.amount} />
			<BalanceCell value={transaction.balance} />
		</tr>
	)
}
