import { useState, useEffect } from 'react'

type BaseCellProps<T> = {
	value: T
	onCommit: (value: T) => void
	renderDisplay?: (value: T) => React.ReactNode
	renderEditor?: (
		value: T,
		setValue: (v: T) => void,
		commit: () => void,
		cancel: () => void
	) => React.ReactNode
	align?: 'left' | 'right'
}

export function BaseCell<T>({
	value,
	onCommit,
	renderDisplay,
	renderEditor,
	align = 'left',
}: BaseCellProps<T>) {
	const [isEditing, setIsEditing] = useState(false)
	const [draft, setDraft] = useState(value)

	// Keep draft in sync if parent value changes externally
	useEffect(() => {
		if (!isEditing) {
			setDraft(value)
		}
	}, [value, isEditing])

	const startEdit = () => {
		setDraft(value)
		setIsEditing(true)
	}

	const commit = () => {
		onCommit(draft)
		setIsEditing(false)
	}

	const cancel = () => {
		setDraft(value)
		setIsEditing(false)
	}

	const defaultDisplay = (v: T) => String(v)

	const defaultEditor = (
		v: T,
		set: (val: T) => void,
		commit: () => void,
		cancel: () => void
	) => (
		<input
			autoFocus
			value={String(v)}
			onChange={(e) => set(e.target.value as unknown as T)}
			onBlur={commit}
			onKeyDown={(e) => {
				if (e.key === 'Enter') commit()
				if (e.key === 'Escape') cancel()
			}}
			className="w-full outline-none"
		/>
	)

	return (
		<td className={`px-4 py-2 ${align === 'right' ? 'text-right' : ''}`}>
			{isEditing ? (
				(renderEditor ?? defaultEditor)(draft, setDraft, commit, cancel)
			) : (
				<div onClick={startEdit}>
					{(renderDisplay ?? defaultDisplay)(value)}
				</div>
			)}
		</td>
	)
}
