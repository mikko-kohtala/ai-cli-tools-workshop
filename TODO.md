# AI CLI Tools Workshop - TODO

## Presentation Analysis Issues (Added: 2025-10-23)

### 🔴 CRITICAL: Factual Accuracy (MUST FIX BEFORE WORKSHOP)

#### Model Names & Versions

- [ ] **ReasoningSection.tsx**: Verify "GPT-5" and "GPT-5-Codex" are correct model names (likely GPT-4o or similar)
- [ ] **ReasoningSection.tsx**: Update "Claude 3.7 Sonnet" to correct version (3.5 Sonnet or newer?)
- [ ] **LandscapeSection.tsx**: Verify Codex CLI uses "GPT-5" as stated
- [ ] **ReasoningSection.tsx**: Verify claim that GPT-5-Codex "can work independently for 7+ hours"
- [ ] **LandscapeSection.tsx**: Check Gemini 2.0 is correct model name

#### Installation Commands & CLI Usage

- [ ] **ChoosingToolSection.tsx**: Test `npm install -g @anthropic/claude-code` (likely incorrect package name)
- [ ] **ChoosingToolSection.tsx**: Test `npm install -g @openai/codex-cli` (needs verification)
- [ ] **ChoosingToolSection.tsx**: Test `gcloud components install gemini` (needs verification)
- [ ] **LandscapeSection.tsx**: Verify `claude code` is correct command (probably just `claude`)
- [ ] **ReasoningSection.tsx**: Test `codex --model gpt-5-codex` command
- [ ] **ReasoningSection.tsx**: Test `/model` command syntax

#### API & Technical Details

- [ ] **ReasoningSection.tsx**: Verify `reasoning_effort` parameter exists with levels: minimal, low, medium, high
- [ ] **All sections**: Test all code examples and commands before workshop

### 🟡 IMPORTANT: Content & Structure

#### Introduction Enhancement

- [ ] **IntroSection.tsx**: Uncomment and update introduction card OR create new compelling intro content
- [ ] **IntroSection.tsx**: Add value proposition - why should attendees care?
- [ ] **IntroSection.tsx**: Set clear expectations for workshop structure
- [ ] **IntroSection.tsx**: Clarify focus: tool-agnostic overview + Codex CLI deep dive

#### Missing Information

- [ ] **LandscapeSection.tsx**: Add pricing/access requirements earlier (currently only mentioned in ChoosingToolSection)
- [ ] **LandscapeSection.tsx**: Mention that most tools require paid API access
- [ ] **QASection.tsx**: Add "Additional Resources" section with links to docs, community, etc.

### 🟢 NICE TO HAVE: Enhancements

#### Visual & Educational Improvements

- [ ] **ArchitecturePatternsSection.tsx**: Add visual architecture diagram (ASCII art or description)
- [ ] **AgendaSection.tsx**: Add approximate time allocations per section (25 min presentation + 60 min hands-on + 5 min Q&A)
- [ ] **ChoosingToolSection.tsx**: Add cost/pricing comparison table
- [ ] Add "Common Pitfalls" section based on experience
- [ ] **ChoosingToolSection.tsx**: Add links to official documentation for each tool

#### Content Additions

- [ ] Consider adding comparison of context window sizes across tools
- [ ] Consider adding section on limitations of AI CLI tools
- [ ] Consider adding examples of what AI CLI tools are NOT good for

### ✅ GOOD SECTIONS (No major changes needed)

- **AgendaSection**: Clear structure, well-scoped
- **ConceptsSection**: Excellent explanations, great interactive elements
- **ArchitecturePatternsSection**: Clear technical depth, good workflow example
- **SecuritySection**: Comprehensive, practical, well-organized
- **EffectiveUsageSection**: Outstanding, very actionable, excellent examples
- **DemoSection**: Realistic workflow, good use of tabs
- **QASection**: Good discussion prompts, clear CTA

### Priority Order for Fixes

1. **FIRST**: Verify all model names, installation commands, and API parameters
2. **SECOND**: Update Introduction section with compelling content
3. **THIRD**: Clarify Codex CLI focus throughout presentation
4. **FOURTH**: Add pricing/access information earlier
5. **FIFTH**: Nice-to-have enhancements
