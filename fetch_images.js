const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeImages() {
  const url1 = 'https://www.adornscustomgifts.com/product/personalized-corporate-diary-combo/';
  try {
    const res1 = await axios.get(url1, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } });
    const $1 = cheerio.load(res1.data);
    const images1 = [];
    $1('img').each((i, el) => {
      let src = $1(el).attr('src') || $1(el).attr('data-src');
      if (src && (src.includes('.jpg') || src.includes('.png')) && !src.includes('logo') && !src.includes('icon')) {
        images1.push(src);
      }
    });
    console.log("Adorns Images: ", images1.filter(v => v.includes('wp-content/uploads')).slice(0, 3));
  } catch(e) { console.error('Adorns error', e.message); }

  const url2 = 'https://www.printstop.co.in/corporate-company-gifting-for-employees-clients/categories/?srsltid=AfmBOoqdiULlnBy4UdwXEi7MfAm4tSmjDRmZI0XGzJH_M994LMJ5Xln1';
  try {
    const res2 = await axios.get(url2, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } });
    const $2 = cheerio.load(res2.data);
    const images2 = [];
    $2('img').each((i, el) => {
      let src = $2(el).attr('src') || $2(el).attr('data-src');
      if (src && (src.includes('.jpg') || src.includes('.png')) && !src.includes('logo') && !src.includes('icon')) {
        images2.push(src);
      }
    });
    console.log("PrintStop Images: ", images2.filter(v => v.includes('product')).slice(0, 3));
  } catch(e) { console.error('Printstop error', e.message); }
}
scrapeImages();
