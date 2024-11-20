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
		title: 'AméliaZz (dev)',
		description: 'Your Next Web Front-End developer.',
		images: ['https://r2.ameliazz.xyz/avatar.png'],
	},
	openGraph: {
		title: 'AméliaZz (dev)',
		description: 'Your Next Web Front-End developer.',
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
			<body>{children}</body>
		</html>
	)
}
