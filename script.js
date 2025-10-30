/***************
 * Translations
 ***************/
const translations = {
  en: {
    startTitle: "MBTI Personality Test",
    startDescription: "Discover your personality type based on the Myers–Briggs Type Indicator. Answer 25 questions in about 2 minutes.",
    startButton: "Start Test",
    nextButton: "Next",
    getResult: "Get Result",
    retryButton: "Restart",
    loading: "Analyzing your answers…",
    yourType: "Your Type:",
    shareText: (type) => `I got ${type} on this MBTI test!`,
    questionCounter: (i,t)=>`Question ${i} of ${t}`,
    progressLabel: (i,t)=>`${i}/${t}`,
    selectWarning: "Please select an option to continue.",
    resultSubtitle: "Type overview and quick insights",
  },
  ar: {
    startTitle: "اختبار شخصية MBTI",
    startDescription: "اكتشف نمط شخصيتك بناءً على مؤشر مايرز–بريغز. أجب عن 25 سؤالًا خلال دقيقتين تقريبًا.",
    startButton: "ابدأ الاختبار",
    nextButton: "التالي",
    getResult: "احصل على النتيجة",
    retryButton: "أعد الاختبار",
    loading: "جارٍ تحليل إجاباتك…",
    yourType: "نوعك:",
    shareText: (type)=> `حصلت على النمط ${type} في هذا الاختبار!`,
    questionCounter: (i,t)=>`السؤال ${i} من ${t}`,
    progressLabel: (i,t)=>`${i}/${t}`,
    selectWarning: "يرجى اختيار إجابة للمتابعة.",
    resultSubtitle: "نبذة سريعة وتحليلات مختصرة",
  }
};

/*********************************
 * Questions (25) – EI, NS, TF, JP
 *********************************/
