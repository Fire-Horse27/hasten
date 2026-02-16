import { BaseCell } from '../BaseCell'

export function BalanceCell({ value }: { value: number }) {
	return <BaseCell align="right">{value.toFixed(2)}</BaseCell>
}
