
/* 维度说明（用于结果页的进度条） */
const DIM_LABEL = {
  EI:{ l:'E 外向', r:'I 内向' },
  SN:{ l:'S 实感', r:'N 直觉' },
  TF:{ l:'T 思考', r:'F 情感' },
  JP:{ l:'J 判断', r:'P 知觉' }
};

/* =========================================================
   状态与渲染
   ========================================================= */
const TOTAL = QUESTIONS.length;
let idx = 0;
const answers = new Array(TOTAL).fill(null);

const $ = s => document.querySelector(s);
const qCount=$('#qCount'), qBar=$('#qBar'), qIndex=$('#qIndex'), qText=$('#qText'),
      qOptions=$('#qOptions'), nextBtn=$('#nextBtn'), prevBtn=$('#prevBtn'),
      qDims=$('#qDims'), quizEl=$('#quiz'), resultEl=$('#result');

function dimOf(i){ return QUESTIONS[i].dim; }

function renderQuestion(){
  const q = QUESTIONS[idx];
  qCount.textContent = `第 ${idx+1} 题 / 共 ${TOTAL} 题`;
  qIndex.textContent = 'QUESTION ' + String(idx+1).padStart(2,'0');
  qText.textContent = q.q;
  qBar.style.width = ((idx)/TOTAL*100) + '%';
  const d = DIM_LABEL[q.dim];
  qDims.textContent = q.dim === 'EI' ? '测量维度 · 能量来源'
                    : q.dim === 'SN' ? '测量维度 · 信息接收'
                    : q.dim === 'TF' ? '测量维度 · 决策方式'
                    : '测量维度 · 生活节奏';

  qOptions.innerHTML = '';
  q.opts.forEach((o, i) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'option' + (answers[idx] === i ? ' selected' : '');
    btn.innerHTML = `<span class="key">${i+1}</span><span>${o.t}</span>`;
    btn.addEventListener('click', () => choose(i));
    qOptions.appendChild(btn);
  });

  prevBtn.disabled = idx === 0;
  nextBtn.disabled = answers[idx] === null;
  nextBtn.textContent = idx === TOTAL-1 ? '查看结果 →' : '下一题 →';
  window.scrollTo({ top: quizEl.getBoundingClientRect().top + window.scrollY - 140, behavior:'smooth' });
}

function choose(i){
  answers[idx] = i;
  [...qOptions.children].forEach((el, k) => el.classList.toggle('selected', k === i));
  nextBtn.disabled = false;
}

function next(){
  if (answers[idx] === null) return;
  if (idx < TOTAL - 1){ idx++; renderQuestion(); }
  else finish();
}
function prev(){
  if (idx > 0){ idx--; renderQuestion(); }
}

nextBtn.addEventListener('click', next);
prevBtn.addEventListener('click', prev);
$('#resetBtn').addEventListener('click', resetAll);
$('#againBtn').addEventListener('click', resetAll);

document.addEventListener('keydown', e => {
  if (resultEl.classList.contains('show')) return;
  if (['1','2','3','4'].includes(e.key)){
    const i = Number(e.key) - 1;
    if (i < qOptions.children.length){ choose(i); }
  }
  if (e.key === 'ArrowRight'){ e.preventDefault(); next(); }
  if (e.key === 'ArrowLeft'){ e.preventDefault(); prev(); }
});

function resetAll(){
  idx = 0; answers.fill(null);
  resultEl.classList.remove('show');
  quizEl.classList.remove('hidden');
  history.replaceState(null, '', location.pathname);
  renderQuestion();
  document.getElementById('start').scrollIntoView({behavior:'smooth'});
}
/* 从任何地方回到答题（清空 URL 上的 ?r=） */
function restartQuiz(){ resetAll(); }

