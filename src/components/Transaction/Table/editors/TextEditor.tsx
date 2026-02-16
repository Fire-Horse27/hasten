import { useCellEditorKeys } from '../Editor'
import type { CellEditorArgs } from '../Editor'

export function TextEditor({
	value,
	setValue,
	commit,
	cancel,
}: CellEditorArgs<string>) {
	const shared = useCellEditorKeys(commit, cancel)

	return (
		<input
			type="text"
			value={value}
			onChange={(e) => setValue(e.target.value)}
			{...shared}
		/>
	)
}
