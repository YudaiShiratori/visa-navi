---
allowed-tools: Bash(gh:*), Bash(git:*), Read, Glob, Grep, LS, TodoWrite, TodoRead, WebSearch
description: Create well-structured GitHub issues with templates and proper metadata
---

# Create GitHub Issue: $ARGUMENTS

Create well-structured GitHub issues based on the problem or feature you want to address.

## Current Repository Context

- Current branch: !`git branch --show-current`
- Repository status: !`git status --porcelain`
- Recent commits: !`git log --oneline -3`

## Issue Creation Workflow

### Step 1: Understand Context and Research

Based on your description: **"$ARGUMENTS"**, I'll:
1. Search for similar existing issues to avoid duplicates
2. Analyze the codebase to understand the context
3. Choose the most appropriate issue type and template

```bash
# Search for similar existing issues
gh issue list --search "$ARGUMENTS" --limit 10

# Check recently closed related issues
gh issue list --state closed --search "$ARGUMENTS" --limit 5
```

### Step 2: Analyze Codebase Context

I'll examine relevant files and patterns to better understand the issue scope:

```bash
# Search for related code patterns (example)
# grep -r "pattern" src/
# find . -name "*.tsx" -path "*/components/*"
```

### Step 3: Choose Issue Type

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

### Step 4: Create Issue with Enhanced Context

I'll create the issue with comprehensive details based on my research:

```bash
# Create issue with enriched context from codebase analysis
gh issue create --title "$TITLE" --body "$(cat << 'EOF'
## Description
[Clear description based on request and codebase analysis]

## Context
[Technical context from codebase research]

## Related Code
[Reference to relevant files/functions]

## Acceptance Criteria
- [ ] [Specific, testable criteria]

## Technical Considerations
[Any architectural or technical notes from analysis]
EOF
)"
```

### Step 5: Enhance Issue Metadata

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

### Step 6: Track and Link to Development

I'll create a task list to track the issue creation process:

```bash
# Track completion
# TodoWrite: Mark issue creation as complete

# Link to development workflow
/project:work-on-issue $ISSUE_NUMBER
```

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

## Advanced Issue Management

### Search and Analysis Commands

```bash
# Find duplicate issues
gh issue list --search "in:title $KEYWORDS" --json number,title,state

# Check issue dependencies
gh issue view $ISSUE_NUMBER --comments | grep -i "depends on\|blocks\|related"

# Analyze issue patterns
gh issue list --label bug --json createdAt,title | jq -r '.[] | .createdAt + " " + .title'
```

### Codebase Integration

When creating issues, I can:
- Read relevant source files to understand implementation
- Search for similar patterns or existing solutions
- Identify affected components and dependencies
- Suggest specific files that need changes

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