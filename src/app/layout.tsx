import type { Metadata } from 'next'

import '../styles/main.scss'

export const metadata: Metadata = {
	title: 'Am.',
	description: 'Your Next FullStack Developer',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-BR">
			<body>{children}</body>
		</html>
	)
}
