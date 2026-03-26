# Responsive UI Fix Guide — Mandate Management System (UF)

> **Framework:** Next.js 15.3 · **Styling:** Tailwind CSS 3.4
> **Audit Date:** 2026-03-24
> **Total Issues Found:** 14 files · 30+ individual breakpoints affected

---

## Quick Summary

| Priority | Count | Impact |
|---|---|---|
| 🔴 CRITICAL | 5 files | Broken / unusable on mobile (< 640px) |
| 🟠 HIGH | 3 files | Significantly broken on tablet (768–1023px) |
| 🟡 MEDIUM | 4 files | Degrades but remains functional |
| 🟢 LOW | 2 files | Polish / optimization |

---

## Systemic Anti-Patterns to Fix Everywhere

Before diving into per-file fixes, address these root causes across the entire codebase:

| Anti-Pattern | Current Usage | Correct Replacement |
|---|---|---|
| `vw`/`vh` for interactive elements | `w-[12vw]`, `h-[2.5vw]` | Responsive Tailwind: `w-8 sm:w-12 lg:w-16` |
| Hardcoded pixel widths | `w-[300px]`, `w-[360px]`, `w-96` | `w-full max-w-[360px]` |
| Fixed percentage heights | `h-[85vh]`, `h-[90%]`, `h-4/5` | `flex-1 min-h-0 overflow-auto` |
| `!important` width overrides | `!w-[900px]` | `w-full max-w-[900px]` |
| No mobile nav collapse | Always-visible top nav | Hamburger drawer below `md:` |

---

## 🔴 CRITICAL — Priority 1

### 1. `app/components/Layout/LayoutDecider.tsx`

#### Issue A — Full-screen lock with no mobile adaptation (Line ~372)

```diff
- <div className={`flex h-screen w-screen flex-col overflow-auto bg-cover bg-center`}>
+ <div className={`flex h-screen w-full flex-col overflow-x-hidden overflow-y-auto bg-cover bg-center`}>
```

**Why:** `w-screen` on a page with a scrollbar (Windows) adds a horizontal scrollbar. `overflow-x-hidden` prevents child content from escaping.

---

#### Issue B — Fixed percentage content-area height (Line ~387)

```diff
- <div className='flex h-[90%] 2xl:h-[95%] flex-1'>
+ <div className='flex flex-1 min-h-0'>
```

**Why:** Percentage heights collapse when the parent has no explicit height. `flex-1 min-h-0` lets flexbox handle the split correctly at all screen sizes.

---

#### Issue C — Sidebar width collapses to unusable vw values (Lines ~107–126)

```diff
- const widthClass: string = fullView ? 'w-[10vw] ' : 'w-[5%]'
+ const widthClass: string = fullView ? 'w-[10vw] lg:w-[10vw]' : 'w-[5%]'

# Add hidden state for mobile when sidebar is vertical mode:
- <aside className={`${widthClass} ...`}>
+ <aside className={`hidden lg:flex ${widthClass} ...`}>
# Add a hamburger trigger for mobile (see TopNav fix below)
```

---

### 2. `app/components/Layout/TopNav.tsx`

#### Issue A — No hamburger, all nav items always visible (Lines ~480–509)

Add a hamburger button visible only below `md:` and hide the full nav items on mobile:

```diff
<div className={clsx(`flex items-center justify-between p-2 ...`)}>
  <LogoSection />
+ {/* Mobile hamburger - visible below md */}
+ <button className="flex md:hidden p-2" onClick={() => setMobileMenuOpen(true)}>
+   <HamburgerIcon className="h-6 w-6" />
+ </button>
+ {/* Desktop nav - hidden below md */}
- <MenuItemsSection />
+ <MenuItemsSection className="hidden md:flex" />
- <OPRMatrixSection />
+ <OPRMatrixSection className="hidden md:flex" />
  <ProfileSection />
</div>
+ {/* Mobile drawer */}
+ {mobileMenuOpen && (
+   <MobileDrawer onClose={() => setMobileMenuOpen(false)}>
+     <MenuItemsSection />
+     <OPRMatrixSection />
+   </MobileDrawer>
+ )}
```

#### Issue B — Menu items hardcoded 62% max-width (Line ~226)

```diff
- <div className='flex max-w-[62%] items-center gap-1'>
+ <div className='hidden md:flex md:max-w-[62%] items-center gap-1'>
```

