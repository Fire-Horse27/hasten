type SidebarItemProps = {
	label: string
	selected?: boolean
	onClick: () => void
	rightContent?: React.ReactNode
}

export default function SidebarItem({
	label,
	selected = false,
	onClick,
	rightContent,
}: SidebarItemProps) {
	const base =
		'w-full flex justify-between items-center px-4 py-0 text-sm text-left transition-colors'

	const selectedStyles = 'bg-gray-200 font-medium hover:cursor-pointer'

	const hoverStyles = 'hover:bg-gray-200 hover:cursor-pointer'

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
