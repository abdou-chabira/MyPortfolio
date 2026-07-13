// =========================================================
//  Translations (EN default in HTML; DE swapped via JS)
//  Values may contain trusted inline HTML.
// =========================================================
const translations = {
    de: {
        // Nav
        'nav.about': 'Über mich',
        'nav.skills': 'Kenntnisse',
        'nav.experience': 'Erfahrung',
        'nav.projects': 'Projekte',
        'nav.education': 'Ausbildung',
        'nav.contact': 'Kontakt',

        // Hero
        'hero.badge': 'Offen für Festanstellungen in Deutschland',
        'hero.role': 'Backend Engineer & KI-Integration — Python · Django · Cloud',
        'hero.desc': 'Ich entwickle skalierbare Webanwendungen, RESTful-APIs und cloud-native verteilte Systeme in Python — Django, FastAPI, PostgreSQL, Celery, Redis, Docker und AWS — und integriere KI in Produkte mit LLM-APIs (OpenAI, Claude) und agentischen Workflows. Über 5 Jahre in internationalen SaaS-Startups und Unternehmensumgebungen, mit nachweisbarer Wirkung: 9× schnellere Berichte, 35 % geringere API-Latenz und Systeme, die über 50.000 Anfragen/Tag bewältigen.',
        'hero.cv': '⬇ Lebenslauf herunterladen',
        'hero.cvEn': 'Englisch',
        'hero.cvDe': 'Deutsch',
        'hero.contact': 'Kontakt aufnehmen',

        // Stats
        'stat.years': 'Jahre Erfahrung',
        'stat.calls': 'API-Aufrufe/Tag bewältigt',
        'stat.query': 'schnellere Abfragen',
        'stat.coverage': 'Testabdeckung',

        // About
        'about.eyebrow': 'Über mich',
        'about.title': 'Backend-Entwicklung & KI-Integration mit messbarer Wirkung',
        'about.p1': 'Ich bin Backend Engineer und KI-Integrationsspezialist mit über 5 Jahren Erfahrung im Aufbau skalierbarer Webanwendungen, RESTful-APIs und cloud-nativer verteilter Systeme in Python. Mein Kern-Stack umfasst Django, FastAPI, PostgreSQL, Celery, Redis, Docker und AWS.',
        'about.p2': 'Ich habe komplette API-Architekturen von Anfang bis Ende verantwortet, CI/CD-Pipelines aufgebaut und kontinuierlich messbare Wirkung erzielt – von einer 9× schnelleren Berichtserstellung bis zur Reduktion der durchschnittlichen API-Latenz um 35 % und der Bewältigung von über 50.000 Anfragen/Tag. In jüngster Zeit habe ich mich auf KI-Integration fokussiert – den Aufbau agentischer Workflows, LLM-API-Integrationen (OpenAI, Claude) und Web-Scraping-Pipelines, die Geschäftsprozesse durchgängig automatisieren. Ich arbeite testgetrieben (TDD, pytest, 95 %+ Abdeckung) und fühle mich in agilen, cross-funktionalen Remote-Teams wohl.',
        'about.p3': 'Ich lebe in Augsburg, Deutschland, besitze einen gültigen deutschen Aufenthaltstitel mit voller Arbeitserlaubnis und bin offen für einen Umzug innerhalb Deutschlands.',
        'about.h1title': 'API- & Systemarchitektur',
        'about.h1desc': 'Entwurf von REST-/GraphQL-APIs und verteilten, microservice-basierten Systemen von Anfang bis Ende.',
        'about.h2title': 'Performance & Skalierung',
        'about.h2desc': 'Asynchrone Verarbeitung mit Celery/Redis, Query-Optimierung und Latenzreduktion im großen Maßstab.',
        'about.h3title': 'Qualität & Auslieferung',
        'about.h3desc': 'TDD, CI/CD, Code-Reviews und Dokumentation, die als teamweiter Standard übernommen wurden.',
        'about.h4title': 'KI-Integration',
        'about.h4desc': 'LLM-API-Integration (OpenAI, Claude), Prompt Engineering, agentische Workflows und Web-Scraping-Pipelines, die Geschäftsprozesse automatisieren.',

        // Skills
        'skills.eyebrow': 'Kenntnisse',
        'skills.title': 'Technischer Werkzeugkasten',
        'skills.lead': 'Die Sprachen, Frameworks und Plattformen, mit denen ich zuverlässige Backend-Systeme baue.',
        'skills.c1': '<span class="ic">🐍</span> Sprachen & Frameworks',
        'skills.cai': '<span class="ic">🤖</span> KI & Agentische Systeme',
        'skills.c2': '<span class="ic">🗄️</span> Datenbanken',
        'skills.c3': '<span class="ic">☁️</span> Cloud & DevOps',
        'skills.c4': '<span class="ic">🔌</span> APIs & Integrationen',
        'skills.c5': '<span class="ic">🧪</span> Testing & QA',
        'skills.c6': '<span class="ic">🧭</span> Methoden',

        // Experience
        'exp.eyebrow': 'Erfahrung',
        'exp.title': 'Beruflicher Werdegang',
        'exp.lead': 'Über 5 Jahre in internationalen SaaS-Startups und Unternehmen – remote und vor Ort.',

        'exp.j1.role': 'Softwareentwickler (Python/Django)',
        'exp.j1.meta': '<span class="chip">📍 Deutschland</span><span class="chip">Jun 2026 – Heute</span><span class="chip">Teilzeit (Minijob)</span>',
        'exp.j1.bullets': '<li>Aufbau einer <strong>KI-gestützten Onboarding-Pipeline für Anbieter</strong> mit <strong>Playwright</strong> und der <strong>Claude API</strong> – vollständige Automatisierung von Web-Scraping, Inhaltsextraktion und Account-Bereitstellung.</li><li>Entwicklung und Deployment einer <strong>B2B-Publishing-Plattform</strong> von Grund auf bis in die <strong>AWS</strong>-Produktion – inklusive Zahlungsabwicklung, Vendor-Portalen und Hintergrundverarbeitung.</li><li>Erfahren in agentischen KI-Systemen, <strong>LLM-API-Integration (OpenAI, Claude)</strong>, Web-Scraping-Pipelines und agentischen Workflows zur Automatisierung von Geschäftsprozessen.</li>',

        'exp.j2.role': 'Backend Engineer',
        'exp.j2.meta': '<span class="chip">📍 Algerien</span><span class="chip">Aug 2023 – Apr 2026</span><span class="chip">Vollzeit</span>',
        'exp.j2.bullets': '<li>Architektur und Aufbau eines <strong>Finanzverwaltungssystems</strong> von Grund auf (Django, PostgreSQL, Celery, Redis), das einen veralteten Tabellenprozess ersetzte und <strong>über 10.000 monatliche Transaktionen</strong> mit vollständigen Audit-Trails verarbeitet.</li><li>Automatisierung von Deployment-, Benutzerverwaltungs- und Backup-Pipelines mit Python- und Bash-Skripten, wodurch ca. 8 Stunden/Woche an operativem Aufwand eingespart wurden.</li><li>Optimierung kritischer PostgreSQL-/MySQL-Abfragen, wodurch die Berichtserstellung von ~45 s auf unter 5 s reduziert wurde – eine <strong>9×-Verbesserung</strong>.</li><li>Erstellung umfassender pytest-Testsuiten und technischer Dokumentation, die abteilungsweit standardisiert wurden.</li><li>Implementierung von CI/CD-Pipelines mit Git und Bash-Skripten zur Optimierung des Deployments und Reduzierung des Release-Risikos.</li>',

        'exp.j3.role': 'Backend Engineer',
        'exp.j3.meta': '<span class="chip">📍 San Jose, USA (Remote)</span><span class="chip">Dez 2020 – Aug 2023</span><span class="chip">Vollzeit</span>',
        'exp.j3.bullets': '<li>Entwicklung und Wartung Dockerisierter REST-APIs mit Integrationen zu HubSpot, Zapier, Pipedrive, Zoom und Meta – Verarbeitung von <strong>über 50.000 API-Aufrufen/Tag</strong> bei Spitzenlast mit Echtzeit-CloudWatch-Monitoring.</li><li>Aufbau von Echtzeit-Messaging-Backends mit Redis-Queues und Dockerisierten Microservices, mit einer Nachrichtenlatenz von <strong>&lt;200 ms</strong> für Enterprise-Kunden.</li><li>Refactoring stark frequentierter Drittanbieter-Integrations-Endpunkte, wodurch die durchschnittliche API-Antwortlatenz um <strong>~35 %</strong> gesenkt wurde.</li><li>Implementierung von <strong>OAuth2 Social Login</strong> (Google, Apple, Facebook), was die Onboarding-Konversion direkt verbesserte.</li><li>Deployment und Wartung von Diensten auf AWS EC2 und RDS; Nutzung von S3 zur Dateispeicherung und CloudWatch für Alerting.</li>',

        // Projects
        'proj.eyebrow': 'Projekte',
        'proj.title': 'Ausgewählte Arbeiten',
        'proj.lead': 'Praxisprojekte mit Fokus auf Backend-Architektur, asynchrone Verarbeitung und KI-Integration.',
        'proj.link': 'GitHub-Repository ↗',
        'proj.p1.tag': 'KI-Deal-Intelligence & Wettbewerbs-Tracker für Vertriebsteams',
        'proj.p1.desc': 'End-to-End-Backend für automatisierte Unternehmensrecherche und Outreach:',
        'proj.p1.bullets': '<li>URL-Erfassung + automatisierte Web-Scraping-Pipeline mit LLM-gestützten Unternehmenszusammenfassungen in unter 10 Sekunden</li><li>Echtzeit-Engines für Wettbewerbererkennung, Buyer-Readiness-Scoring und geplante <code>daily_delta</code>- / <code>weekly_delta</code>-Neuberechnungen (Celery + Redis)</li><li>Personalisierter Multi-Channel-Outreach (E-Mail + LinkedIn), zugeschnitten auf Executive-Personas mittels LLM-Prompt-Engineering</li>',
        'proj.p2.tag': 'Asynchrone B2B-Datenanreicherungs-Plattform',
        'proj.p2.desc': 'Eine skalierbare, asynchrone Lead-Enrichment-Plattform mit Django und Celery, die reale SaaS-Enrichment-Workflows simuliert. Demonstriert verteilte Task-Verarbeitung, Idempotenz-Schutz, Rate-Limiting, Monitoring und produktionsreife Sicherheit.',
        'proj.p3.tag': 'Asynchrone SaaS-Integrationsplattform',
        'proj.p3.desc': 'Eine robuste, asynchrone Integrationsplattform mit Django und Celery, die OAuth-Verbindungen, Webhook-Verarbeitung und SaaS-API-Integrationen simuliert. Zeigt asynchrone Workflows, Idempotenz, Rate-Limiting, Monitoring und sicheres, produktionsreifes Deployment.',

        // Education
        'edu.eyebrow': 'Ausbildung & Sprachen',
        'edu.title': 'Hintergrund',
        'edu.d1.degree': 'M.Sc. Informatik',
        'edu.d1.desc': 'Masterarbeit: Entwurf und Entwicklung einer Verifikationsanwendung für rekonfigurierbare Systeme.',
        'edu.d2.degree': 'B.Sc. Informatik',
        'edu.d2.desc': 'Schwerpunkt: Fortgeschrittene Algorithmen, Datenstrukturen, Software-Engineering (Agile, Versionskontrolle, Systemtests).',
        'edu.l1.name': 'Arabisch',
        'edu.l1.level': 'Muttersprache',
        'edu.l2.name': 'Englisch',
        'edu.l2.level': 'Fließend',
        'edu.l3.name': 'Französisch',
        'edu.l3.level': 'Fließend',
        'edu.l4.name': 'Deutsch',

        // Contact
        'contact.eyebrow': 'Kontakt',
        'contact.title': 'Lassen Sie uns etwas Zuverlässiges bauen',
        'contact.lead': 'Ich bin offen für Festanstellungen als Backend-Entwickler in ganz Deutschland. Ich besitze einen gültigen deutschen Aufenthaltstitel mit voller Arbeitserlaubnis – melden Sie sich gerne.',
        'contact.email': 'E-Mail',

        // Footer
        'footer.text': '© 2026 Abderrahmane Chabira · Backend Engineer · Augsburg, Deutschland'
    }
};

