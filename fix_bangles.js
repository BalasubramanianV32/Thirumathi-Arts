const fs = require('fs');
let text = fs.readFileSync('c:/Thirumathi/bangles.html', 'utf8');
text = text.replace(/\s*<span class="product-card-price">₹[\d,]+<\/span>\n/g, '\n');
text = text.replace(/onclick="orderOnWhatsApp\('([^']+)',\s*'[^']+'\)"/g, 'onclick="orderOnWhatsApp(\'$1\')"');
fs.writeFileSync('c:/Thirumathi/bangles.html', text);
