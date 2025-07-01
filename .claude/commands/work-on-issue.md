---
allowed-tools: Bash(gh issue:*), Bash(git:*), Edit, Bash(bun run:*)
description: Complete issue-driven development workflow with 8 structured phases
---

# Work on GitHub Issue: $ARGUMENTS

Complete issue-driven development workflow for resolving GitHub issues systematically.

## Current Context

- Current branch: !`git branch --show-current`
- Repository status: !`git status --porcelain`
- Issue details: !`gh issue view $ARGUMENTS`

## 8-Phase Development Process

Think carefully about this issue and follow the systematic approach below to ensure comprehensive resolution.

### Phase 1: Issue Understanding & Planning

#### 1.1 Analyze Issue Details
```bash
# Get comprehensive issue information
gh issue view $ARGUMENTS --comments

# Check issue labels and metadata
gh issue view $ARGUMENTS --json labels,assignees,milestone,projectItems
```

#### 1.2 Claim Ownership
```bash
# Assign issue to yourself
gh issue edit $ARGUMENTS --add-assignee @me

# Add work-in-progress label
gh issue edit $ARGUMENTS --add-label "status:in-progress"
```

#### 1.3 Plan Approach
```bash
# Comment your initial analysis and plan
gh issue comment $ARGUMENTS --body "## Analysis & Plan

**Understanding:**
- [Summarize the issue]

**Approach:**
- [ ] Step 1: [Description]
- [ ] Step 2: [Description] 
- [ ] Step 3: [Description]

**Files likely to be affected:**
- [List files]

Starting work on this issue."
```

### Phase 2: Environment Setup

#### 2.1 Create Feature Branch
```bash
# Create and switch to feature branch
git checkout -b fix/issue-$ARGUMENTS main

# Verify clean working directory
git status
```

#### 2.2 Ensure Environment is Ready
```bash
# Install/update dependencies
bun install

# Run initial checks
bun run type-check
bun run check
```

### Phase 3: Investigation & Analysis

#### 3.1 Reproduce Issue (for bugs)
```bash
# Start development server if needed
# bun run dev

# Run specific tests related to the issue
# bun run test -- --grep "relevant test pattern"
```

#### 3.2 Code Investigation
Use the `@` syntax to reference relevant files:
- Examine @src/components/ for UI issues
- Check @src/server/api/ for API problems  
- Review @src/lib/ for utility functions
- Look at @__tests__/ for existing test coverage

#### 3.3 Update Issue with Findings
```bash
gh issue comment $ARGUMENTS --body "## Investigation Results

**Root Cause:**
[Describe what you found]

**Impact:**
[Scope of the issue]

**Solution Approach:**
[How you plan to fix it]

**Files to Modify:**
- [List specific files and changes needed]"
```

### Phase 4: Implementation

#### 4.1 Make Code Changes
Think step by step about the implementation:

1. **Start with tests** (if doing TDD):
   - Write failing tests that capture the expected behavior
   - Run tests to confirm they fail: `bun run test`

2. **Implement the fix/feature**:
   - Make minimal, focused changes
   - Follow project coding standards
   - Add proper error handling

3. **Update related code**:
   - Modify types/interfaces if needed
   - Update documentation
   - Add/update comments

#### 4.2 Incremental Testing
```bash
# Run tests frequently during development
bun run test

# Check types
bun run type-check

# Verify code quality
bun run check
```

#### 4.3 Commit Progress
```bash
# Make atomic commits
git add .
git commit -m "feat: implement core solution for issue #$ARGUMENTS

- [Describe specific changes]
- [Note any important decisions]

Addresses #$ARGUMENTS"
```

### Phase 5: Quality Assurance

#### 5.1 Comprehensive Testing
```bash
# Run full test suite
bun run test

# Run E2E tests if applicable  
bun run test:e2e

# Manual testing checklist
echo "Manual Testing:
- [ ] Core functionality works
- [ ] Edge cases handled
- [ ] Error states work properly
- [ ] UI/UX is intuitive
- [ ] Performance is acceptable"
```

