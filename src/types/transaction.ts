export type Transaction = {
	id: string
	accountId: number
	date: string // ISO string (YYYY-MM-DD)
	payee: string
	category: string
	memo?: string
	amount: number // positive = inflow, negative = outflow
	cleared?: boolean
	balance: number
}
