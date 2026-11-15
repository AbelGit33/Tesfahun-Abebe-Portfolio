---
name: create-skill
description: "Create a reusable VS Code agent skill from an observed workflow, debugging method, or project process. Use when turning a repeatable checklist, triage pattern, or team method into a SKILL.md file for future on-demand use."
argument-hint: "Describe the workflow, goal, scope, and any completion checks"
user-invocable: true
disable-model-invocation: false
---

# Skill Creation

## When to Use
- You have a repeatable workflow, debugging pattern, or review checklist that should be reusable later.
- A task is becoming a standard process and should be captured as a skill instead of re-explained each time.
- You want to package project-specific guidance into a `SKILL.md` for future agents or teammates.

## Scope Decision
1. Choose the right scope before writing:
   - Workspace-scoped: put the skill in `.github/skills/<skill-name>/SKILL.md` for project-specific workflows.
   - User-scoped: put it in `~/.copilot/skills/<skill-name>/SKILL.md` for personal workflows across repos.
2. Use the skill name to match the folder name exactly and keep it lowercase with hyphens.

## Workflow to Extract
1. Review the conversation or task history and identify the sequence actually being followed.
2. Extract the concrete steps, decision points, and branch logic.
3. Turn repeated checks into explicit completion criteria.
4. Remove task-specific details that are not reusable.
5. Generalize the method so another agent can apply it in a similar situation without prior context.

## Quality Checklist
A good skill should:
- State when to use it clearly in the `description`.
- Include an actionable step-by-step procedure.
- Capture branch logic and decision points.
- Define what success looks like with completion checks.
- Keep the skill focused on one workflow or domain.
- Avoid vague or generic instructions.

## SKILL.md Structure
Use this structure when creating the skill:

```yaml
---
name: skill-name
description: "What and when to use. Include trigger words for discovery."
argument-hint: "Optional hint for slash invocation"
user-invocable: true
disable-model-invocation: false
---

# Skill Title

## When to Use
- Trigger conditions
- Typical scenarios

## Procedure
1. Gather the context
2. Determine scope or intent
3. Apply the workflow
4. Validate completion

## Decision Points
- If X, do Y
- If not, do Z

## Completion Checks
- The task is done when...
- The output is validated against...
```

## Procedure for Creation
1. Confirm the workflow is specific enough to be reusable.
2. Write a short, keyword-rich `description` that includes the likely trigger words.
3. Choose a clear `name` that matches the folder and skill purpose.
4. Draft the body with:
   - `When to Use`
   - `Procedure`
   - `Decision Points`
   - `Completion Checks`
5. Save at the correct location:
   - workspace: `.github/skills/<skill-name>/SKILL.md`
   - personal: `~/.copilot/skills/<skill-name>/SKILL.md`
6. Check the result for:
   - valid YAML frontmatter
   - correct folder/name alignment
   - clear discovery wording
   - concise but complete instructions

## If the Workflow Is Ambiguous
Ask targeted clarifying questions before finalizing:
- What outcome should this skill produce?
- Is this a personal skill or a project-shared skill?
- Should it be a quick checklist or a longer multi-step workflow?
- Which quality checks define success?

## Finalization
Once the skill is written, review it against this standard:
- The `description` is discoverable and specific.
- The steps are ordered and actionable.
- Branches and rule-based decisions are included.
- Completion criteria are explicit.
- The skill is compact and usable without extra context.

## Related Customizations to Consider Next
- A focused prompt for one-off execution of the workflow
- A reusable instruction file for cross-project conventions
- A custom agent when the workflow needs tool isolation or staged handoffs
- A hook for automatic validation or formatting checks
