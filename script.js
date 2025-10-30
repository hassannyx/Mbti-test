/***********************
 * Translations (UI)
 ***********************/
const translations = {
  en: {
    startTitle: "MBTI Personality Test",
    startDescription: "Discover your MBTI type in ~2 minutes. 35 clear questions with four choices each.",
    startButton: "Start Test",
    nextButton: "Next",
    getResult: "Get Result",
    retryButton: "Restart",
    loading: "Analyzing your answers…",
    yourType: "Your Type:",
    resultSubtitle: "Type overview and quick insights",
    questionCounter: (i,t)=>`Question ${i} of ${t}`,
    progressLabel: (i,t)=>`${i}/${t}`,
    selectWarning: "Please choose an option to continue.",
    shareText: (type)=>`I got ${type} on this MBTI test!`,
  },
  ar: {
    startTitle: "اختبار شخصية MBTI",
    startDescription: "اكتشف نمط شخصيتك خلال ~دقيقتين. 35 سؤالًا واضحة وأربعة خيارات لكل سؤال.",
    startButton: "ابدأ الاختبار",
    nextButton: "التالي",
    getResult: "احصل على النتيجة",
    retryButton: "أعد الاختبار",
    loading: "جارٍ تحليل إجاباتك…",
    yourType: "نوعك:",
    resultSubtitle: "نبذة سريعة وتحليلات مختصرة",
    questionCounter: (i,t)=>`السؤال ${i} من ${t}`,
    progressLabel: (i,t)=>`${i}/${t}`,
    selectWarning: "يرجى اختيار إجابة للمتابعة.",
    shareText: (type)=>`حصلت على النمط ${type} في هذا الاختبار!`
  }
};

/******************************************
 * 35 Questions – 4 choices (semantic, not Likert)
 * Each maps to one pole of the dimension
 ******************************************/
