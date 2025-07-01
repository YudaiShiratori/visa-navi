---
allowed-tools: Bash(gh pr:*), Bash(git:*), Edit
description: Comprehensive Pull Request review with automated analysis and feedback
---

# Review Pull Request: $ARGUMENTS

Conduct a comprehensive code review for the specified PR using systematic analysis and best practices.

## PR Context and Information

- PR Details: !`gh pr view $ARGUMENTS`
- PR Status: !`gh pr status`
- CI Checks: !`gh pr checks $ARGUMENTS`
- Changed Files: !`gh pr diff $ARGUMENTS --name-only`

## Comprehensive Review Process

Think carefully about this Pull Request and conduct a thorough review following these systematic steps.

### Step 1: Initial Assessment

#### 1.1 Gather PR Information
```bash
# Get comprehensive PR details
gh pr view $ARGUMENTS --comments

# Check PR metadata
gh pr view $ARGUMENTS --json title,body,labels,assignees,reviewRequests

# Review the diff summary
gh pr diff $ARGUMENTS --stat
```

#### 1.2 Understand the Context
```bash
# Check related issues
gh pr view $ARGUMENTS --json body | jq -r '.body' | grep -E "#[0-9]+"

# Review recent commits
gh pr view $ARGUMENTS --json commits | jq -r '.commits[].messageHeadline'

# Check branch comparison
gh pr diff $ARGUMENTS --name-only
```

### Step 2: Code Quality Analysis

#### 2.1 Review Changed Files
Examine each changed file systematically using file references:

```bash
# Get list of changed files
CHANGED_FILES=$(gh pr diff $ARGUMENTS --name-only)

# Review each file (use @ syntax to examine files)
echo "Files to review:"
echo "$CHANGED_FILES"
```

For each file, consider:
- **Code Structure**: Is the code well-organized and readable?
- **Logic**: Are algorithms and business logic correct?
- **Error Handling**: Are errors properly caught and handled?
- **Performance**: Are there any performance concerns?
- **Security**: Are there potential security vulnerabilities?

#### 2.2 Check Code Standards Compliance
```bash
# Clone PR branch for local testing (if needed)
gh pr checkout $ARGUMENTS

# Run quality checks on the PR branch
bun run check
bun run type-check
bun run test

# Return to original branch
git checkout -
```

### Step 3: Functional Review

#### 3.1 Test the Changes
```bash
# If you checked out the PR branch, test functionality
# bun run dev
# bun run test -- --grep "relevant tests"

# Check if new tests were added
gh pr diff $ARGUMENTS | grep -E "\+.*test|spec"

# Verify test coverage
# bun run test:coverage
```

#### 3.2 Verify Requirements
Review against the PR description and linked issues:
- [ ] Does the implementation match the requirements?
- [ ] Are all acceptance criteria met?
- [ ] Are edge cases properly handled?
- [ ] Is the user experience intuitive?

### Step 4: Architecture and Design Review

#### 4.1 Assess Design Decisions
- **Consistency**: Does the code follow existing patterns?
- **Maintainability**: Will this code be easy to maintain?
- **Extensibility**: Is the design flexible for future changes?
- **Dependencies**: Are new dependencies justified?

#### 4.2 Check Integration Points
- **API Changes**: Are API changes backward compatible?
- **Database Changes**: Are migrations safe and reversible?
- **UI Changes**: Do UI changes follow design guidelines?
- **Performance Impact**: Will changes affect system performance?

### Step 5: Security and Best Practices

#### 5.1 Security Review
- **Input Validation**: Are all inputs properly validated?
- **Authentication**: Are auth checks in place where needed?
- **Authorization**: Are permission checks correct?
- **Data Exposure**: Is sensitive data properly protected?
- **XSS/CSRF**: Are web vulnerabilities addressed?

#### 5.2 Best Practices Check
- **TypeScript**: Are types comprehensive and accurate?
- **React**: Are React best practices followed?
- **Performance**: Are there unnecessary re-renders or computations?
- **Accessibility**: Are accessibility requirements met?

### Step 6: Documentation and Communication

#### 6.1 Review Documentation
- **Code Comments**: Are complex sections well-commented?
- **API Documentation**: Is API documentation updated?
- **README Updates**: Are user-facing changes documented?
- **Migration Guides**: Are breaking changes documented?

#### 6.2 Check Commit Quality
```bash
# Review commit messages
gh pr view $ARGUMENTS --json commits | jq -r '.commits[] | "\(.messageHeadline)\n\(.messageBody)"'

# Check for clean history
gh pr diff $ARGUMENTS --stat
```

### Step 7: Provide Structured Feedback

#### 7.1 Categorize Feedback
Organize your review comments by priority:

**🔴 Critical Issues** (Must fix before merge):
- Security vulnerabilities
- Breaking changes without proper migration
- Functionality that doesn't work as specified
- Major performance regressions

**🟡 Important Issues** (Should fix before merge):
- Code quality concerns
- Missing error handling
- Inconsistent patterns
- Missing tests for new functionality

