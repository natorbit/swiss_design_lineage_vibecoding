# Quick Start Checklist
## Your One-Week Vibe Coding Journey

**For:** IS 218 Enterprise AI Studio Project  
**Purpose:** Day-by-day task tracker with time tracking

---

## ⏱️ Time Tracking

**Track time for EVERY work session:**

| Date | Phase | Task | Hours | Notes |
|------|-------|------|-------|-------|
| | | | | |
| | | | | |
| | | | | |

**Why track time?**
- Shows how fast AI collaboration works
- Required for collaboration story
- Portfolio narrative (built in X hours)
- Appreciate the speed of vibe coding

**Total Target:** ~10 hours across one week (AI-powered)

---

## 📅 Day 1: Research & Vision (1 hour)

**Phase 1A: Choose Your Design Style (20 min)**

- [ ] Read the 15 style options in ONE-WEEK-PROJECT-GUIDE.md
- [ ] Pick one that excites you (not just "easy")
- [ ] Read your style guide thoroughly (in `/style-guides/`)
- [ ] Understand what makes it authentic vs. superficial

**My chosen style:** _________________________

**Why I chose it:**
```

**Phase 1B: Find Visual References (20 min)**

- [ ] Visit museums/sources listed in your style guide
```
(Write 2-3 sentences—you'll need this for collaboration story)
```

---

**Phase 1B: Find Visual References (3 hours)**

- [ ] Find 10-15 authoritative examples of your style
  - Museums (MoMA, V&A, Cooper Hewitt digital collections)
  - Design books (Phaidon, Thames & Hudson publishers)
  - Authoritative websites (see your style guide)
  - **NO Pinterest mood boards or random blogs**

- [ ] Save images in `/research/references/` folder
- [ ] Create `references.md` with:
  - Image filename
  - Source (museum, book, designer name)
  - What makes it authentic
  - Key characteristics you notice

**Number of references found:** _____ (minimum 10)

---

**Phase 1C: Generate AI Mockup (20 min)**

- [ ] Open VS Code with Copilot
- [ ] Create new markdown file: `research/mockup-brief.md`
- [ ] Describe your vision to AI:
  - Your chosen style
  - Key characteristics from references
  - Mood/feeling you want
  - Content structure (hero, nav, blog posts, about, footer)

- [ ] Prompt AI to generate HTML mockup prototype
- [ ] Review mockup screenshot
- [ ] Iterate 1-2 times if needed
- [ ] Save final mockup

**Mockup complete?** ☐ Yes

---

**Phase 1 Time Tracking:**

| Task | Planned | Actual | Difference |
|------|---------|--------|------------|
| Choose style | 20min | | |
| Find references | 20min | | |
| Generate mockup | 20min | | |
| **TOTAL** | **1h** | | |

---

## 📅 Day 2: Context Building (1 hour)

**Phase 2A: Extract Reference Site Best Practices (1.5 hours)**

- [ ] Fork Keith's Swiss site repository to your GitHub
- [ ] Clone to your machine
- [ ] Open in VS Code with Copilot
- [ ] Prompt AI:

```
Extract all technical best practices and good ideas from this Eleventy site.
Create a document: /docs/reference-site-patterns.md

Include:
- Project structure
- Template organization
- Data structure
- Build configuration
- Performance optimizations
- Accessibility patterns
- What makes this technically solid
```

- [ ] Review AI's extraction document
- [ ] Ask questions if anything unclear

**Document created?** ☐ Yes

---

**Phase 2B: Define Your Design System (1.5 hours)**

- [ ] Open your saved reference images
- [ ] Prompt AI:

```
Based on these [STYLE] reference images, create a comprehensive design system document: /docs/design-system.md

Define:
- Color palette (hex codes)
- Typography scale (font families, sizes, weights, line-heights)
- Spacing system (margins, padding scale)
- Grid structure
- Component styles (buttons, cards, navigation, etc.)
- Layout patterns
- Responsive breakpoints

Base this on authentic [STYLE] principles from the references.
```

- [ ] Screenshot the design system doc
- [ ] Review with AI (does it match references?)
- [ ] Iterate once if needed

**Design system defined?** ☐ Yes

---

**Phase 2C: Setup Quality Gates (1 hour)**

- [ ] Open QUALITY-GATES-SETUP.md
- [ ] Copy the "Let AI Set Everything Up" prompt
- [ ] Paste into Copilot chat
- [ ] Let AI configure:
  - Prettier
  - ESLint
  - Stylelint
  - Husky
  - GitHub Actions

- [ ] Verify setup (follow checklist in quality gates doc)
- [ ] Test pre-commit hook (make a dummy commit)
- [ ] Verify GitHub Actions runs

**All gates working?** ☐ Yes

---

**Phase 2 Time Tracking:**

| Task | Planned | Actual | Difference |
|------|---------|--------|------------|
| Extract patterns | 1.5h | | |
| Define design system | 1.5h | | |
| Setup quality gates | 1h | | |
| **TOTAL** | **4h** | | |

---

## 📅 Day 3: Sprint Planning (30 min)

**Phase 3A: Break Down the Transformation (1 hour)**

- [ ] Prompt AI:

```
Based on:
- Our [STYLE] design system (/docs/design-system.md)
- The reference site structure
- Our mockup vision

Create a sprint plan: /docs/sprint-plan.md

Break transformation into 4-6 sprints:
1. Design system setup (Tailwind config, base styles)
2. Layout transformation (grid, spacing, structure)
3. Typography transformation
4. Component styling
5. Content sections
6. Final polish & accessibility

For each sprint:
- Goal
- Files to modify
- Estimated time
- Success criteria
```

- [ ] Review sprint plan
- [ ] Ask AI to explain any unclear parts

**Sprint plan created?** ☐ Yes

---

**Phase 3B: Setup Project Workspace (1 hour)**

- [ ] Create new repo: `[yourname]-[style]-site`
- [ ] Copy reference site structure
- [ ] Commit initial state: "Initial commit before transformation"
- [ ] Create branch: `transformation`
- [ ] Push to GitHub
- [ ] Verify GitHub Actions runs

**Repo setup?** ☐ Yes

---

**Phase 3 Time Tracking:**

| Task | Planned | Actual | Difference |
|------|---------|--------|------------|
| Break down work | 1h | | |
| Setup workspace | 1h | | |
| **TOTAL** | **2h** | | |

---

## 📅 Days 4-6: Build & Iterate (6 hours total)

**CRITICAL:** This is pure vibe coding. You write ZERO code manually.

**For Each Sprint:**

### 1. Start Sprint (15 min)
- [ ] Read sprint goal from plan
- [ ] Open sprint files in VS Code
- [ ] Start timer for this sprint

### 2. Prompt AI to Build (30-60 min)
- [ ] Give AI the sprint instructions
- [ ] Watch it work in real-time
- [ ] Press ESC if it goes off track
- [ ] Let it complete the sprint

### 3. Screenshot Review (15 min)
- [ ] Take 3 screenshots: Desktop (1920px), Tablet (768px), Mobile (375px)
- [ ] Save in `/screenshots/sprint-[n]-review-1/`

### 4. First Design Review (30 min)
- [ ] Open DESIGN-QUALITY-CHECKLIST.md
- [ ] Review relevant section
- [ ] Share screenshots with AI
- [ ] List issues found

**Review 1 Issues:**
```
- 
- 
- 
```

### 5. Iterate (30 min)
- [ ] Prompt AI to fix issues
- [ ] Watch it refine
- [ ] Take new screenshots

### 6. Second Design Review (30 min)
- [ ] Review again with checklist
- [ ] Share new screenshots
- [ ] List remaining issues

**Review 2 Issues:**
```
- 
- 
```

### 7. Final Refinement (30 min)
- [ ] Prompt AI for final fixes
- [ ] Take final screenshots
- [ ] Verify section complete

### 8. Mobile Check (15 min)
- [ ] Test on actual phone (or DevTools)
- [ ] Verify touch targets (44px minimum)
- [ ] Check text readability
- [ ] Test navigation

### 9. Commit & Push (5 min)
- [ ] Commit: "Complete Sprint [N]: [description]"
- [ ] Push to GitHub
- [ ] Verify CI/CD passes

---

**Sprint Tracker:**

| Sprint | Goal | Planned | Actual | Reviews | Status |
|--------|------|---------|--------|---------|--------|
| 1 | Design system setup | 2h | | | ☐ |
| 2 | Layout transformation | 4h | | | ☐ |
| 3 | Typography | 3h | | | ☐ |
| 4 | Components | 4h | | | ☐ |
| 5 | Content sections | 5h | | | ☐ |
| 6 | Polish & a11y | 4h | | | ☐ |
| **TOTAL** | | **22h** | | | |

---

**Between Sprints:**

**Tech Debt Audit (every 2 sprints, 30 min each):**
- [ ] Prompt AI to audit technical debt
- [ ] Review generated issues list
- [ ] Prioritize what to fix
- [ ] Prompt AI to fix critical items

---

**Mid-Build Checkpoints:**

**After Sprint 3 (Typography complete):**
- [ ] Run Lighthouse audit
- [ ] Check accessibility score
- [ ] Verify performance baseline
- [ ] Fix any critical issues before continuing

**After Sprint 5 (Content complete):**
- [ ] Review overall consistency (DESIGN-QUALITY-CHECKLIST.md)
- [ ] Verify all sections match style
- [ ] Check mobile experience throughout
- [ ] Run full accessibility audit

---

**Phase 4 Time Tracking:**

| Day | Sprints Completed | Hours | Cumulative |
|-----|-------------------|-------|------------|
| Day 4 | | | |
| Day 5 | | | |
| Day 6 | | | |
| **TOTAL** | | **22h** | |

---

## 📅 Day 7: Reflection & Submission (1.5 hours)

**Phase 5A: Generate Collaboration Story (30 min)**

- [ ] Open COLLABORATION-STORY-TEMPLATE.md
- [ ] Copy the master prompt
- [ ] Customize with your:
  - Style name
  - Actual time spent
  - Number of reviews done
  - Lighthouse scores
  - Specific challenges faced

- [ ] Paste into AI chat
- [ ] Review generated story
- [ ] Add personal anecdotes AI doesn't know
- [ ] Refine 2-3 times
- [ ] Publish as `/collaboration-story.html`

**Story complete?** ☐ Yes

---

**Phase 5B: Final Quality Assurance (30 min)**

- [ ] Run full Lighthouse audit (all pages)
  - [ ] Performance: 90+ ☐
  - [ ] Accessibility: 90+ ☐
  - [ ] Best Practices: 90+ ☐
  - [ ] SEO: 90+ ☐

- [ ] Accessibility audit:
  - [ ] Keyboard navigation works ☐
  - [ ] Screen reader compatible ☐
  - [ ] Color contrast passes ☐
  - [ ] Semantic HTML used ☐

- [ ] Mobile testing (real device):
  - [ ] All pages load properly ☐
  - [ ] Navigation works ☐
  - [ ] Touch targets adequate ☐
  - [ ] Text readable ☐

- [ ] Cross-browser testing:
  - [ ] Chrome ☐
  - [ ] Firefox ☐
  - [ ] Safari ☐

- [ ] Quality gates passing:
  - [ ] Prettier ☐
  - [ ] ESLint ☐
  - [ ] Stylelint ☐
  - [ ] GitHub Actions ☐

**All audits passing?** ☐ Yes

---

**Phase 5C: Documentation & Submission (30 min)**

- [ ] Update README.md:
  - Project description
  - Design style explanation
  - Build instructions
  - Technologies used
  - Lighthouse scores
  - Link to live site
  - Link to collaboration story

- [ ] Organize documentation:
  - [ ] `/docs/design-system.md` ☐
  - [ ] `/docs/sprint-plan.md` ☐
  - [ ] `/docs/reference-site-patterns.md` ☐
  - [ ] `/research/references.md` ☐
  - [ ] `/research/mockup-brief.md` ☐

- [ ] Organize screenshots:
  - [ ] Create `/screenshots/final/` folder ☐
  - [ ] Add hero, nav, content, footer, mobile ☐

- [ ] Deploy to GitHub Pages:
  - [ ] Enable in repo settings ☐
  - [ ] Verify live URL works ☐
  - [ ] Test all pages live ☐

- [ ] Submit:
  - [ ] Live URL ☐
  - [ ] GitHub repo URL ☐
  - [ ] Collaboration story URL ☐
  - [ ] Time tracking summary ☐

**Submission complete?** ☐ Yes

---

**Phase 5 Time Tracking:**

| Task | Planned | Actual | Difference |
|------|---------|--------|------------|
| Collaboration story | 2h | | |
| Final QA | 2h | | |
| Documentation | 2h | | |
| **TOTAL** | **6h** | | |

---

## 📊 Final Project Summary

**Total Time Invested:**

| Phase | Planned | Actual | Difference |
|-------|---------|--------|------------|
| Phase 1: Research | 6h | | |
| Phase 2: Context | 4h | | |
| Phase 3: Planning | 2h | | |
| Phase 4: Build | 22h | | |
| Phase 5: Reflection | 6h | | |
| **TOTAL** | **40h** | | |

**Key Metrics:**

- Design style: _________________________
- Design review iterations: _____ total
- Screenshots taken: _____
- Sprints completed: _____
- Lighthouse Performance: _____
- Lighthouse Accessibility: _____
- Lighthouse Best Practices: _____
- Lighthouse SEO: _____
- Lines of code manually written: **0** ✨

---

## ✅ Submission Checklist

**Before submitting, verify ALL these:**

### Site Quality
- [ ] Live site deployed and accessible
- [ ] All pages work (no 404s)
- [ ] Navigation functional on all devices
- [ ] Mobile responsive (375px, 768px, 1920px)
- [ ] Images load properly
- [ ] No console errors

### Design Quality
- [ ] Authentically represents chosen style
- [ ] Avoids common style mistakes
- [ ] Consistent across all sections
- [ ] Bold design choices maintained
- [ ] Not generic template-looking

### Technical Quality
- [ ] Lighthouse scores 90+ (all four metrics)
- [ ] Accessibility WCAG 2.1 AA compliant
- [ ] Quality gates all passing (Prettier, ESLint, Stylelint)
- [ ] GitHub Actions CI/CD passing
- [ ] No linting errors
- [ ] Build succeeds

### AI Collaboration
- [ ] Collaboration story published
- [ ] Story breaks fourth wall effectively
- [ ] Honest about process (struggles included)
- [ ] Shows iteration (not just success)
- [ ] Time tracking included
- [ ] Screenshots documented

### Documentation
- [ ] README.md comprehensive
- [ ] Design system documented
- [ ] Sprint plan documented
- [ ] References documented
- [ ] All required docs in `/docs/`

### Submission Materials
- [ ] Live URL submitted
- [ ] GitHub repo URL submitted
- [ ] Repo is public (not private)
- [ ] Collaboration story URL submitted
- [ ] Time tracking summary submitted

---

## 🎯 Success Indicators

**You'll know you succeeded when:**

✅ Your site looks professionally designed  
✅ It authentically represents your chosen style  
✅ Lighthouse scores are 90+ across the board  
✅ You can explain every design decision  
✅ Your collaboration story is engaging  
✅ You completed it in ~10 hours (AI-powered!)  
✅ You developed design taste and judgment  
✅ You understand human-AI collaboration deeply  

---

## 💡 Final Tips

**Time Management:**
- Work in focused 30min-1hour blocks
- Take breaks between sprints
- Let AI handle the tedious work
- Track time honestly

**Design Reviews:**
Don't skip iterations. First version is always too safe. Push the style further.

**AI Collaboration:**
- Remember: AI is blind (screenshots essential)
- Stop AI when it goes off track (ESC key)
- Ask "why" to understand its decisions
- Iterate boldly

**Scope Management:**
- Follow the sprint plan
- Don't add features mid-build
- Focus on design quality over quantity
- Finish strong rather than big

**Portfolio Value:**
This isn't just a class project. It's a unique portfolio piece showing:
- Strategic AI collaboration
- Design taste development
- Rapid prototyping ability
- Professional quality output

**Make it count.** 🚀

---

**Document Version:** 1.0  
**Last Updated:** November 5, 2025  
**Course:** IS 218 Enterprise AI Studio Project  
**Instructor:** Keith Williams, NJIT
