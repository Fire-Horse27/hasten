import { BaseCell } from '../BaseCell'
import { NumberEditor } from '../editors/NumberEditor'

export function DepositCell({
	value,
	onCommit,
}: {
	value: number
	onCommit: (v: number) => void
}) {
	return (
		<BaseCell<number>
			value={value}
			onCommit={onCommit}
			align="right"
			renderDisplay={(v) => `$${v.toFixed(2)}`}
			renderEditor={(v, set, commit, cancel) => (
				<NumberEditor
					value={v}
					setValue={set}
					commit={commit}
					cancel={cancel}
				/>
			)}
		/>
	)
}
