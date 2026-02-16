import { createContext, useContext, useState, ReactNode } from 'react'
import { Transaction } from '../../types/transaction'

type TransactionsContextType = {
	transactions: Transaction[]
	updateTransactionField: <K extends keyof Transaction>(
		id: string,
		field: K,
		value: Transaction[K]
	) => void
}

const TransactionsContext = createContext<TransactionsContextType | undefined>(
	undefined
)

export function TransactionsProvider({ children }: { children: ReactNode }) {
	const [transactions, setTransactions] = useState<Transaction[]>([])

	function updateTransactionField<K extends keyof Transaction>(
		id: string,
		field: K,
		value: Transaction[K]
	) {
		setTransactions((prev) =>
			prev.map((t) => (t.id === id ? { ...t, [field]: value } : t))
		)

		// Later: call IPC to persist to SQLite here
	}

	return (
		<TransactionsContext.Provider
			value={{
				transactions,
				updateTransactionField,
			}}
		>
			{children}
		</TransactionsContext.Provider>
	)
}

export function useTransactions() {
	const context = useContext(TransactionsContext)

	if (!context) {
		throw new Error(
			'useTransactions must be used within TransactionsProvider'
		)
	}

	return context
}
