type BaseCellProps = {
	children: React.ReactNode
	align?: 'left' | 'right'
}

export function BaseCell({ children, align = 'left' }: BaseCellProps) {
	return (
		<td className={`px-2 py-0.5 ${align === 'right' ? 'text-right' : ''}`}>
			{children}
		</td>
	)
}