#### 5.2 Code Quality Checks
```bash
# Format code
bun run check:write

# Final quality check
bun run check

# Type checking
bun run type-check
```

#### 5.3 Self Code Review
Review your changes critically:
- Are the changes minimal and focused?
- Is the code readable and well-documented?
- Are there any potential edge cases missed?
- Does this follow project conventions?

### Phase 6: Documentation & Preparation

#### 6.1 Update Documentation
- Update README.md if user-facing changes
- Add/update inline code comments
- Update API documentation if applicable

#### 6.2 Prepare Comprehensive Commit
```bash
# Final commit with complete solution
git add .
git commit -m "fix: resolve issue #$ARGUMENTS - [brief description]

**Changes:**
- [List key changes]

**Testing:**
- [Describe testing performed]

**Breaking Changes:** None / [Describe if any]

Fixes #$ARGUMENTS"
```

#### 6.3 Push Branch
```bash
# Push feature branch
git push origin fix/issue-$ARGUMENTS
```

### Phase 7: Review & Iteration

#### 7.1 Create Pull Request
```bash
# Create PR with comprehensive description
/project:create-pr "Fix issue #$ARGUMENTS: [brief description]"
```

#### 7.2 Update Issue Status
```bash
# Link PR to issue and update status
gh issue comment $ARGUMENTS --body "## Solution Implemented

✅ **Pull Request Created:** [PR link will be auto-generated]

**Summary of Changes:**
- [Key changes made]

**Testing Completed:**
- [Testing summary]

**Ready for Review**
Please review the PR and provide feedback."

# Update labels
gh issue edit $ARGUMENTS --remove-label "status:in-progress" --add-label "status:review"
```

#### 7.3 Address Review Feedback
When you receive review comments:
```bash
# Address feedback and push updates
git add .
git commit -m "address review feedback: [description]"
git push origin fix/issue-$ARGUMENTS

# Update issue with progress
gh issue comment $ARGUMENTS --body "Updated PR based on review feedback: [summary of changes]"
```

### Phase 8: Post-Merge Activities

#### 8.1 Verify Resolution
```bash
# After PR is merged, verify on main branch
git checkout main
git pull origin main

# Run final verification
bun run test
bun run type-check
```

#### 8.2 Close Issue
```bash
# Close issue with summary (if not auto-closed by PR)
gh issue close $ARGUMENTS --comment "✅ **Issue Resolved**

The issue has been successfully fixed and merged into main.

**Final Summary:**
- [Brief summary of solution]
- [Any follow-up items if needed]

Thanks for reporting this issue!"
```

#### 8.3 Cleanup
```bash
# Delete feature branch
git branch -d fix/issue-$ARGUMENTS
git push origin --delete fix/issue-$ARGUMENTS
```

## Quality Checklist

Before considering the issue complete, verify:

- [ ] Issue requirements are fully addressed
- [ ] All tests pass (unit, integration, E2E)
- [ ] Code follows project style guidelines
- [ ] Documentation is updated
- [ ] No breaking changes (or properly documented)
- [ ] Performance impact is acceptable
- [ ] Security considerations addressed
- [ ] Accessibility requirements met (for UI changes)
- [ ] Browser compatibility verified (for frontend changes)

## Emergency Procedures

If you need to pause work:
```bash
# Save work in progress
git add .
git commit -m "WIP: partial implementation for issue #$ARGUMENTS"
git push origin fix/issue-$ARGUMENTS

# Update issue
gh issue comment $ARGUMENTS --body "⏸️ Work paused. Progress saved in branch \`fix/issue-$ARGUMENTS\`."
```

If you need to abandon the approach:
```bash
# Update issue with findings
gh issue comment $ARGUMENTS --body "🔄 **Approach Change Required**

Current approach encountered: [issue description]

New plan: [describe new approach]

Resetting branch to try different solution."

# Reset and try new approach
git checkout main
git branch -D fix/issue-$ARGUMENTS
git checkout -b fix/issue-$ARGUMENTS-v2 main
```

Think through each phase carefully and don't skip steps. This systematic approach ensures high-quality solutions and proper documentation of your work.