const questions = [
  /* EI (9) */
  qEI("At a party, you tend to…",
      ["Lead the fun and meet everyone","Chat with a few new people","Stay with your circle","Prefer a quiet corner"],
      ["E","E","I","I"],
      "في حفلة، تميل إلى…",
      ["تقود الأجواء وتتعرف على الجميع","تتحدث مع بعض الوجوه الجديدة","تبقى مع مجموعتك","تفضّل زاوية هادئة"]),
  qEI("Your weekend energy comes from…",
      ["Group outings and events","Coffee with a friend","Solo hobbies","Time alone at home"],
      ["E","E","I","I"],
      "طاقة عطلتك تأتي من…",
      ["خروجات ونشاطات جماعية","قهوة مع صديق","هوايات فردية","وقت هادئ في البيت"]),
  qEI("In class or meetings, you…",
      ["Speak up quickly","Share after some thought","Prefer to listen","Write ideas privately"],
      ["E","E","I","I"],
      "في الصف أو الاجتماعات أنت…",
      ["تتحدث بسرعة","تشارك بعد قليل من التفكير","تفضّل الاستماع","تكتب أفكارك على انفراد"]),
  qEI("When networking, you…",
      ["Enjoy starting conversations","Greet many, chat briefly","Stick near one person","Avoid mingling"],
      ["E","E","I","I"],
      "عند التعارف أنت…",
      ["تستمتع ببدء الحوارات","تسلّم على الكثير وتتحدث قليلًا","تلتصق بشخص واحد","تتجنب الاختلاط"]),
  qEI("Your ideal workspace is…",
      ["Open, lively, collaborative","Small team with buzz","Quiet shared room","Private space"],
      ["E","E","I","I"],
      "مساحة عملك المفضلة…",
      ["مفتوحة ونابضة وتعاونية","فريق صغير مع حركة خفيفة","غرفة مشتركة هادئة","مساحة خاصة"]),
  qEI("On social media, you…",
      ["Post stories daily","Comment and engage often","Browse silently","Rarely open apps"],
      ["E","E","I","I"],
      "في وسائل التواصل…",
      ["تنشر يوميًا","تعلّق وتتفاعل كثيرًا","تتصفح بصمت","نادراً ما تفتح التطبيقات"]),
  qEI("Group projects feel…",
      ["Exciting and motivating","Useful for ideas","Draining but okay","Hard; prefer solo"],
      ["E","E","I","I"],
      "المشاريع الجماعية تبدو…",
      ["ممتعة ومحفِّزة","مفيدة للأفكار","مرهِقة لكن مقبولة","صعبة؛ تفضّل العمل الفردي"]),
  qEI("Meeting new people is…",
      ["Thrilling opportunity","Nice most times","A bit uncomfortable","Exhausting"],
      ["E","E","I","I"],
      "التعرّف على أشخاص جدد…",
      ["فرصة مثيرة","جيد غالبًا","غير مريح قليلًا","مرهِق"]),
  qEI("During breaks, you…",
      ["Seek company","Join whoever is around","Take a quiet walk","Recharge alone"],
      ["E","E","I","I"],
      "أثناء الاستراحة أنت…",
      ["تبحث عن الصحبة","تنضم لمن حولك","تتمشى بهدوء","تستعيد نشاطك وحدك"]),

  /* NS (9) */
  qNS("When learning, you prefer…",
      ["Real-life examples","Clear step-by-step","Big-picture ideas","Abstract models"],
      ["S","S","N","N"],
      "عند التعلّم تفضّل…",
      ["أمثلة واقعية","خطوات واضحة متتابعة","الصورة الكلية","نماذج نظرية"]),
  qNS("When describing a place, you…",
      ["Mention facts and details","List landmarks","Share the vibe","Paint possibilities"],
      ["S","S","N","N"],
      "عند وصف مكان…",
      ["تذكر الحقائق والتفاصيل","تسرد المعالم","تنقل الإحساس العام","ترسم احتمالات"]),
  qNS("You trust…",
      ["What you can observe","Repeated experience","Gut patterns you sense","Future potentials"],
      ["S","S","N","N"],
      "تثق أكثر بـ…",
      ["ما تراه وتلاحظه","خبرة متكررة","الأنماط التي تشعر بها","الاحتمالات المستقبلية"]),
  qNS("In brainstorming, you…",
      ["Ask for practical uses","Ground ideas in data","Stretch ideas wildly","Connect distant dots"],
      ["S","S","N","N"],
      "في العصف الذهني…",
      ["تسأل عن الاستخدام العملي","تدعم الأفكار بالبيانات","تمدّ الأفكار بعيدًا","تربط نقاطًا بعيدة"]),
  qNS("On instructions, you…",
      ["Follow as written","Prefer checklists","Skim and adapt","Jump to concepts"],
      ["S","S","N","N"],
      "مع التعليمات…",
      ["تتبعها حرفيًا","تفضّل قوائم خطوات","تطالع سريعًا وتعدّل","تنتقل مباشرةً للمفاهيم"]),
  qNS("Your notes are…",
      ["Detailed bullets","Dates & figures","Mind-maps","Keywords & arrows"],
      ["S","S","N","N"],
      "ملاحظاتك…",
      ["نِقاط مفصلة","تواريخ وأرقام","خرائط ذهنية","كلمات مفتاحية وسِهام"]),
  qNS("Planning a trip, you…",
      ["List bookings","Fix timings exactly","Explore themes","Leave room for surprises"],
      ["S","S","N","N"],
      "عند التخطيط لرحلة…",
      ["تحجز وتدوّن","تثبّت المواعيد بدقة","تستكشف فكرة الرحلة","تترك مساحة للمفاجآت"]),
  qNS("When reading news, you…",
      ["Look for verified facts","Compare multiple sources","Spot emerging trends","Predict implications"],
      ["S","S","N","N"],
      "عند قراءة الأخبار…",
      ["تبحث عن حقائق مؤكدة","تقارن مصادر متعددة","ترصد اتجاهات صاعدة","تتنبأ بالتداعيات"]),
  qNS("Your creativity tends to…",
      ["Fix real problems","Improve existing things","Invent new concepts","Reimagine systems"],
      ["S","S","N","N"],
      "إبداعك يميل إلى…",
      ["حلّ مشاكل ملموسة","تحسين الموجود","ابتكار مفاهيم جديدة","إعادة تصور الأنظمة"]),

  /* TF (9) */
  qTF("When deciding, you value…",
      ["Objective fairness","Consistent criteria","Human impact","Harmony of relations"],
      ["T","T","F","F"],
      "عند اتخاذ القرار تقدّر…",
      ["العدالة الموضوعية","معايير ثابتة","أثر القرار على الناس","انسجام العلاقات"]),
  qTF("In feedback, you…",
      ["State facts directly","Prioritize accuracy","Choose gentle phrasing","Protect feelings first"],
      ["T","T","F","F"],
      "في الملاحظات…",
      ["تُصرّح بالوقائع مباشرة","تُقدّم الدقة أولًا","تختار عبارات لطيفة","تحمي المشاعر أولًا"]),
  qTF("Conflict approach…",
      ["Clarify the issue","Fix the broken rule","Seek middle ground","Restore trust"],
      ["T","T","F","F"],
      "التعامل مع الخلاف…",
      ["توضّح المشكلة","تصحّح القاعدة المكسورة","تبحث عن حل وسط","تُعيد الثقة"]),
  qTF("You prefer to be seen as…",
      ["Rational","Firm but fair","Compassionate","Supportive"],
      ["T","T","F","F"],
      "تفضّل أن يُنظر إليك كـ…",
      ["عقلاني","حازم وعادل","رحيم","داعم"]),
  qTF("At work, you focus on…",
      ["Efficiency metrics","Logic of the plan","Team morale","People’s needs"],
      ["T","T","F","F"],
      "في العمل تركّز على…",
      ["مقاييس الكفاءة","منطق الخطة","معنويات الفريق","احتياجات الأفراد"]),
  qTF("When giving advice, you…",
      ["Analyze options","Compare pros/cons","Consider feelings","Encourage gently"],
      ["T","T","F","F"],
      "عند تقديم نصيحة…",
      ["تحلّل الخيارات","تقارن المزايا والعيوب","تراعي المشاعر","تشجع بلطف"]),
  qTF("Your compliments are…",
      ["Specific to results","Skill-focused","Warm & appreciative","Character-focused"],
      ["T","T","F","F"],
      "إطراؤك يكون…",
      ["محددًا للنتائج","يركز على المهارة","دافئًا وتقديريًا","يركز على الشخصية"]),
  qTF("When rules clash with needs…",
      ["Keep rules","Adjust carefully","Bend for people","Choose empathy"],
      ["T","T","F","F"],
      "عندما تتعارض القواعد مع الاحتياجات…",
      ["تحافظ على القواعد","تعدّل بحذر","تليّن لأجل الناس","تختار التعاطف"]),
  qTF("Your debate style…",
      ["Evidence-driven","Structured logic","Listening & bridging","Finding shared values"],
      ["T","T","F","F"],
      "أسلوبك في النقاش…",
      ["مدعوم بالأدلة","منطق مُنظّم","استماع وبناء جسور","البحث عن قيَم مشتركة"]),

  /* JP (8) */
  qJP("Planning your day…",
      ["Schedule and stick","Make to-do lists","Keep it open","Decide as you go"],
      ["J","J","P","P"],
      "تخطيط يومك…",
      ["جدول صارم","قوائم مهام","مرن ومفتوح","تقرّر أثناء اليوم"]),
  qJP("Your desk is usually…",
      ["Organized","Sorted weekly","Creative mess","Shifts often"],
      ["J","J","P","P"],
      "مكتبك عادة…",
      ["منظم","يُرتب أسبوعيًا","فوضى إبداعية","يتغير كثيرًا"]),
  qJP("Deadlines are…",
      ["Sacred commitments","Targets to meet","Guidelines","Can move if needed"],
      ["J","J","P","P"],
      "المواعيد النهائية…",
      ["التزامات مقدّسة","أهداف لا بد من تحقيقها","إرشادات عامة","يمكن تعديلها إذا لزم"]),
  qJP("Packing for a trip…",
      ["Checklist done early","Packed the night before","Throw essentials","Pack on the way"],
      ["J","J","P","P"],
      "تحضير حقيبة السفر…",
      ["قائمة مكتملة مبكرًا","تُجهّز ليلة السفر","ترمي الأساسيات","تحضّر في الطريق"]),
  qJP("When plans change…",
      ["Prefer to resist","Adapt with a plan","Roll with it","Enjoy spontaneity"],
      ["J","J","P","P"],
      "عند تغيّر الخطة…",
      ["تفضّل المقاومة","تتأقلم بخطة بديلة","تمضي مع التغيير","تستمتع بالعفوية"]),
  qJP("Your ideal weekend…",
      ["Pre-planned activities","Booked times","See what happens","Free & flexible"],
      ["J","J","P","P"],
      "عطلتك المثالية…",
      ["أنشطة مخططة مسبقًا","مواعيد محجوزة","نشوف ما يحدث","حرّة ومرنة"]),
  qJP("Emails & messages…",
      ["Inbox zero","Organized labels","Unread piles","Answer when inspired"],
      ["J","J","P","P"],
      "البريد والرسائل…",
      ["صفر غير مقروء","تصنيفات منظمة","تراكم غير المقروء","تردّ حين تشعر بالرغبة"]),
  qJP("Projects usually finish…",
      ["Ahead of time","Exactly on time","Extend a bit","Evolve as needed"],
      ["J","J","P","P"],
      "المشاريع عادة تنتهي…",
      ["قبل الموعد","بالضبط في الموعد","تمتد قليلاً","تتطور حسب الحاجة"]),
];

