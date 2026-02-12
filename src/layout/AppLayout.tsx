import { useState, useRef, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import type { Page } from '../types/navigation'

export default function AppLayout() {
	const [selectedAccountId, setSelectedAccountId] = useState<string | null>(
		'1'
	)

	const [selectedPage, setSelectedPage] = useState<Page>('manage')

	const [sidebarWidth, setSidebarWidth] = useState(240)

	const isResizing = useRef(false)

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			if (!isResizing.current) return

			const minWidth = 180
			const maxWidth = window.innerWidth - 200

			const newWidth = e.clientX

			setSidebarWidth(Math.max(minWidth, Math.min(maxWidth, newWidth)))
		}

		const handleMouseUp = () => {
			if (!isResizing.current) return
			isResizing.current = false
			document.body.classList.remove('select-none')
		}

		const handleResize = () => {
			const maxWidth = window.innerWidth - 200

			setSidebarWidth((prev) => (prev > maxWidth ? maxWidth : prev))
		}

		window.addEventListener('mousemove', handleMouseMove)
		window.addEventListener('mouseup', handleMouseUp)
		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('mousemove', handleMouseMove)
			window.removeEventListener('mouseup', handleMouseUp)
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	const startResize = () => {
		isResizing.current = true
		document.body.classList.add('select-none')
	}

	const accounts = [
		{ id: '1', name: 'Checking', balance: 4532.21 },
		{ id: '2', name: 'Savings', balance: 8210.0 },
		{ id: '3', name: 'Visa', balance: -1203.44 },
	]

	return (
		<div className="h-full flex">
			<div style={{ width: sidebarWidth }} className="h-full flex">
				<Sidebar
					accounts={accounts}
					selectedAccountId={selectedAccountId}
					selectedPage={selectedPage}
					onSelectAccount={setSelectedAccountId}
					onSelectPage={setSelectedPage}
				/>

				{/* Resize Handle */}
				<div
					onMouseDown={startResize}
					className="w-1 cursor-col-resize bg-gray-300 hover:bg-gray-400"
				/>
			</div>

			<div className="flex-1 p-6">
				<h1 className="text-xl font-semibold">
					{selectedAccountId
						? `${selectedPage} — Account ${selectedAccountId}`
						: selectedPage}
				</h1>
			</div>
		</div>
	)
}