const questions = [
  // EI (6)
  { dimension:"EI", text:{en:"At a social event, you usually:", ar:"في حدث اجتماعي، عادةً:"},
    options:[{value:"E", text:{en:"Start conversations with many new people", ar:"تبدأ محادثات مع أشخاص جدد"}},
             {value:"I", text:{en:"Stick to familiar faces or stay quiet", ar:"تبقى مع من تعرفه أو تلتزم الهدوء"}}]},
  { dimension:"EI", text:{en:"You recharge your energy mostly by:", ar:"تستمد طاقتك غالبًا من:"},
    options:[{value:"E", text:{en:"Being around people", ar:"وجودك مع الآخرين"}},
             {value:"I", text:{en:"Spending time alone", ar:"قضاء الوقت بمفردك"}}]},
  { dimension:"EI", text:{en:"When working on a project, you prefer:", ar:"عند العمل على مشروع، تفضل:"},
    options:[{value:"E", text:{en:"Group collaboration", ar:"التعاون ضمن مجموعة"}},
             {value:"I", text:{en:"Working independently", ar:"العمل بشكل فردي"}}]},
  { dimension:"EI", text:{en:"You feel more comfortable:", ar:"تشعر براحة أكبر عندما:"},
    options:[{value:"E", text:{en:"Speaking in front of a crowd", ar:"تتحدث أمام الناس"}},
             {value:"I", text:{en:"Writing/one-on-one communication", ar:"تكتب أو تتواصل فرديًا"}}]},
  { dimension:"EI", text:{en:"You tend to:", ar:"تميل إلى:"},
    options:[{value:"E", text:{en:"Share ideas openly", ar:"مشاركة أفكارك علنًا"}},
             {value:"I", text:{en:"Keep thoughts to yourself", ar:"الاحتفاظ بالأفكار لنفسك"}}]},
  { dimension:"EI", text:{en:"On weekends, you prefer:", ar:"في عطلة نهاية الأسبوع، تفضل:"},
    options:[{value:"E", text:{en:"Going out with friends", ar:"الخروج مع الأصدقاء"}},
             {value:"I", text:{en:"Staying in with a book or movie", ar:"البقاء في المنزل"}}]},
  // NS (6)
  { dimension:"NS", text:{en:"When learning something new, you focus on:", ar:"عند تعلم شيء جديد، تركز على:"},
    options:[{value:"S", text:{en:"Practical facts and details", ar:"الحقائق والتفاصيل العملية"}},
             {value:"N", text:{en:"Concepts and patterns", ar:"الأفكار والأنماط"}}]},
  { dimension:"NS", text:{en:"In discussions, you usually:", ar:"في النقاشات، عادة:"},
    options:[{value:"S", text:{en:"Stick to tangible examples", ar:"تتمسك بالأمثلة الملموسة"}},
             {value:"N", text:{en:"Explore hypothetical possibilities", ar:"تستكشف الاحتمالات الافتراضية"}}]},
  { dimension:"NS", text:{en:"You prefer information that is:", ar:"تفضل المعلومات التي تكون:"},
    options:[{value:"S", text:{en:"Concrete and specific", ar:"ملموسة ومحددة"}},
             {value:"N", text:{en:"Abstract and theoretical", ar:"مجردة ونظرية"}}]},
  { dimension:"NS", text:{en:"When solving problems, you:", ar:"عند حل المشكلات، أنت:"},
    options:[{value:"S", text:{en:"Rely on past experience", ar:"تعتمد على الخبرة السابقة"}},
             {value:"N", text:{en:"Imagine new approaches", ar:"تتخيل أساليب جديدة"}}]},
  { dimension:"NS", text:{en:"You trust more:", ar:"تثق أكثر:"},
    options:[{value:"S", text:{en:"Direct observations", ar:"بالملاحظات المباشرة"}},
             {value:"N", text:{en:"Your intuition", ar:"بحدسك"}}]},
  { dimension:"NS", text:{en:"You enjoy:", ar:"تستمتع بـ:"},
    options:[{value:"S", text:{en:"Tried and true methods", ar:"الطرق المجربة"}},
             {value:"N", text:{en:"Experimenting with ideas", ar:"التجريب بالأفكار"}}]},
  // TF (6)
  { dimension:"TF", text:{en:"In decision-making, you prioritize:", ar:"عند اتخاذ القرار تعطي الأولوية لـ:"},
    options:[{value:"T", text:{en:"Logic and objective criteria", ar:"المنطق والمعايير الموضوعية"}},
             {value:"F", text:{en:"Personal values and feelings", ar:"القيم والمشاعر"}}]},
  { dimension:"TF", text:{en:"When giving feedback, you:", ar:"عند تقديم الملاحظات:"},
    options:[{value:"T", text:{en:"Are honest even if blunt", ar:"تصارح حتى إن كانت قاسية"}},
             {value:"F", text:{en:"Soften words to avoid hurt", ar:"تلطف الكلمات مراعاةً للمشاعر"}}]},
  { dimension:"TF", text:{en:"You consider yourself more:", ar:"تعتبر نفسك أقرب إلى:"},
    options:[{value:"T", text:{en:"Analytical and critical", ar:"تحليلي وناقد"}},
             {value:"F", text:{en:"Empathetic and compassionate", ar:"متفهم ورحيم"}}]},
  { dimension:"TF", text:{en:"In conflicts, you:", ar:"في الخلافات، أنت:"},
    options:[{value:"T", text:{en:"Stick to principles", ar:"تلتزم بالمبادئ"}},
             {value:"F", text:{en:"Seek harmony and compromise", ar:"تسعى للانسجام والتسوية"}}]},
  { dimension:"TF", text:{en:"Prefer to be seen as:", ar:"تفضل أن يُنظر إليك كـ:"},
    options:[{value:"T", text:{en:"Fair and just", ar:"عادل ومنصف"}},
             {value:"F", text:{en:"Kind and caring", ar:"لطيف ومهتم"}}]},
  { dimension:"TF", text:{en:"You value more:", ar:"تقدّر أكثر:"},
    options:[{value:"T", text:{en:"Efficiency and results", ar:"الكفاءة والنتائج"}},
             {value:"F", text:{en:"Relationships and cooperation", ar:"العلاقات والتعاون"}}]},
  // JP (6) = 24 so far
  { dimension:"JP", text:{en:"When scheduling tasks, you:", ar:"عند تنظيم المهام، أنت:"},
    options:[{value:"J", text:{en:"Plan in detail and stick to it", ar:"تضع خطة مفصلة وتلتزم بها"}},
             {value:"P", text:{en:"Keep it flexible and adapt", ar:"تحافظ على المرونة وتتأقلم"}}]},
  { dimension:"JP", text:{en:"You prefer your environment:", ar:"تفضل أن يكون محيطك:"},
    options:[{value:"J", text:{en:"Organized and orderly", ar:"منظم ومرتب"}},
             {value:"P", text:{en:"Relaxed and spontaneous", ar:"مرن وعفوي"}}]},
  { dimension:"JP", text:{en:"When traveling, you:", ar:"عند السفر، أنت:"},
    options:[{value:"J", text:{en:"Plan itinerary ahead", ar:"تخطط للرحلة مسبقًا"}},
             {value:"P", text:{en:"Decide on the go", ar:"تقرر أثناء السير"}}]},
  { dimension:"JP", text:{en:"In meetings, you:", ar:"في الاجتماعات، أنت:"},
    options:[{value:"J", text:{en:"Like clear agendas", ar:"تحب جداول أعمال واضحة"}},
             {value:"P", text:{en:"Prefer open discussion", ar:"تفضل النقاش المفتوح"}}]},
  { dimension:"JP", text:{en:"You feel more comfortable when:", ar:"تشعر براحة أكبر عندما:"},
    options:[{value:"J", text:{en:"Decisions are finalized", ar:"تُحسم القرارات"}},
             {value:"P", text:{en:"Options remain open", ar:"تبقى الخيارات مفتوحة"}}]},
  { dimension:"JP", text:{en:"Your work style is:", ar:"أسلوب عملك:"},
    options:[{value:"J", text:{en:"Structured & deadline-driven", ar:"منظم وملتزم بالمواعيد"}},
             {value:"P", text:{en:"Flexible & free-flowing", ar:"مرن ومتدفق"}}]},
  // Extra to reach 25 (EI)
  { dimension:"EI", text:{en:"When sharing experiences, you:", ar:"عند مشاركة تجاربك، أنت:"},
    options:[{value:"E", text:{en:"Speak spontaneously and openly", ar:"تتحدث بعفوية وانفتاح"}},
             {value:"I", text:{en:"Think it through before sharing", ar:"تفكر قبل المشاركة"}}]},
];

