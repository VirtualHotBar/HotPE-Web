const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Building...');

// 获取当前脚本目录
const scriptDir = path.resolve(__dirname);

// 删除 public 目录
const publicDir = path.join(scriptDir, 'public');
if (fs.existsSync(publicDir)) {
  fs.rmSync(publicDir, { recursive: true, force: true });
}

// 清理 Hexo 的旧文件并生成新文件
execSync('npx hexo clean', { stdio: 'inherit' });
execSync('npx hexo g', { stdio: 'inherit' });

// 修改 public/index.html 文件中的内容
const indexPath = path.join(publicDir, 'index.html');
if (fs.existsSync(indexPath)) {
  let indexContent = fs.readFileSync(indexPath, 'utf-8');
  indexContent = indexContent.replace(' - HotPE</title>', '</title>');
  indexContent = indexContent.replace('<title>', '<title>HotPE - ');
  fs.writeFileSync(indexPath, indexContent, 'utf-8');
}

// 复制 static 目录下的文件
const staticDir = path.join(scriptDir, 'static');
if (fs.existsSync(staticDir)) {
  fs.cpSync(staticDir, publicDir, { recursive: true });
}


// 删除特定的子目录
const toDeleteDirs = ['categories', 'links', 'xml', 'tags'];
toDeleteDirs.forEach(dir => {
  const fullPath = path.join(publicDir, dir);
  if (fs.existsSync(fullPath)) {
    fs.rmSync(fullPath, { recursive: true, force: true });
  }
});

console.log('Build complete.');
