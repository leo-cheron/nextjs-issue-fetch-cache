import {NextResponse} from 'next/server'

export const runtime = 'edge'
export const revalidate = 0

export async function GET (req: Request) {
	console.log("fetching date")

	await new Promise(resolve => {
		setTimeout(() => {
			resolve('promise resolved')
		}, 3000)
	})

	return NextResponse.json({success: true, date: new Date().toLocaleDateString('en-us', {
		weekday: 'long',
		year: 'numeric',
		month: 'short',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric'
	})})
}
