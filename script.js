/*
 * MBTI Test script
 *
 * This script controls the language selection, question navigation,
 * answer collection, and result calculation for a simple MBTI test.
 * It supports Arabic and English languages. Each question belongs to
 * one of four dimensions (EI, NS, TF, JP). Based on the user's
 * selections, their personality type is determined at the end of
 * the test.
 */

// Translation strings for UI elements
const translations = {
  en: {
    startTitle: "MBTI Personality Test",
    startDescription:
      "Discover your personality type based on the Myers–Briggs Type Indicator. Answer 25 questions to find out your type.",
    startButton: "Start Test",
    nextButton: "Next",
    retryButton: "Restart",
    resultLabel: "Your Type:",
    questionCounter: (current, total) => `Question ${current} of ${total}`,
    selectWarning: "Please select an option to continue."
  },
  ar: {
    startTitle: "اختبار شخصية MBTI",
    startDescription:
      "اكتشف نمط شخصيتك بناءً على مؤشر مايرز–بريغز. أجب على 25 سؤالاً لمعرفة نمطك.",
    startButton: "ابدأ الاختبار",
    nextButton: "التالي",
    retryButton: "أعد الاختبار",
    resultLabel: "نوعك:",
    questionCounter: (current, total) => `السؤال ${current} من ${total}`,
    selectWarning: "يرجى اختيار إجابة للمتابعة."
  }
};

