let files=[];let iSize = 32, grid = document.getElementById('grid'), modal = document.getElementById('m'), mPre = document.getElementById('m-pre'), mName = document.getElementById('m-name'), mCode = document.getElementById('m-code'), topBtn = document.getElementById('topBtn');
topBtn.onclick = ()=> window.scrollTo({top:0,behavior:'smooth'});
window.onscroll = ()=> topBtn.classList.toggle('show',window.scrollY>300);
function oModal(file){fetch(`./icons/${file}`).then(r=>r.text()).then(svg=>{mName.innerText=file.replace('.svg','');mPre.innerHTML=svg;mCode.value=svg.trim();modal.classList.add('show')});}
function cModal(){modal.classList.remove('show')}
function render(list){grid.innerHTML='';document.getElementById('count').innerText=`共加载 ${list.length} 个图标`;list.forEach(file=>{const el=document.createElement('div');el.className='item';el.ondblclick=()=>oModal(file);fetch(`./icons/${file}`).then(r=>r.text()).then(svg=>{const t=document.createElement('div');t.innerHTML=svg;const s=t.querySelector('svg');if(s){s.style.width=iSize+'px';s.style.height=iSize+'px';el.prepend(s)}});el.insertAdjacentHTML('beforeend',`<div class="nm">${file.replace('.svg','')}</div>`);grid.appendChild(el)})}
function updateSize(size){document.querySelectorAll('.item svg').forEach(s=>{s.style.width=size+'px';s.style.height=size+'px'})}
search.oninput = e=> render(files.filter(f=>f.toLowerCase().includes(e.target.value.toLowerCase())));
function sSize(size,el){iSize=size;document.querySelectorAll('.t-btn').forEach(b=>b.classList.remove('active'));el.classList.add('active');updateSize(size)}
function tDark(){document.documentElement.classList.toggle('dark');const b=document.getElementById('tBtn');document.documentElement.classList.contains('dark')?b.innerHTML='<i class="bi bi-moon-fill"></i>暗色':b.innerHTML='<i class="bi bi-sun-fill"></i>亮色'}
modal.onclick=e=>e.target===modal&&cModal();
fetch('./list.json').then(r=>r.json()).then(data=>{files=data;render(files)}).catch(err=>console.error('加载图标列表失败:',err));