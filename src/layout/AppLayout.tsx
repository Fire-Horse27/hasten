import { useState } from 'react'
import type { Page } from '../types/navigation'
import Header from '../components/Header'
import TransactionLayout from './TransactionLayout'

export default function AppLayout() {
	const [selectedPage, setSelectedPage] = useState<Page>('transactions')
	return (
		<div className="h-full flex flex-col">
			<div className="v-full flex">
				<Header
					selectedPage={selectedPage}
					onSelectPage={setSelectedPage}
				/>
			</div>
			<div className="h-full">
				{selectedPage === 'transactions' && <TransactionLayout />}
			</div>
		</div>
	)
}