// Questions array with translations and dimension mapping
const questions = [
  // Extroversion vs Introversion (E/I)
  {
    dimension: "EI",
    text: {
      en: "At a social event, do you usually:",
      ar: "في حدث اجتماعي، هل عادةً:"
    },
    options: [
      {
        value: "E",
        text: {
          en: "Start conversations with many new people",
          ar: "تبدأ محادثات مع أشخاص جدد"
        }
      },
      {
        value: "I",
        text: {
          en: "Stick to familiar faces or stay quiet",
          ar: "تبقى مع من تعرفه أو تبقى صامتًا"
        }
      }
    ]
  },
  {
    dimension: "EI",
    text: {
      en: "Do you recharge by:",
      ar: "هل تستمد طاقتك من:"
    },
    options: [
      {
        value: "E",
        text: {
          en: "Being around people",
          ar: "التواجد مع الآخرين"
        }
      },
      {
        value: "I",
        text: {
          en: "Spending time alone",
          ar: "البقاء وحيدًا"
        }
      }
    ]
  },
  {
    dimension: "EI",
    text: {
      en: "When working on a project, do you prefer:",
      ar: "عند العمل على مشروع، تفضل:"
    },
    options: [
      {
        value: "E",
        text: {
          en: "Group collaboration",
          ar: "العمل ضمن مجموعة"
        }
      },
      {
        value: "I",
        text: {
          en: "Working independently",
          ar: "العمل بمفردك"
        }
      }
    ]
  },
  {
    dimension: "EI",
    text: {
      en: "Do you feel more comfortable:",
      ar: "هل تشعر براحة أكثر في:"
    },
    options: [
      {
        value: "E",
        text: {
          en: "Speaking in front of a crowd",
          ar: "التحدث أمام الناس"
        }
      },
      {
        value: "I",
        text: {
          en: "Writing or communicating one-on-one",
          ar: "التواصل الفردي أو الكتابة"
        }
      }
    ]
  },
  {
    dimension: "EI",
    text: {
      en: "Do you tend to:",
      ar: "تميل إلى:"
    },
    options: [
      {
        value: "E",
        text: {
          en: "Share your ideas openly",
          ar: "مشاركة الأفكار"
        }
      },
      {
        value: "I",
        text: {
          en: "Keep your thoughts to yourself",
          ar: "الاحتفاظ بالأفكار"
        }
      }
    ]
  },
  {
    dimension: "EI",
    text: {
      en: "On weekends, you prefer:",
      ar: "في عطلة نهاية الأسبوع، تفضل:"
    },
    options: [
      {
        value: "E",
        text: {
          en: "Going out with friends",
          ar: "الخروج مع الأصدقاء"
        }
      },
      {
        value: "I",
        text: {
          en: "Staying at home with a book or movie",
          ar: "البقاء في المنزل"
        }
      }
    ]
  },
  // Sensing vs Intuition (S/N)
  {
    dimension: "NS",
    text: {
      en: "When learning something new, do you focus on:",
      ar: "عند تعلم شيء جديد، تركز على:"
    },
    options: [
      {
        value: "S",
        text: {
          en: "Practical facts and details",
          ar: "الحقائق والتفاصيل"
        }
      },
      {
        value: "N",
        text: {
          en: "Concepts and patterns",
          ar: "الأفكار والاحتمالات"
        }
      }
    ]
  },
  {
    dimension: "NS",
    text: {
      en: "In discussions, do you:",
      ar: "في النقاشات، هل:"
    },
    options: [
      {
        value: "S",
        text: {
          en: "Stick to tangible examples",
          ar: "الأمثلة الملموسة"
        }
      },
      {
        value: "N",
        text: {
          en: "Explore hypothetical possibilities",
          ar: "الاحتمالات الافتراضية"
        }
      }
    ]
  },
  {
    dimension: "NS",
    text: {
      en: "Do you prefer information that is:",
      ar: "تفضل المعلومات التي تكون:"
    },
    options: [
      {
        value: "S",
        text: {
          en: "Concrete and specific",
          ar: "ملموسة ومحددة"
        }
      },
      {
        value: "N",
        text: {
          en: "Abstract and theoretical",
          ar: "مجردة ونظرية"
        }
      }
    ]
  },
  {
    dimension: "NS",
    text: {
      en: "When solving problems, do you:",
      ar: "عند حل المشكلات، هل:"
    },
    options: [
      {
        value: "S",
        text: {
          en: "Rely on past experience",
          ar: "الاعتماد على الخبرة"
        }
      },
      {
        value: "N",
        text: {
          en: "Imagine new approaches",
          ar: "تخيل أساليب جديدة"
        }
      }
    ]
  },
  {
    dimension: "NS",
    text: {
      en: "Do you trust:",
      ar: "هل تثق أكثر في:"
    },
    options: [
      {
        value: "S",
        text: {
          en: "Direct observations",
          ar: "الملاحظات المباشرة"
        }
      },
      {
        value: "N",
        text: {
          en: "Your gut instincts",
          ar: "الحدس"
        }
      }
    ]
  },
  {
    dimension: "NS",
    text: {
      en: "Do you enjoy:",
      ar: "هل تستمتع بـ:"
    },
    options: [
      {
        value: "S",
        text: {
          en: "Using tried and true methods",
          ar: "استخدام الطرق المجربة"
        }
      },
      {
        value: "N",
        text: {
          en: "Experimenting with ideas",
          ar: "التجريب بالأفكار"
        }
      }
    ]
  },
  // Thinking vs Feeling (T/F)
  {
    dimension: "TF",
    text: {
      en: "In decision-making, do you prioritize:",
      ar: "عند اتخاذ القرار، هل تعطي الأولوية لـ:"
    },
    options: [
      {
        value: "T",
        text: {
          en: "Logic and objective criteria",
          ar: "المنطق والمعايير"
        }
      },
      {
        value: "F",
        text: {
          en: "Personal values and people’s feelings",
          ar: "القيم والمشاعر"
        }
      }
    ]
  },
  {
    dimension: "TF",
    text: {
      en: "When giving feedback, do you:",
      ar: "عند تقديم الملاحظات، هل:"
    },
    options: [
      {
        value: "T",
        text: {
          en: "Be honest even if it’s blunt",
          ar: "الصراحة حتى لو قاسية"
        }
      },
      {
        value: "F",
        text: {
          en: "Soften your words to avoid hurting feelings",
          ar: "مراعاة مشاعر الآخرين"
        }
      }
    ]
  },
  {
    dimension: "TF",
    text: {
      en: "Do you consider yourself:",
      ar: "هل تعتبر نفسك:"
    },
    options: [
      {
        value: "T",
        text: {
          en: "Analytical and critical",
          ar: "تحليلي وناقد"
        }
      },
      {
        value: "F",
        text: {
          en: "Empathetic and compassionate",
          ar: "متفهم ورحيم"
        }
      }
    ]
  },
  {
    dimension: "TF",
    text: {
      en: "In conflicts, do you:",
      ar: "في الخلافات، هل:"
    },
    options: [
      {
        value: "T",
        text: {
          en: "Stick to principles",
          ar: "الالتزام بالمبادئ"
        }
      },
      {
        value: "F",
        text: {
          en: "Seek harmony and compromise",
          ar: "السعي للانسجام"
        }
      }
    ]
  },
  {
    dimension: "TF",
    text: {
      en: "Would you rather be seen as:",
      ar: "تفضل أن يُنظر إليك كـ:"
    },
    options: [
      {
        value: "T",
        text: {
          en: "Fair and just",
          ar: "عادل ومنصف"
        }
      },
      {
        value: "F",
        text: {
          en: "Kind and caring",
          ar: "لطيف ومهتم"
        }
      }
    ]
  },
  {
    dimension: "TF",
    text: {
      en: "Do you value:",
      ar: "هل تقدر أكثر:"
    },
    options: [
      {
        value: "T",
        text: {
          en: "Efficiency and results",
          ar: "الكفاءة والنتائج"
        }
      },
      {
        value: "F",
        text: {
          en: "Relationships and cooperation",
          ar: "العلاقات والتعاون"
        }
      }
    ]
  },
  // Judging vs Perceiving (J/P)
  {
    dimension: "JP",
    text: {
      en: "When scheduling tasks, do you:",
      ar: "عند تنظيم المهام، هل:"
    },
    options: [
      {
        value: "J",
        text: {
          en: "Make detailed plans and stick to them",
          ar: "خطط مفصلة"
        }
      },
      {
        value: "P",
        text: {
          en: "Keep it flexible and adapt as you go",
          ar: "مرونة وتأقلم"
        }
      }
    ]
  },
  {
    dimension: "JP",
    text: {
      en: "Do you prefer your environment to be:",
      ar: "تفضل أن يكون محيطك:"
    },
    options: [
      {
        value: "J",
        text: {
          en: "Organized and orderly",
          ar: "منظم ومرتب"
        }
      },
      {
        value: "P",
        text: {
          en: "Relaxed and spontaneous",
          ar: "مرن وعفوي"
        }
      }
    ]
  },
  {
    dimension: "JP",
    text: {
      en: "When traveling, do you:",
      ar: "عند السفر، هل:"
    },
    options: [
      {
        value: "J",
        text: {
          en: "Plan your itinerary ahead",
          ar: "تخطيط مسبق"
        }
      },
      {
        value: "P",
        text: {
          en: "Decide on the go",
          ar: "قرارات أثناء السير"
        }
      }
    ]
  },
  {
    dimension: "JP",
    text: {
      en: "In meetings, do you:",
      ar: "في الاجتماعات، هل:"
    },
    options: [
      {
        value: "J",
        text: {
          en: "Like having clear agendas",
          ar: "جداول أعمال واضحة"
        }
      },
      {
        value: "P",
        text: {
          en: "Prefer open discussions",
          ar: "مناقشات مفتوحة"
        }
      }
    ]
  },
  {
    dimension: "JP",
    text: {
      en: "Do you feel more comfortable when:",
      ar: "تشعر براحة أكبر عندما:"
    },
    options: [
      {
        value: "J",
        text: {
          en: "Decisions are finalized",
          ar: "اتخاذ القرار"
        }
      },
      {
        value: "P",
        text: {
          en: "Options remain open",
          ar: "بقاء الخيارات مفتوحة"
        }
      }
    ]
  },
  {
    dimension: "JP",
    text: {
      en: "Is your work style:",
      ar: "أسلوب عملك هو:"
    },
    options: [
      {
        value: "J",
        text: {
          en: "Structured and deadline-driven",
          ar: "منظم وملتزم بالمواعيد"
        }
      },
      {
        value: "P",
        text: {
          en: "Flexible and free-flowing",
          ar: "مرن ومتدفق"
        }
      }
    ]
  },
  // Extra question for EI dimension to make a total of 25
  {
    dimension: "EI",
    text: {
      en: "When sharing your experiences, do you:",
      ar: "عند مشاركة تجاربك، هل:"
    },
    options: [
      {
        value: "E",
        text: {
          en: "Speak spontaneously and openly",
          ar: "التحدث بعفوية"
        }
      },
      {
        value: "I",
        text: {
          en: "Think it through before sharing",
          ar: "التفكير قبل التحدث"
        }
      }
    ]
  }
];

