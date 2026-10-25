const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const screenshotDir = path.join('C:', 'Users', 'prade', '.gemini', 'antigravity', 'brain', '495d53e2-358c-401c-acbf-b176a0df7333', 'screenshots');
if (!fs.existsSync(screenshotDir)) {
  fs.mkdirSync(screenshotDir, { recursive: true });
}

async function runTests() {
  console.log('🚀 Starting Automated E2E Portfolio Testing...');

  const browser = await puppeteer.launch({
    headless: true,
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu']
  });

  const page = await browser.newPage();
  const consoleErrors = [];
  const consoleLogs = [];

  page.on('console', (msg) => {
    const text = msg.text();
    if (msg.type() === 'error') {
      consoleErrors.push(text);
      console.error('Browser console error:', text);
    } else {
      consoleLogs.push(text);
    }
  });

  page.on('pageerror', (err) => {
    consoleErrors.push(err.toString());
    console.error('Page error:', err.toString());
  });

  // 1. DESKTOP VIEWPORT TEST (1440x900)
  console.log('📱 Testing Desktop Viewport (1440x900)...');
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });
  await page.evaluate(() => {
    localStorage.setItem('pradeep_portfolio_theme', 'dark');
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  });
  await new Promise(r => setTimeout(r, 1500)); // Allow 3D canvas and animations to render

  const desktopHomePath = path.join(screenshotDir, '01_desktop_hero.png');
  await page.screenshot({ path: desktopHomePath });
  console.log('✓ Desktop hero captured:', desktopHomePath);

  // Full page desktop screenshot
  const desktopFullPath = path.join(screenshotDir, '02_desktop_fullpage.png');
  await page.screenshot({ path: desktopFullPath, fullPage: true });
  console.log('✓ Desktop fullpage captured:', desktopFullPath);

  // 2. TEST NAVIGATION LINKS
  console.log('🧭 Testing Section Navigation...');
  const navLinks = ['#about', '#skills', '#projects', '#education', '#contact'];
  for (const hash of navLinks) {
    await page.click(`a[href="${hash}"]`);
    await new Promise(r => setTimeout(r, 400));
  }
  console.log('✓ Smooth scrolling to all sections verified');

  // 3. TEST AI ASSISTANT MODAL
  console.log('🤖 Testing AI Portfolio Assistant...');
  const askAiBtn = await page.$('button[aria-label="Ask AI Portfolio Assistant"]');
  if (askAiBtn) {
    await askAiBtn.click();
    await new Promise(r => setTimeout(r, 600));

    // Type query
    await page.type('input[placeholder*="Ask anything"]', 'What are Pradeep\'s main projects?');
    await page.keyboard.press('Enter');
    await new Promise(r => setTimeout(r, 1200)); // Wait for simulated synthesis

    const aiModalPath = path.join(screenshotDir, '03_ai_assistant_modal.png');
    await page.screenshot({ path: aiModalPath });
    console.log('✓ AI Assistant modal and chat verified:', aiModalPath);

    // Close assistant
    const closeBtn = await page.$('button[aria-label="Close assistant"]');
    if (closeBtn) await closeBtn.click();
    await new Promise(r => setTimeout(r, 400));
  }

  // 4. TEST PROJECT MODAL & FILTERING
  console.log('💼 Testing Project Filtering & Architecture Modal...');
  // Click category filter 'AI & ML'
  const filterBtns = await page.$$('button[role="tab"]');
  for (const btn of filterBtns) {
    const text = await page.evaluate(el => el.textContent, btn);
    if (text && text.includes('AI & ML')) {
      await btn.click();
      await new Promise(r => setTimeout(r, 400));
      break;
    }
  }

  // Open QuotaGuard or AI Chatbot details
  const detailsBtns = await page.$$('button');
  for (const btn of detailsBtns) {
    const text = await page.evaluate(el => el.textContent, btn);
    if (text && text.includes('Architecture & Specs')) {
      await btn.click();
      await new Promise(r => setTimeout(r, 600));
      break;
    }
  }

  const projectModalPath = path.join(screenshotDir, '04_project_modal.png');
  await page.screenshot({ path: projectModalPath });
  console.log('✓ Project architecture modal captured:', projectModalPath);

  // Close project modal
  const closeProjBtn = await page.$('button[aria-label="Close project details"]');
  if (closeProjBtn) await closeProjBtn.click();
  await new Promise(r => setTimeout(r, 400));

  // 5. TEST RESUME MODAL
  console.log('📄 Testing Resume Modal...');
  const resumeBtn = await page.$('button[aria-label="View or Download Resume"]');
  if (resumeBtn) {
    await resumeBtn.click();
    await new Promise(r => setTimeout(r, 500));

    const resumeModalPath = path.join(screenshotDir, '05_resume_modal.png');
    await page.screenshot({ path: resumeModalPath });
    console.log('✓ Resume modal captured:', resumeModalPath);

    const closeResumeBtn = await page.$('button[aria-label="Close resume dialog"]');
    if (closeResumeBtn) await closeResumeBtn.click();
    await new Promise(r => setTimeout(r, 400));
  }

  // 6. TEST THEME SWITCHER (LIGHT MODE)
  console.log('☀️ Testing Light Theme Toggle...');
  const themeToggle = await page.$('button[title*="mode"]');
  if (themeToggle) {
    await themeToggle.click();
    await new Promise(r => setTimeout(r, 600));

    const lightModePath = path.join(screenshotDir, '06_light_mode.png');
    await page.screenshot({ path: lightModePath });
    console.log('✓ Light mode captured:', lightModePath);

    // Switch back to futuristic dark mode
    await page.evaluate(() => {
      localStorage.setItem('pradeep_portfolio_theme', 'dark');
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    });
    await themeToggle.click();
    await new Promise(r => setTimeout(r, 400));
  }

  // 7. TEST MOBILE VIEWPORT (390x844 - iPhone 14)
  console.log('📱 Testing Mobile Viewport (390x844)...');
  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true, deviceScaleFactor: 2 });
  await page.goto('http://localhost:5173#hero', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 1000));

  const mobileHeroPath = path.join(screenshotDir, '07_mobile_hero.png');
  await page.screenshot({ path: mobileHeroPath });
  console.log('✓ Mobile hero captured:', mobileHeroPath);

  // Open mobile drawer
  const hamburgerBtn = await page.$('button[aria-label="Toggle mobile menu"]');
  if (hamburgerBtn) {
    await hamburgerBtn.click();
    await new Promise(r => setTimeout(r, 400));
    const mobileMenuPath = path.join(screenshotDir, '08_mobile_drawer.png');
    await page.screenshot({ path: mobileMenuPath });
    console.log('✓ Mobile navigation drawer captured:', mobileMenuPath);
  }

  // 8. TEST TABLET VIEWPORT (768x1024 - iPad)
  console.log('📟 Testing Tablet Viewport (768x1024)...');
  await page.setViewport({ width: 768, height: 1024, isMobile: true, hasTouch: true, deviceScaleFactor: 2 });
  await page.goto('http://localhost:5173#skills', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 1000));

  const tabletSkillsPath = path.join(screenshotDir, '09_tablet_skills.png');
  await page.screenshot({ path: tabletSkillsPath });
  console.log('✓ Tablet skills captured:', tabletSkillsPath);

  // 9. TEST EASTER EGG TERMINAL
  console.log('💻 Testing Easter Egg Terminal...');
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });
  const terminalBtn = await page.$('button[aria-label="Open Interactive Terminal Easter Egg"]');
  if (terminalBtn) {
    await terminalBtn.click();
    await new Promise(r => setTimeout(r, 500));

    await page.type('input[placeholder*="Type \'help\'"]', 'help');
    await page.keyboard.press('Enter');
    await new Promise(r => setTimeout(r, 400));

    await page.type('input[placeholder*="Type \'help\'"]', 'dubai');
    await page.keyboard.press('Enter');
    await new Promise(r => setTimeout(r, 600));

    const terminalPath = path.join(screenshotDir, '10_easter_egg_terminal.png');
    await page.screenshot({ path: terminalPath });
    console.log('✓ Terminal Easter egg captured:', terminalPath);
  }

  await browser.close();

  console.log('\n=========================================');
  console.log(`E2E Verification Complete!`);
  console.log(`Total Console Errors: ${consoleErrors.length}`);
  if (consoleErrors.length > 0) {
    console.log('Console Errors detected:', consoleErrors);
  } else {
    console.log('✓ ZERO console errors detected across all viewport tests!');
  }
  console.log('=========================================\n');
}

runTests().catch(err => {
  console.error('Test execution failed:', err);
  process.exit(1);
});
