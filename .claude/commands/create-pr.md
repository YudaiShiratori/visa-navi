---
allowed-tools: Bash(gh pr:*), Bash(git:*), Edit
description: Create Pull Request from current changes with comprehensive analysis
---

# Create Pull Request from Current Changes: $ARGUMENTS

Create a comprehensive Pull Request from your current working changes with automated analysis and quality checks.

## Current Repository Context

- Current branch: !`git branch --show-current`
- Working directory status: !`git status --porcelain`
- Staged changes: !`git diff --staged --stat`
- Unstaged changes: !`git diff --stat`
- Recent commits on current branch: !`git log --oneline main..HEAD`

## PR Creation Workflow

Think about the changes you've made and follow this systematic approach to create a high-quality Pull Request.

### Step 1: Analyze and Prepare Changes

#### 1.1 Review Current Changes
```bash
# Review uncommitted changes
git diff

# Review staged changes  
git diff --staged

# Check which files have been modified
git status
```

#### 1.2 Ensure Changes are Ready
```bash
# Stage all changes if needed
git add .

# Create meaningful commit if changes are uncommitted
if [ -n "$(git status --porcelain)" ]; then
  git commit -m "feat: $ARGUMENTS

- Implement core functionality
- Add comprehensive tests
- Update documentation

Addresses related issue requirements"
fi

# Ensure branch is up to date with main
git fetch origin
git rebase origin/main

# Push current branch
git push origin $(git branch --show-current)
```

### Step 2: Quality Verification

#### 2.1 Run Comprehensive Checks
```bash
# Run all quality checks
echo "🧪 Running tests..."
bun run test

echo "🔍 Type checking..."
bun run type-check  

echo "✨ Code quality checks..."
bun run check

echo "🎨 Auto-formatting..."
bun run check:write

echo "🔧 Build verification..."
bun run build || echo "Build check skipped (no build script)"
```

#### 2.2 Verify No Issues
If any checks fail, address them before proceeding:
```bash
# Fix any formatting issues
bun run check:write

# Address test failures
# Fix type errors  
# Resolve linting issues
```

### Step 3: Create Pull Request

#### 3.1 Auto-Generate PR (Recommended)
```bash
# Let GitHub CLI generate title and description from commits
gh pr create --fill
```

#### 3.2 Custom PR with Template
```bash
# Create with custom title and structured template
gh pr create \
  --title "$ARGUMENTS" \
  --template .github/PULL_REQUEST_TEMPLATE/pull_request_template.md
```

#### 3.3 Manual PR Creation (Advanced)
```bash
# Create PR with comprehensive manual description
gh pr create \
  --title "$ARGUMENTS" \
  --body "$(cat << 'EOF'
## Description
Comprehensive description of changes made in this PR.

## Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update
- [ ] Code refactoring
- [ ] Performance improvement

## Related Issues
- Fixes #[issue_number]
- Related to #[issue_number]

## Changes Made
- [Detailed list of changes]
- [Include architectural decisions]
- [Note any breaking changes]

## Testing
- [ ] Unit tests pass (`bun run test`)
- [ ] E2E tests pass (`bun run test:e2e`)
- [ ] Code quality checks pass (`bun run check`)
- [ ] TypeScript compilation succeeds (`bun run type-check`)
- [ ] Manual testing completed

## Screenshots/Demo
[Include screenshots or demo videos if applicable]

## Deployment Notes
[Any special deployment considerations]

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review of code completed
- [ ] Comments added to hard-to-understand areas
- [ ] Documentation updated (if applicable)
- [ ] Tests added/updated for changes
- [ ] No breaking changes (or clearly documented)
- [ ] All CI checks pass
EOF
)"
```

### Step 4: Enhance PR Metadata

#### 4.1 Add Metadata and Context
```bash
# Get the PR number
PR_NUMBER=$(gh pr view --json number --jq '.number')

# Add yourself as assignee
gh pr edit $PR_NUMBER --add-assignee @me

# Add relevant labels based on change type
echo "Select appropriate labels:"
echo "1. bug - Bug fix"
echo "2. enhancement - New feature"
echo "3. documentation - Documentation update" 
echo "4. refactor - Code refactoring"
echo "5. performance - Performance improvement"

# Example: Add enhancement label
gh pr edit $PR_NUMBER --add-label "enhancement"

# Add reviewers if known
# gh pr edit $PR_NUMBER --add-reviewer "teammate1,teammate2"

# Add to project/milestone if applicable
# gh pr edit $PR_NUMBER --add-project "Project Name"
# gh pr edit $PR_NUMBER --milestone "v1.2.0"
```

