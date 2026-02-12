import SidebarItem from './SidebarItem'
import type { Page } from '../types/navigation'

type SidebarProps = {
	accounts: { id: string; name: string; balance: number }[]
	selectedAccountId: string | null
	selectedPage: Page
	onSelectAccount: (id: string) => void
	onSelectPage: (page: Page) => void
}

export default function Sidebar({
	accounts,
	selectedAccountId,
	onSelectAccount,
}: SidebarProps) {
	return (
		<div className="w-full h-full bg-gray-100 border-r flex flex-col">
			{/* Accounts */}
			<div className="flex-1 overflow-y-auto">
				<div className="p-2 text-xs font-semibold text-gray-500">
					ACCOUNTS
				</div>

				{accounts.map((acct) => (
					<SidebarItem
						key={acct.id}
						label={acct.name}
						selected={selectedAccountId === acct.id}
						onClick={() => onSelectAccount(acct.id)}
						rightContent={<span>{acct.balance.toFixed(2)}</span>}
					/>
				))}
			</div>
		</div>
	)
}
