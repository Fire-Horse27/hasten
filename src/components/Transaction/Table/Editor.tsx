import type { KeyboardEvent } from 'react'

export type CellEditorArgs<T> = {
	value: T
	setValue: (v: T) => void
	commit: () => void
	cancel: () => void
}

export function useCellEditorKeys(commit: () => void, cancel: () => void) {
	return {
		autoFocus: true,
		onBlur: commit,
		onKeyDown: (e: KeyboardEvent) => {
			if (e.key === 'Enter') commit()
			if (e.key === 'Escape') cancel()
		},
		className: 'w-full outline-none',
	}
}
