/**
 * Summarize Github Pr
 *
 * Summarize any GitHub PR with change summary, risks, and architecture impact
 *
 * @rote-frontmatter
 * ---
 * name: summarize-github-pr
 * description: Summarize any GitHub PR with change summary, risks, and architecture impact
 * provenance:
 *   author: 2k24c1m.2411542@gmail.com
 * metadata:
 *   rote_version: 0.80.0
 *   version: 0.0.1
 *   status: released
 *   adapter_sources:
 *     "adapter/github": "modiqo/github"
 *   kind: atomic
 *   flow_type: sequential
 *   execution_model: steps_with_presentation
 *   format: typescript
 *   requires_endpoints:
 *     - adapter/github
 *   requires_sessions: true
 *   discoverability:
 *     tags:
 *       - typescript
 *       - github
 *       - architecture
 *       - pr-review
 * ---
 */

import { executePlan, Step } from "@rote/sdk";

export default async function run(params: { owner: string; repo: string; pull_number: number }) {
  console.log(Analyzing GitHub PR /#...);
}