// Store original English HTML so we can switch back without reloading.
const originalEN = {};
document.querySelectorAll('[data-i18n]').forEach(el => {
    originalEN[el.getAttribute('data-i18n')] = el.innerHTML;
});

const langBtn = document.getElementById('toggleLang');

function applyLang(lang) {
    const dict = lang === 'de' ? translations.de : originalEN;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const val = lang === 'de' ? dict[key] : originalEN[key];
        if (val !== undefined) el.innerHTML = val;
    });
    document.documentElement.lang = lang;
    if (langBtn) langBtn.textContent = lang === 'de' ? '🌐 English' : '🌐 Deutsch';
    localStorage.setItem('lang', lang);
}

// Initial language: saved choice → browser language → English
const savedLang = localStorage.getItem('lang');
if (savedLang) {
    applyLang(savedLang);
} else if ((navigator.language || '').toLowerCase().startsWith('de')) {
    applyLang('de');
}

if (langBtn) {
    langBtn.addEventListener('click', () => {
        const next = document.documentElement.lang === 'de' ? 'en' : 'de';
        applyLang(next);
    });
}

// ===== Theme toggle (with persistence) =====
const toggleBtn = document.getElementById('toggleTheme');

function applyTheme(mode) {
    const dark = mode === 'dark';
    document.body.classList.toggle('dark-mode', dark);
    document.body.classList.toggle('light-mode', !dark);
    if (toggleBtn) toggleBtn.textContent = dark ? '☀️ Light' : '🌙 Dark';
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    applyTheme(savedTheme);
} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    applyTheme('dark');
}

