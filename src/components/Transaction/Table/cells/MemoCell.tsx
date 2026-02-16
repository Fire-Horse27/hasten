import { BaseCell } from '../BaseCell'
import { TextEditor } from '../editors/TextEditor'

export function MemoCell({
	value,
	onCommit,
}: {
	value: string
	onCommit: (v: string) => void
}) {
	return (
		<BaseCell<string>
			value={value}
			onCommit={onCommit}
			renderDisplay={(v) => v}
			renderEditor={(v, set, commit, cancel) => (
				<TextEditor
					value={v}
					setValue={set}
					commit={commit}
					cancel={cancel}
				/>
			)}
		/>
	)
}
