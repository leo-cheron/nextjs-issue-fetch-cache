/** Add your relevant code here for the issue to reproduce */
export default async function Home() {
	console.time('home: fetch date')
	const data = await fetch(`http${process.env.NODE_ENV === 'development' ? '' : 's'}://${process.env.VERCEL_URL || 'localhost:3000'}/api/date`).then(d => d.json())
	console.timeEnd('home: fetch date')

  	return (
		<>
			{data.date}
		</>
	)
}

export const revalidate = 10
export const runtime = 'nodejs'