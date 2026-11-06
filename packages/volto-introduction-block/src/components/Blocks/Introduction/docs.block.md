---
block: introduction
---

Holds a detached rich-text paragraph meant as the introduction of a content page. It stores its text the same way as a text block, under its own block type.

Its text is stored in `value` and, without formatting, in `plaintext`.

### Fields

- `value`: the rich text, as a list of Slate nodes, in the same format as the `value` of a text block. Each node is `{ "type": ..., "children": [...] }`, and the innermost children are text nodes, `{ "text": "..." }`. Inline formatting, such as `strong`, `em` and `link`, wraps the text. Every node has at least one child, even if it's `{ "text": "" }`.
- `plaintext`: the text of `value` without formatting. The site indexes it and uses it to decide whether the block is empty, so keep it in sync with `value`.

### Example

A paragraph with bold text and a link:

```json
{
  "@type": "introduction",
  "value": [
    {
      "type": "p",
      "children": [
        { "text": "Welcome to the " },
        { "type": "strong", "children": [{ "text": "annual report" }] },
        { "text": " section. Read the " },
        {
          "type": "link",
          "data": { "url": "/news/annual-report" },
          "children": [{ "text": "latest figures" }]
        },
        { "text": " first." }
      ]
    }
  ],
  "plaintext": "Welcome to the annual report section. Read the latest figures first."
}
```
