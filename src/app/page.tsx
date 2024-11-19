import Image from 'next/image'

import NavigationBar from '@/components/NavigationBar'
import Styles from '@/styles/Page.module.scss'
import TimelineStyles from '@/styles/Timeline.module.scss'

const monthDiff = (d1: Date, d2: Date) => {
	let months =
		(d2.getFullYear() - d1.getFullYear()) * 12 -
		d1.getMonth() +
		d2.getMonth()

	return months <= 0 ? 0 : months
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
								<span style={{ color: 'rgb(110, 86, 207)' }}>
									Am
								</span>
								élia Ribeiro,
							</h1>
							<h3
								className={Styles.title}
								style={{
									fontSize: '1.6rem',
									color: 'rgba(255, 255, 255, 0.70)',
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
											{monthDiff(
												new Date(
													'2024-07-17T00:15:45-03:00'
												),
												new Date()
											)}
										</span>{' '}
										meses trabalhados
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

				<section id="about" className={Styles.about__container}>
					<div>
						<h1 className={Styles.title}>Sobre mim</h1>
						<div className={Styles.fancy} />
					</div>

					<div id={Styles.content__container}>
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
									CSharp, logo depois conheci outras
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
										Final
									</h3>
									<div className={Styles.title__fancy} />
								</div>
								<p>
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
			</main>
		</>
	)
}