/**********************
 * Results dictionary
 **********************/
const mbtiResults = {
  INTJ:{name:{en:"INTJ – The Architect",ar:"INTJ – العقل المدبر"},
    desc:{en:"Strategic, independent thinkers who love mastering systems. Long-term planners who value competence.",
         ar:"مفكرون استراتيجيون مستقلون يحبون إتقان الأنظمة. يخططون على المدى البعيد ويقدّرون الكفاءة."}},
  INTP:{name:{en:"INTP – The Logician",ar:"INTP – المفكر"},
    desc:{en:"Innovative problem-solvers driven by curiosity and logic. Enjoy exploring theories and models.",
         ar:"حلّالون مبتكرون للمشكلات بدافع الفضول والمنطق. يستمتعون باستكشاف النظريات والنماذج."}},
  ENTJ:{name:{en:"ENTJ – The Commander",ar:"ENTJ – القائد"},
    desc:{en:"Bold, decisive leaders who organize people and resources toward a vision.",
         ar:"قادة حاسمون وجريئون ينظمون الأفراد والموارد باتجاه رؤية واضحة."}},
  ENTP:{name:{en:"ENTP – The Debater",ar:"ENTP – المبتكر"},
    desc:{en:"Quick-witted idea generators who enjoy challenges and debate.",
         ar:"سريعو البديهة يولدون الأفكار ويستمتعون بالتحديات والجدال البنّاء."}},
  INFJ:{name:{en:"INFJ – The Advocate",ar:"INFJ – المستشار"},
    desc:{en:"Insightful idealists focused on meaning, purpose, and helping others grow.",
         ar:"مثاليون ذوو بصيرة يركزون على المعنى والغاية ومساعدة الآخرين على التطور."}},
  INFP:{name:{en:"INFP – The Mediator",ar:"INFP – المعالج"},
    desc:{en:"Empathetic, value-driven creatives seeking harmony and authenticity.",
         ar:"مبدعون مدفوعون بالقيم، متعاطفون ويبحثون عن الانسجام والأصالة."}},
  ENFJ:{name:{en:"ENFJ – The Protagonist",ar:"ENFJ – المعلم"},
    desc:{en:"Charismatic organizers who inspire, coach, and unite people.",
         ar:"منظمون كاريزميون يلهمون ويؤطرون ويجمعون الناس."}},
  ENFP:{name:{en:"ENFP – The Campaigner",ar:"ENFP – البطل"},
    desc:{en:"Energetic connectors who explore possibilities and motivate others.",
         ar:"حيويون يوسّعون الاحتمالات ويحفزون الآخرين."}},
  ISTJ:{name:{en:"ISTJ – The Logistician",ar:"ISTJ – اللوجستي"},
    desc:{en:"Dependable realists who value duty, details, and consistency.",
         ar:"واقعيون يمكن الاعتماد عليهم، يقدّرون الواجب والتفاصيل والثبات."}},
  ISFJ:{name:{en:"ISFJ – The Defender",ar:"ISFJ – المدافع"},
    desc:{en:"Caring protectors who create stability and support for others.",
         ar:"حماة ودودون يخلقون الاستقرار ويدعمون من حولهم."}},
  ESTJ:{name:{en:"ESTJ – The Executive",ar:"ESTJ – المنفذ"},
    desc:{en:"Efficient organizers who set standards and drive execution.",
         ar:"منظمون فعّالون يضعون المعايير ويدفعون نحو التنفيذ."}},
  ESFJ:{name:{en:"ESFJ – The Consul",ar:"ESFJ – المقدم"},
    desc:{en:"Warm, sociable helpers who value harmony and tradition.",
         ar:"اجتماعيون دافئون يقدّرون الانسجام والتقاليد."}},
  ISTP:{name:{en:"ISTP – The Virtuoso",ar:"ISTP – الحرفي"},
    desc:{en:"Hands-on investigators who learn by doing and love tools.",
         ar:"مستكشفون عمليّون يتعلمون بالتجربة ويحبون الأدوات."}},
  ISFP:{name:{en:"ISFP – The Adventurer",ar:"ISFP – المغامر"},
    desc:{en:"Gentle artists who value experience, freedom, and aesthetics.",
         ar:"فنانون لطفاء يقدّرون التجربة والحرية والجماليات."}},
  ESTP:{name:{en:"ESTP – The Entrepreneur",ar:"ESTP – رائد الأعمال"},
    desc:{en:"Action-oriented realists who thrive in fast-moving situations.",
         ar:"واقعيون عمليّون يزدهرون في المواقف السريعة."}},
  ESFP:{name:{en:"ESFP – The Entertainer",ar:"ESFP – الفنان"},
    desc:{en:"Spontaneous, cheerful doers who bring energy everywhere.",
         ar:"عفويون مرحون ينشرون الحماس أينما كانوا."}}
};

