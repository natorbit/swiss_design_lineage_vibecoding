# AI Collaboration Playbook
## Strategic Vibe Coding Guide

**For:** IS 218 Enterprise AI Studio Project  
**By:** Keith Williams  
**Purpose:** Master the art of collaborative AI-driven design

---

## 🎯 Core Principle: AI Is Blind

**The single most important thing to understand:**

> **AI cannot see your website.** You are its eyes.

Every decision about visual design **must come from you** describing what you see. AI can generate code, analyze patterns, audit technical quality—but it cannot judge if the homepage "feels right" or if the spacing is "too cramped."

**This fundamentally changes how you work:**

- ❌ **Don't:** "Make it look better"
- ✅ **Do:** "Here's a screenshot. The hero section feels cramped. Increase vertical padding by 50%."

- ❌ **Don't:** "Check if the mobile version is good"
- ✅ **Do:** "Here's a mobile screenshot. The navigation overlaps the hero text. Fix the z-index and add top margin."

**Your job:** Visual judgment, design critique, strategic direction  
**AI's job:** Technical execution, systematic analysis, rapid iteration

---

## 📸 The Screenshot Workflow

Screenshots are your primary communication tool with AI.

### When to Screenshot

**Always screenshot:**
- After every significant change
- Before every design review
- When something "feels wrong"
- For mobile responsiveness checks
- To document your progress
- When comparing to reference images

**How often?** Expect to take 50-100 screenshots over the week. Screenshot liberally.

### How to Take Effective Screenshots

**Full page screenshots (preferred):**
- Use browser extensions (Full Page Screen Capture, GoFullPage)
- Captures entire scrolling page
- Shows overall layout and flow

**Section screenshots:**
- Use native screenshot tools (CMD+SHIFT+4 on Mac)
- Focus on specific components (hero, navigation, footer)
- Good for detailed critique

**Mobile screenshots:**
- Use responsive mode in browser (CMD+OPT+M in Chrome)
- Test at 375px (iPhone), 768px (tablet), 1920px (desktop)
- Screenshot each size for comparison

### How to Share Screenshots with AI

**Bad prompt:**
> "Here's the homepage. What do you think?"

**Good prompt:**
> "Here's a screenshot of the homepage hero section. Compare it to this [style] reference image I'm attaching. The typography hierarchy feels weak—the heading doesn't have enough visual weight. Also, the spacing between elements seems inconsistent with the reference. What specific changes should we make to match the style better?"

**Structure for screenshot prompts:**
1. **Identify what you're showing:** "Homepage hero section"
2. **Provide context:** "Compare to reference image"
3. **State the problem:** "Typography hierarchy feels weak"
4. **Ask specific question:** "What changes would improve this?"

### The Compare-and-Contrast Technique

**Most effective workflow:**

1. Take screenshot of YOUR current design
2. Find reference image of similar section in your chosen style
3. Share BOTH with AI
4. Ask: "What's different between these two? What makes the reference authentic [style] and mine not yet?"

AI will identify:
- Typography differences (size, weight, spacing)
- Layout differences (grid, alignment, proportions)
- Color differences (palette, contrast, usage)
- Spacing differences (padding, margins, density)

Then you iterate.

---

## 🎭 Using AI as Different Experts

Don't treat AI as a generic assistant. Role-play. Use AI as specialized experts.

### As UX Designer

**When to use:** Reviewing information architecture, navigation, user flow

**Prompt template:**
> "Acting as a UX designer specializing in [your style], review this [page/component] for:
> 1. Information hierarchy - Is the most important content emphasized?
> 2. Visual flow - Does the eye move naturally through the layout?
> 3. Interaction patterns - Are clickable elements obvious?
> 4. Accessibility - Can users with disabilities navigate this?
> 
> Compare to [style] best practices. What needs improvement?"