#### Issue C — Logo min-width hardcoded (Line ~187)

```diff
- <div className='flex items-center gap-1 min-w-[100px]'>
+ <div className='flex items-center gap-1 min-w-[60px] sm:min-w-[100px]'>
```

#### Issue D — 12-column inline grid, no responsive variant (Lines ~518–523)

```diff
- style={{ gridTemplateColumns: 'repeat(12, minmax(0, 1fr))', gap: '0.5rem' }}
+ // Use a responsive grid via Tailwind instead, or wrap in a scroll container:
+ <div className="overflow-x-auto">
+   <div style={{ gridTemplateColumns: 'repeat(12, minmax(0, 1fr))', gap: '0.5rem', minWidth: '640px' }}>
```

---

### 3. `app/components/LoginForm.tsx`

#### Issue A — Login card min-width overflows 320px screens (Line ~231)

```diff
- className={`flex h-fit min-w-[350px] flex-col ... 2xl:min-w-[400px]`}
+ className={`flex h-fit w-full max-w-[400px] sm:min-w-[350px] flex-col ...`}
```

#### Issue B — No horizontal padding on outer container (Line ~204)

```diff
- className={`flex h-full justify-center overflow-y-auto p-5 ...`}
+ className={`flex h-full justify-center overflow-y-auto px-4 py-5 sm:p-5 ...`}
```

---

### 4. `app/forgot-password/ForgotPassword.tsx`

#### Issue A — Fixed 300px form controls (Lines ~80–105)

```diff
- <label className='flex w-[300px] flex-col ...'>
+ <label className='flex w-full max-w-[300px] flex-col ...'>

- <button className='w-[300px] rounded-full px-[0.83vw] py-[2vh] ...'>
+ <button className='w-full max-w-[300px] rounded-full px-4 py-3 ...'>
```

#### Issue B — Viewport-unit padding on buttons (Line ~85, ~100)

```diff
- px-[0.83vw] py-[2vh]
+ px-4 py-3
```

**Why:** `0.83vw` ≈ 3px on mobile — nearly no padding. Use fixed rem-based values.

#### Issue C — 200px hardcoded header height (Line ~53)

```diff
- <div className='flex h-[200px] w-full items-center justify-center text-3xl font-semibold'>
+ <div className='flex w-full flex-col items-center justify-center py-8 text-2xl sm:text-3xl font-semibold'>
```

---

### 5. `app/forgot-password/OtpVerification.tsx`

#### Issue A — 360px button overflows all phones (Lines ~327, ~382)

```diff
- <Button className='w-[300px] rounded-full px-[0.83vw] py-[2vh] ...'>
+ <Button className='w-full max-w-[300px] rounded-full px-4 py-3 ...'>

- <Button className='w-[360px] rounded-full px-[0.83vw] py-[2vh] ...'>
+ <Button className='w-full max-w-[360px] rounded-full px-4 py-3 ...'>
```

#### Issue B — Password strength bars use `vw` widths (Lines ~213–226)

```diff
- <div className='... h-1 w-[5vw] rounded-sm py-1' />
+ <div className='h-1 w-10 sm:w-14 rounded-sm' />
```

---

## 🟠 HIGH — Priority 2

### 6. `app/select-context/components/ContextSelector.tsx`

#### Issue A — Access profile dropdown 12vw (45px on mobile) (Line ~329)

```diff
- <div title={...} className='w-[12vw]'>
+ <div title={...} className='w-full sm:w-48'>
```

#### Issue B — OPR status circles collapse to single-digit px values (Lines ~383–406)

```diff
- <div className='flex w-[8vw] flex-col ...'>
+ <div className='flex w-16 sm:w-20 lg:w-24 flex-col ...'>

- <div className='flex h-[2.5vw] w-[2.5vw] ...'>
+ <div className='flex h-8 w-8 sm:h-10 sm:w-10 ...'>

- <block.icon className='h-[0.7vw] w-[0.7vw] ...'>
+ <block.icon className='h-4 w-4 sm:h-5 sm:w-5 ...'>
```

#### Issue C — Arrow separator, stack vertically on mobile (Line ~432)

```diff
- <div className='mx-4 text-lg text-gray-400'>→</div>
+ <div className='hidden sm:block mx-4 text-lg text-gray-400'>→</div>
# Wrap the status blocks in a responsive flex:
- <div className='flex items-center'>
+ <div className='flex flex-col sm:flex-row items-center gap-2'>
```

