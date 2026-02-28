import http from 'http';
import https from 'https';

// 测试URL是否可访问
async function testUrl(url) {
  return new Promise((resolve) => {
    const protocol = url.startsWith('https') ? https : http;
    const options = new URL(url);
    options.method = 'HEAD';
    options.timeout = 5000;

    const req = protocol.request(options, (res) => {
      resolve({ url, status: res.statusCode, ok: res.statusCode < 400 });
    });

    req.on('error', () => {
      resolve({ url, status: 0, ok: false });
    });

    req.on('timeout', () => {
      req.destroy();
      resolve({ url, status: 0, ok: false });
    });

    req.end();
  });
}

// 测试所有工具URL
async function testTools() {
  const tools = [
    "https://www.zhihu.com",
    "https://www.realearth.io",
    "https://www.1000000000000pixels.com",
    "https://www.hifini.com",
    "https://www.hostloc.com",
    "https://www.dytt8.net",
    "https://fanyi.baidu.com",
    "https://pan.xjbox.com",
    "https://chat.xjbox.com",
    "https://www.8zhan.net",
    "https://www.reg007.com",
    "https://www.toolnb.com",
    "https://www.processon.com",
    "https://imgur.com",
    "https://pastebin.com",
    "https://www.proxy-site.com",
    "https://www.dy2018.com",
    "https://www.btbtt11.com",
    "https://www.friv.com",
    "https://www.apowersoft.cn/remove-watermark-online",
    "https://filehelper.weixin.qq.com",
    "https://www.kugou.com",
    "https://stackblitz.com",
    "https://www.somd5.com",
    "https://www.jsjiami.com",
    "https://www.toolbox.com",
    "https://freessl.org",
    "https://tempmail.plus",
    "https://www.receivesmsonline.net",
    "https://10minutemail.com",
    "https://whoer.net",
    "https://www.ip138.com",
    "https://ip-api.com",
    "https://tempmail.co",
    "https://ssh.cloud.google.com",
    "https://www.exploit-db.com",
    "https://github.com/ywhack",
    "https://www.revshells.com",
    "https://leakix.net",
    "https://www.baige.me",
    "https://www.nosec.org",
    "https://www.hacking8.com",
    "https://www.cnnvd.org.cn",
    "https://packetstormsecurity.com",
    "https://1337day.com",
    "https://www.toonme.com"
  ];

  console.log('Testing tool URLs...');
  const results = await Promise.all(tools.map(testUrl));
  
  console.log('\nTest Results:');
  console.log('====================================');
  
  const unavailable = [];
  results.forEach(result => {
    console.log(`${result.ok ? '✓' : '✗'} ${result.url} (${result.status})`);
    if (!result.ok) {
      unavailable.push(result.url);
    }
  });
  
  console.log('====================================');
  console.log(`\nTotal: ${results.length}`);
  console.log(`Available: ${results.filter(r => r.ok).length}`);
  console.log(`Unavailable: ${unavailable.length}`);
  
  if (unavailable.length > 0) {
    console.log('\nUnavailable URLs:');
    unavailable.forEach(url => console.log(`- ${url}`));
  }
  
  return unavailable;
}

