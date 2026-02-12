type HeaderItemProps = {
	label: string
	selected?: boolean
	onClick: () => void
	rightContent?: React.ReactNode
}

export default function HeaderItem({
	label,
	selected = false,
	onClick,
	rightContent,
}: HeaderItemProps) {
	const base =
		'justify-between items-center px-4 py-1 text-md text-left border-transparent transition-colors border-t border-l border-r rounded-t-md'

	const selectedStyles =
		'bg-gray-100 font-semibold border-gray-100 hover:cursor-pointer'

	const hoverStyles =
		'hover:bg-gray-50 hover:border-gray-200 hover:cursor-pointer'

	return (
		<button
			onClick={onClick}
			className={`${base} ${selected ? selectedStyles : hoverStyles}`}
		>
			<span>{label}</span>
			{rightContent}
		</button>
	)
}
