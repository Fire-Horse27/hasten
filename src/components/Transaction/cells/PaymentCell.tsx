import { BaseCell } from "./BaseCell";

export function PaymentCell({ value }: { value: number }) {
	return (
		<BaseCell align="right">
			{value.toFixed(2)}
		</BaseCell>
	)
}