// MBTI result descriptions
const mbtiResults = {
  INTJ: {
    name: {
      en: "INTJ – The Architect",
      ar: "INTJ – العقل المدبر"
    },
    description: {
      en: "Imaginative and strategic thinkers, with a plan for everything.",
      ar: "خيالي وعملي في التفكير، يضع خطة لكل شيء."
    }
  },
  INTP: {
    name: {
      en: "INTP – The Logician",
      ar: "INTP – المفكر"
    },
    description: {
      en: "Innovative inventors with an unquenchable thirst for knowledge.",
      ar: "مبتكرون لديهم شغف لا ينتهي بالمعرفة."
    }
  },
  ENTJ: {
    name: {
      en: "ENTJ – The Commander",
      ar: "ENTJ – القائد"
    },
    description: {
      en: "Bold, imaginative and strong‑willed leaders, always finding a way – or making one.",
      ar: "قادة جريئون ذو خيال وإرادة قوية، دائماً يجدون طريقاً أو يصنعون واحداً."
    }
  },
  ENTP: {
    name: {
      en: "ENTP – The Debater",
      ar: "ENTP – المبتكر"
    },
    description: {
      en: "Smart and curious thinkers who cannot resist an intellectual challenge.",
      ar: "أذكياء وفضوليون لا يستطيعون مقاومة التحديات الفكرية."
    }
  },
  INFJ: {
    name: {
      en: "INFJ – The Advocate",
      ar: "INFJ – المستشار"
    },
    description: {
      en: "Quiet and mystical, yet very inspiring and tireless idealists.",
      ar: "هادئ وغامض، ولكنه مثالي ملهم لا يكل."
    }
  },
  INFP: {
    name: {
      en: "INFP – The Mediator",
      ar: "INFP – المعالج"
    },
    description: {
      en: "Poetic, kind and altruistic people, always eager to help a good cause.",
      ar: "أشخاص شاعريون ولطفاء وإيثاريون، دائماً متحمسون لمساعدة قضية جيدة."
    }
  },
  ENFJ: {
    name: {
      en: "ENFJ – The Protagonist",
      ar: "ENFJ – المعلم"
    },
    description: {
      en: "Charismatic and inspiring leaders, able to mesmerize their listeners.",
      ar: "قادة كاريزميون وملهمون، قادرون على إبهار من يستمع إليهم."
    }
  },
  ENFP: {
    name: {
      en: "ENFP – The Campaigner",
      ar: "ENFP – البطل"
    },
    description: {
      en: "Enthusiastic, creative and sociable free spirits, who can always find a reason to smile.",
      ar: "أرواح حرة متحمسة وخلاقة واجتماعية، تستطيع دائماً إيجاد سبب للابتسام."
    }
  },
  ISTJ: {
    name: {
      en: "ISTJ – The Logistician",
      ar: "ISTJ – اللوجستي"
    },
    description: {
      en: "Practical and fact-minded individuals, whose reliability cannot be doubted.",
      ar: "أشخاص عمليّون وواقعيون، يمكن الاعتماد عليهم بشدة."
    }
  },
  ISFJ: {
    name: {
      en: "ISFJ – The Defender",
      ar: "ISFJ – المدافع"
    },
    description: {
      en: "Very dedicated and warm protectors, always ready to defend their loved ones.",
      ar: "حماة مخلصون ودافئون، دائماً على استعداد لحماية أحبتهم."
    }
  },
  ESTJ: {
    name: {
      en: "ESTJ – The Executive",
      ar: "ESTJ – المنفذ"
    },
    description: {
      en: "Excellent administrators, unsurpassed at managing things – or people.",
      ar: "إداريون متميزون لا يُضاهى في إدارة الأشياء أو الناس."
    }
  },
  ESFJ: {
    name: {
      en: "ESFJ – The Consul",
      ar: "ESFJ – المقدم"
    },
    description: {
      en: "Extraordinarily caring, social and popular people, always eager to help.",
      ar: "أشخاص اجتماعيون ولطفاء للغاية ومحبوبون، دائماً متحمسون للمساعدة."
    }
  },
  ISTP: {
    name: {
      en: "ISTP – The Virtuoso",
      ar: "ISTP – الحرفي"
    },
    description: {
      en: "Bold and practical experimenters, masters of all kinds of tools.",
      ar: "مجربون جريئون وعمليون، أسياد الأدوات والمهارات."
    }
  },
  ISFP: {
    name: {
      en: "ISFP – The Adventurer",
      ar: "ISFP – المغامر"
    },
    description: {
      en: "Flexible and charming artists, always ready to explore and experience something new.",
      ar: "فنانون مرنون وجذابون، دائماً مستعدون لاستكشاف وتجربة شيء جديد."
    }
  },
  ESTP: {
    name: {
      en: "ESTP – The Entrepreneur",
      ar: "ESTP – رائد الأعمال"
    },
    description: {
      en: "Smart, energetic and very perceptive people, who truly enjoy living on the edge.",
      ar: "أشخاص أذكياء ونشطون وذو ملاحظة حادة، يستمتعون حقاً بالعيش على الحافة."
    }
  },
  ESFP: {
    name: {
      en: "ESFP – The Entertainer",
      ar: "ESFP – الفنان"
    },
    description: {
      en: "Spontaneous, energetic and enthusiastic entertainers – life is never boring around them.",
      ar: "أشخاص عفويون وحيويون ومتحمسون – الحياة لا تكون مملة معهم."
    }
  }
};

