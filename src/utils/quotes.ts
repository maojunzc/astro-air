import localQuotes from './quotes.json'

interface Quote {
  text: string
  author: string
}

interface QuoteResult {
  text: string
  author: string
  source: string
  isLocal: boolean
}

const API_ENDPOINTS = [
  {
    name: 'hitokoto',
    url: 'https://v1.hitokoto.cn/',
    parse: (data: any): Quote => ({
      text: data.hitokoto,
      author: data.from_who || data.from || 'Unknown'
    })
  },
  {
    name: 'jinrishici',
    url: 'https://v2.jinrishici.com/info.json',
    parse: (data: any): Quote => ({
      text: data.data.content,
      author: data.data.author || 'Unknown'
    })
  },
  {
    name: 'simor',
    url: 'https://api.shadiao.pro/du',
    parse: (data: any): Quote => ({
      text: data.text,
      author: data.from || 'Unknown'
    })
  },
  {
    name: ' mush',
    url: 'https://api.muxiaoguo.cn/api/yiyan',
    parse: (data: any): Quote => ({
      text: data.data.content,
      author: data.data.author || 'Unknown'
    })
  },
  {
    name: 'tianapi',
    url: 'https://api.tianapi.com/caiyun/index',
    parse: (data: any): Quote => ({
      text: data.newslist[0]?.content || '',
      author: data.newslist[0]?.source || 'Unknown'
    })
  },
  {
    name: 'lbx',
    url: 'https://lbx.xiaoxiao-dashu.com/api/yiyan',
    parse: (data: any): Quote => ({
      text: data.data.text,
      author: data.data.author || 'Unknown'
    })
  }
]

export async function getQuote(): Promise<QuoteResult> {
  // 首先尝试从本地配置文件中获取
  if (localQuotes && localQuotes.length > 0) {
    const randomLocalQuote = localQuotes[Math.floor(Math.random() * localQuotes.length)]
    return {
      text: randomLocalQuote.text,
      author: randomLocalQuote.author || 'Unknown',
      source: 'local',
      isLocal: true
    }
  }

  // 如果本地为空，尝试从API获取
  return await fetchFromAPIs()
}

export async function fetchFromAPIs(): Promise<QuoteResult> {
  // 随机打乱API顺序，避免总是使用同一个API
  const shuffledAPIs = [...API_ENDPOINTS].sort(() => Math.random() - 0.5)

  for (const api of shuffledAPIs) {
    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 3000)

      const response = await fetch(api.url, {
        signal: controller.signal,
        headers: {
          'Content-Type': 'application/json'
        }
      })

      clearTimeout(timeoutId)

      if (!response.ok) continue

      const data = await response.json()
      const quote = api.parse(data)

      if (quote.text && quote.text.length > 0) {
        return {
          text: quote.text,
          author: quote.author,
          source: api.name,
          isLocal: false
        }
      }
    } catch (error) {
      console.warn(`API ${api.name} failed:`, error)
      continue
    }
  }

  // 所有API都失败，返回默认一言
  return {
    text: '多年前笑意，都变成秘密。听说有人曾落泪，看过街灯亮与熄。',
    author: 'maojunzc',
    source: 'default',
    isLocal: false
  }
}

export function getLocalQuotes(): Quote[] {
  return localQuotes || []
}

export function addLocalQuote(quote: Quote): void {
  if (!localQuotes) return
  localQuotes.push(quote)
}

export function removeLocalQuote(index: number): void {
  if (!localQuotes || index < 0 || index >= localQuotes.length) return
  localQuotes.splice(index, 1)
}