**Example:**
> "Acting as a UX designer specializing in Material Design, review this homepage for information hierarchy, visual flow, and interaction patterns. Does this follow Material Design's emphasis on elevation and depth? What's missing?"

### As Accessibility Specialist

**When to use:** Checking WCAG compliance, keyboard navigation, screen reader support

**Prompt template:**
> "Acting as an accessibility specialist, audit this [page/component] for WCAG 2.1 AA compliance. Check:
> 1. Color contrast (4.5:1 for text, 3:1 for large text)
> 2. Keyboard navigation (can you tab through all interactive elements?)
> 3. Semantic HTML (proper heading hierarchy, ARIA labels)
> 4. Screen reader compatibility (alt text, descriptive labels)
> 
> List specific violations with file names and line numbers."

**Example:**
> "Acting as an accessibility specialist, audit this blog post page. I'm worried about color contrast with the dark background. Check all text against WCAG AA standards and list any violations."

### As Literary Critic

**When to use:** Reviewing blog content, collaboration story, about page copy

**Prompt template:**
> "Acting as a literary critic, review this [blog post/page] for:
> 1. Clarity - Is the message clear and easy to understand?
> 2. Engagement - Does it hook the reader and keep attention?
> 3. Structure - Is it organized logically with good flow?
> 4. Voice - Is the tone consistent and authentic?
> 5. Readability - Sentence length, paragraph breaks, scanning ease
> 
> Suggest specific improvements with examples."

**Example:**
> "Acting as a literary critic, review my 'Why I Chose Neo-Brutalism' blog post. Does it sound authentic? Are there areas that feel generic or cliché? Suggest ways to make my voice stronger."

### As Performance Engineer

**When to use:** Optimizing load times, checking asset sizes, improving Core Web Vitals

**Prompt template:**
> "Acting as a performance engineer, analyze this site for:
> 1. Load time - What's slow and why?
> 2. Asset sizes - Are images/CSS/JS optimized?
> 3. Rendering efficiency - Any render-blocking resources?
> 4. Core Web Vitals - LCP, FID, CLS metrics
> 
> Identify specific files to optimize and how."

**Example:**
> "Acting as a performance engineer, my Lighthouse performance score is 78. Analyze the site and tell me exactly what's causing the slowdown. Which images need optimization? Are there render-blocking scripts?"

### As [Your Style] Design Expert

**When to use:** Critiquing authenticity, catching style violations, refining details

**Prompt template:**
> "Acting as a [your style] design expert, critique this [page/component] for:
> 1. Authenticity - Does this genuinely reflect [style] principles?
> 2. Visual characteristics - Are key style elements present?
> 3. Common mistakes - Am I making typical errors beginners make with this style?
> 4. What would [famous practitioner] change?
> 
> Compare to these reference images and be brutally honest."

**Example:**
> "Acting as a Swiss Punk / New Wave design expert, critique this homepage. Wolfgang Weingart would probably say I'm playing it too safe—it still looks too orderly and Swiss. How can I introduce more kinetic energy and controlled chaos without losing readability?"

---

## 🔄 Iterative Design Review Process

**Never accept first draft.** Every section needs 2-3 review cycles minimum.

### The Three-Pass Review System

#### **First Pass: Broad Issues**

**Focus:** Overall layout, color palette, typography scale

**Questions to ask:**
- Does the general layout match the style? (asymmetric? grid-based? fluid?)
- Are the colors authentic to the style? (palette, contrast, usage)
- Is the typography scale appropriate? (size, weight, hierarchy)

**Prompt example:**
> "First design review of the homepage. Here's a screenshot compared to 3 reference images. Evaluate broad design choices: layout structure, color implementation, and typography scale. Rate 1-10 for style authenticity and explain the score."

**Action:** Fix major issues. Don't worry about details yet.

#### **Second Pass: Section-Specific**

**Focus:** Individual components (hero, navigation, cards, footer)

