# Security and Performance Changes

## Scope

This document captures the fixes applied from the React audit across:

- OWASP Top 10 security hardening
- Frontend performance improvements
- Linting and code quality guardrails

## Security Changes

### 1) Added Content Security Policy and referrer policy

- **File:** `index.html`
- **What changed:**
  - Added a strict CSP via `<meta http-equiv="Content-Security-Policy">`
  - Added `referrer` policy as `strict-origin-when-cross-origin`
- **Why:** Reduces XSS blast radius, blocks framing via CSP `frame-ancestors 'none'`, and limits referrer leakage.

### 2) Added application-wide React error boundary

- **Files:** `src/ErrorBoundary.tsx`, `src/main.ts`
- **What changed:**
  - Introduced `ErrorBoundary` class component
  - Wrapped `<App />` at the root render level
  - Shows a generic fallback message instead of exposing internal errors
- **Why:** Improves resilience and avoids leaking detailed runtime failure details to end users.

### 3) Hardened external link behavior

- **File:** `src/App.tsx`
- **What changed:** Updated external links opened with `target="_blank"` to include `rel="noopener noreferrer"`.
- **Why:** Prevents reverse tabnabbing and reduces cross-window security risk.

## Performance Changes

### 4) Improved image loading strategy

- **File:** `src/App.tsx`
- **What changed:**
  - Added explicit `width` and `height` attributes to major images
  - Added `loading="lazy"` to non-critical images
  - Added `decoding="async"` to image elements
  - Removed empty inline `style={{}}` from image tags
- **Why:** Reduces layout shifts (CLS), improves scrolling performance, and cuts initial network pressure.

### 5) Preserved hero media priority

- **File:** `src/App.tsx`
- **What changed:** Poster fallback image keeps eager behavior for above-the-fold media.
- **Why:** Maintains perceived load quality for hero content while other images remain lazy.

## Lint and Quality Improvements

### 6) Added ESLint tooling and scripts

- **Files:** `package.json`, `eslint.config.js`, `package-lock.json`
- **What changed:**
  - Installed ESLint + TypeScript + hooks + a11y plugin stack
  - Added scripts:
    - `typecheck`
    - `lint`
    - `audit`
  - Added flat ESLint config with React hooks and accessibility recommendations
- **Why:** Provides automated prevention of quality, hook usage, and a11y regressions.

### 7) Removed unused starter file

- **File:** `src/counter.ts` (deleted)
- **What changed:** Removed dead Vite starter code.
- **Why:** Reduces maintenance noise and keeps the source tree aligned with active app code.

## Validation Run

- `npm run build` passed successfully.
- `npm audit --json` reported **0 vulnerabilities**.
- IDE lint diagnostics returned no current errors in edited files.

## Operational Notes

- Some security headers (`HSTS`, `X-Frame-Options`, `X-Content-Type-Options`) must still be enforced at the hosting/proxy layer; they cannot be reliably enforced from React source code alone.
- Snyk Code scan could not be executed because Snyk Code is not enabled for the configured organization.
