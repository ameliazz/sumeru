import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata, Viewport } from 'next'

import '../styles/main.scss'

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	maximumScale: 1,
	userScalable: false,
}
export const metadata: Metadata = {
	title: 'Am.',
	description: 'Your Next Developer.',
	keywords: [
		'amelia',
		'ameliazz',
		'dev',
		'web',
		'Front-End',
		'Back-End',
		'FullStack',
	],
	alternates: {
		canonical: 'https://www.ameliazz.xyz',
	},
	category: 'technology',
	creator: 'Amélia Ribeiro',
	authors: [
		{
			name: 'Am.',
			url: 'https://github.com/ameliazz',
		},
	],
	icons: {
		icon: '/icon.svg',
	},
	twitter: {
		title: 'Am.',
		description: 'your next developer.',
		images: ['https://ameliazz.xyz/avatar.png'],
	},
	openGraph: {
		title: 'Am.',
		description: 'your next developer.',
		images: [
			{
				url: '/avatar.png',
			},
		],
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-BR">
			<body>
				{children}
				<SpeedInsights />
			</body>
		</html>
	)
}
