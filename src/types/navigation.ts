export const pages = ['transactions', 'calendar', 'reports', 'budget'] as const

export type Page = (typeof pages)[number]
