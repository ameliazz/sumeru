import Image from 'next/image'

import NavigationBar from '@/components/NavigationBar'
import Styles from '@/styles/Page.module.scss'
import TimelineStyles from '@/styles/Timeline.module.scss'

const DateDiff = {
	inDays: (d1: Date, d2: Date) => {
		var t2 = d2.getTime()
		var t1 = d1.getTime()

		return Math.floor((t2 - t1) / (24 * 3600 * 1000))
	},

	inWeeks: (d1: Date, d2: Date) => {
		var t2 = d2.getTime()
		var t1 = d1.getTime()

		return parseInt(String((t2 - t1) / (24 * 3600 * 1000 * 7)))
	},

	inMonths: (d1: Date, d2: Date) => {
		var d1Y = d1.getFullYear()
		var d2Y = d2.getFullYear()
		var d1M = d1.getMonth()
		var d2M = d2.getMonth()

		return d2M + 12 * d2Y - (d1M + 12 * d1Y)
	},

	inYears: (d1: Date, d2: Date) => {
		return d2.getFullYear() - d1.getFullYear()
	},
}

const getDateDiff = (d1: Date, d2: Date) => {
	const days = DateDiff.inDays(d1, d2)
	const weeks = DateDiff.inWeeks(d1, d2)
	const months = DateDiff.inMonths(d1, d2)
	const years = DateDiff.inYears(d1, d2)

	if (days <= 7) return `${days} ${days > 1 ? 'dias' : 'dia'}`

	if (days >= 7 && weeks >= 1 && days < 30)
		return `${weeks} ${weeks > 1 ? 'semanas' : 'semana'}`

	if (days >= 30 && months < 12)
		return `${months} ${months > 1 ? 'meses' : 'mês'} ${
			days - months * 30 >= 1
				? ` e ${days - months * 30} ${
						days - months * 30 > 1 ? 'dias' : 'dia'
				  }`
				: ''
		}`

	if (months >= 12 && years >= 1)
		return `${years} ${years > 1 ? 'anos' : 'ano'}${
			months > 12 ? ` e ${months} ${months > 1 ? 'meses' : 'mês'}` : ''
		}`
}