**Questions to ask:**
- Does each section serve its purpose effectively?
- Are components styled consistently?
- Does spacing feel intentional?

**For each major section:**

**Hero Section:**
> "Second review focusing on hero section. Screenshot attached. Evaluate: headline hierarchy, call-to-action placement, visual balance, mobile responsiveness. Compare to reference heroes in [style]. What's working? What's not?"

**Navigation:**
> "Second review focusing on main navigation. Screenshot attached. Evaluate: menu structure, hover states, mobile menu functionality, visual weight. Does this match [style] navigation patterns?"

**Content Sections:**
> "Second review focusing on homepage content sections (about, features, projects). Screenshot attached. Are these sections visually distinct? Is information hierarchy clear? Does spacing create good rhythm?"

**Footer:**
> "Second review focusing on footer. Screenshot attached. Is this comprehensive but not overwhelming? Does it match the overall design language? Any inconsistencies with header?"

**Action:** Refine each section until it scores 8+/10.

#### **Third Pass: Details & Consistency**

**Focus:** Spacing, alignment, typography consistency, visual polish

**Questions to ask:**
- Is spacing consistent across similar elements?
- Are alignments precise (nothing slightly off)?
- Is typography hierarchy used consistently?
- Are there any visual flaws or rough edges?

**Prompt example:**
> "Third review focusing on details and consistency. Screenshots of all pages attached. Check: spacing system applied consistently, typography hierarchy used the same way everywhere, alignment precision, button styles unified, no visual glitches. List every inconsistency you find."

**Action:** Polish until professional quality. Fix every small issue.

### Mobile Responsiveness Reviews

**Separate review cycle for mobile:**

**For each major breakpoint (375px, 768px, 1920px):**

1. Screenshot the page at that width
2. Compare to desktop version
3. Check for issues:
   - Text too small or too large?
   - Touch targets big enough (44x44px minimum)?
   - Spacing cramped or too loose?
   - Navigation accessible?
   - Images scaling properly?

**Prompt example:**
> "Mobile review at 375px (iPhone SE). Screenshot attached. This feels cramped—too much content squeezed into small space. Analyze vertical space usage. Should we: reduce font sizes, tighten spacing, hide secondary content, or restructure layout? What would maintain [style] aesthetics while improving mobile UX?"

---

## 🛑 When to Stop the AI