// 测试所有插件URL
async function testPlugins() {
  const plugins = [
    "https://github.com/withastro/astro/tree/main/packages/integrations/react",
    "https://www.npmjs.com/package/@astrojs/react",
    "https://github.com/withastro/astro/tree/main/packages/integrations/vue",
    "https://www.npmjs.com/package/@astrojs/vue",
    "https://github.com/withastro/astro/tree/main/packages/integrations/svelte",
    "https://www.npmjs.com/package/@astrojs/svelte",
    "https://github.com/withastro/astro/tree/main/packages/integrations/solid-js",
    "https://www.npmjs.com/package/@astrojs/solid-js",
    "https://github.com/withastro/astro/tree/main/packages/integrations/preact",
    "https://www.npmjs.com/package/@astrojs/preact",
    "https://github.com/withastro/astro/tree/main/packages/integrations/alpinejs",
    "https://www.npmjs.com/package/@astrojs/alpinejs",
    "https://github.com/withastro/astro/tree/main/packages/integrations/netlify",
    "https://www.npmjs.com/package/@astrojs/netlify",
    "https://github.com/withastro/astro/tree/main/packages/integrations/vercel",
    "https://www.npmjs.com/package/@astrojs/vercel",
    "https://github.com/withastro/astro/tree/main/packages/integrations/cloudflare",
    "https://www.npmjs.com/package/@astrojs/cloudflare",
    "https://github.com/withastro/astro/tree/main/packages/integrations/node",
    "https://www.npmjs.com/package/@astrojs/node",
    "https://github.com/withastro/astro/tree/main/packages/integrations/mdx",
    "https://www.npmjs.com/package/@astrojs/mdx",
    "https://github.com/withastro/astro/tree/main/packages/integrations/sitemap",
    "https://www.npmjs.com/package/@astrojs/sitemap",
    "https://github.com/withastro/astro/tree/main/packages/integrations/partytown",
    "https://www.npmjs.com/package/@astrojs/partytown",
    "https://github.com/withastro/astro/tree/main/packages/integrations/markdoc",
    "https://www.npmjs.com/package/@astrojs/markdoc",
    "https://github.com/withastro/astro/tree/main/packages/integrations/db",
    "https://www.npmjs.com/package/@astrojs/db",
    "https://github.com/withastro/astro/tree/main/packages/integrations/rss",
    "https://www.npmjs.com/package/@astrojs/rss",
    "https://github.com/withastro/astro/tree/main/packages/integrations/reading-time",
    "https://www.npmjs.com/package/astro-reading-time",
    "https://github.com/astro-community/astro-expressive-code",
    "https://www.npmjs.com/package/astro-expressive-code",
    "https://github.com/astro-community/astro-embed",
    "https://www.npmjs.com/package/astro-embed",
    "https://github.com/astro-community/astro-icon",
    "https://www.npmjs.com/package/astro-icon",
    "https://github.com/astro-community/astro-google-analytics",
    "https://www.npmjs.com/package/astro-google-analytics",
    "https://github.com/withastro/astro/tree/main/packages/integrations/og-canvas",
    "https://www.npmjs.com/package/astro-og-canvas",
    "https://github.com/astro-community/astro-robots-txt",
    "https://www.npmjs.com/package/astro-robots-txt"
  ];

  console.log('\n\nTesting plugin URLs...');
  const results = await Promise.all(plugins.map(testUrl));
  
  console.log('\nTest Results:');
  console.log('====================================');
  
  const unavailable = [];
  results.forEach(result => {
    console.log(`${result.ok ? '✓' : '✗'} ${result.url} (${result.status})`);
    if (!result.ok) {
      unavailable.push(result.url);
    }
  });
  
  console.log('====================================');
  console.log(`\nTotal: ${results.length}`);
  console.log(`Available: ${results.filter(r => r.ok).length}`);
  console.log(`Unavailable: ${unavailable.length}`);
  
  if (unavailable.length > 0) {
    console.log('\nUnavailable URLs:');
    unavailable.forEach(url => console.log(`- ${url}`));
  }
  
  return unavailable;
}

// 运行测试
async function runTests() {
  console.log('Starting URL availability tests...');
  console.log('====================================');
  
  const unavailableTools = await testTools();
  const unavailablePlugins = await testPlugins();
  
  console.log('\n\nSummary:');
  console.log('====================================');
  console.log(`Unavailable tools: ${unavailableTools.length}`);
  console.log(`Unavailable plugins: ${unavailablePlugins.length}`);
  
  if (unavailableTools.length > 0 || unavailablePlugins.length > 0) {
    console.log('\nUnavailable URLs need to be removed from configuration files.');
  } else {
    console.log('\nAll URLs are available!');
  }
}

runTests().catch(console.error);