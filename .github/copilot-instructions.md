# CryptoPedea Mobile UI Implementation Rules

## Project

CryptoPedea is a Next.js + React + TypeScript application.

Mobile Figma implementation is being added to the existing application.

## Primary rule

Figma is the visual source of truth for mobile screens.

Existing application functionality, routing, data sources and desktop UI must be preserved.

## Desktop protection

The existing desktop implementation is considered stable.

Do not modify desktop behavior or styling.

Desktop breakpoint:

>= 768px

Mobile breakpoint:

< 768px

Any mobile-specific CSS must be scoped so it does not affect desktop.

## Mobile implementation

Mobile implementations must use responsive CSS/layout.

Do NOT use:

- navigator.userAgent
- window.innerWidth
- JavaScript device detection
- JS-based responsive rendering
- duplicated mobile data sources

Use CSS media queries and responsive layout.

## Figma geometry

When implementing a Figma screen, exact Figma values are authoritative.

Do not approximate:

- width
- height
- margin
- padding
- gap
- border width
- shadow
- font size
- line height
- letter spacing
- position
- rotation

If Figma specifies an exact value, use that value.

## Responsive strategy

The CryptoPedea mobile designs use a 440px logical design width.

For widths below 440px:

preserve the design proportions and scale the composition uniformly.

For widths between 440px and 767px:

keep the 440px logical design centered rather than stretching it.

Never independently resize individual Figma components merely to make them fit.

## Layout philosophy

Prefer parent-level layout relationships.

Do not fix layout problems by accumulating arbitrary:

- negative margins
- transforms
- magic offsets
- component-specific responsive hacks

If a child is misplaced, inspect the parent layout first.

## Assets

Use exact Figma assets.

Do not substitute:

- generic icons
- emoji
- icon libraries
- recreated SVGs
- visually similar images

Do not leave temporary Figma MCP asset URLs in production code.

Use local project assets whenever available.

## Typography

Use the project's existing font loading and variables.

CryptoPedea mobile designs use:

- Pixeloid Sans
- Space Grotesk

Do not replace them with system fonts.

## Architecture

Reuse existing components when appropriate.

Do not create duplicate data models for mobile.

Do not rewrite the application architecture just to reproduce a Figma screen.

## Workflow

Implement one Figma screen at a time.

For each screen:

1. inspect existing relevant code
2. map Figma layers to existing components
3. implement the screen
4. verify geometry
5. verify responsive behavior
6. verify desktop is unchanged

Do not implement subsequent screens until the current screen is verified.

## Copilot efficiency

Avoid unnecessary repository-wide exploration.

When a task is clearly scoped to a component or stylesheet:

- inspect only the relevant files
- make the smallest necessary change
- do not regenerate unrelated components
- do not rewrite working code
- do not repeatedly inspect unchanged files

Prefer targeted edits over full-file rewrites.

Before editing, identify the exact files that need modification.

After editing, report only:
- changed files
- important changes
- verification result
- remaining issue, if any