/* ---------- 计分 ---------- */
function compute(){
  const score = { E:0,I:0,S:0,N:0,T:0,F:0,J:0,P:0 };
  const per = { EI:{a:0,b:0}, SN:{a:0,b:0}, TF:{a:0,b:0}, JP:{a:0,b:0} };
  answers.forEach((ai, qi) => {
    if (ai === null) return;
    const q = QUESTIONS[qi];
    const v = q.opts[ai].v;
    score[v]++;
    const pair = { EI:['E','I'], SN:['S','N'], TF:['T','F'], JP:['J','P'] }[q.dim];
    if (v === pair[0]) per[q.dim].a++; else per[q.dim].b++;
  });
  const code = (score.E >= score.I ? 'E':'I')
             + (score.S >= score.N ? 'S':'N')
             + (score.T >= score.F ? 'T':'F')
             + (score.J >= score.P ? 'J':'P');
  return { code, per, score };
}

/* ---------- 结果渲染 ---------- */
function finish(){
  const { code, per } = compute();
  const t = TYPES[code];
  if (!t) { alert('结果类型缺失：' + code); return; }

  quizEl.classList.add('hidden');
  resultEl.classList.add('show');

  paintResult(code, true, per);
  history.replaceState(null, '', '?r=' + code);
  resultEl.scrollIntoView({behavior:'smooth', block:'start'});
}

/* 统一渲染结果页（per 为空时表示来自分享链接） */
function paintResult(code, animated, per){
  const t = TYPES[code];
  if (!t) return;
  resultEl.classList.add('show');
  quizEl.classList.add('hidden');

  // 形象
  const frame = $('#rMascot');
  frame.style.setProperty('--mascot-bg', MASCOT_COLORS[code]);
  frame.innerHTML = mascot(code, animated ? 'float' : '');
  frame.setAttribute('aria-label', MASCOT_PERSONA[code]);

  $('#rCode').textContent = 'RESULT · ' + code + ' · ' + MASCOT_PERSONA[code];
  $('#rCode').style.background = MASCOT_ACCENT[code];
  $('#rName').textContent = t.name;
  $('#rSub').textContent = t.sub;
  $('#rDesc').textContent = t.desc;
  $('#rTags').innerHTML = t.tag.map(x => `<span class="tag"># ${x}</span>`).join('');
  $('#rKid').textContent = t.kid;
  $('#rToy').textContent = t.toy;
  $('#rBreak').textContent = t.break;
  $('#rComfort').textContent = t.comfort;
  $('#rSkill').textContent = t.skill;
  $('#rGrown').textContent = t.grown;

  // 维度条
  const dimsEl = $('#rDims');
  if (per){
    dimsEl.innerHTML = Object.keys(per).map(k => {
      const { a, b } = per[k];
      const total = a + b || 1;
      const left = Math.round(a/total*100);
      const lab = DIM_LABEL[k];
      const val = a >= b ? lab.l : lab.r;
      return `<div class="dim">
        <div class="dim-label"><span>${lab.l[0]}</span><span>${lab.r[0]}</span></div>
        <div class="dim-bar"><i class="l" style="width:${left}%"></i><i class="r" style="width:${100-left}%"></i></div>
        <div class="dim-val">${val} · ${Math.max(left,100-left)}%</div>
      </div>`;
    }).join('');
  } else   {
    dimsEl.innerHTML = '<div class="dim" style="grid-column:1/-1;color:var(--text-muted);font-size:13px;line-height:1.7">尚未完成测试，暂时看不到你自己的四维度分布。👉 <a href="#start" id="goQuiz" style="font-weight:700">去做 28 道题</a>（约 5 分钟），或者先看看这个类型的性格画像。</div>';
    const gq = document.getElementById('goQuiz');
    if (gq) gq.onclick = (e) => { e.preventDefault(); restartQuiz(); };
  }

  // 全部类型（带小头像）
  const order = ['ISTJ','ISFJ','INFJ','INTJ','ISTP','ISFP','INFP','INTP','ESTP','ESFP','ENFP','ENTP','ESTJ','ESFJ','ENFJ','ENTJ'];
  $('#allGrid').innerHTML = order.map(c =>
    `<div class="${c===code?'me':''}" style="--mascot-bg:${MASCOT_COLORS[c]}">
      <span class="mini">${mascot(c)}</span>
      <span class="tt"><b>${c}</b><em>${TYPES[c].name}</em></span>
    </div>`
  ).join('');

  // 分享
  const link = location.origin + location.pathname + '?r=' + code;
  $('#rLink').textContent = link;
  $('#copyBtn').onclick = () => copy(link, '链接已复制');
  $('#copyTextBtn').onclick = () => {
    const txt = `我的内心小孩是 ${code} · ${t.name}（${MASCOT_PERSONA[code]}）\n${t.sub}\n\n${t.desc}`;
    copy(txt, '文字结果已复制');
  };
}