/******** Helpers to build question objects with bilingual options ********/
function qEI(enQ, enOpts, vals, arQ, arOpts){return makeQ("EI",enQ,enOpts,vals,arQ,arOpts)}
function qNS(enQ, enOpts, vals, arQ, arOpts){return makeQ("NS",enQ,enOpts,vals,arQ,arOpts)}
function qTF(enQ, enOpts, vals, arQ, arOpts){return makeQ("TF",enQ,enOpts,vals,arQ,arOpts)}
function qJP(enQ, enOpts, vals, arQ, arOpts){return makeQ("JP",enQ,enOpts,vals,arQ,arOpts)}
function makeQ(dim,enQ,enOpts,vals,arQ,arOpts){
  return {
    dimension: dim,
    text: {en:enQ, ar:arQ},
    options: enOpts.map((txt,i)=>({
      text: {en: txt, ar: arOpts[i]},
      value: vals[i]
    }))
  }
}

/**********************
 * Results dictionary
 **********************/
const mbtiResults = {
  INTJ:{name:{en:"INTJ – The Architect",ar:"INTJ – العقل المدبر"},
    desc:{en:"Strategic, independent thinkers who master systems and plan long-term.",
         ar:"مفكرون استراتيجيون مستقلون يتقنون الأنظمة ويخططون على المدى البعيد."}},
  INTP:{name:{en:"INTP – The Logician",ar:"INTP – المفكر"},
    desc:{en:"Curious problem-solvers who explore theories and models.",
         ar:"حلّالون فضوليون يستكشفون النظريات والنماذج."}},
  ENTJ:{name:{en:"ENTJ – The Commander",ar:"ENTJ – القائد"},
    desc:{en:"Bold, decisive organizers who drive execution.",
         ar:"منظمون جريئون وحاسمون يدفعون نحو التنفيذ."}},
  ENTP:{name:{en:"ENTP – The Debater",ar:"ENTP – المبتكر"},
    desc:{en:"Quick-witted idea generators who love challenges.",
         ar:"سريعو البديهة يولدون الأفكار ويحبون التحدي."}},
  INFJ:{name:{en:"INFJ – The Advocate",ar:"INFJ – المستشار"},
    desc:{en:"Insightful idealists focused on meaning and growth.",
         ar:"مثاليون ذوو بصيرة يركزون على المعنى والنمو."}},
  INFP:{name:{en:"INFP – The Mediator",ar:"INFP – المعالج"},
    desc:{en:"Value-driven creatives seeking harmony and authenticity.",
         ar:"مبدعون تحركهم القيم ويبحثون عن الانسجام والأصالة."}},
  ENFJ:{name:{en:"ENFJ – The Protagonist",ar:"ENFJ – المعلم"},
    desc:{en:"Charismatic motivators who unite people.",
         ar:"محفزون كاريزميون يجمعون الناس."}},
  ENFP:{name:{en:"ENFP – The Campaigner",ar:"ENFP – البطل"},
    desc:{en:"Energetic connectors who explore possibilities.",
         ar:"حيويون يوسّعون الاحتمالات ويربطون الناس."}},
  ISTJ:{name:{en:"ISTJ – The Logistician",ar:"ISTJ – اللوجستي"},
    desc:{en:"Dependable realists who value duty and detail.",
         ar:"واقعيون يمكن الاعتماد عليهم، يقدّرون الواجب والتفاصيل."}},
  ISFJ:{name:{en:"ISFJ – The Defender",ar:"ISFJ – المدافع"},
    desc:{en:"Caring protectors who create stability for others.",
         ar:"حماة ودودون يخلقون الاستقرار."}},
  ESTJ:{name:{en:"ESTJ – The Executive",ar:"ESTJ – المنفذ"},
    desc:{en:"Efficient organizers who set and enforce standards.",
         ar:"منظمون فعّالون يضعون المعايير ويطبّقونها."}},
  ESFJ:{name:{en:"ESFJ – The Consul",ar:"ESFJ – المقدّم"},
    desc:{en:"Warm, sociable helpers who value tradition.",
         ar:"دافئون اجتماعيون يقدّرون التقاليد."}},
  ISTP:{name:{en:"ISTP – The Virtuoso",ar:"ISTP – الحرفي"},
    desc:{en:"Hands-on investigators who learn by doing.",
         ar:"مستكشفون عمليّون يتعلمون بالفعل."}},
  ISFP:{name:{en:"ISFP – The Adventurer",ar:"ISFP – المغامر"},
    desc:{en:"Gentle artists who value experience and freedom.",
         ar:"فنانون لطفاء يقدّرون التجربة والحرية."}},
  ESTP:{name:{en:"ESTP – The Entrepreneur",ar:"ESTP – رائد الأعمال"},
    desc:{en:"Action-oriented realists thriving in fast situations.",
         ar:"واقعيون عمليّون يزدهرون في المواقف السريعة."}},
  ESFP:{name:{en:"ESFP – The Entertainer",ar:"ESFP – الفنان"},
    desc:{en:"Spontaneous, cheerful doers who energize spaces.",
         ar:"عفويون مرحون يبعثون الطاقة."}}
};