export default function Home() {
	return (
		<>
			<NavigationBar />
			<main>
				<section id="" className={Styles.hero__container}>
					<div className={Styles.inner__container}>
						<Image
							src="/avatar.png"
							width="512"
							height="512"
							alt="Amélia's Avatar"
							className={Styles.avatar__bubble}
						/>

						<div>
							<h1 className={Styles.title}>
								<span style={{ color: '#6e56cf' }}>Am</span>
								élia Ribeiro,
							</h1>
							<h3
								className={Styles.title}
								style={{
									fontSize: '1.6rem',
									color: '#ffffffb3',
								}}
							>
								your next{' '}
								<span
									style={{ color: '#E93D82' }}
									className="hover__letter__spacing"
								>
									developer
								</span>
								.
							</h3>
							<div className={Styles.fancy} />
						</div>
					</div>

					<div className={Styles.second__inner__container}>
						<div>
							<h1 id={Styles.title}>Experiências</h1>
							<div className={Styles.title__fancy} />
						</div>

						<div className={Styles.cards__container}>
							<a
								href="https://discord.gg/eJHGKuqtBG"
								className={Styles.card}
								target="_blank"
							>
								<h1>
									Go
									<span style={{ color: '#7289d9' }}>
										Discord
									</span>
								</h1>

								<p>
									A GoDiscord reune anos de experiências em
									Discord com soluções para o seu projeto ou
									comunidade. Atuo como principal e única
									desenvolvedora de Bots.
								</p>

								<footer>
									<p>
										<span style={{ color: '#E93D8299' }}>
											{getDateDiff(
												new Date(
													'2024-07-17T00:15:45-03:00'
												),
												new Date()
											)}
										</span>{' '}
										trabalhados
									</p>
								</footer>
							</a>

							<a
								href="https://dreamteam.futbol/"
								className={Styles.card}
								target="_blank"
							>
								<h1>
									Dream
									<span style={{ color: '#9A5CD0' }}>
										Team
									</span>
								</h1>

								<p>
									O DreamTeam é um simulador de futebol feito
									por brasileiros apaixonados por futebol. Com
									cartas únicas e originais, mais de 1.3K
									cartas colecionáveis. Participei da produção
									de uma nova versão.
								</p>

								<footer>
									<p>
										<span style={{ color: '#E93D8299' }}>
											1
										</span>{' '}
										mês trabalhados
									</p>
								</footer>
							</a>
						</div>
					</div>
				</section>

				<section id="about" className={Styles.container}>
					<div>
						<h1 className={Styles.title}>Sobre mim</h1>
						<div className={Styles.fancy} />
					</div>

					<div className={Styles.content__container}>
						<div className={Styles.child}>
							<div>
								<div>
									<h3
										className={Styles.title}
										style={{
											fontSize: '1.4rem',
											marginBottom: '6px',
										}}
									>
										Entusiasmo
									</h3>
									<div className={Styles.title__fancy} />
								</div>
								<p>
									Apaixonada por tecnologia desde criança,
									cresci com a ambição de se tornar uma
									desenvolvedora de sucesso, passei a estudar
									sobre a área aos 8 para 9 anos de idade.
									Assistindo video-aulas comecei a absorver
									conhecimento de forma passiva, mesmo que eu
									não estivesse entendo no momento, eu tinha
									ideias do que eram as coisas.
								</p>
							</div>

							<div>
								<div>
									<h3
										className={Styles.title}
										style={{
											fontSize: '1.4rem',
											marginBottom: '6px',
										}}
									>
										Prática
									</h3>
									<div className={Styles.title__fancy} />
								</div>
								<p>
									De fato toquei em um editor de código com
									cerca de 9 para os 10 anos, programando
									jogos simples na <i>Unity 5</i>, utilizando
									CSharp, acabei gostando da experiência,
									mesmo que tenha sido algo voltado à área de
									jogos, acabei aprendendo sobre lógica nesse
									processo. Logo depois conheci outras
									linguagens as quais domino até hoje, como
									JavaScript, Lua, TypeScript e mais.
								</p>
							</div>
							<div>
								<div>
									<h3
										className={Styles.title}
										style={{
											fontSize: '1.4rem',
											marginBottom: '6px',
										}}
									>
										Estudos
									</h3>
									<div className={Styles.title__fancy} />
								</div>
								<p>
									Continuei meus estudos a partir de
									automações e aplicações Web, criando
									aplicações reais de uso, mas que já foram
									perdidas com o tempo, entretanto foram
									grandes avanços em um curto periodo!
									<br />
									Me conhecendo melhor aprendi a absorver
									melhor o conhecimento, utilizando de
									anotações, explicações para outros colegas,
									livros, aulas e bastante prática, nesse
									período de foco nos estudos, aprendi muito
									sobre o universo Web e Front-End, o qual
									atualmente gosto de ser desafiada à
									trabalhar com novas tecnologias e problemas,
									em contrapartida, também continuo com
									automações e aplicações Back-End, com
									diversos projetos em leque sendo
									construidos.
								</p>
							</div>
						</div>

						<div className={Styles.child}>
							<ul className={TimelineStyles.list}>
								<li className={TimelineStyles.item}>
									<div className={TimelineStyles.item__title}>
										O Começo - 2017
									</div>
									<p>
										Meu primeiro contato com programação,
										usando CSharp.
									</p>
								</li>

								<li className={TimelineStyles.item}>
									<div className={TimelineStyles.item__title}>
										2017 - 2018
									</div>
									<p>
										Estudando sobre JavaScript, criando Bots
										para Discord e páginas simples.
									</p>
								</li>

								<li className={TimelineStyles.item}>
									<div className={TimelineStyles.item__title}>
										2019 - 2020
									</div>
									<p>
										TypeScript, melhores Bots, APIs e outras
										aplicações.
									</p>
								</li>

								<li className={TimelineStyles.item}>
									<div className={TimelineStyles.item__title}>
										2021 - 2023
									</div>
									<p>
										Melhoria <i>extremamente</i>{' '}
										significativa nas habilidades.
										<br />
										Foco visado para Front-End.
									</p>
								</li>

								<li className={TimelineStyles.item}>
									<div className={TimelineStyles.item__title}>
										O Presente - 2024
									</div>
									<p>
										Grande salto em habilidades relacionadas
										à Back-End, estilização, design e visão
										de projeto, além das primeiras reais
										experiências de trabalho remunerado com
										programação. Além do começo dos estudos
										sobre DevOps.
										<br />
										Foco geral (FullStack).
									</p>
								</li>
							</ul>
						</div>
					</div>
				</section>

				<section id="projects" className={Styles.container}>
					<div>
						<h1 className={Styles.title}>Projetos</h1>
						<div className={Styles.fancy} />
					</div>

					<div
						className={Styles.content__container}
						style={{ gridTemplateColumns: '1fr' }}
					>
						<div
							className={Styles.child}
							style={{
								display: 'flex',
								alignItems: 'center',
								width: '100%',
							}}
						>
							<div className={Styles.cards__container}>
								<a
									className={Styles.card}
									style={{ maxWidth: 'none' }}
									target="_blank"
								>
									<h1 style={{ color: '#7FB591' }}>
										Irminsul
									</h1>

									<div>
										<p>
											A Irminsul é um projeto no qual
											reune informações e comunicação de
											outros projetos, atuando como minha
											Árvore de Conhecimento profunda.
											Atualmente, ainda é um projeto que
											está sendo construido.
										</p>
										<p>
											(Nome inspirado por: Genshin Impact)
										</p>
									</div>

									<footer>
										<p>
											<span
												style={{ color: '#E93D8299' }}
											>
												{getDateDiff(
													new Date(
														'2024-10-12T00:15:45-03:00'
													),
													new Date()
												)}
											</span>{' '}
											trabalhados
										</p>
									</footer>
								</a>

								<a
									style={{ maxWidth: 'none' }}
									href="https://github.com/ameliazz/sumeru"
									className={Styles.card}
									target="_blank"
								>
									<h1 style={{ color: '#7FB591' }}>Sumeru</h1>

									<div>
										<p>
											Sumeru é a parte superior de
											Irminsul, a parte pública onde
											possam encontrar informações,
											documentações, e meu próprio
											portifólio, sem quaisquer restrições
											de acesso que Irminsul tenha.
										</p>
										<p>
											(Nome inspirado por: Genshin Impact)
										</p>
									</div>

									<footer>
										<p>
											<span
												style={{ color: '#E93D8299' }}
											>
												{getDateDiff(
													new Date(
														'2024-11-16T00:15:45-03:00'
													),
													new Date()
												)}
											</span>{' '}
											trabalhados
										</p>
									</footer>
								</a>
							</div>
						</div>
					</div>
				</section>
			</main>

			<footer id="page__footer">
				<div className="child">
					<img src="https://lanyard.cnrad.dev/api/699416429338034268?bg=none&idleMessage=&hideSpotify=true&hideActivity=true&hideBadges=true&hideTimestamp=true&hideDecoration=true&showDisplayName=true&animatedDecoration=true&hideClan=true&hideProfile=false&theme=dark" />
				</div>

				<div className="child">
					<div style={{ width: 'fit-content' }}>
						<h2 className="title">
							Am
							<span style={{ color: '#6e56cf' }}>.</span>
						</h2>
						<div className={Styles.fancy} />
					</div>

					<ul>
						<li
							style={{
								display: 'flex',
								alignItems: 'center',
								gap: '0.5rem',
							}}
						>
							<svg width="18" height="18" viewBox="0 0 15 15">
								<path
									d="M8.51194 3.00541C9.18829 2.54594 10.0435 2.53694 10.6788 2.95419C10.8231 3.04893 10.9771 3.1993 11.389 3.61119C11.8009 4.02307 11.9513 4.17714 12.046 4.32141C12.4633 4.95675 12.4543 5.81192 11.9948 6.48827C11.8899 6.64264 11.7276 6.80811 11.3006 7.23511L10.6819 7.85383C10.4867 8.04909 10.4867 8.36567 10.6819 8.56093C10.8772 8.7562 11.1938 8.7562 11.389 8.56093L12.0077 7.94221L12.0507 7.89929C12.4203 7.52976 12.6568 7.2933 12.822 7.0502C13.4972 6.05623 13.5321 4.76252 12.8819 3.77248C12.7233 3.53102 12.4922 3.30001 12.1408 2.94871L12.0961 2.90408L12.0515 2.85942C11.7002 2.508 11.4692 2.27689 11.2277 2.11832C10.2377 1.46813 8.94398 1.50299 7.95001 2.17822C7.70691 2.34336 7.47044 2.57991 7.1009 2.94955L7.058 2.99247L6.43928 3.61119C6.24401 3.80645 6.24401 4.12303 6.43928 4.31829C6.63454 4.51355 6.95112 4.51355 7.14638 4.31829L7.7651 3.69957C8.1921 3.27257 8.35757 3.11027 8.51194 3.00541ZM4.31796 7.14672C4.51322 6.95146 4.51322 6.63487 4.31796 6.43961C4.12269 6.24435 3.80611 6.24435 3.61085 6.43961L2.99213 7.05833L2.94922 7.10124C2.57957 7.47077 2.34303 7.70724 2.17788 7.95035C1.50265 8.94432 1.4678 10.238 2.11799 11.2281C2.27656 11.4695 2.50766 11.7005 2.8591 12.0518L2.90374 12.0965L2.94837 12.1411C3.29967 12.4925 3.53068 12.7237 3.77214 12.8822C4.76219 13.5324 6.05589 13.4976 7.04986 12.8223C7.29296 12.6572 7.52943 12.4206 7.89896 12.051L7.89897 12.051L7.94188 12.0081L8.5606 11.3894C8.75586 11.1941 8.75586 10.8775 8.5606 10.6823C8.36533 10.487 8.04875 10.487 7.85349 10.6823L7.23477 11.301C6.80777 11.728 6.6423 11.8903 6.48794 11.9951C5.81158 12.4546 4.95642 12.4636 4.32107 12.0464C4.17681 11.9516 4.02274 11.8012 3.61085 11.3894C3.19896 10.9775 3.0486 10.8234 2.95385 10.6791C2.53661 10.0438 2.54561 9.18863 3.00507 8.51227C3.10993 8.35791 3.27224 8.19244 3.69924 7.76544L4.31796 7.14672ZM9.62172 6.08558C9.81698 5.89032 9.81698 5.57373 9.62172 5.37847C9.42646 5.18321 9.10988 5.18321 8.91461 5.37847L5.37908 8.91401C5.18382 9.10927 5.18382 9.42585 5.37908 9.62111C5.57434 9.81637 5.89092 9.81637 6.08619 9.62111L9.62172 6.08558Z"
									fill="#6e56cf"
								></path>
							</svg>

							<a href="https://ameliazz.xyz/" target="_blank">
								<span>ameliazz.xyz</span>
							</a>
						</li>
						<li
							style={{
								display: 'flex',
								alignItems: 'center',
								gap: '0.5rem',
							}}
						>
							<svg width="18" height="18" viewBox="0 0 15 15">
								<path
									d="M8.51194 3.00541C9.18829 2.54594 10.0435 2.53694 10.6788 2.95419C10.8231 3.04893 10.9771 3.1993 11.389 3.61119C11.8009 4.02307 11.9513 4.17714 12.046 4.32141C12.4633 4.95675 12.4543 5.81192 11.9948 6.48827C11.8899 6.64264 11.7276 6.80811 11.3006 7.23511L10.6819 7.85383C10.4867 8.04909 10.4867 8.36567 10.6819 8.56093C10.8772 8.7562 11.1938 8.7562 11.389 8.56093L12.0077 7.94221L12.0507 7.89929C12.4203 7.52976 12.6568 7.2933 12.822 7.0502C13.4972 6.05623 13.5321 4.76252 12.8819 3.77248C12.7233 3.53102 12.4922 3.30001 12.1408 2.94871L12.0961 2.90408L12.0515 2.85942C11.7002 2.508 11.4692 2.27689 11.2277 2.11832C10.2377 1.46813 8.94398 1.50299 7.95001 2.17822C7.70691 2.34336 7.47044 2.57991 7.1009 2.94955L7.058 2.99247L6.43928 3.61119C6.24401 3.80645 6.24401 4.12303 6.43928 4.31829C6.63454 4.51355 6.95112 4.51355 7.14638 4.31829L7.7651 3.69957C8.1921 3.27257 8.35757 3.11027 8.51194 3.00541ZM4.31796 7.14672C4.51322 6.95146 4.51322 6.63487 4.31796 6.43961C4.12269 6.24435 3.80611 6.24435 3.61085 6.43961L2.99213 7.05833L2.94922 7.10124C2.57957 7.47077 2.34303 7.70724 2.17788 7.95035C1.50265 8.94432 1.4678 10.238 2.11799 11.2281C2.27656 11.4695 2.50766 11.7005 2.8591 12.0518L2.90374 12.0965L2.94837 12.1411C3.29967 12.4925 3.53068 12.7237 3.77214 12.8822C4.76219 13.5324 6.05589 13.4976 7.04986 12.8223C7.29296 12.6572 7.52943 12.4206 7.89896 12.051L7.89897 12.051L7.94188 12.0081L8.5606 11.3894C8.75586 11.1941 8.75586 10.8775 8.5606 10.6823C8.36533 10.487 8.04875 10.487 7.85349 10.6823L7.23477 11.301C6.80777 11.728 6.6423 11.8903 6.48794 11.9951C5.81158 12.4546 4.95642 12.4636 4.32107 12.0464C4.17681 11.9516 4.02274 11.8012 3.61085 11.3894C3.19896 10.9775 3.0486 10.8234 2.95385 10.6791C2.53661 10.0438 2.54561 9.18863 3.00507 8.51227C3.10993 8.35791 3.27224 8.19244 3.69924 7.76544L4.31796 7.14672ZM9.62172 6.08558C9.81698 5.89032 9.81698 5.57373 9.62172 5.37847C9.42646 5.18321 9.10988 5.18321 8.91461 5.37847L5.37908 8.91401C5.18382 9.10927 5.18382 9.42585 5.37908 9.62111C5.57434 9.81637 5.89092 9.81637 6.08619 9.62111L9.62172 6.08558Z"
									fill="#6e56cf"
								></path>
							</svg>

							<a
								href="https://github.com/ameliazz?query=is%3Aopen&tab=projects"
								target="_blank"
							>
								<span>projetos</span>
							</a>
						</li>
					</ul>
				</div>

				<div className="child">
					<div style={{ width: 'fit-content' }}>
						<h2 className="title">
							Redes{' '}
							<span
								style={{ color: '#E93D82' }}
								className="hover__letter__spacing"
							>
								Sociais
							</span>
						</h2>
						<div className={Styles.fancy} />
					</div>

					<ul>
						<li
							style={{
								display: 'flex',
								alignItems: 'center',
								gap: '0.5rem',
							}}
						>
							<svg width="18" height="18" viewBox="0 0 15 15">
								<path
									d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
									fill="#6e56cf"
								></path>
							</svg>

							<a
								href="https://github.com/ameliazz"
								target="_blank"
							>
								@<span>ameliazz</span>
							</a>
						</li>

						<li
							style={{
								display: 'flex',
								alignItems: 'center',
								gap: '0.5rem',
							}}
						>
							<svg width="18" height="18" viewBox="0 0 15 15">
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M5.07451 1.82584C5.03267 1.81926 4.99014 1.81825 4.94803 1.82284C4.10683 1.91446 2.82673 2.36828 2.07115 2.77808C2.02106 2.80525 1.97621 2.84112 1.93869 2.88402C1.62502 3.24266 1.34046 3.82836 1.11706 4.38186C0.887447 4.95076 0.697293 5.55032 0.588937 5.98354C0.236232 7.39369 0.042502 9.08728 0.0174948 10.6925C0.0162429 10.7729 0.0351883 10.8523 0.0725931 10.9234C0.373679 11.496 1.02015 12.027 1.66809 12.4152C2.32332 12.8078 3.08732 13.1182 3.70385 13.1778C3.85335 13.1922 4.00098 13.1358 4.10282 13.0255C4.2572 12.8581 4.5193 12.4676 4.71745 12.1643C4.80739 12.0267 4.89157 11.8953 4.95845 11.7901C5.62023 11.9106 6.45043 11.9801 7.50002 11.9801C8.54844 11.9801 9.37796 11.9107 10.0394 11.7905C10.1062 11.8957 10.1903 12.0269 10.2801 12.1643C10.4783 12.4676 10.7404 12.8581 10.8947 13.0255C10.9966 13.1358 11.1442 13.1922 11.2937 13.1778C11.9102 13.1182 12.6742 12.8078 13.3295 12.4152C13.9774 12.027 14.6239 11.496 14.925 10.9234C14.9624 10.8523 14.9813 10.7729 14.9801 10.6925C14.9551 9.08728 14.7613 7.39369 14.4086 5.98354C14.3003 5.55032 14.1101 4.95076 13.8805 4.38186C13.6571 3.82836 13.3725 3.24266 13.0589 2.88402C13.0214 2.84112 12.9765 2.80525 12.9264 2.77808C12.1708 2.36828 10.8907 1.91446 10.0495 1.82284C10.0074 1.81825 9.96489 1.81926 9.92305 1.82584C9.71676 1.85825 9.5391 1.96458 9.40809 2.06355C9.26977 2.16804 9.1413 2.29668 9.0304 2.42682C8.86968 2.61544 8.71437 2.84488 8.61428 3.06225C8.27237 3.03501 7.90138 3.02 7.5 3.02C7.0977 3.02 6.72593 3.03508 6.38337 3.06244C6.28328 2.84501 6.12792 2.61549 5.96716 2.42682C5.85626 2.29668 5.72778 2.16804 5.58947 2.06355C5.45846 1.96458 5.2808 1.85825 5.07451 1.82584ZM11.0181 11.5382C11.0395 11.5713 11.0615 11.6051 11.0838 11.6392C11.2169 11.843 11.3487 12.0385 11.4508 12.1809C11.8475 12.0916 12.352 11.8818 12.8361 11.5917C13.3795 11.2661 13.8098 10.8918 14.0177 10.5739C13.9852 9.06758 13.7993 7.50369 13.4773 6.21648C13.38 5.82759 13.2038 5.27021 12.9903 4.74117C12.7893 4.24326 12.5753 3.82162 12.388 3.5792C11.7376 3.24219 10.7129 2.88582 10.0454 2.78987C10.0308 2.79839 10.0113 2.81102 9.98675 2.82955C9.91863 2.881 9.84018 2.95666 9.76111 3.04945C9.71959 3.09817 9.68166 3.1471 9.64768 3.19449C9.953 3.25031 10.2253 3.3171 10.4662 3.39123C11.1499 3.6016 11.6428 3.89039 11.884 4.212C12.0431 4.42408 12.0001 4.72494 11.788 4.884C11.5759 5.04306 11.2751 5.00008 11.116 4.788C11.0572 4.70961 10.8001 4.4984 10.1838 4.30877C9.58933 4.12585 8.71356 3.98 7.5 3.98C6.28644 3.98 5.41067 4.12585 4.81616 4.30877C4.19988 4.4984 3.94279 4.70961 3.884 4.788C3.72494 5.00008 3.42408 5.04306 3.212 4.884C2.99992 4.72494 2.95694 4.42408 3.116 4.212C3.35721 3.89039 3.85011 3.6016 4.53383 3.39123C4.77418 3.31727 5.04571 3.25062 5.35016 3.19488C5.31611 3.14738 5.27808 3.09831 5.23645 3.04945C5.15738 2.95666 5.07893 2.881 5.01081 2.82955C4.98628 2.81102 4.96674 2.79839 4.95217 2.78987C4.28464 2.88582 3.25999 3.24219 2.60954 3.5792C2.42226 3.82162 2.20825 4.24326 2.00729 4.74117C1.79376 5.27021 1.61752 5.82759 1.52025 6.21648C1.19829 7.50369 1.01236 9.06758 0.97986 10.5739C1.18772 10.8918 1.61807 11.2661 2.16148 11.5917C2.64557 11.8818 3.15003 12.0916 3.5468 12.1809C3.64885 12.0385 3.78065 11.843 3.9138 11.6392C3.93626 11.6048 3.95838 11.5708 3.97996 11.5375C3.19521 11.2591 2.77361 10.8758 2.50064 10.4664C2.35359 10.2458 2.4132 9.94778 2.63377 9.80074C2.85435 9.65369 3.15236 9.71329 3.29941 9.93387C3.56077 10.3259 4.24355 11.0201 7.50002 11.0201C10.7565 11.0201 11.4392 10.326 11.7006 9.93386C11.8477 9.71329 12.1457 9.65369 12.3663 9.80074C12.5869 9.94779 12.6465 10.2458 12.4994 10.4664C12.2262 10.8762 11.8041 11.2598 11.0181 11.5382ZM4.08049 7.01221C4.32412 6.74984 4.65476 6.60162 5.00007 6.59998C5.34538 6.60162 5.67603 6.74984 5.91966 7.01221C6.16329 7.27459 6.30007 7.62974 6.30007 7.99998C6.30007 8.37021 6.16329 8.72536 5.91966 8.98774C5.67603 9.25011 5.34538 9.39833 5.00007 9.39998C4.65476 9.39833 4.32412 9.25011 4.08049 8.98774C3.83685 8.72536 3.70007 8.37021 3.70007 7.99998C3.70007 7.62974 3.83685 7.27459 4.08049 7.01221ZM9.99885 6.59998C9.65354 6.60162 9.3229 6.74984 9.07926 7.01221C8.83563 7.27459 8.69885 7.62974 8.69885 7.99998C8.69885 8.37021 8.83563 8.72536 9.07926 8.98774C9.3229 9.25011 9.65354 9.39833 9.99885 9.39998C10.3442 9.39833 10.6748 9.25011 10.9184 8.98774C11.1621 8.72536 11.2989 8.37021 11.2989 7.99998C11.2989 7.62974 11.1621 7.27459 10.9184 7.01221C10.6748 6.74984 10.3442 6.60162 9.99885 6.59998Z"
									fill="#6e56cf"
								></path>
							</svg>

							<a
								href="https://discord.com/users/699416429338034268"
								target="_blank"
							>
								@<span>iamyourwitch</span>
							</a>
						</li>
					</ul>
				</div>
			</footer>
		</>
	)
}