if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        const nowDark = !document.body.classList.contains('dark-mode');
        applyTheme(nowDark ? 'dark' : 'light');
        localStorage.setItem('theme', nowDark ? 'dark' : 'light');
    });
}

// ===== CV download language dropdown =====
const cvDropdown = document.getElementById('cvDropdown');
const cvToggle = document.getElementById('cvToggle');
if (cvDropdown && cvToggle) {
    const closeCv = () => {
        cvDropdown.classList.remove('open');
        cvToggle.setAttribute('aria-expanded', 'false');
    };
    cvToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const open = cvDropdown.classList.toggle('open');
        cvToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('click', (e) => {
        if (!cvDropdown.contains(e.target)) closeCv();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeCv();
    });
    cvDropdown.querySelectorAll('.cv-menu a').forEach(a =>
        a.addEventListener('click', closeCv)
    );
}

// ===== Mobile nav toggle =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
    navLinks.querySelectorAll('a').forEach(a =>
        a.addEventListener('click', () => navLinks.classList.remove('open'))
    );
}

// ===== Project card expand / collapse =====
document.querySelectorAll('.project-header').forEach(header => {
    header.addEventListener('click', () => {
        const card = header.closest('.project-card');
        card.classList.toggle('expanded');
        const btn = card.querySelector('.expand-btn');
        if (btn) btn.textContent = card.classList.contains('expanded') ? 'Details ▲' : 'Details ▼';
    });
});