/****************
 * State & DOM
 ****************/
let currentLang = localStorage.getItem('lang') || 'en'; // default English
let currentQuestionIndex = 0;
let answers = [];

const app = document.getElementById('app');
const startScreen = document.getElementById('start-screen');
const questionContainer = document.getElementById('question-container');
const loadingScreen = document.getElementById('loading-screen');
const resultContainer = document.getElementById('result-container');

const langArBtn = document.getElementById('lang-ar');
const langEnBtn = document.getElementById('lang-en');

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
const themeToggleBtn = document.getElementById('theme-toggle');
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
  const current = Math.min(currentQuestionIndex+1, total);
  progressLabel.textContent = t.progressLabel(current, total);

  if (!resultContainer.classList.contains('hidden')) {
    resultTitleEl.textContent = `${t.yourType} ${resultTitleEl.getAttribute('data-type')}`;
    resultSubtitleEl.textContent = t.resultSubtitle;
  }
}
function setLanguage(lang){
  currentLang = lang;
  localStorage.setItem('lang', lang);
  updateStaticTexts();
  if (!questionContainer.classList.contains('hidden')) showQuestion();
  if (!resultContainer.classList.contains('hidden')) showResult(false);
}

/****************
 * Quiz flow
 ****************/
function startTest(){
  currentQuestionIndex = 0;
  answers = [];
  resultContainer.classList.add('hidden');
  loadingScreen.classList.add('hidden');
  startScreen.classList.add('hidden');
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

  progressLabel.textContent = t.progressLabel(current, total);
  progressFill.style.width = `${Math.round((current-1)/total*100)}%`;

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
    questionContainer.classList.add('hidden');
    loadingScreen.classList.remove('hidden');
    setTimeout(()=> showResult(true), 900);
  }
}

function showResult(fromLoading){
  const counts = {E:0,I:0,N:0,S:0,T:0,F:0,J:0,P:0};
  answers.forEach(a=>{ counts[a.value]++; });

  const typeLetters = [];
  typeLetters.push(counts.E >= counts.I ? 'E':'I');
  typeLetters.push(counts.N >= counts.S ? 'N':'S');
  typeLetters.push(counts.T >= counts.F ? 'T':'F');
  typeLetters.push(counts.J 
