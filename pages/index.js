import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
	const allPostsData = getSortedPostsData()

	return {
		props: {
			allPostsData,
		},
	}
}

export default function Home({ allPostsData }) {

	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>Hey there! I'm a frontend developer based in Shanghai, China. I specialize in building elegant and intuitive user interfaces using frameworks such as React, Vue.</p>

				<p className={'mt-4'}>
					(This is a sample website - you’ll be building a site like this on{' '}
					<a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
				</p>
			</section>

			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<h2 className={utilStyles.headingLg}>Blog</h2>
				<ul className={utilStyles.list}>
					{
						allPostsData
							.map(({ id, date, title }) => {
								return (
									<li className={utilStyles.listItem} key={id}>
										<Link href={`/posts/${id}`}>{title}</Link>

										<br />

										<small className={utilStyles.lightText}>
											<Date dateString={date} />
										</small>
									</li>
								)
							})
					}
				</ul>
			</section>
		</Layout>
	)
}
