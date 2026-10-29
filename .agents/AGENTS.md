# Gothos-labs — Project Rules

Approved replacement governance derived from developer global rules on 2026-10-28.

## §1 — Authority and project
- Govern Gothos-labs in D:\Company Website. User instructions override these rules. Canonical workflow files live in .agents/ and docs/. All planning, halts and review decisions occur in Codex.

## §2 — Stack and baseline
- Buildless HTML/CSS/classic JavaScript/inline SVG, dependency-free Node server, local fonts and licenses. Preserve npm run dev. New dependencies or architecture changes require scope and approval.

## §3 — Task boundaries
- Work only within approved CURRENT_TASK.md scope. Preserve unrelated changes. Do not silently broaden the feature or switch executor.

## §4 — Content integrity
- No invented metrics, customers, endorsements, pricing, contacts, certifications or product capabilities. No real patient/resident identifiers. Enquiry downloads are local briefs, never delivered messages or confirmed bookings.

## §5 — Preflight and halt triggers
- §5.1: protect credentials and patient/resident data; never copy them into marketing assets, logs or source.
- §5.2: keep institution-specific branding and values configurable; never invent tenant details.
- §5.3: halt for unscoped restructuring, dependency changes or contract changes.
- §5.4: halt before migrations, deployment, DNS, destructive or irreversible changes without explicit scope and authorization.
- §5.5: clinical, legal, privacy/security and policy claims require verified facts and developer wording approval.
- §5.6: never log or persist sensitive input; add no tracking without approval.
- §5.7: other repositories are separate boundaries; inspect only when scoped, and modify only under a separate approved task.
- §5.8: one coherent feature per task; split unrelated features.
- §5.9: keep preview local; do not stop unrelated servers, expose the site publicly or modify shared environments without authorization.
- §5.10: scope exact verification evidence before execution; unsupported claims are not passes.

## §6 — Portable task state and deliverables
- CURRENT_TASK.md contains Feature, Plan reference, MASTER_PLAN update, scope, exclusions, Do NOT touch, route, Manual/Agent/Blocked buckets, Order, Verification, Flags, review tier, Executor and Approval.
- Approval is explicit. DRAFT refuses execution. Pause/resume state belongs only in CURRENT_TASK.md.
- Execution returns branch work and root HANDOFF.md; no PR. Evidence includes exact commands, fresh output and files touched.
- STATUS.md describes durable accepted state; never transient state. Draft status wording for developer approval. MASTER_PLAN.md ad-hoc entries are append-only when scoped.
- Close-out follows accepted review and explicit authorization, stages only scoped files, records hashes and resets task state under close-task.

## §7 — Tools and guards
- Use host tools and supported approvals. Never bypass sandbox, hook, path or permission denials or edit guards. A denial requires supported approval or a developer permission change.

## §8 — Context and research
- Delegate bulky reading to read-only subagents; coordinator receives findings. Read only needed STATUS/MASTER_PLAN sections. Save portable task state and recommend a fresh chat at stage boundaries.

## §9 — Environment and publication
- Local development and verification only by default. Remote reads explicitly requested by the task are permitted. Push, PR, deployment, DNS and merges need separately scoped explicit authorization; no publication during bootstrap.

## §10 — Review tiers
- High assurance/high: governance, security/privacy, data boundaries, cross-repo integration, deployment or substantive AI behavior. Standard/medium: other functional or UI changes. Mechanical/low: exact prescribed low-risk edits.
- Retain any explicit xhigh requirement; never downgrade scoped assurance. Legacy Opus/Sonnet/Haiku mean high/medium/low assurance, not vendor-model requirements. Unknown client effort settings must be reported as unknown.

## §11 — Review and acceptance
- code-review uses four independent read-only lenses: scope, rules, evidence and blast radius, in bounded waves. Reviewers inspect code, not only HANDOFF claims; reviewers never dispatch reviewers. Coordinator never reads the full diff.
- Seven-section report: findings, verdict, tier check, STATUS.md check, follow-up prompt, follow-up model, plain-English explainer. Stop for developer acceptance or send-back. No self-acceptance.

## §12 — Dispatch loop and routes
- §12.1: planning uses new-task, saves DRAFT, obtains explicit approval, records APPROVED, then hands off and stops. No planning-session execution.
- §12.2: route B is default; fresh execution chat uses dispatch-task and follows the selected Executor, writing only the Agent bucket in scope.
- §12.3: route A is developer-manual; route C is Antigravity-only for fully prescribed mechanical work with no judgment, high-risk triggers or open blockers. Close-out never route C.
- §12.4: Executor is Codex direct by default. Antigravity only when scoped for large mechanical work without in-loop verification or explicitly selected for usage savings. Use bridge tools when available; check stale jobs; forbid all dispatched shell calls; verify supported model names.
- §12.5: halt on open developer blockers, scope changes, unsafe/unknown claims, missing approved wording, unexpected state, denied permissions, cross-repo writes or unapproved shared/irreversible actions. Record the exact blocker in CURRENT_TASK.md and dispatch nothing dependent until resolved.
- §12.6: verify and write evidence-bearing HANDOFF.md; no PR before accepted review.
- §12.7: run independent code-review and stop for developer decision.
- §12.8: use close-task only after acceptance and authorization; use pause-task for pause/resume.
- §12.9: preserve review assurance; no unavailable vendor-model gate. Planning and execution remain separate chats. Approval translation for legacy executor labels does not require reapproval.



## Tooling rule map
- Legacy skill reference §12.13 (seven-section review) maps to §11 Review and acceptance in this approved project structure.
- Legacy §6.8 STATUS wording draft and §6.9 task cleanup references map to §6 Portable task state and deliverables; status wording remains approval-gated and cleanup occurs only at authorized close-out.
- Legacy §12.4 minor-decision reporting references map to the HANDOFF evidence/reporting duties in §6; §12.4 here is executor selection, not a minor-decision rule.
