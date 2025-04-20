document.addEventListener("DOMContentLoaded", () => {
    // اسکرول نرم به سکشن‌ها
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  
    // انیمیشن ظاهر شدن (fade-in)
    const elements = document.querySelectorAll(".fade-in");
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("appear");
        }
      });
    }, {
      threshold: 0.2
    });
  
    elements.forEach(el => observer.observe(el));
  });
  // داده‌ها
const data = {
    skills: [
      {
        title: "پروداکت",
        items: [
          "طراحی، هدایت و توسعه‌ی مسیر محصول از ایده تا لانچ",
          "تحلیل نیاز کاربران و تبدیل به ویژگی‌های قابل توسعه",
          "هماهنگی بین تیم‌های طراحی، توسعه و بازاریابی",
        ],
      },
      {
        title: "برندینگ",
        items: [
          "خلق هویت برند از صفر: از اسم، لحن، تا رنگ و فرم",
          "طراحی هویت‌بصری منسجم",
          "روایت برند بر اساس روان‌شناسی مخاطب، نه صرفاً زیبایی",
        ],
      },
      {
        title: "مارکتینگ و تبلیغات",
        items: [
          "تدوین مسیر جذب و تعامل کاربر",
          "اجرای کمپین‌های تبلیغاتی مؤثر با تمرکز بر نرخ تبدیل",
          "خلق پیام‌هایی که می‌مونن، نه فقط دیده می‌شن",
        ],
      },
    ],
    projects: [
      { name: "پروژه ۱", image: "img/project1.png" },
      { name: "پروژه ۲", image: "img/project2.png" },
      { name: "پروژه ۳", image: "img/project3.png" },
    ],
    contacts: [
      { icon: "img/ma-il-1.png", text: "vidarr.co@gmail.com" },
      { icon: "img/phone.svg", text: "0935-3481581" },
      { icon: "img/instagram.svg", text: "@vidaaarrr" },
    ],
  };
  
  // توانایی‌ها
  const skillsContainer = document.getElementById("skills-section");
  skillsContainer.innerHTML = data.skills.map((group) => {
    return `
      <div class="skill-box">
        <h3>${group.title}</h3>
        <ul>
          ${group.items.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </div>
    `;
  }).join("");
  
  // پروژه‌ها
  const projectsContainer = document.getElementById("projects-section");
  projectsContainer.innerHTML = data.projects.map((project) => {
    return `
      <div class="project-card">
        <img src="${project.image}" alt="${project.name}" />
        <h4>${project.name}</h4>
      </div>
    `;
  }).join("");
  
  // راه‌های ارتباطی
  const contactContainer = document.getElementById("contact-section");
  contactContainer.innerHTML = data.contacts.map((c) => {
    return `
      <div class="contact-item">
        <img src="${c.icon}" alt="icon" />
        <span>${c.text}</span>
      </div>
    `;
  }).join("");
  