#### 4.2 Link to Related Issues
```bash
# If this PR addresses specific issues, link them
# gh pr edit $PR_NUMBER --body "$(gh pr view $PR_NUMBER --json body --jq '.body')

# Fixes #123
# Related to #456"
```

### Step 5: Final Verification

#### 5.1 Review Created PR
```bash
# View the created PR
gh pr view $PR_NUMBER

# Check PR status and CI
gh pr checks $PR_NUMBER

# Open PR in browser for final review
gh pr view $PR_NUMBER --web
```

#### 5.2 Self-Review Checklist
Review your PR against these criteria:

- [ ] **Clear title** that summarizes the change
- [ ] **Comprehensive description** explaining what and why
- [ ] **Proper change categorization** (bug fix, feature, etc.)
- [ ] **Related issues linked** with appropriate keywords
- [ ] **Testing coverage** documented and verified
- [ ] **Breaking changes** clearly identified
- [ ] **Screenshots/demos** included for UI changes
- [ ] **Documentation updates** included if needed
- [ ] **Code quality** meets project standards

### Step 6: Request Review

#### 6.1 Mark Ready and Request Review
```bash
# If created as draft, mark ready when complete
gh pr ready $PR_NUMBER

# Request specific reviewers
gh pr edit $PR_NUMBER --add-reviewer "tech-lead,senior-developer"

# Add comment requesting review
gh pr comment $PR_NUMBER --body "🔍 **Ready for Review**

This PR is ready for review. Key areas to focus on:
- [Highlight important changes]
- [Note any architectural decisions]
- [Mention testing approach]

Please let me know if you have any questions or feedback!"
```

#### 6.2 Monitor and Respond
```bash
# Monitor PR status
gh pr status

# View any review comments
gh pr view $PR_NUMBER --comments

# Respond to feedback promptly when received
```

## Advanced PR Management

### Handling Review Feedback
```bash
# When you receive review comments:

# 1. Address feedback in code
git add .
git commit -m "address review feedback: [specific changes]"
git push origin $(git branch --show-current)

# 2. Respond to review comments
gh pr comment $PR_NUMBER --body "Thanks for the feedback! I've addressed:
- [List specific changes made]
- [Explain any decisions]

Ready for re-review."

# 3. Request re-review if needed
gh pr edit $PR_NUMBER --add-reviewer "original-reviewer"
```

### Emergency Procedures
```bash
# Convert to draft if issues found
gh pr edit $PR_NUMBER --draft

# Close PR if approach needs to change
gh pr close $PR_NUMBER --comment "Closing to pursue different approach. Will create new PR."

# Reopen if needed
gh pr reopen $PR_NUMBER
```

## Quick Reference Commands

```bash
# View PR status
gh pr view $PR_NUMBER

# Check CI status  
gh pr checks $PR_NUMBER

# View diff
gh pr diff $PR_NUMBER

# Add comment
gh pr comment $PR_NUMBER --body "Your comment here"

# Update PR description
gh pr edit $PR_NUMBER --body "Updated description"

# Merge when approved (various strategies)
gh pr merge $PR_NUMBER --squash --delete-branch  # Squash merge
gh pr merge $PR_NUMBER --merge --delete-branch   # Merge commit
gh pr merge $PR_NUMBER --rebase --delete-branch  # Rebase merge

# Auto-merge when checks pass
gh pr merge $PR_NUMBER --auto --squash --delete-branch
```

## Best Practices

### PR Quality Guidelines
- **Atomic changes**: Each PR should address one logical change
- **Clear communication**: Title and description should be self-explanatory
- **Comprehensive testing**: Include both automated and manual testing
- **Documentation**: Update relevant docs with your changes
- **Backward compatibility**: Avoid breaking changes when possible

### Code Review Preparation
- **Self-review first**: Review your own changes critically
- **Clean history**: Ensure commit messages are clear and logical
- **Remove debugging code**: Clean up any temporary or debug code
- **Test edge cases**: Verify your changes handle edge cases properly

### Collaboration Tips
- **Respond promptly**: Address review feedback quickly
- **Be descriptive**: Explain complex decisions in comments
- **Ask questions**: Don't hesitate to ask for clarification
- **Learn from feedback**: Use reviews as learning opportunities

Think carefully about your changes and ensure they meet the project's quality standards before creating the PR. A well-prepared PR saves time for everyone involved in the review process.