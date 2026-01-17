import { readFileSync } from "node:fs";
import { join } from "node:path";
import { load } from "js-yaml";
import { describe, expect, it } from "vitest";

interface WorkflowStep {
  id?: string;
  name?: string;
  run?: string;
  "timeout-minutes"?: number;
  if?: string;
}

interface WorkflowJob {
  steps: WorkflowStep[];
  strategy?: {
    "max-parallel"?: number;
    "fail-fast"?: boolean;
  };
  needs?: string;
  if?: string;
}

interface WorkflowInput {
  default?: string;
}

interface Workflow {
  on: {
    workflow_dispatch: {
      inputs: {
        max_issues: WorkflowInput;
      };
    };
  };
  jobs: {
    [key: string]: WorkflowJob;
  };
}

describe("Auto Issue Processor Workflow Performance", () => {
  const workflowPath = join(
    process.cwd(),
    ".github/workflows/auto-issue-processor.yml"
  );
  const workflowContent = readFileSync(workflowPath, "utf8");
  const workflow = load(workflowContent) as Workflow;

  it("should have optimized max_issues setting of 10", () => {
    const maxIssuesInput = workflow.on.workflow_dispatch.inputs.max_issues;
    expect(maxIssuesInput.default).toBe("10");

    // Also check the fallback value in the script
    const collectJob = workflow.jobs["collect-issues"];
    const filterStep = collectJob.steps.find(
      (step) => step.id === "filter-issues"
    );
    expect(filterStep).toBeDefined();
    expect(filterStep?.run).toContain(
      "max_issues=${{ github.event.inputs.max_issues || '10' }}"
    );
  });

  it("should have max-parallel set to 5 for concurrent processing", () => {
    const processJob = workflow.jobs["process-issue"];
    expect(processJob.strategy).toBeDefined();
    expect(processJob.strategy?.["max-parallel"]).toBe(5);
    expect(processJob.strategy?.["fail-fast"]).toBe(false);
  });

  it("should have 20 minute timeout for implementation step", () => {
    const processJob = workflow.jobs["process-issue"];
    const implementStep = processJob.steps.find(
      (step) => step.id === "implement"
    );
    expect(implementStep).toBeDefined();
    expect(implementStep?.["timeout-minutes"]).toBe(20);
  });

  it("should have 10 minute timeout for review step", () => {
    const processJob = workflow.jobs["process-issue"];
    const reviewStep = processJob.steps.find(
      (step) => step.name === "Self-review and fix PR"
    );
    expect(reviewStep).toBeDefined();
    expect(reviewStep?.["timeout-minutes"]).toBe(10);
  });

  it("should have proper job dependencies configured", () => {
    const processJob = workflow.jobs["process-issue"];
    expect(processJob.needs).toBe("collect-issues");
    expect(processJob.if).toBe(
      "needs.collect-issues.outputs.has_issues == 'true'"
    );
  });

  it("should have rate limiting protection", () => {
    const processJob = workflow.jobs["process-issue"];
    const rateLimitStep = processJob.steps.find(
      (step) => step.name === "Rate limit protection"
    );
    expect(rateLimitStep).toBeDefined();
    expect(rateLimitStep?.if).toBe("always()");
    expect(rateLimitStep?.run).toContain("sleep 30");
  });
});