/****************
 * State & DOM
 ****************/
let currentLang = localStorage.getItem('lang') || 'en';
let currentQuestionIndex = 0;
let answers = [];

const app = document.getElementById('app');
const startScreen = document.getElementById('start-screen');
const questionContainer = document.getElementById('question-container');
const loadingScreen = document.getElementById('loading-screen');
const resultContainer = document.getElementById('result-container');

const langArBtn = document.getElementById('lang-ar');
const langEnBtn = document.getElementById('lang-en');
const themeToggleBtn = document.getElementById('theme-toggle');

const startTitleEl = document.getElementById('start-title');
const startDescEl = document.getElementById('start-description');
const startBtn = document.getElementById('start-button');
const nextBtn = document.getElementById('next-button');
const retryBtn = document.getElementById('retry-button');
const questionNumberEl = document.getElementById('question-number');
const questionTextEl = document.getElementById('question-text');
const optionsContainer = document.getElementById('options');
const progressLabel = document.getElementById('progress-label');
const progressFill = document.getElementById('progress-fill');
const resultTitleEl = document.getElementById('result-title');
const resultSubtitleEl = document.getElementById('result-subtitle');
const resultDescriptionEl = document.getElementById('result-description');
const shareTwitter = document.getElementById('share-twitter');
const shareWhatsApp = document.getElementById('share-whatsapp');

/***********************
 * Theme (persisted)
 ***********************/
let isDarkMode = (localStorage.getItem('theme') === 'dark');
function applyTheme() {
  document.body.classList.toggle('dark-mode', isDarkMode);
  app.classList.toggle('dark-mode', isDarkMode);
  themeToggleBtn.textContent = isDarkMode ? '☀️' : '🌙';
}
function toggleTheme(){
  isDarkMode = !isDarkMode;
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  applyTheme();
}
themeToggleBtn.addEventListener('click', toggleTheme);

/*****************************
 * Language & static strings
 *****************************/
function updateStaticTexts() {
  const t = translations[currentLang];
  document.body.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

  langArBtn.classList.toggle('active', currentLang === 'ar');
  langEnBtn.classList.toggle('active', currentLang === 'en');

  startTitleEl.textContent = t.startTitle;
  startDescEl.textContent = t.startDescription;
  startBtn.textContent = t.startButton;
  nextBtn.textContent = t.nextButton;
  retryBtn.textContent = t.retryButton;
  document.getElementById('loading-text').textContent = t.loading;

  const total = questions.length;
  progressLabel.textContent = t.progressLabel(currentQuestionIndex+1, total);

  // If result visible, update labels
  if (!resultContainer.classList.contains('hidden')) {
    resultTitleEl.textContent = `${t.yourType} ${resultTitleEl.getAttribute('data-type')}`;
    resultSubtitleEl.textContent = t.resultSubtitle;
  }
}
function setLanguage(lang){
  currentLang = lang;
  localStorage.setItem('lang', lang);
  updateStaticTexts();
  // update current view
  if (!questionContainer.classList.contains('hidden')) showQuestion();
  if (!resultContainer.classList.contains('hidden')) showResult(false);
}

