import localQuotes from '../config/quotes.json'

export const prerender = false

export async function GET() {
  if (!localQuotes || localQuotes.length === 0) {
    return new Response(JSON.stringify({ error: 'No quotes available' }), {
      status: 404,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  const randomQuote = localQuotes[Math.floor(Math.random() * localQuotes.length)]

  return new Response(JSON.stringify(randomQuote), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
