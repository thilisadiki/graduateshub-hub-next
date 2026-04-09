---
name: Always write commit message at end of output
description: After every update (feature, new page, content change), always include a suggested commit message at the end of the response
type: feedback
---

After every update — whether a new page, feature, content change, bug fix, or SEO improvement — always write a suggested git commit message at the end of the response.

**Why:** User wants to commit changes incrementally and needs a ready-to-use message without having to draft one themselves.

**How to apply:** End every response that involves file changes with a commit message block, formatted as:

```
git commit -m "type: short description"
```

Follow conventional commits style (feat, fix, content, seo, refactor). Keep it under 72 characters. If multiple files were changed across different concerns, suggest a single message that covers the primary change.
