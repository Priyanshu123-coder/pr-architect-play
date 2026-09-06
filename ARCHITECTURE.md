# Architecture Specification: PR-Architect-Play

## Design Principles

1. **Deterministic Execution**:
   Unlike unconstrained conversational LLMs that may hallucinate file paths or omit modified files, `pr-architect-play` runs on an inspectable Directed Acyclic Graph (DAG) using the official Rote engine.

2. **Zero-Token Replayability**:
   Once registered, execution parameters (`owner`, `repo`, `pull_number`) are bound to structured pipeline inputs. The model acts as a compiler pass rather than an unbounded agent.

3. **Multi-Stage Pipeline**:

```
[GitHub PR Diff]
      |
      v
[AST Tokenizer & Chunking]
      |
      +---> [Stage 1: Breaking Change Detector] (Catches unmerged commits, lint bypasses)
      |
      +---> [Stage 2: Architecture Boundary Mapper] (Catches core vs wrapper divergence)
      |
      v
[Unified Markdown Report]
```

## Security & Verification Model

- **Cryptographic Hash**: Pinning the release with SHA256 checksums on the Modiqo registry ensures zero supply-chain tampering.
- **Local Credentials**: The GITHUB_TOKEN never leaves the developer's execution context.