**🔵 Suggestions** (Nice to have):
- Code style improvements
- Performance optimizations
- Refactoring opportunities
- Documentation enhancements

#### 7.2 Leave Review Comments
```bash
# Add general review comment
gh pr review $ARGUMENTS --comment --body "## Code Review Summary

### ✅ Strengths
- [List positive aspects]
- [Highlight good practices]

### 🔴 Critical Issues
- [List must-fix items]

### 🟡 Important Issues  
- [List should-fix items]

### 🔵 Suggestions
- [List nice-to-have improvements]

### Overall Assessment
[Your overall assessment and recommendation]"

# Add specific line comments for detailed feedback
# gh pr review $ARGUMENTS --comment --body "Specific feedback about implementation"
```

### Step 8: Make Review Decision

#### 8.1 Choose Appropriate Review Action
```bash
# Approve if ready to merge
gh pr review $ARGUMENTS --approve --body "✅ **APPROVED**

This PR looks good to merge! 

**Summary:**
- Code quality is excellent
- All requirements are met
- Tests are comprehensive
- No security concerns identified

Great work!"

# Request changes if issues need fixing
gh pr review $ARGUMENTS --request-changes --body "🔄 **CHANGES REQUESTED**

This PR needs some updates before it can be merged.

**Critical Issues:**
- [List items that must be fixed]

**Important Issues:**
- [List items that should be fixed]

Please address these items and re-request review when ready."

# Comment only for minor feedback
gh pr review $ARGUMENTS --comment --body "💬 **FEEDBACK PROVIDED**

Overall this looks good! I've left some suggestions for improvement, but nothing blocking.

Feel free to address the suggestions in this PR or future ones as appropriate."
```

#### 8.2 Follow Up Actions
```bash
# Add helpful labels based on review
gh pr edit $ARGUMENTS --add-label "needs-changes"  # or "ready-to-merge"

# Request additional reviewers if needed
gh pr edit $ARGUMENTS --add-reviewer "security-team,senior-dev"

# Add to milestone if appropriate
# gh pr edit $ARGUMENTS --milestone "v1.2.0"
```

## Review Quality Checklist

### Code Quality
- [ ] Code is readable and well-structured
- [ ] Functions are appropriately sized and focused
- [ ] Variable and function names are descriptive
- [ ] Code follows project conventions
- [ ] No obvious bugs or logic errors

### TypeScript & React
- [ ] TypeScript types are comprehensive and accurate
- [ ] React components follow best practices
- [ ] Hooks are used correctly
- [ ] State management is appropriate
- [ ] No unnecessary re-renders

### Testing
- [ ] New functionality has appropriate tests
- [ ] Existing tests still pass
- [ ] Edge cases are covered
- [ ] Test names are descriptive
- [ ] Mocks are used appropriately

### API & tRPC
- [ ] API design is consistent with existing patterns
- [ ] Input validation is comprehensive
- [ ] Error handling is robust
- [ ] Response types are well-defined
- [ ] Breaking changes are properly documented

### Security
- [ ] Input validation prevents injection attacks
- [ ] Authentication is properly implemented
- [ ] Authorization checks are in place
- [ ] Sensitive data is protected
- [ ] No secrets in code

### Performance
- [ ] No obvious performance regressions
- [ ] Database queries are efficient
- [ ] Caching is used appropriately
- [ ] Bundle size impact is reasonable
- [ ] Memory usage is reasonable

### Accessibility
- [ ] UI changes meet accessibility standards
- [ ] Keyboard navigation works properly
- [ ] Screen reader compatibility maintained
- [ ] Color contrast is sufficient
- [ ] Focus management is appropriate

## Quick Reference Commands

```bash
# View PR details
gh pr view $ARGUMENTS

# Check out PR branch locally
gh pr checkout $ARGUMENTS

# View PR diff
gh pr diff $ARGUMENTS

# Check CI status
gh pr checks $ARGUMENTS

# View PR comments
gh pr view $ARGUMENTS --comments

# Add review comment
gh pr review $ARGUMENTS --comment --body "Your feedback"

# Approve PR
gh pr review $ARGUMENTS --approve --body "Looks good!"

# Request changes
gh pr review $ARGUMENTS --request-changes --body "Please address these issues"

# Re-request review after changes
gh pr review $ARGUMENTS --comment --body "Ready for re-review"
```

## Review Best Practices

### Effective Communication
- **Be constructive**: Focus on the code, not the person
- **Be specific**: Provide concrete examples and suggestions
- **Be balanced**: Highlight both positives and areas for improvement
- **Be timely**: Provide feedback promptly to keep development moving

### Technical Focus
- **Understand context**: Consider the broader impact of changes
- **Verify claims**: Test functionality when possible
- **Think about edge cases**: Consider what could go wrong
- **Consider maintenance**: Think about future developers

### Collaboration
- **Ask questions**: Seek clarification when something is unclear
- **Provide alternatives**: Suggest specific improvements
- **Learn from others**: Use reviews as learning opportunities
- **Follow up**: Check that feedback is addressed appropriately

Think systematically about each aspect of the PR and provide actionable feedback that helps improve code quality and team knowledge sharing.