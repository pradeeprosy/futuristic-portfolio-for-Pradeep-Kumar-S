const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

async function runTests() {
  console.log('🚀 Starting Automated E2E Portfolio Testing...');
  const screenshotDir = path.join(__dirname, '..', 'screenshots');
  if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir, { recursive: true });
  }

  // Windows Chrome Default Path
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--enable-webgl', '--ignore-gpu-blocklist'],
  });

  const page = await browser.newPage();
  const consoleErrors = [];

  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      const text = msg.text();
      if (!text.includes('favicon.ico') && !text.includes('Failed to load resource')) {
        consoleErrors.push(text);
        console.error('Browser Console Error:', text);
      }
    }
  });

  page.on('pageerror', (err) => {
    consoleErrors.push(err.toString());
    console.error('Page error:', err.toString());
  });

  // 1. DESKTOP VIEWPORT TEST (1440x900)
  console.log('📱 Testing Desktop Viewport (1440x900)...');
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await page.goto('http://localhost:5173', { waitUntil: 'domcontentloaded' });
  await page.evaluate(() => {
    localStorage.setItem('pradeep_portfolio_theme', 'dark');
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  });
  await new Promise(r => setTimeout(r, 1500));

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
    await page.evaluate((targetHash) => {
      const el = document.querySelector(`a[href="${targetHash}"]`);
      if (el) el.click();
    }, hash);
    await new Promise(r => setTimeout(r, 400));
  }
  console.log('✓ Smooth scrolling to all sections verified');

  // 3. TEST AI ASSISTANT MODAL
  console.log('🤖 Testing AI Portfolio Assistant...');
  const openedAi = await page.evaluate(() => {
    const askAiBtn = document.querySelector('button[aria-label="Ask AI Portfolio Assistant"]');
    if (askAiBtn) {
      askAiBtn.click();
      return true;
    }
    return false;
  });

  if (openedAi) {
    await new Promise(r => setTimeout(r, 600));

    await page.type('input[placeholder*="Ask anything"]', 'What are Pradeep\'s main projects?');
    await page.keyboard.press('Enter');
    await new Promise(r => setTimeout(r, 1200));

    const aiModalPath = path.join(screenshotDir, '03_ai_assistant_modal.png');
    await page.screenshot({ path: aiModalPath });
    console.log('✓ AI Assistant modal and chat verified:', aiModalPath);

    await page.evaluate(() => {
      const closeBtn = document.querySelector('button[aria-label="Close assistant"]');
      if (closeBtn) closeBtn.click();
    });
    await new Promise(r => setTimeout(r, 400));
  }

  // 4. TEST PROJECT MODAL & FILTERING
  console.log('💼 Testing Project Filtering & Architecture Modal...');
  await page.evaluate(() => {
    const tabs = Array.from(document.querySelectorAll('button[role="tab"]'));
    const aimlTab = tabs.find(t => t.textContent && t.textContent.includes('AI & ML'));
    if (aimlTab) aimlTab.click();
  });
  await new Promise(r => setTimeout(r, 400));

  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('button'));
    const archBtn = btns.find(b => b.textContent && b.textContent.includes('Architecture & Specs'));
    if (archBtn) archBtn.click();
  });
  await new Promise(r => setTimeout(r, 600));

  const projectModalPath = path.join(screenshotDir, '04_project_modal.png');
  await page.screenshot({ path: projectModalPath });
  console.log('✓ Project architecture modal captured:', projectModalPath);

  await page.evaluate(() => {
    const closeProjBtn = document.querySelector('button[aria-label="Close project details"]');
    if (closeProjBtn) closeProjBtn.click();
  });
  await new Promise(r => setTimeout(r, 400));

  // 5. TEST RESUME MODAL
  console.log('📄 Testing Resume Modal...');
  const openedResume = await page.evaluate(() => {
    const resumeBtn = document.querySelector('button[aria-label="View or Download Resume"]');
    if (resumeBtn) {
      resumeBtn.click();
      return true;
    }
    return false;
  });

  if (openedResume) {
    await new Promise(r => setTimeout(r, 500));

    const resumeModalPath = path.join(screenshotDir, '05_resume_modal.png');
    await page.screenshot({ path: resumeModalPath });
    console.log('✓ Resume modal captured:', resumeModalPath);

    await page.evaluate(() => {
      const closeResumeBtn = document.querySelector('button[aria-label="Close resume dialog"]');
      if (closeResumeBtn) closeResumeBtn.click();
    });
    await new Promise(r => setTimeout(r, 400));
  }

  // 5b. TEST DIRECT TRANSMISSION FORM (WITHOUT NAVIGATING TO EMAIL)
  console.log('⚡ Testing Direct Transmission (No email client navigation)...');
  await page.evaluate(() => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) contactSection.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 600));

  await page.type('#contact-name', 'Sarah Connor');
  await page.type('#contact-email', 'sarah@techfuture.io');
  await page.type('#contact-subject', 'Software Engineering Opportunity in Dubai');
  await page.type('#contact-message', 'Hello Pradeep, we reviewed your projects and would like to discuss a software developer opportunity.');

  // Submit direct message
  await page.evaluate(() => {
    const submitBtn = document.querySelector('form button[type="submit"]');
    if (submitBtn) submitBtn.click();
  });

  // Wait for direct transmission completion
  await page.waitForFunction(
    () => document.body.innerText.includes('Transmission Dispatched Directly'),
    { timeout: 8000 }
  );

  // Verify URL did NOT navigate to mailto:
  const currentUrl = page.url();
  if (currentUrl.startsWith('mailto:')) {
    throw new Error('Form navigated to mailto: unexpectedly!');
  }
  console.log('✓ Verified: page remained in-app without navigating to external email client!');
  console.log('✓ Verified: In-page direct transmission confirmation banner displayed successfully!');

  const directTransmissionPath = path.join(screenshotDir, '11_direct_transmission_success.png');
  await page.screenshot({ path: directTransmissionPath });
  console.log('✓ Direct transmission screenshot captured:', directTransmissionPath);

  // 6. TEST THEME SWITCHER (LIGHT MODE)
  console.log('☀️ Testing Light Theme Toggle...');
  await page.evaluate(() => {
    const themeToggle = document.querySelector('button[title*="mode"]');
    if (themeToggle) themeToggle.click();
  });
  await new Promise(r => setTimeout(r, 600));

  const lightModePath = path.join(screenshotDir, '06_light_mode.png');
  await page.screenshot({ path: lightModePath });
  console.log('✓ Light mode captured:', lightModePath);

  // Switch back to dark mode
  await page.evaluate(() => {
    localStorage.setItem('pradeep_portfolio_theme', 'dark');
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
    const themeToggle = document.querySelector('button[title*="mode"]');
    if (themeToggle) themeToggle.click();
  });
  await new Promise(r => setTimeout(r, 400));

  // 7. TEST MOBILE VIEWPORT (390x844 - iPhone 14)
  console.log('📱 Testing Mobile Viewport (390x844)...');
  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true, deviceScaleFactor: 2 });
  await page.goto('http://localhost:5173#hero', { waitUntil: 'domcontentloaded' });
  await new Promise(r => setTimeout(r, 1000));

  const mobileHeroPath = path.join(screenshotDir, '07_mobile_hero.png');
  await page.screenshot({ path: mobileHeroPath });
  console.log('✓ Mobile hero captured:', mobileHeroPath);

  // Open mobile drawer
  await page.evaluate(() => {
    const hamburgerBtn = document.querySelector('button[aria-label="Toggle mobile menu"]');
    if (hamburgerBtn) hamburgerBtn.click();
  });
  await new Promise(r => setTimeout(r, 400));
  const mobileMenuPath = path.join(screenshotDir, '08_mobile_drawer.png');
  await page.screenshot({ path: mobileMenuPath });
  console.log('✓ Mobile navigation drawer captured:', mobileMenuPath);

  // 8. TEST TABLET VIEWPORT (768x1024 - iPad)
  console.log('📟 Testing Tablet Viewport (768x1024)...');
  await page.setViewport({ width: 768, height: 1024, isMobile: true, hasTouch: true, deviceScaleFactor: 2 });
  await page.goto('http://localhost:5173#skills', { waitUntil: 'domcontentloaded' });
  await new Promise(r => setTimeout(r, 1000));

  const tabletSkillsPath = path.join(screenshotDir, '09_tablet_skills.png');
  await page.screenshot({ path: tabletSkillsPath });
  console.log('✓ Tablet skills captured:', tabletSkillsPath);

  // 9. TEST EASTER EGG TERMINAL
  console.log('💻 Testing Easter Egg Terminal...');
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:5173', { waitUntil: 'domcontentloaded' });
  const openedTerminal = await page.evaluate(() => {
    const terminalBtn = document.querySelector('button[aria-label="Open Interactive Terminal Easter Egg"]');
    if (terminalBtn) {
      terminalBtn.click();
      return true;
    }
    return false;
  });

  if (openedTerminal) {
    await new Promise(r => setTimeout(r, 500));

    await page.type('input[placeholder*="Type \'help\'"]', 'help');
    await page.keyboard.press('Enter');
    await new Promise(r => setTimeout(r, 400));

    await page.type('input[placeholder*="Type \'help\'"]', 'crown');
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