/****************
 * Quiz flow
 ****************/
function startTest(){
  currentQuestionIndex = 0;
  answers = [];
  startScreen.classList.add('hidden');
  resultContainer.classList.add('hidden');
  loadingScreen.classList.add('hidden');
  questionContainer.classList.remove('hidden');
  showQuestion();
}

function showQuestion(){
  const t = translations[currentLang];
  const total = questions.length;
  const current = currentQuestionIndex + 1;

  questionNumberEl.textContent = t.questionCounter(current, total);
  const q = questions[currentQuestionIndex];
  questionTextEl.textContent = q.text[currentLang];

  // options
  optionsContainer.innerHTML = '';
  q.options.forEach(opt=>{
    const btn = document.createElement('button');
    btn.className = 'option-button';
    btn.textContent = opt.text[currentLang];
    btn.dataset.value = opt.value;
    btn.addEventListener('click', ()=>{
      optionsContainer.querySelectorAll('.option-button').forEach(b=>b.classList.remove('selected'));
      btn.classList.add('selected');
    });
    if (document.body.classList.contains('dark-mode')) btn.classList.add('dark-mode');
    optionsContainer.appendChild(btn);
  });

  // progress
  progressLabel.textContent = t.progressLabel(current, total);
  progressFill.style.width = `${Math.round((current-1)/total*100)}%`;

  // next button label
  nextBtn.textContent = (currentQuestionIndex === total-1) ? t.getResult : t.nextButton;
}

function nextQuestion(){
  const selected = optionsContainer.querySelector('.option-button.selected');
  if (!selected) { alert(translations[currentLang].selectWarning); return; }

  answers.push({dimension: questions[currentQuestionIndex].dimension, value: selected.dataset.value});
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    // show loading then result
    questionContainer.classList.add('hidden');
    loadingScreen.classList.remove('hidden');
    setTimeout(()=> showResult(true), 900); // شاشة تحميل قصيرة
  }
}

function showResult(fromLoading){
  const counts = {E:0,I:0,N:0,S:0,T:0,F:0,J:0,P:0};
  answers.forEach(a=>{ counts[a.value]++; });

  const typeLetters = [];
  typeLetters.push(counts.E >= counts.I ? 'E':'I');
  typeLetters.push(counts.N >= counts.S ? 'N':'S');
  typeLetters.push(counts.T >= counts.F ? 'T':'F');
  typeLetters.push(counts.J >= counts.P ? 'J':'P');
  const type = typeLetters.join('');

  const t = translations[currentLang];
  const info = mbtiResults[type];

  // title & description
  resultTitleEl.setAttribute('data-type', type);
  resultTitleEl.textContent = `${t.yourType} ${type}`;
  resultSubtitleEl.textContent = t.resultSubtitle;

  // detailed block
  const name = info?.name?.[currentLang] || type;
  const desc = info?.desc?.[currentLang] || '';
  resultDescriptionEl.innerHTML = `
    <p class="badge">${name}</p>
    <p>${desc}</p>
    <p>${currentLang==='ar'
        ? 'تذكّر أن MBTI أداة استكشافية وليست حكمًا نهائيًا على الشخصية.'
        : 'Remember: MBTI is a reflective tool, not a definitive label.'}
    </p>
  `;

  // share links
  const shareMsg = encodeURIComponent(t.shareText(type));
  const url = encodeURIComponent(location.href);
  shareTwitter.href = `https://twitter.com/intent/tweet?text=${shareMsg}&url=${url}`;
  shareWhatsApp.href = `https://wa.me/?text=${shareMsg}%20${url}`;

  if (fromLoading) {
    loadingScreen.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    startScreen.classList.remove('hidden'); // لإظهار زر إعادة
  } else {
    // just re-render texts
  }

  // reset for next run
  currentQuestionIndex = 0;
  answers = [];
  progressFill.style.width = '0%';
}

/****************
 * Init
 ****************/
(function init(){
  document.getElementById('year').textContent = new Date().getFullYear();
  applyTheme();
  updateStaticTexts();
})();
