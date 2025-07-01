---
allowed-tools: Bash(git:*), Edit, Bash(bun run:*)
description: Systematic code refactoring with analysis, planning, and quality assurance
---

# Refactor Code: $ARGUMENTS

Systematic code refactoring approach for improving code quality, maintainability, and performance.

## Current Context

- Current branch: !`git branch --show-current`
- Working directory status: !`git status --porcelain`
- Recent commits: !`git log --oneline -3`

## Systematic Refactoring Process

Think carefully about the refactoring goals and follow this comprehensive approach to ensure safe, effective improvements.

### Step 1: Analysis and Planning

#### 1.1 Understand Current State
Analyze the code you want to refactor using file references:
- Examine the target code: @$ARGUMENTS (if it's a file path)
- Review related files and dependencies
- Understand the current architecture and patterns

#### 1.2 Identify Refactoring Goals
```bash
# Create refactoring plan
echo "## Refactoring Plan for: $ARGUMENTS

### Current Issues Identified:
- [ ] Issue 1: [Description]
- [ ] Issue 2: [Description]
- [ ] Issue 3: [Description]

### Refactoring Goals:
- [ ] Goal 1: [Specific improvement]
- [ ] Goal 2: [Specific improvement]
- [ ] Goal 3: [Specific improvement]

### Success Criteria:
- [ ] All tests continue to pass
- [ ] Code is more readable/maintainable
- [ ] Performance is improved/maintained
- [ ] No breaking changes introduced
" > REFACTORING_PLAN.md
```

#### 1.3 Assess Impact and Risk
Consider:
- **Scope**: How many files will be affected?
- **Dependencies**: What other code depends on this?
- **Testing**: Is there adequate test coverage?
- **Breaking Changes**: Will this affect the public API?

### Step 2: Preparation and Safety

#### 2.1 Create Safe Working Environment
```bash
# Create feature branch for refactoring
git checkout -b refactor/$(echo "$ARGUMENTS" | tr ' ' '-' | tr '[:upper:]' '[:lower:]')

# Ensure all tests pass before starting
bun run test
bun run type-check
bun run check

# Commit current state as starting point
git add .
git commit -m "refactor: starting point for $ARGUMENTS refactoring

Current state before refactoring begins.
All tests passing, code quality checks pass."
```

#### 2.2 Document Current Behavior
```bash
# Run tests and capture current behavior
bun run test > test_results_before.txt

# Document current performance if relevant
# bun run test:performance > performance_before.txt

# Capture current type checking state
bun run type-check > typecheck_before.txt 2>&1 || true
```

### Step 3: Incremental Refactoring

#### 3.1 Apply Refactoring Techniques

**Code Smells to Address:**

1. **Long Functions/Methods**
   - Extract smaller, focused functions
   - Use meaningful names for extracted functions
   - Maintain single responsibility principle

2. **Duplicate Code**
   - Extract common functionality into shared utilities
   - Create reusable components or hooks
   - Consider using higher-order functions

3. **Complex Conditionals**
   - Extract conditions into well-named boolean functions
   - Use early returns to reduce nesting
   - Consider strategy pattern for complex logic

4. **Large Classes/Components**
   - Split into smaller, focused components
   - Extract custom hooks for logic
   - Separate concerns (UI vs logic)

5. **Poor Naming**
   - Use descriptive, intention-revealing names
   - Be consistent with naming conventions
   - Avoid abbreviations and unclear terms

#### 3.2 Make Incremental Changes
```bash
# Make small, focused changes
# Test after each change
bun run test

# Commit frequently with descriptive messages
git add .
git commit -m "refactor: extract utility function for data validation

- Move validation logic to shared utility
- Improve reusability and testability
- No functional changes"
```

#### 3.3 Common Refactoring Patterns

**Extract Function:**
```typescript
// Before
function processUser(user: User) {
  if (user.email && user.email.includes('@') && user.email.length > 5) {
    // ... complex logic
  }
}

// After
function isValidEmail(email: string): boolean {
  return email && email.includes('@') && email.length > 5;
}

function processUser(user: User) {
  if (isValidEmail(user.email)) {
    // ... complex logic
  }
}
```

**Extract Component (React):**
```typescript
// Before: Large component with multiple responsibilities

// After: Split into focused components
function UserProfile({ user }: { user: User }) {
  return (
    <div>
      <UserAvatar user={user} />
      <UserDetails user={user} />
      <UserActions user={user} />
    </div>
  );
}
```

### Step 4: Testing and Validation

#### 4.1 Comprehensive Testing
```bash
# Run full test suite
echo "🧪 Running comprehensive tests..."
bun run test

# Check types
echo "🔍 Type checking..."
bun run type-check

# Verify code quality
echo "✨ Code quality checks..."
bun run check

# Run E2E tests if applicable
echo "🎭 E2E testing..."
bun run test:e2e || echo "E2E tests skipped"
```

#### 4.2 Compare Before and After
```bash
# Compare test results
echo "📊 Comparing test results..."
bun run test > test_results_after.txt
diff test_results_before.txt test_results_after.txt || echo "Test results comparison complete"

# Check for performance impact
# Compare bundle size, execution time, etc.
```

#### 4.3 Manual Verification
- **Functionality**: Does everything still work as expected?
- **Performance**: Is performance maintained or improved?
- **User Experience**: Is the UX unchanged or better?
- **Error Handling**: Do error cases still work properly?

### Step 5: Documentation and Communication

#### 5.1 Update Documentation
```bash
# Update code comments
# Add JSDoc for new functions
# Update README if public API changed
# Document architectural decisions
```

#### 5.2 Create Comprehensive Commit
```bash
# Final commit summarizing all changes
git add .
git commit -m "refactor: complete $ARGUMENTS refactoring

**Improvements:**
- [List key improvements made]
- [Note performance gains if any]
- [Mention maintainability improvements]

**Changes:**
- [Summarize structural changes]
- [Note any API changes]

**Testing:**
- All existing tests pass
- No functional changes
- Code quality improved

**Impact:**
- Improved readability and maintainability
- Better separation of concerns
- Enhanced testability"
```

### Step 6: Review and Integration

#### 6.1 Self-Review
Conduct a thorough self-review:
- [ ] Is the code more readable than before?
- [ ] Are responsibilities better separated?
- [ ] Is the code easier to test?
- [ ] Are there fewer code smells?
- [ ] Is performance maintained or improved?

#### 6.2 Create Pull Request
```bash
# Push refactored code
git push origin refactor/$(echo "$ARGUMENTS" | tr ' ' '-' | tr '[:upper:]' '[:lower:]')

# Create PR for review
/project:create-pr "Refactor $ARGUMENTS: improve code quality and maintainability"
```

#### 6.3 Cleanup
```bash
# Remove temporary files
rm -f test_results_before.txt test_results_after.txt typecheck_before.txt
rm -f REFACTORING_PLAN.md  # Or keep for documentation

# Update refactoring plan with results
echo "## Refactoring Results

### Completed Improvements:
- ✅ [List completed improvements]

### Metrics:
- Lines of code: [before] → [after]
- Cyclomatic complexity: [before] → [after]
- Test coverage: [before] → [after]

### Next Steps:
- [Any follow-up refactoring needed]
" >> REFACTORING_PLAN.md
```

## Refactoring Techniques Reference

### Extract Method/Function
**When**: Function is too long or does multiple things
**How**: Extract logical groups of statements into separate functions

### Extract Variable
**When**: Complex expressions are hard to understand
**How**: Extract sub-expressions into well-named variables

### Rename
**When**: Names don't clearly express intent
**How**: Use descriptive, intention-revealing names

### Move Method/Function
**When**: Method is used more by another class/module
**How**: Move to where it's most used

### Extract Component (React)
**When**: Component has too many responsibilities
**How**: Split into smaller, focused components

### Extract Custom Hook (React)
**When**: Logic is reused or complex
**How**: Extract stateful logic into custom hooks

### Replace Conditional with Polymorphism
**When**: Complex conditional logic based on type
**How**: Use interfaces and implementations

### Consolidate Duplicate Code
**When**: Similar code exists in multiple places
**How**: Extract common functionality

## Quality Metrics to Track

### Code Complexity
- **Cyclomatic Complexity**: Measure decision points
- **Cognitive Complexity**: Measure mental effort to understand
- **Nesting Depth**: Reduce deeply nested code

### Maintainability
- **Function Length**: Keep functions focused and short
- **Class/Component Size**: Maintain single responsibility
- **Dependencies**: Reduce coupling between modules

### Testability
- **Test Coverage**: Maintain or improve coverage
- **Test Isolation**: Make code easier to test in isolation
- **Mock Requirements**: Reduce need for complex mocks

## Emergency Procedures

### If Refactoring Breaks Something
```bash
# Quickly revert to last working state
git reset --hard HEAD~1

# Or revert specific files
git checkout HEAD~1 -- path/to/problematic/file

# Fix the issue and continue
```

### If Scope Becomes Too Large
```bash
# Break into smaller chunks
git add .
git commit -m "refactor: partial improvement for $ARGUMENTS - checkpoint"

# Create PR for current progress
# Plan next phase of refactoring
```

## Best Practices

### Safety First
- **Always have tests** before refactoring
- **Make small changes** and test frequently
- **Commit often** with descriptive messages
- **Keep refactoring separate** from feature changes

### Quality Focus
- **Improve readability** as primary goal
- **Reduce complexity** where possible
- **Maintain performance** or improve it
- **Follow project conventions** consistently

### Team Collaboration
- **Communicate intent** clearly in commits and PRs
- **Document decisions** for complex refactoring
- **Get review** from team members
- **Share learnings** from refactoring process

Think systematically about each refactoring step and prioritize safety and incremental improvement over dramatic changes.