#### Issue D — OPRList height collapse (Line ~440)

```diff
- <div className='flex h-4/5'>
+ <div className='flex flex-1 min-h-0'>
```

---

### 7. `app/app-hub/components/AppHub.tsx`

#### Issue A — Search bar fixed `w-96` (384px) overflows phones (Line ~83)

```diff
- <div className={twMerge('flex w-96 items-center ...', borderColor)}>
+ <div className={twMerge('flex w-full max-w-sm sm:w-96 items-center ...', borderColor)}>
```

#### Issue B — Version dropdown `w-[10vw]` = 37px on mobile (Line ~106)

```diff
- <div title={...} className='w-[10vw]'>
+ <div title={...} className='w-full sm:w-40'>
```

#### Issue C — Header row doesn't wrap on small screens (Line ~80)

```diff
- <div className='flex items-center justify-between px-6 py-4'>
+ <div className='flex flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-4'>
```

#### Issue D — Grid jump from 3 to 6 columns skips tablet (Line ~171)

```diff
- <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6'>
+ <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
```

---

### 8. `app/user/components/index.tsx` (SetupScreen)

#### Issue A — Content area locked to `h-[85vh]` (Line ~917)

```diff
- <div className={clsx(`flex h-[85vh]`, { 'h-fit': selectedMenuItem === 'st' })}>
+ <div className={clsx(`flex flex-1 min-h-0`, { 'h-fit': selectedMenuItem === 'st' })}>
```

#### Issue B — Tabs forced to 900px with `!important` (Line ~910)

```diff
- <Tabs ... className='!w-[900px]' />
+ <Tabs ... className='w-full max-w-[900px]' />
```

#### Issue C — Sidebar hardcoded 200px min-width (Line ~924)

```diff
- style={{ minWidth: '200px' }}
+ // Replace inline style with responsive class:
  className='min-w-[48px] sm:min-w-[120px] md:min-w-[200px] h-full'
```

#### Issue D — Outer layout `h-[90%]` collapses (Line ~702)

```diff
- <div className={`g-root flex h-[90%] w-full flex-col overflow-hidden`}>
+ <div className={`g-root flex flex-1 min-h-0 w-full flex-col overflow-hidden`}>
```

#### Issue E — Header action bar forces single-line (Lines ~706–713)

```diff
- <Text className='whitespace-nowrap font-semibold'>
+ <Text className='font-semibold truncate max-w-[200px] sm:max-w-none'>
# Add flex-wrap to the header row:
- <div className='flex items-center gap-2'>
+ <div className='flex flex-wrap items-center gap-2'>
```

---

## 🟡 MEDIUM — Priority 3

### 9. `app/components/Layout/SideNav.tsx`

#### Issue A — Loading overlay uses `w-[100vw]` causing scrollbar on Windows (Line ~369 in LayoutDecider)

```diff
- <div className='flex w-[100vw] h-[100vh] bg-slate-200 justify-center items-center'>
+ <div className='flex w-full min-h-screen bg-slate-200 justify-center items-center'>
```

#### Issue B — Menu item text hardcoded `w-[110px]` (Line ~372 in SideNav)

```diff
- <p className={twMerge('w-[110px] truncate ...', ...)}>
+ <p className={twMerge('w-full max-w-[110px] truncate ...', ...)}>
```

---

### 10. `components/Modal.tsx`

#### Issue A — No max-width for horizontal control on mobile (Lines ~161–178)

```diff
- <div role="dialog" className={`${className} animate-scaleIn flex flex-col ...`}
-   style={{ maxHeight: "90vh" }}>
+ <div role="dialog" className={`${className} animate-scaleIn flex flex-col w-full sm:w-auto`}
+   style={{ maxHeight: "90vh", maxWidth: "calc(100vw - 2rem)" }}>
```

#### Issue B — Fixed padding collapses content on 320px screens (Lines ~224, ~238)

```diff
- <div className="flex-1 overflow-y-auto px-6 py-4 ...">
+ <div className="flex-1 overflow-y-auto px-4 py-3 sm:px-6 sm:py-4 ...">
```

---

### 11. `components/Table.tsx`

#### Issue A — Column-visibility modal fixed `w-96` (Line ~265)

```diff
- <div className='... w-96 overflow-auto ...'>
+ <div className='... w-full max-w-sm sm:w-96 overflow-auto ...'>
```