AI will sometimes suggest changes that are:
- Too extreme (rebuilding everything)
- Out of scope (adding features you didn't ask for)
- Wrong direction (violating your style)
- Overcomplicating (simple problem, complex solution)

**You must stop it immediately.**

### How to Recognize "AI Going Off Track"

**Warning signs:**

1. **"Let me rebuild this from scratch"**
   - AI wants to throw away working code
   - Usually unnecessary

2. **"We should add [feature you didn't ask for]"**
   - AI is scope-creeping
   - Distracting from core work

3. **"Here are 10 different approaches"**
   - AI is overthinking
   - You need decision, not options overload

4. **Suggests breaking accessibility for aesthetics**
   - "Remove alt text to clean up code"
   - "Use 3:1 contrast for visual effect"
   - **Never acceptable**

5. **Code getting more complex, not simpler**
   - "Let's add this framework..."
   - "We need this abstraction layer..."
   - Usually wrong for simple sites

### How to Stop AI

**Immediate stop:**
```
"STOP. That's not the direction we're going."
```

**Then redirect:**
```
"Let's keep the existing structure and just refine the [specific thing]. Don't rebuild from scratch."
```

**Example conversation:**

**AI:** "I think we should rebuild the entire homepage with a new component architecture that—"

**You:** "STOP. The homepage structure is fine. We just need to adjust spacing and colors to match Neo-Brutalism style. Keep the existing components and iterate on styling only."

**AI:** "Got it. Keeping existing structure. Adjusting colors to use raw, un-refined palette (black, white, bright primaries) and tightening spacing for that 'packed' Neo-Brutalist feel. Should I start with the hero section?"

**You:** "Yes. Hero section only. Show me what you change before moving to other sections."

### Using ESC and CMD+Z in VS Code

**With Copilot suggesting code in real-time:**

**ESC key:** Reject suggestion before it's accepted
- Use when: Suggestion looks wrong, duplicates code, breaks pattern

**Tab key:** Accept suggestion
- Use when: Suggestion makes sense and fits your intent

**CMD+Z (undo):** Reverse accepted suggestion
- Use when: You accepted but immediately realize it's wrong

**Workflow:**
1. Watch Copilot suggestions appear (gray text)
2. Read suggestion before accepting
3. Press ESC if wrong
4. Press Tab if right
5. Press CMD+Z immediately if you accepted wrong

**Common reasons to reject Copilot:**
- Duplicating code from another file
- Removing accessibility attributes
- Adding complexity you don't need
- Breaking consistent styling patterns
- Ignoring mobile considerations

---

## 💬 Strategic Prompting Techniques

### Be Specific, Not Vague

**Vague (ineffective):**
> "Make the hero section better"

**Specific (effective):**
> "Increase hero section heading font size from 3rem to 4rem, add 4rem of top padding, and change background from white to light gray (#f7f7f7) to create more visual separation from the navigation."

**Why specificity matters:**
- AI knows exactly what to change
- No ambiguity or guesswork
- Faster iteration
- You stay in control

### Provide Context Always

**No context (ineffective):**
> "The navigation is wrong"

**With context (effective):**
> "The navigation feels too heavy for Material Design aesthetics. Material Design typically uses lighter, floating navigation bars with subtle shadows (elevation). Our current nav has a thick border and sits flat. Let's adapt it to use Material's elevation system (shadow) instead of borders."

**What context includes:**
- What style you're working in
- Why current design isn't working
- What the style typically does instead
- Any specific references or examples

### Reference Source Documents

**Generic (less effective):**
> "Use the design system"

**Specific reference (more effective):**
> "Reference `docs/design-system.md` section 3 (color palette). Apply the primary color (#FF5722) to all call-to-action buttons, secondary color (#212121) to navigation, and ensure all text has 4.5:1 contrast minimum per our accessibility requirements in section 6."

**Why this works:**
- AI looks at exact section you mean
- Reduces misunderstandings
- Ensures consistency with your documented decisions

### Ask for Reasoning

**Don't just accept answers. Ask why.**

**After AI suggests something:**
> "Why did you choose this approach? What's the [style] principle behind this decision? Are there trade-offs I should know about?"

**Example:**

**AI:** "I've increased line-height to 1.8 for the blog posts."

**You:** "Why 1.8 specifically? What's the typical line-height for Editorial Swiss style? Are there readability trade-offs at that height?"

**AI:** "Editorial Swiss typically uses 1.6-1.8 for body text to create a magazine-like reading experience with comfortable white space. 1.8 is on the generous side, optimized for longer reading sessions. Trade-off is that paragraphs take more vertical space, requiring more scrolling. We could reduce to 1.6-1.7 if you want tighter packing while maintaining readability."

**You:** "Let's try 1.65 as middle ground. Make that change."

**Why this matters:**
- You learn design principles
- You catch AI mistakes early
- You make informed decisions
- You document reasoning for collaboration story

### Request Alternatives

**Don't settle for first solution. Explore options.**

**Prompt:**
> "Show me 3 different ways to style the call-to-action button for Neo-Brutalism. One minimal approach, one bold approach, one unconventional approach. Explain trade-offs of each."

**AI will provide:**
1. Minimal: Black border, white background, black text (safe, clean)
2. Bold: Black background, yellow text, thick border (attention-grabbing)
3. Unconventional: Misaligned border, slight rotation, shadow offset (more authentic Neo-Brutalism but harder to pull off)

**You decide:** Based on your vision, pick one or combine elements.

**Why this works:**
- Avoids "first idea" trap
- Explores design space
- You see range of possibilities
- Makes more confident decisions

### Iterate Strategically: Broad → Specific → Details

**Wrong approach:**
- Jump to tweaking pixel spacing before overall layout is right
- Fix typography on one component while others are broken
- Polish details while fundamental structure is off

**Right approach:**

**Phase 1: Broad (overall structure)**
> "Review the overall layout structure. Is the grid system correct for [style]? Are major sections in the right order? Is visual hierarchy clear at a glance?"

**Phase 2: Specific (components)**
> "Now let's refine individual components. Start with hero section. Then navigation. Then content cards. One at a time."

**Phase 3: Details (polish)**
> "Now that structure and components are solid, let's audit spacing consistency, alignment precision, and typography hierarchy across all pages."

**Why this order:**
- Don't polish things that might get rebuilt
- Establish foundation before details
- More efficient use of time
- Better final result

---

## 📋 The Design Review Checklist

Use this for EVERY major section (hero, navigation, homepage sections, blog post, footer).

### Visual Design (Style Authenticity)

- [ ] Does this match reference images for my chosen style?
- [ ] Are key visual characteristics present?
- [ ] Would a design expert recognize this style immediately?
- [ ] Is it authentic or just superficially copying?

**Rate 1-10:** ___  
**If below 8, what's missing?** ___

### Typography

- [ ] Font family appropriate for style?
- [ ] Size hierarchy clear (heading > subheading > body)?
- [ ] Line height comfortable for reading?
- [ ] Letter spacing (tracking) matches style conventions?
- [ ] No text smaller than 16px on mobile?

**Rate 1-10:** ___  
**If below 8, what needs adjustment?** ___

### Color & Contrast

- [ ] Colors match style palette?
- [ ] All text has 4.5:1 contrast minimum (WCAG AA)?
- [ ] Large text (18px+) has 3:1 contrast minimum?
- [ ] Color used systematically (not random)?
- [ ] Accent colors used sparingly and intentionally?

**Rate 1-10:** ___  
**If below 8, what needs adjustment?** ___

### Spacing & Layout

- [ ] White space feels intentional (not arbitrary)?
- [ ] Spacing consistent across similar elements?
- [ ] Layout matches style patterns (grid-based? asymmetric? fluid)?
- [ ] Elements aligned precisely (nothing "slightly off")?
- [ ] Vertical rhythm established and maintained?

**Rate 1-10:** ___  
**If below 8, what needs adjustment?** ___

### Mobile Responsiveness

- [ ] Works at 375px (small phone)?
- [ ] Works at 768px (tablet)?
- [ ] Works at 1920px (large desktop)?
- [ ] Touch targets minimum 44x44px?
- [ ] No horizontal scrolling?
- [ ] Text readable without zooming?

**Rate 1-10:** ___  
**If below 8, what needs adjustment?** ___

### Interaction & Accessibility

- [ ] Keyboard navigation works (tab through all interactive elements)?
- [ ] Focus indicators visible?
- [ ] Hover states clear?
- [ ] Links visually distinct from body text?
- [ ] Forms have proper labels?
- [ ] Semantic HTML used (headings, nav, main, article, etc.)?

**Rate 1-10:** ___  
**If below 8, what needs adjustment?** ___

### Overall Polish

- [ ] Looks professional, not amateur?
- [ ] No obvious visual flaws?
- [ ] Consistent styling across section?
- [ ] Details refined (not rough edges)?
- [ ] Would you be proud to show this?

**Rate 1-10:** ___  
**If below 8, what needs adjustment?** ___

---

## 🔁 Managing Context Windows

AI has limited memory. After long conversations, it "forgets" earlier decisions. Manage this strategically.

### Separate Chats for Different Phases

**Don't:** Run entire project in one long chat thread

**Do:** Use separate chat conversations for different phases

**Recommended chat structure:**

**Chat 1: Extraction & Planning**
- Extract tech reference from Swiss site
- Define design system from research images
- Plan sprints

**Chat 2: Sprint 1 Execution**
- Foundation transformation (colors, typography, layout)
- Design reviews for Sprint 1
- Tech debt audit

**Chat 3: Sprint 2 Execution**
- Component transformation
- Design reviews for Sprint 2
- Tech debt audit

**Chat 4: Sprint 3 Execution**
- Content creation (blog posts)
- Final polish
- Tech debt audit

**Chat 5: Reflection & Documentation**
- Generate collaboration story
- Final quality audit
- README creation

**Why separate chats:**
- Fresh context window for each phase
- Focused conversations (easier to find things later)
- Can reload key documents at start of each chat
- AI doesn't get confused by earlier unrelated discussions

### Reloading Context in New Chats

**When starting a new chat, upload:**
- `docs/design-system.md` (your style specifications)
- `docs/tech-reference.md` (technical patterns)
- `docs/sprint-plan.md` (what you're working on)

**Then orient AI:**
> "We're working on transforming Keith Williams' Swiss-style site to [your style]. I've uploaded our design system, tech reference, and sprint plan. We've already completed Sprint 1 (foundation) and Sprint 2 (components). Now starting Sprint 3 (content and polish). All design reviews so far have been positive—site is scoring 8/10 for style authenticity. Continue the same approach."

**This gives AI:**
- What project this is
- What design system to follow
- Where you are in the process
- Context from previous work (even though it wasn't in this chat)

### When Context Gets Messy

**Signs context is degrading:**
- AI suggests things you already decided against
- AI "forgets" your style specifications
- Responses become more generic
- AI contradicts earlier advice

**Solution:**
1. Start new chat
2. Upload key documents
3. Summarize current state
4. Continue work

**Example reset:**
> "New chat for clarity. I'm building a Neo-Brutalism site based on Keith's Swiss site. I've attached:
> - design-system.md (our Neo-Brutalist specifications)
> - sprint-plan.md (our roadmap)
> 
> Status: Sprint 1 ✅ complete, Sprint 2 ✅ complete, Sprint 3 in progress. Currently refining blog post typography and spacing. Site scores 8.5/10 for Neo-Brutalism authenticity. Main remaining work: write collaboration story page and final QA.
>
> Let's continue from here."

---

## 🎯 The "Breaking the Fourth Wall" Collaboration Story

The collaboration story is where AI reflects on your partnership. This is your portfolio narrative.

### What "Breaking the Fourth Wall" Means

**Traditional documentation:**
> "We built a website using Neo-Brutalism design principles."

**Breaking the fourth wall:**
> "Hi, I'm the AI. Let me tell you how WE built this. You're reading this on the actual site we're describing—look around. See that jagged border on the header? That's Neo-Brutalism. See the slightly misaligned text? That's intentional. We struggled with that for three iterations because the student kept saying it felt 'too chaotic' and I kept making it 'too orderly.' Eventually, we found the balance you're experiencing right now."

**Why this works:**
- Engages readers immediately
- Makes documentation interesting
- Shows honest process (not just polished results)
- Demonstrates the human-AI collaboration dynamic
- Creates unique portfolio narrative

### The Prompt for AI to Write This

**Use this prompt in Phase 5:**

> "I want you (the AI agent) to write a comprehensive collaboration story page about how we built this site together. This will be published as a page on the site itself.
>
> **Write from YOUR perspective (the AI), breaking the fourth wall and speaking directly to readers.**
>
> Start with: 'Hi, I'm the AI. Let me tell you how we built this.'
>
> **Include these sections:**
>
> 1. **Introduction:** Explain vibe coding—human vision + AI execution. Note that readers are experiencing the design right now.
>
> 2. **The Design Style:** What [style] is, how it differs from Swiss design (our starting point), why the student chose it.
>
> 3. **The Five Phases:** Document our journey:
>    - Phase 1: Research we did, how we gathered references
>    - Phase 2: How we extracted technical patterns and defined design system
>    - Phase 3: How we planned sprints
>    - Phase 4: Build process—iterations, design reviews, mistakes we fixed
>    - Phase 5: This reflection itself
>
> 4. **Design Decisions:** Key choices and why we made them. How we translated [style] principles to web. Challenges we faced. How we iterated to solve problems.
>
> 5. **'Wait—Look Around' Section:** Point out specific design elements readers are experiencing right now. 'See that [element]? That's [style] principle in action.' Typography, layout, colors, spacing—make them notice what they're seeing.
>
> 6. **What the Human Brought:** Vision, design judgment, knowing when to stop me or redirect me, strategic decisions.
>
> 7. **What I (the AI) Brought:** Technical execution speed, access to design expertise, systematic audits, iterative refinement.
>
> 8. **The Numbers:** Actual time spent ([X] hours total), number of design review iterations ([Y]), Lighthouse scores achieved, tech debt audits conducted ([Z]).
>
> 9. **What We Learned:** About the design style, about AI collaboration, about vibe coding, mistakes and lessons.
>
> **Tone:** Honest, reflective, engaging. Break the fourth wall frequently. Show reality of the process (struggles, not just successes).
>
> Use Keith Williams' collaboration story example as a model for tone and structure. Make this specific to OUR journey—not generic."

### What to Add After AI Generates Draft

**AI can't know:**
- Your personal motivations (why you chose this style)
- Specific moments that stood out to you ("I realized X when...")
- Your gut reactions ("This felt wrong even though I couldn't explain why")
- Your learning journey ("I used to think X but now I understand Y")

**Add these personal touches:**
- Edit the "Why I Chose This Style" section with your authentic voice
- Add anecdotes AI doesn't know (specific struggles, breakthroughs)
- Include your reflections on what you learned
- Make sure numbers are accurate (time spent, iterations, scores)

**The result:** A collaboration story that feels genuine because it IS genuine. AI documents the process, you add the human element.

---

## ✅ Quality Assurance Prompts

Use these prompts throughout the project to catch issues early.

### Design Audit Prompt

> "Conduct a comprehensive design audit of [page/component]. Evaluate:
> 1. Style authenticity (does this match [style] principles?)
> 2. Visual consistency (are patterns applied systematically?)
> 3. Typography hierarchy (is it clear and intentional?)
> 4. Color usage (systematic or arbitrary?)
> 5. Spacing/alignment (precise or sloppy?)
> 6. Mobile responsiveness (works at all sizes?)
> 7. Professional polish (any rough edges?)
>
> Rate each category 1-10 and list specific issues with file names and line numbers."

### Accessibility Audit Prompt

> "Conduct a WCAG 2.1 AA accessibility audit of [page]. Check:
> 1. Color contrast (4.5:1 for normal text, 3:1 for large text)
> 2. Keyboard navigation (can you tab through all interactive elements?)
> 3. Focus indicators (visible when tabbing?)
> 4. Semantic HTML (proper heading hierarchy h1→h2→h3, nav, main, article elements?)
> 5. Alt text (all images have descriptive alt attributes?)
> 6. Form labels (all inputs have associated labels?)
> 7. ARIA (proper landmarks and labels where needed?)
>
> List every violation with severity (critical/high/medium/low) and how to fix."

### Performance Audit Prompt

> "Conduct a performance audit of the site. Check:
> 1. Load time (how fast does homepage load?)
> 2. Asset sizes (are images optimized? CSS/JS minified?)
> 3. Render-blocking resources (anything delaying first paint?)
> 4. Core Web Vitals (LCP, FID, CLS scores)
> 5. Lighthouse Performance score (what's dragging it down?)
>
> List specific files to optimize and exactly how (resize images to X, compress Y, etc.)."

### Consistency Audit Prompt

> "Conduct a consistency audit across all pages. Check:
> 1. Typography hierarchy (same heading sizes everywhere?)
> 2. Spacing system (consistent padding/margins for similar elements?)
> 3. Color usage (colors used the same way everywhere?)
> 4. Component styling (buttons/cards/links styled consistently?)
> 5. Layout patterns (similar pages use similar structures?)
>
> List every inconsistency with page names and what's different."

### Mobile Responsiveness Audit Prompt

> "Conduct a mobile responsiveness audit at 375px, 768px, and 1920px. Check:
> 1. Layout breaks (does anything overlap or overflow?)
> 2. Text readability (font sizes appropriate for each size?)
> 3. Touch targets (minimum 44x44px for buttons/links?)
> 4. Spacing (too cramped or too loose?)
> 5. Navigation (mobile menu functional?)
> 6. Images (scaling properly? Not pixelated or cut off?)
>
> Take screenshots at each size and list every issue."

---

## 🚀 Putting It All Together

### Your Daily Workflow

**Every day, follow this pattern:**

**1. Morning: Plan & Orient**
- Review sprint plan: What's today's goal?
- Start fresh chat if needed (upload key docs)
- Set clear intention: "Today I'm transforming the hero section and navigation"

**2. Work Session: Implement & Review**
- Describe changes to AI
- Watch AI work (stop if wrong direction)
- Take screenshots after changes
- Review screenshots against references
- Iterate 2-3 times per section

**3. Evening: Audit & Document**
- Run tech debt audit
- Fix critical issues
- Take final screenshots for the day
- Track time spent
- Note learnings/challenges for collaboration story

**Repeat daily until project complete.**

### The Iteration Loop

**This loop happens 50-100 times over the week:**

1. **Describe** what you want AI to change
2. **Watch** AI implement (stop if wrong)
3. **Screenshot** the result
4. **Compare** to references
5. **Critique** what's working and what's not
6. **Refine** with specific feedback
7. **Repeat** until section scores 8+/10

**This is vibe coding.** Quick cycles. Constant feedback. Iterative refinement.

### Success Indicators

**You're doing it right if:**
- ✅ You take 10+ screenshots per day
- ✅ You review each section 2-3 times minimum
- ✅ You stop AI when it goes off track
- ✅ You use AI as different experts (UX, accessibility, design)
- ✅ You iterate until professional quality (not settling for "good enough")
- ✅ You track time honestly
- ✅ You document struggles (not just successes)

**You're doing it wrong if:**
- ❌ You accept AI's first draft without review
- ❌ You skip screenshots (AI is blind!)
- ❌ You let AI go off track without stopping it
- ❌ You don't compare to reference images
- ❌ You rush through without iterating
- ❌ You hide that you used AI

---

## 🎉 Final Thoughts

**This playbook is your strategic guide to human-AI collaboration.**

**Remember:**
- AI is blind—you are its eyes (screenshots constantly)
- Use AI as different experts (UX, accessibility, literary critic, design expert)
- Iterate 2-3 times per section minimum (first draft is never final)
- Stop AI when it goes off track (you're in control)
- Document honestly (struggles make better stories than perfection)

**The goal isn't to hide that you used AI. The goal is to demonstrate masterful AI collaboration.**

Your collaboration story page will show readers exactly how you and AI partnered to create something neither of you could have built alone.

**That's the future of work. You're learning it now.** 🚀

---

**Ready to start?** Open VS Code, start a chat, and begin Phase 1. Use this playbook as reference throughout the week.

**Questions?** Re-read relevant sections. Most answers are here.

**Struggling?** Check office hours schedule. Keith's available to help.

---

**Document Version:** 1.0  
**Last Updated:** November 5, 2025  
**Course:** IS 218 Enterprise AI Studio Project  
**Instructor:** Keith Williams, NJIT
