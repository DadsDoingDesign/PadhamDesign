# Padham Design - Design System Documentation

This document outlines the design system for the Padham Design interior design website. The system is organized into tokens, primitives, components, and layouts to ensure consistency and maintainability across the site.

## Table of Contents

1. [Design Tokens](#design-tokens)
2. [Primitives](#primitives)
3. [Components](#components)
4. [Layouts](#layouts)
5. [Animation System](#animation-system)
6. [Usage Guidelines](#usage-guidelines)

## Design Tokens

Design tokens are the foundational variables that define the visual design language. They are organized into the following categories:

### Colors

Located in `src/styles/tokens/_colors.scss`

```scss
// Color Primitives
$color-white: #F2F2F2;
$color-gray: #626262;
$color-black: #101010;
$color-dark-gray: #191919;

// Semantic Color Tokens
$color-text-primary: $color-white;
$color-text-secondary: $color-gray;
$color-background-primary: $color-black;
$color-background-secondary: $color-dark-gray;
```

### Typography

Located in `src/styles/tokens/_typography.scss`

```scss
// Font Family Primitives
$font-family-serif: 'Baskerville', 'Libre Baskerville', serif;
$font-family-sans: 'Open Sans', sans-serif;

// Style Guide Specific Typography
$typography-h1: (
  font-family: $font-family-serif,
  font-size: $font-size-xxl, // 56px
  font-weight: $font-weight-regular,
  color: $color-white
);

$typography-h3: (
  font-family: $font-family-sans,
  font-size: $font-size-lg, // 32px
  font-weight: $font-weight-semibold,
  color: $color-white
);

$typography-nav-link: (
  font-family: $font-family-sans,
  font-size: $font-size-sm, // 18px
  font-weight: $font-weight-semibold,
  color: $color-gray
);
```

### Spacing

Located in `src/styles/tokens/_spacing.scss`

```scss
// Spacing Primitives
$spacing-xs: 0.5rem;  // 8px
$spacing-sm: 1rem;    // 16px
$spacing-md: 2rem;    // 32px
$spacing-lg: 3rem;    // 48px
$spacing-xl: 4rem;    // 64px
$spacing-xxl: 6rem;   // 96px
```

### Borders

Located in `src/styles/tokens/_borders.scss`

```scss
// Border Radius Primitives
$border-radius-none: 0;
$border-radius-sm: 4px;
$border-radius-md: 8px;
$border-radius-lg: 80px;  // Based on the mockup's rounded panels

// Custom Panel Border Radius Configurations
$border-radius-panel-left: $border-radius-none $border-radius-lg $border-radius-lg $border-radius-none;
$border-radius-panel-center: $border-radius-lg $border-radius-lg $border-radius-none $border-radius-none;
$border-radius-panel-right: $border-radius-lg $border-radius-none $border-radius-none $border-radius-lg;
```

### Animations

Located in `src/styles/tokens/_animations.scss`

```scss
// Duration Primitives
$duration-fast: 150ms;
$duration-medium: 300ms;
$duration-slow: 500ms;
$duration-very-slow: 800ms;

// Timing Function Primitives
$easing-standard: cubic-bezier(0.4, 0.0, 0.2, 1);
$easing-decelerate: cubic-bezier(0.0, 0.0, 0.2, 1);
$easing-accelerate: cubic-bezier(0.4, 0.0, 1, 1);
```

## Primitives

Primitives are the basic building blocks of the UI that can be combined to create more complex components.

### Container

Located in `src/styles/primitives/_container.scss`

The container primitive provides consistent width and padding across the site.

**Usage:**
```html
<div class="container">
  <!-- Content here -->
</div>

<!-- Variants -->
<div class="container container--narrow">
  <!-- Narrower content -->
</div>

<div class="container container--wide">
  <!-- Wider content -->
</div>
```

### Button

Located in `src/styles/primitives/_button.scss`

The button primitive provides consistent styling for all clickable actions.

**Usage:**
```html
<button class="button">Default Button</button>

<!-- Variants -->
<button class="button button--primary">Primary Button</button>
<button class="button button--secondary">Secondary Button</button>
<button class="button button--text">Text Button</button>
```

### Grid

Located in `src/styles/primitives/_grid.scss`

The grid primitive provides flexible layout options for organizing content.

**Usage:**
```html
<div class="grid grid--2-col">
  <div>Column 1</div>
  <div>Column 2</div>
</div>

<!-- Variants -->
<div class="grid grid--3-col">
  <!-- 3 columns -->
</div>

<div class="grid grid--4-col">
  <!-- 4 columns -->
</div>

<!-- Hero-specific grid -->
<div class="grid grid--hero-panels">
  <!-- 3 panels with specific heights -->
</div>
```

### Panel

Located in `src/styles/primitives/_panel.scss`

The panel primitive provides a consistent container for images with specific border radius values.

**Usage:**
```html
<div class="panel panel--left">
  <img src="image.jpg" alt="Description" class="panel__image" />
  <div class="panel__content">Optional overlay content</div>
</div>

<!-- Variants -->
<div class="panel panel--center">
  <!-- Center panel with different border radius -->
</div>

<div class="panel panel--right">
  <!-- Right panel with different border radius -->
</div>
```

### Navigation

Located in `src/styles/primitives/_navigation.scss`

The navigation primitive provides consistent styling for navigation menus.

**Usage:**
```html
<nav>
  <ul class="nav__list">
    <li class="nav__item">
      <a href="#" class="nav__link">Link 1</a>
    </li>
    <li class="nav__item">
      <a href="#" class="nav__link nav__link--active">Active Link</a>
    </li>
  </ul>
</nav>
```

## Components

Components are combinations of primitives that create more complex UI elements.

### Hero Section

Located in `src/styles/components/_hero.scss` and `src/components/sections/Hero.jsx`

The hero section is the main landing area of the website, featuring a three-panel image layout, branding, and publication logos.

**Usage (React):**
```jsx
import Hero from '../components/sections/Hero';

function App() {
  return (
    <div className="app">
      <Hero />
      {/* Other sections */}
    </div>
  );
}
```

**Usage (HTML):**
See `src/hero.html` for the complete implementation.

## Layouts

Layouts define the overall structure of pages and sections.

### Section Layout

Each major section of the website follows a consistent layout pattern:

```html
<section class="section section--[name]">
  <div class="container">
    <!-- Section content -->
  </div>
</section>
```

## Animation System

The animation system provides consistent motion across the website.

### Scroll Animations

Located in utility classes in `src/styles/main.scss`

**Usage:**
```html
<div class="animate-on-scroll">
  <!-- This element will animate when scrolled into view -->
</div>

<!-- Staggered animations -->
<div class="stagger-item animate-on-scroll">Item 1</div>
<div class="stagger-item animate-on-scroll">Item 2</div>
<div class="stagger-item animate-on-scroll">Item 3</div>
```

### Hover Animations

Hover animations are built into components like buttons and panels.

## Usage Guidelines

### Semantic Naming

All classes follow the BEM (Block, Element, Modifier) naming convention:

- Block: The main component (e.g., `.hero`, `.panel`)
- Element: A part of the block (e.g., `.hero__title`, `.panel__image`)
- Modifier: A variation of a block or element (e.g., `.panel--left`, `.button--primary`)

### Componentization

Reusable UI elements should be built as components using the primitives defined in this design system. This ensures consistency and makes maintenance easier.

### Global CSS

All styles are maintained in a global CSS structure, organized by tokens, primitives, components, and layouts. This prevents style duplication and ensures a single source of truth for styling.

### Responsive Design

All components are designed to be responsive by default, with appropriate breakpoints for different screen sizes.

### Accessibility

- Use semantic HTML elements
- Ensure sufficient color contrast
- Provide appropriate focus states
- Include alt text for images
- Support keyboard navigation

## Required Images

See `src/assets/placeholders/placeholder-info.md` for details on the required images and their specifications.

## Animation Implementation

The following animations will be implemented in key areas:

1. **Parallax Effect**:
   - Applied to hero section background images
   - Subtle movement ratio (0.2) for elegant effect
   - Implemented using react-parallax or custom JavaScript

2. **Raised Shadow on Hover**:
   - Applied to interactive elements like portfolio items
   - Box-shadow with slight y-offset and blur
   - Subtle scale transform (1.02-1.05)
   - Consistent transition timing (0.3s) with ease-out curve

3. **Scroll-in Animations**:
   - Fade-in and slide-up effects for content as it enters viewport
   - Implemented using Intersection Observer
   - Staggered timing for grouped elements