#### Issue B — Table compresses columns instead of scrolling on mobile (Lines ~379–380)

```diff
  <div className="overflow-auto flex-1 min-h-0">
-   <table className="w-full ...">
+   <table className="w-full min-w-[640px] ...">
```

**Why:** `min-w-[640px]` forces the table wider than the viewport, triggering the parent's `overflow-auto` to show a horizontal scrollbar — much better than squishing all columns.

---

### 12. `app/components/navBar.tsx`

**Action required:** Verify if this file is actually used anywhere.

```bash
# Run in project root to check usage:
grep -r "navBar" app/ --include="*.tsx" --include="*.ts"
```

- **If unused:** Delete the file (it is superseded by `TopNav.tsx`).
- **If used:** Apply the same hamburger/drawer pattern described for `TopNav.tsx`.

---

## 🟢 LOW — Priority 4

### 13. `app/components/Layout/TopNav.tsx` — OPR Grid config

**Issue:** The 12-column config-driven grid has no responsive rearrangement mechanism.

**Recommended approach:** Add a fallback layout that activates below `md:`:
```diff
# In the grid container:
- style={{ gridTemplateColumns: 'repeat(12, minmax(0, 1fr))', gap: '0.5rem' }}
+ // Below md: render items as a vertical list; above md: use the config grid
  className="hidden md:grid"
  style={{ gridTemplateColumns: 'repeat(12, minmax(0, 1fr))', gap: '0.5rem' }}
```
The mobile hamburger drawer (from Issue A of TopNav) handles the sub-`md:` layout.

---

### 14. `app/select-context/components/ContextSelector.tsx` — Typography

**Issue:** `text-nowrap` on a `w-[8vw]` parent (30px on mobile) truncates everything to nothing.

**Fix:** This is a downstream symptom of the vw-based sizing fix in Issue B of File 6. Once the parent width is corrected (`w-16 sm:w-20 lg:w-24`), the text will have room to display correctly.

---

## Implementation Order

Follow this sequence to avoid regressions:

```
Week 1 (Unblocks all mobile testing):
  1. LayoutDecider.tsx    — fixes the shell
  2. TopNav.tsx           — adds mobile hamburger
  3. LoginForm.tsx        — fixes entry point

Week 2 (Auth flows):
  4. ForgotPassword.tsx
  5. OtpVerification.tsx

Week 3 (Core app screens):
  6. ContextSelector.tsx
  7. AppHub.tsx
  8. user/components/index.tsx  ← most complex

Week 4 (Shared components — affects all screens):
  9. Modal.tsx
  10. Table.tsx
  11. SideNav.tsx

Week 5 (Cleanup):
  12. navBar.tsx — delete or fix
  13-14. Low priority polish
```

---

## Testing Checklist

For each fixed file, test at these viewport widths:

| Label | Width | Device Reference |
|---|---|---|
| XS | 320px | Small Android (Galaxy A01) |
| Mobile | 375px | iPhone SE / standard mobile |
| Mobile L | 430px | iPhone 15 Pro Max |
| Tablet | 768px | iPad portrait |
| Tablet L | 1024px | iPad landscape / Surface |
| Desktop | 1280px | Standard laptop |
| Wide | 1920px | Full HD monitor |

**Test scenarios per screen:**
- [ ] No horizontal scrollbar appears
- [ ] All text is readable (not truncated to nothing)
- [ ] All interactive elements (buttons, dropdowns, inputs) are tappable (min 44×44px touch target)
- [ ] Navigation is accessible (hamburger works on mobile)
- [ ] Forms are fully visible and submittable
- [ ] Modals don't overflow screen edges
- [ ] Tables scroll horizontally rather than compressing columns

---

## Tools for Verification

```bash
# Check for remaining vw/vh usage in components:
grep -rn "\[.*vw\]\|\[.*vh\]" app/ --include="*.tsx" --include="*.ts"

# Check for remaining hardcoded pixel widths > 320px:
grep -rn "w-\[3[0-9][0-9]px\]\|w-\[4[0-9][0-9]px\]\|w-\[5[0-9][0-9]px\]" app/ --include="*.tsx"

# Check for !important Tailwind overrides on layout properties:
grep -rn "!w-\|!h-\|!min-w-\|!max-w-" app/ --include="*.tsx"
```

---

*Generated by Responsive UI Optimizer · Claude Sonnet 4.6 · 2026-03-24*
