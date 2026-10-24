(() => {
  "use strict";

  const translations = {
    zh: {
      pageTitle: "杨珂 · 个人主页",
      pageDescription: "杨珂的个人主页——一名住在深圳、热爱探索的五年级学生。",
      skip: "跳到主要内容",
      name: "杨珂",
      navAbout: "关于我",
      navSchool: "我的学校",
      navTeacher: "班主任",
      navWishes: "成长小记",
      heroEyebrow: "你好，这是关于我的小小世界",
      heroHi: "你好，我是",
      heroIntro: "十岁的五年级学生，在好奇心里收集世界，也在每一天里认真长大。",
      meetMe: "认识我",
      mySchool: "我的学校",
      portraitChar: "珂",
      yearsOld: "岁",
      gradeLabel: "年级",
      scroll: "向下滚动",
      aboutTitle: "在十岁这年，<br><em>认真认识世界。</em>",
      aboutLead: "我叫杨珂，是一名五年级学生。现在的我，正在学习把每一件小事做得更好，也在认识更多有趣的人和地方。",
      aboutBody: "我喜欢明亮的想法、温暖的相遇和慢慢积累的进步。这个小小的网站，是我的一段自我介绍，也是一张不断更新的成长名片。",
      factsAgeLabel: "我的年龄",
      factsGradeLabel: "现在的年级",
      factsMottoLabel: "成长关键词",
      factsMotto: "好奇 · 认真 · 友善",
      gradeFive: "五年级",
      quote: "保持好奇，<br>认真长大。",
      quoteCaption: "写给十岁的自己",
      schoolEyebrow: "我的校园坐标",
      schoolTitle: "荔园外国语小学<br><em>海滨校区</em>",
      schoolIntro: "在深圳，在荔园外国语小学海滨校区，我是一名正在读五年级的学生。这里有一间间教室，也有每天发生的新故事。",
      schoolIdLabel: "校园身份卡",
      studentName: "姓名",
      studentGrade: "年级",
      studentCampus: "校区",
      campus: "海滨校区",
      teacherKicker: "我的班主任 · 卢老师",
      teacherName: "卢老师",
      teacherQuote: "我的班主任是卢老师。他非常的好，是一位值得我认真说一声“谢谢”的老师。",
      teacherSignature: "来自杨珂的真心话",
      musicLabel: "音乐",
      musicPlayAria: "播放温柔背景音乐",
      musicPauseAria: "暂停背景音乐",
      wishesTitle: "小小时光，<br><em>慢慢长大。</em>",
      wishesIntro: "十岁不是终点，而是一页刚刚展开的新纸。认真写好现在的每一笔，未来自然会有答案。",
      timelineNowTag: "现在",
      timelineNowTitle: "五年级 · 上册",
      timelineNowText: "认识新知识，也认识更好的自己。",
      timelineDailyTag: "每一天",
      timelineDailyTitle: "保持好奇",
      timelineDailyText: "多问一个问题，就可能多发现一个世界。",
      timelineFutureTag: "向未来",
      timelineFutureTitle: "认真长大",
      timelineFutureText: "一步一步，把普通的日子过得闪闪发光。",
      fortuneLabel: "今天的小纸条",
      fortuneDefault: "好奇心，是每个人心里藏着的小小指南针。",
      fortuneButton: "换一张",
      outroEyebrow: "谢谢你的到来",
      outroTitle: "愿我们都能<br><em>好奇、认真、闪闪发光。</em>",
      outroBy: "杨珂 · 十岁",
      footerMade: "一张属于杨珂的成长名片",
      footerNote: "无需注册 · 本地访问 · 用心制作"
    },
    en: {
      pageTitle: "Yang Ke · Personal Homepage",
      pageDescription: "The personal homepage of Yang Ke, a curious fifth-grade student in Shenzhen.",
      skip: "Skip to main content",
      name: "Yang Ke",
      navAbout: "About me",
      navSchool: "My school",
      navTeacher: "Homeroom Teacher",
      navWishes: "Growing up",
      heroEyebrow: "A little world, all about me",
      heroHi: "Hello, I am",
      heroIntro: "A curious ten-year-old in fifth grade, collecting little discoveries and growing up one day at a time.",
      meetMe: "Meet me",
      mySchool: "My school",
      portraitChar: "K",
      yearsOld: "years old",
      gradeLabel: "GRADE",
      scroll: "SCROLL",
      aboutTitle: "At ten, I am learning<br><em>to know the world.</em>",
      aboutLead: "My name is Yang Ke, and I am in fifth grade. I am learning to do small things better and discovering more interesting people and places.",
      aboutBody: "I like bright ideas, warm encounters, and the progress that grows little by little. This small website is both an introduction and a growing record of who I am.",
      factsAgeLabel: "My age",
      factsGradeLabel: "Current grade",
      factsMottoLabel: "My keywords",
      factsMotto: "Curious · Thoughtful · Kind",
      gradeFive: "Grade 5",
      quote: "Stay curious.<br>Grow with care.",
      quoteCaption: "A note to my ten-year-old self",
      schoolEyebrow: "My school on the map",
      schoolTitle: "Liyuan Foreign Language Primary School<br><em>Haibin Campus</em>",
      schoolIntro: "In Shenzhen, at Liyuan Foreign Language Primary School's Haibin Campus, I am a fifth-grade student. There are classrooms, and there are new stories every day.",
      schoolIdLabel: "Campus identity card",
      studentName: "NAME",
      studentGrade: "GRADE",
      studentCampus: "CAMPUS",
      campus: "Haibin Campus",
      teacherKicker: "My homeroom teacher · Teacher Lu",
      teacherName: "Teacher Lu",
      teacherQuote: "My homeroom teacher is Teacher Lu. Teacher Lu is truly wonderful and deserves a heartfelt thank-you.",
      teacherSignature: "From the heart of Yang Ke",
      musicLabel: "Music",
      musicPlayAria: "Play gentle background music",
      musicPauseAria: "Pause background music",
      wishesTitle: "Little moments,<br><em>growing up slowly.</em>",
      wishesIntro: "Ten is not the finish line; it is a fresh page that has just opened. Write each line with care, and the future will find its answer.",
      timelineNowTag: "NOW",
      timelineNowTitle: "Grade 5 · Semester 1",
      timelineNowText: "Learning something new, and meeting a better version of myself.",
      timelineDailyTag: "EVERY DAY",
      timelineDailyTitle: "Stay curious",
      timelineDailyText: "One more question can reveal another little world.",
      timelineFutureTag: "TO THE FUTURE",
      timelineFutureTitle: "Grow with care",
      timelineFutureText: "Step by step, make ordinary days shine.",
      fortuneLabel: "A NOTE FOR TODAY",
      fortuneDefault: "Curiosity is the little compass hidden inside everyone.",
      fortuneButton: "One more",
      outroEyebrow: "Thank you for visiting",
      outroTitle: "May we stay curious,<br><em>thoughtful, and bright.</em>",
      outroBy: "Yang Ke · Age 10",
      footerMade: "A growing story by Yang Ke",
      footerNote: "NO SIGN-UP · LOCAL PAGE · MADE WITH CARE"
    }
  };

  const fortunes = {
    zh: [
      "好奇心，是每个人心里藏着的小小指南针。",
      "慢慢来，认真走过的每一步都算数。",
      "今天多发现一点点，明天就会更靠近想去的地方。",
      "善良不是大事情，而是每天做出的小选择。",
      "长大不是变得完美，而是越来越了解自己。",
      "把普通的一天过好，本身就是一件很了不起的事。"
    ],
    en: [
      "Curiosity is the little compass hidden inside everyone.",
      "Take your time. Every thoughtful step counts.",
      "Discover a little more today, and tomorrow you will be a little closer.",
      "Kindness is not one big thing; it is the small choice we make each day.",
      "Growing up is not becoming perfect. It is understanding yourself more.",
      "Making an ordinary day a good one is a wonderful achievement."
    ]
  };

  const root = document.documentElement;
  const themeButton = document.querySelector("#themeToggle");
  const languageButton = document.querySelector("#languageToggle");
  const musicButton = document.querySelector("#musicToggle");
  const backgroundMusic = document.querySelector("#gentleMusic");
  const fortuneButton = document.querySelector("#fortuneButton");
  const fortuneText = document.querySelector("#fortuneText");
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  const metaDescription = document.querySelector('meta[name="description"]');

  let currentLanguage = root.dataset.lang === "en" ? "en" : "zh";
  backgroundMusic.volume = 0.32;

  const savePreference = (key, value) => {
    try {
      localStorage.setItem(key, value);
    } catch (_) {}
  };

  const syncThemeControls = () => {
    const isDark = root.dataset.theme === "dark";
    themeButton.setAttribute("aria-pressed", String(isDark));
    themeButton.setAttribute(
      "aria-label",
      currentLanguage === "zh"
        ? isDark ? "切换浅色模式" : "切换深色模式"
        : isDark ? "Switch to light mode" : "Switch to dark mode"
    );
    metaTheme.setAttribute("content", isDark ? "#11110f" : "#f3f1eb");
  };

  const syncMusicControl = () => {
    const isPlaying = !backgroundMusic.paused && !backgroundMusic.ended;
    const copy = translations[currentLanguage];
    musicButton.classList.toggle("is-playing", isPlaying);
    musicButton.setAttribute("aria-pressed", String(isPlaying));
    musicButton.setAttribute(
      "aria-label",
      isPlaying ? copy.musicPauseAria : copy.musicPlayAria
    );
    musicButton.title = isPlaying ? copy.musicPauseAria : copy.musicPlayAria;
  };

  const applyLanguage = (language) => {
    currentLanguage = language;
    const copy = translations[language];
    root.dataset.lang = language;
    root.lang = language === "zh" ? "zh-CN" : "en";

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      if (copy[key]) element.textContent = copy[key];
    });

    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
      const key = element.dataset.i18nHtml;
      if (copy[key]) element.innerHTML = copy[key];
    });

    document.title = copy.pageTitle;
    metaDescription.setAttribute("content", copy.pageDescription);
    document.querySelector(".language-button__current").textContent = language === "zh" ? "中" : "EN";
    document.querySelector(".language-button__next").textContent = language === "zh" ? "EN" : "中";
    languageButton.setAttribute(
      "aria-label",
      language === "zh" ? "Switch to English" : "切换成中文"
    );
    fortuneText.textContent = copy.fortuneDefault;
    syncMusicControl();
    syncThemeControls();
  };

  themeButton.addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = nextTheme;
    savePreference("keke-theme", nextTheme);
    syncThemeControls();
  });

  languageButton.addEventListener("click", () => {
    const nextLanguage = currentLanguage === "zh" ? "en" : "zh";
    applyLanguage(nextLanguage);
    savePreference("keke-language", nextLanguage);
  });

  musicButton.addEventListener("click", async () => {
    if (backgroundMusic.paused) {
      try {
        await backgroundMusic.play();
      } catch (_) {
        musicButton.setAttribute("aria-label", "音乐暂时无法播放，请再试一次");
      }
    } else {
      backgroundMusic.pause();
    }
    syncMusicControl();
  });

  ["play", "pause", "ended"].forEach((eventName) => {
    backgroundMusic.addEventListener(eventName, syncMusicControl);
  });

  backgroundMusic.addEventListener("error", () => {
    musicButton.disabled = true;
    musicButton.setAttribute("aria-label", "背景音乐加载失败");
  });

  fortuneButton.addEventListener("click", () => {
    const options = fortunes[currentLanguage];
    let nextQuote = options[Math.floor(Math.random() * options.length)];
    if (nextQuote === fortuneText.textContent && options.length > 1) {
      const currentIndex = options.indexOf(nextQuote);
      nextQuote = options[(currentIndex + 1) % options.length];
    }

    fortuneText.classList.remove("is-changing");
    void fortuneText.offsetWidth;
    fortuneText.textContent = nextQuote;
    fortuneText.classList.add("is-changing");
  });

  const revealElements = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -35px" }
    );
    revealElements.forEach((element) => revealObserver.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  }

  applyLanguage(currentLanguage);
  syncThemeControls();
})();
