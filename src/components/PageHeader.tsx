interface PageHeaderProps {
	children: React.ReactNode
}

export default function SectionHeader({ children }: PageHeaderProps) {
	return (
		<h1 className="py-1 w-full text-xl font-semibold tracking-tight text-gray-900 border-b border-gray-400">
			{children}
		</h1>
	)
}
