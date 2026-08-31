# Responsive Design System Guide

## Breakpoints

| Name | Min-width | Target Devices |
|------|-----------|----------------|
| `xs` | `475px` | Large phones |
| `sm` | `640px` | Tablets portrait |
| `md` | `768px` | Tablets landscape / small laptops |
| `lg` | `1024px` | Laptops / desktops |
| `xl` | `1280px` | Large desktops |
| `2xl` | `1536px` | Extra-large screens |

## Spacing Scale

Use the extended spacing utilities for consistent layout:
- `p-4 sm:p-6 lg:p-8` — responsive page padding
- `gap-4 sm:gap-6 lg:gap-8` — responsive grid/flex gaps
- `max-w-7xl mx-auto` — constrained content width

## Typography

- Headings: `text-2xl sm:text-3xl lg:text-4xl`
- Body: `text-sm sm:text-base`
- Captions: `text-xs sm:text-sm`

## Component Patterns

### Cards
```tsx
<div className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm sm:p-6 dark:border-neutral-800 dark:bg-neutral-900">
  {/* content */}
</div>
```

### Tables
```tsx
<div className="overflow-x-auto -mx-4 sm:mx-0">
  <table className="min-w-full">
    {/* table content */}
  </table>
</div>
```

### Forms
```tsx
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
  {/* form fields */}
</div>
```

### Navigation
- Mobile: Bottom navigation bar (`MobileNavigation`)
- Tablet/Desktop: Sidebar (`Sidebar`) + TopBar
- Hide/show with responsive utilities: `hidden md:block`, `md:hidden`

## Images

Use Next.js `Image` with `sizes` attribute:
```tsx
<Image
  src="/logo.png"
  alt="Logo"
  width={120}
  height={40}
  sizes="(max-width: 640px) 100px, 120px"
  className="h-auto w-auto"
/>
```

## Testing

- Test all pages at `xs`, `sm`, `md`, `lg`, `xl`, `2xl` breakpoints
- Verify no horizontal scroll on any viewport
- Lighthouse mobile score target: > 90
