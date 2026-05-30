# UI Preservation Rules

This website is already finished.

## Primary Requirement

Preserve the existing UI exactly.

The visual appearance, layout, spacing, sizing, colors, typography, responsiveness, animations, and interactions must remain identical after any refactoring.

Any change that alters the rendered UI is prohibited.

---

## Allowed Changes

### Tailwind Cleanup
- Extract duplicated Tailwind utility combinations into reusable CSS classes using `@apply`.
- Create helper classes inside `style.css`.
- Replace repeated utility strings with reusable classes.

Example:

Before

class="px-4 py-2 rounded-lg border transition"

After

style.css

.btn-base {
  @apply px-4 py-2 rounded-lg border transition;
}

component

class="btn-base"

---

### Code Organization

- Improve readability.
- Group reusable styles.
- Remove duplicated utility combinations.
- Remove unused helper classes if they are truly unused.

---

## Visual Lock

The following must remain unchanged:

- Layout
- Positioning
- Widths and heights
- Margins
- Padding
- Gaps
- Typography
- Colors
- Gradients
- Border radius
- Shadows
- Animations
- Responsive behavior
- Component hierarchy
- Navigation behavior

---

## Gradient Classes

Do not merge, simplify, or modify gradient classes unless the generated CSS remains visually identical.

Classes using:

- bg-clip-text
- text-transparent
- gradients
- radial gradients
- dark mode variants

must preserve identical rendering.

---

## Forbidden Actions

- No redesign.
- No UI modernization.
- No visual improvements.
- No color adjustments.
- No spacing adjustments.
- No animation changes.
- No responsive changes.
- No component restructuring.
- No replacing Tailwind patterns with alternatives that change rendering.

---

## Refactoring Priority

1. Preserve UI exactly.
2. Preserve behavior exactly.
3. Reduce duplicated Tailwind classes.
4. Improve maintainability.

If there is any doubt, do not change the code.