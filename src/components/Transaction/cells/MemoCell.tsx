import { BaseCell } from "./BaseCell";

export function MemoCell({ value }: { value: string }) {
	return (
		<BaseCell>
			{value}
		</BaseCell>
	)
}
