const fs = require('fs');
const path = require('path');

const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  bold: '\x1b[1m'
};

console.log(`
${colors.cyan}╔════════════════════════════════════════╗
║                                        ║
║   ${colors.yellow} ██████╗██╗      ██╗ ██████╗    ${colors.cyan}     ║
║   ${colors.yellow}██╔════╝╚██╗    ██╔╝██╔════╝    ${colors.cyan}     ║
║   ${colors.yellow}╚█████╗  ╚██╗  ██╔╝ ██║  ███╗   ${colors.cyan}     ║
║   ${colors.yellow} ╚══╗██╗  ╚██╗██╔╝  ██║   ██║   ${colors.cyan}     ║
║   ${colors.yellow}██████╔╝   ╚███╔╝   ╚██████╔╝   ${colors.red}${colors.bold}Node${colors.reset}${colors.cyan} ║
║   ${colors.yellow}╚═════╝     ╚══╝     ╚═════╝    ${colors.red}${colors.bold}  JS${colors.reset}${colors.cyan} ║
║                                        ║
╚════════════════════════════════════════╝${colors.reset}
`);

const iconsDir = path.join(__dirname, 'icons');
const outputFile = path.join(__dirname, 'list.json');

try {
  const files = fs.readdirSync(iconsDir)
        .filter(file => file.toLowerCase().endsWith('.svg'))
        .sort();

  fs.writeFileSync(outputFile, JSON.stringify(files, null, 2));
  console.log(`
${colors.green}╔════════════════════════════════════════╗
║  ✔ 成功扫描到 ${colors.yellow}${colors.bold}${String(files.length).padStart(4, ' ')}${colors.reset}${colors.green} 个图标文件          ║
║  ✔ 已保存到: ${colors.yellow}${colors.bold}list.json${colors.reset}${colors.green}                 ║
╚════════════════════════════════════════╝${colors.reset}
  `);
} catch (err) {
  console.error(`
${colors.red}╔════════════════════════════════════════╗
║  ✘ 错误发生了!                         ║
╠════════════════════════════════════════╣
║  ${colors.bold}${err.message.substring(0, 36).padEnd(36, ' ')}${colors.reset}${colors.red}   ║
╚════════════════════════════════════════╝${colors.reset}
  `);
  process.exit(1);
}

