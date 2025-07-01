---
allowed-tools: Bash(gh issue:*), Bash(git status:*), Bash(git branch:*)
description: Create well-structured GitHub issues with templates and proper metadata
---

# Create GitHub Issue: $ARGUMENTS

Create well-structured GitHub issues based on the problem or feature you want to address.

## Current Repository Context

- Current branch: !`git branch --show-current`
- Repository status: !`git status --porcelain`
- Recent commits: !`git log --oneline -3`

## Issue Creation Workflow

### Step 1: Analyze Your Request

Based on your description: **"$ARGUMENTS"**, I'll help you choose the most appropriate issue type and template.

### Step 2: Choose Issue Type

Select the appropriate GitHub issue template:

#### 🐛 Bug Report
For reporting bugs, errors, or unexpected behavior:
```bash
gh issue create --template bug_report.yml --title "$ARGUMENTS"
```

#### ✨ Feature Request  
For requesting new features or enhancements:
```bash
gh issue create --template feature_request.yml --title "$ARGUMENTS"
```

#### 📚 Documentation
For documentation improvements or issues:
```bash
gh issue create --template documentation.yml --title "$ARGUMENTS"
```

#### ⚡ Quick Issue (No Template)
For simple issues that don't need structured templates:
```bash
gh issue create --title "$ARGUMENTS" --body "$(cat << 'EOF'
## Description
Brief description of the issue or request.

## Context
Additional context about the problem or feature.

## Acceptance Criteria
- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3

## Additional Information
Any other relevant information.
EOF
)"
```

### Step 3: Enhance Issue Metadata

After creating the issue, enhance it with proper metadata:

```bash
# Get the issue number from the previous command
ISSUE_NUMBER=$(gh issue list --limit 1 --json number --jq '.[0].number')

# Assign to yourself
gh issue edit $ISSUE_NUMBER --add-assignee @me

# Add appropriate labels based on issue type
gh issue edit $ISSUE_NUMBER --add-label "priority:medium"

# Add to project board (if applicable)
# gh issue edit $ISSUE_NUMBER --add-project "Project Name"

# Set milestone (if applicable)  
# gh issue edit $ISSUE_NUMBER --milestone "v1.2.0"
```

### Step 4: Link to Development Workflow

Once your issue is created, you can begin development:

```bash
# Start working on the issue immediately
/project:work-on-issue $ISSUE_NUMBER
```

## Issue Quality Guidelines

### ✅ Good Issue Titles
- **Specific**: "Login button doesn't work on mobile Safari"
- **Actionable**: "Add user profile photo upload feature"  
- **Clear**: "Update installation docs for Windows users"

### ❌ Poor Issue Titles
- **Vague**: "Something is broken"
- **Too broad**: "Improve the app"
- **Unclear**: "Fix stuff"

### 📋 Essential Information Checklist
- [ ] Clear description of the problem or feature
- [ ] Steps to reproduce (for bugs)
- [ ] Expected vs actual behavior (for bugs)
- [ ] Use cases and user stories (for features)
- [ ] Acceptance criteria when possible
- [ ] Relevant environment details
- [ ] Screenshots or examples when helpful

## Quick Reference Commands

```bash
# List your assigned issues
gh issue list --assignee @me

# View issue details
gh issue view [ISSUE_NUMBER]

# Edit existing issue
gh issue edit [ISSUE_NUMBER]

# Close issue when resolved
gh issue close [ISSUE_NUMBER]

# Reopen if needed
gh issue reopen [ISSUE_NUMBER]

# Add comment to issue
gh issue comment [ISSUE_NUMBER] --body "Your comment here"
```

## Pro Tips

- **Be specific** in your issue descriptions
- **Include context** about why the issue matters
- **Use templates** for consistency across your team
- **Link related issues** when applicable
- **Update issues** regularly as work progresses
- **Close issues** promptly when resolved

Think carefully about the issue type and provide comprehensive details to ensure effective collaboration and resolution.