// State variables
let currentLang = 'en';
let currentQuestionIndex = 0;
let answers = [];

// DOM elements
const langArBtn = document.getElementById('lang-ar');
const langEnBtn = document.getElementById('lang-en');
const startScreen = document.getElementById('start-screen');
const questionContainer = document.getElementById('question-container');
const resultContainer = document.getElementById('result-container');
const startTitleEl = document.getElementById('start-title');
const startDescEl = document.getElementById('start-description');
const startBtn = document.getElementById('start-button');
const nextBtn = document.getElementById('next-button');
const retryBtn = document.getElementById('retry-button');
const questionNumberEl = document.getElementById('question-number');
const questionTextEl = document.getElementById('question-text');
const optionsContainer = document.getElementById('options');
const resultTitleEl = document.getElementById('result-title');
const resultDescriptionEl = document.getElementById('result-description');

// Set UI text based on current language
function updateStaticTexts() {
  const t = translations[currentLang];
  // Set direction for body
  document.body.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  // Language buttons
  langArBtn.classList.toggle('active', currentLang === 'ar');
  langEnBtn.classList.toggle('active', currentLang === 'en');
  // Start screen texts
  startTitleEl.textContent = t.startTitle;
  startDescEl.textContent = t.startDescription;
  startBtn.textContent = t.startButton;
  nextBtn.textContent = t.nextButton;
  retryBtn.textContent = t.retryButton;
  // If in result, update label
  if (!resultContainer.classList.contains('hidden')) {
    resultTitleEl.textContent = `${t.resultLabel} ` + resultTitleEl.getAttribute('data-type');
  }
}

