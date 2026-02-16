import { useCellEditorKeys } from '../Editor'
import type { CellEditorArgs } from '../Editor'

export function NumberEditor({
	value,
	setValue,
	commit,
	cancel,
}: CellEditorArgs<number>) {
	const shared = useCellEditorKeys(commit, cancel)

	return (
		<input
			type="number"
			step="0.01"
			value={value}
			onChange={(e) => {
				const next = e.target.value
				setValue(next === '' ? 0 : Number(next))
			}}
			{...shared}
		/>
	)
}
