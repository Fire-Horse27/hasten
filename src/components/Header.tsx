import HeaderItem from './HeaderItem'
import type { Page } from '../types/navigation'
import { pages } from '../types/navigation'

type HeaderProps = {
	selectedPage: Page
	onSelectPage: (page: Page) => void
}

export default function Header({ selectedPage, onSelectPage }: HeaderProps) {
	return (
		<div className="w-full">
			{pages.map((page) => (
				<HeaderItem
					key={page}
					label={page.charAt(0).toUpperCase() + page.slice(1)}
					selected={selectedPage === page}
					onClick={() => onSelectPage(page)}
				/>
			))}
		</div>
	)
}
