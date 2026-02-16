import AppLayout from './layout/AppLayout'
import { TransactionsProvider } from './state/transactions/TransactionProvider'

function App() {
	return (
		<TransactionsProvider>
			{' '}
			<AppLayout />{' '}
		</TransactionsProvider>
	)
}

export default App