function copy(text, msg){
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => toast(msg)).catch(() => fallback(text, msg));
  } else fallback(text, msg);
}
function fallback(text, msg){
  const ta = document.createElement('textarea');
  ta.value = text; document.body.appendChild(ta); ta.select();
  try { document.execCommand('copy'); } catch(e){}
  document.body.removeChild(ta);
  toast(msg);
}
let toastTimer;
function toast(msg){
  let el = document.getElementById('toast');
  if (!el){
    el = document.createElement('div');
    el.id = 'toast';
    el.style.cssText = 'position:fixed;left:50%;bottom:32px;transform:translateX(-50%);background:var(--text-default);color:var(--canvas-default);padding:8px 16px;border-radius:6px;font-size:13px;z-index:999;opacity:0;transition:opacity .2s';
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.style.opacity = '1';
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.style.opacity = '0', 1800);
}

/* ---------- 分享链接直达结果 ---------- */
function checkShared(){
  const p = new URLSearchParams(location.search);
  const r = (p.get('r') || '').toUpperCase();
  if (r && TYPES[r]) paintResult(r, false, null);
}

/* ---------- 首页 16 只小孩画廊 ---------- */
function renderRoster(){
  const order = ['INTJ','INTP','ENTJ','ENTP','INFJ','INFP','ENFJ','ENFP','ISTJ','ISFJ','ISTP','ISFP','ESTP','ESFP','ESTJ','ESFJ'];
  const grid = document.getElementById('rosterGrid');
  if (!grid) return;
  grid.innerHTML = order.map(c => `
    <button class="roster-card" type="button" data-type="${c}"
      style="--mascot-bg:${MASCOT_COLORS[c]};--mascot-accent:${MASCOT_ACCENT[c]}">
      <div class="avatar">${mascot(c)}</div>
      <div class="code">${c}</div>
      <div class="nm">${TYPES[c].name}</div>
      <div class="pers">${MASCOT_PERSONA[c]}</div>
    </button>`).join('');

  grid.addEventListener('click', e => {
    const card = e.target.closest('.roster-card');
    if (!card) return;
    paintResult(card.dataset.type, false, null);
    history.replaceState(null, '', '?r=' + card.dataset.type);
    document.getElementById('result').scrollIntoView({behavior:'smooth', block:'start'});
  });
}

/* ---------- 主题切换 ---------- */
const themeBtn = document.getElementById('themeBtn');
function setTheme(mode){
  document.documentElement.setAttribute('data-theme', mode);
  try { localStorage.setItem('kid-mbti-theme', mode); } catch(e){}
}
themeBtn.addEventListener('click', () => {
  setTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
});
(function initTheme(){
  let saved = null;
  try { saved = localStorage.getItem('kid-mbti-theme'); } catch(e){}
  if (!saved) saved = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  setTheme(saved);
})();

/* ---------- 滚动进度 & TOC 高亮 ---------- */
const progressEl = document.getElementById('scrollProgress');
const tocLinks = [...document.querySelectorAll('#tocList a')];
const sections = tocLinks.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);

function onScroll(){
  const h = document.documentElement;
  const max = h.scrollHeight - h.clientHeight;
  progressEl.style.width = (max > 0 ? (h.scrollTop / max * 100) : 0) + '%';

  let current = sections[0];
  for (const s of sections){
    if (s.getBoundingClientRect().top <= 180) current = s;
  }
  tocLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current.id));
}
window.addEventListener('scroll', onScroll, { passive:true });
onScroll();

/* ---------- 启动 ---------- */
renderQuestion();
renderRoster();
checkShared();
</script>
</body>
</html>