// Language selection handler

  updateStaticTexts();
  // If in question stage, update current question
  if (!questionContainer.classList.contains('hidden')) {
    showQuestion();
  }
  // If in result stage, update result texts
  if (!resultContainer.classList.contains('hidden')) {
    showResult();
  }
}

// Start the test
function startTest() {
  // Reset state
 // دالة تغيير اللغة
function setLanguage(lang) {
  currentLang = lang;
  updateStaticTexts();
  if (!questionContainer.classList.contains('hidden')) {
    showQuestion();
  }
  if (!resultContainer.classList.contains('hidden')) {
    showResult();
  }
} // ← هنا تنتهي setLanguage

// دالة تبديل الثيم (الوضع الليلي والفاتح)
let isDarkMode = false;
const themeToggleBtn = document.getElementById('theme-toggle');

function toggleTheme() {
  isDarkMode = !isDarkMode;
  document.body.classList.toggle('dark-mode', isDarkMode);
  document.getElementById('app').classList.toggle('dark-mode', isDarkMode);
  document.querySelectorAll('.option-button').forEach(btn => btn.classList.toggle('dark-mode', isDarkMode));
  themeToggleBtn.textContent = isDarkMode ? '☀️' : '🌙';
} currentQuestionIndex = 0;
  answers = [];
  // Hide result
  resultContainer.classList.add('hidden');
  // Show question container
  questionContainer.classList.remove('hidden');
  // Hide start screen
  startScreen.classList.add('hidden');
  showQuestion();
}

// Display the current question and options
function showQuestion() {
  const t = translations[currentLang];
  const total = questions.length;
  const current = currentQuestionIndex + 1;
  // Update question counter text
  questionNumberEl.textContent = t.questionCounter(current, total);
  // Get current question
  const q = questions[currentQuestionIndex];
  questionTextEl.textContent = q.text[currentLang];
  // Clear previous options
  optionsContainer.innerHTML = '';
  // Create option buttons
  q.options.forEach((opt, index) => {
    const btn = document.createElement('button');
    btn.className = 'option-button';
    btn.textContent = opt.text[currentLang];
    btn.dataset.value = opt.value;
    btn.addEventListener('click', () => {
      // Remove selected class from all
      const all = optionsContainer.querySelectorAll('.option-button');
      all.forEach(el => el.classList.remove('sele
