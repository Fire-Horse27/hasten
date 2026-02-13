import { BaseCell } from "./BaseCell";

export function DepositCell({ value }: { value: number }) {
	return (
		<BaseCell align="right">
			{value.toFixed(2)}
		</BaseCell>
	)
}
