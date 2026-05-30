<div align="center">

# SVG-Viewer
jieshaowenben

<p>
  <a href="https://github.com/bill74186/SVG-Viewer/stargazers"><img src="https://img.shields.io/github/stars/bill74186/SVG-Viewer?style=for-the-badge&logo=github&color=f4c542" alt="Stars"></a>
  <a href="https://github.com/bill74186/SVG-Viewer/network/members"><img src="https://img.shields.io/github/forks/bill74186/SVG-Viewer?style=for-the-badge&logo=github&color=6cc644" alt="Forks"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge" alt="License"></a>
</p>

---

Sorry, this file currently only supports simplified Chinese

<p>
  <img src="https://img.shields.io/badge/HTML-5-E34F26?style=flat-square&logo=html5&" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS-3-1572B6?style=flat-square&logo=css" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-ES2025-F7DF1E?style=flat-square&logo=javascript" alt="JavaScript">
  <img src="https://img.shields.io/badge/Python-3.14.5-3776AB?style=flat-square&logo=python" alt="Python">
  <img src="https://img.shields.io/badge/Android-5.0+-3DDC84?style=flat-square&logo=android" alt="Android 5.0+">
</p>

</div>

## 🛠 使用方法

### 🔨 线上体验

如果你不想下载来用或临时体验，请点 👉 
[这里 *(`https://bill74186.github.io/SVG-Viewer`)*](https://bill74186.github.io/SVG-Viewer/)
喜欢的话就点点Star吧，求求了！

### 🔧 下载使用

请在Termux或支持运行python的应用内运行以下指令：

```sh
#请确保已更新系统和镜像源，否则无法安装
#1️⃣ 安装python和git
sudo apt install python3 git -y
#2️⃣ 克隆仓库
git clone https://github.com/bill74186/SVG-Viewer.git
#3️⃣ 进入项目目录
cd SVG-Viewer
#4️⃣ 运行服务器
python3 -m http.server 8080
#5️⃣ 大功告成，浏览hostlocal:8080查看
```

> [!note]
> 因系统不同所以安装器也不同
> ↓↓↓↓↓↓↓↓↓↓↓

**Windows**：`https://www.python.org/downloads/windows/`和`https://git-scm.com/download/win`下载<br>
**macOS**：Homebrew内输入`brew install python3 git`<br>
(如果没有安装Homebrew，请输入`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`)<br>
**Termux**：`pkg install python3 git -y`<br>
**apt安装**：`sudo apt install python3 git -y`<br>
**apk安装**：`apk add python3 git`<br>
**yum安装**：`sudo yum install python3 git -y`<br>
**dnf安装**：`sudo dnf install python3 git -y`<br>
**pacman**：`sudo pacman -Syu python git`<br>
**检查方法**：`python3 --version && git --version`，输出版本号即可

## 🔍 搜索图标

### 🔎 搜索方法
请把您准备好的SVG图标放到`icons`文件夹里并运行`scan.py`搜索：

```sh
python3 scan.py
```
提示成功后就可以了，再访问网页就会显示您的SVG图标

> [!tip]
> 本项目已经内置了bootstrap图标库的图标
> 你也可以使用`node node.js`搜索图标
> 如果真的不行可以直接编辑`list.json`文件

### 想获得图标？

自己制作或上网搜索图标吧！<br>
如果真的索不到我也非常“良心”的准备了一段SVG代码：

```svg
<svg
  width="32"
  height="32"
  fill="currentColor"
  viewBox="0 0 32 32"
  xmlns="http://www.w3.org/2000/svg">
    <path d="M19.58 14.17c.27-.5.42-1.06.42-1.67 0-1.64-1.14-3.02-2.67-3.4.07-.5.02-.97-.14-1.42-.49-1.33-1.9-2.06-3.21-2.61-1.69-.7-1.78-1.95-1.78-2.08 0-.34-.18-.66-.47-.85s-.66-.2-.97-.05c-.15.07-3.77 1.85-4.47 4.72a4.1 4.1 0 0 0 .12 2.35 3.506 3.506 0 0 0-2 5 3.505 3.505 0 0 0-2.42 3.33c0 1.93 1.57 3.5 3.5 3.5h13c1.93 0 3.5-1.57 3.5-3.5 0-1.55-1.02-2.88-2.42-3.33ZM18.5 19h-13c-.83 0-1.5-.67-1.5-1.5S4.67 16 5.5 16h2c.55 0 1-.45 1-1s-.45-1-1-1c-.83 0-1.5-.67-1.5-1.5S6.67 11 7.5 11H8c.38 0 .73-.21.89-.55s.13-.74-.09-1.05c-.54-.72-.73-1.41-.56-2.11.27-1.12 1.4-2.12 2.34-2.77.38.81 1.13 1.77 2.63 2.4 1.24.52 1.93 1 2.1 1.46.04.11.16.43-.21 1.17-.15.31-.14.68.04.97s.5.47.85.47h.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5c-.55 0-1 .45-1 1s.45 1 1 1h2c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5Z">
    </path>
</svg>
```

给他取名`shit.svg`就行，哈哈😄

## ✨ 项目信息

- **中文名称**: 2048小游戏
- **英文名称**: 2048 Game
- **创立时间**: 2026/04/15
- **上传时间**: 2026/05/01
- **现版本号**: v2.5.8(159)
- **开发人员**: bill74186

## 📁 项目架构

```
SVG-Viewer/
├── icons/    # 存放SVG的文件夹
│     ├── svg.svg    # SVG文件
│     ├── ***.svg    # 一系列SVG文件
│     └── .......svg    # 其他内置文件
├── index.html    # 项目HTML主页
├── style.css    # 配置全局CSS文件
├── script.js    # 配置全局的JS文件
├── node.js    # 扫描图标的JS文件
├── scan.js    # 扫描图标的PY文件
├── list.json    # 存放SVG名称的JSON文件
├── LICENSE    # MIT 许可证文件
└── README.md    # 干啥用不用我都说了
```

## 👤 作者信息
 
- **真名**: 保密 😜
- **网名**: [bill74186](https://github.com/bill74186/)
- **年龄**: 刚满十八岁~
- **性格**: 非常懒，能不动就不动
- **爱好**: 玩游戏，学习编程

## 🧾 页脚信息
 
Made By Bill74186👍<br><br>
这个就是写着看的🥲<br><br>
写README也是🤪<br><br>
尽情享受快乐吧！👽
 
> [!note]
该项目在MIT许可证下开源，您可以自由使用、修改和分发该项目的所有代码📖