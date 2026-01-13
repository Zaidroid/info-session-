# Elevate Presentation 3.0

This is the new interactive, spatial presentation built with React, Vite, and Framer Motion.

## Features
- **Spatial Navigation**: 3D depth transitions (Z-axis).
- **Active Speaker Widget**: Dynamic name/role indicator.
- **Theme Toggle**: Switch between "Pro Light" and "Cinematic Dark".
- **Keyboard Control**: Optimized for clickers (Left/Right Arrows, Spacebar).
- **Feedback Wall**: Animated background for the "Elevate Future" section.

## How to Run

1.  Open a terminal in this folder (`presentation-app`).
2.  Install dependencies (if not already done):
    ```bash
    npm install
    ```
3.  Start the presentation:
    ```bash
    npm run dev
    ```
4.  Open the link shown (usually `http://localhost:5173`) in your browser.
5.  Press **F11** for Full Screen.

## Controls
-   **Next Slide**: `Right Arrow` or `Space`
-   **Previous Slide**: `Left Arrow`
-   **Toggle Theme**: Click the Sun/Moon icon (Top Right)

## Deployment

### Netlify
1.  Push this repository to GitHub.
2.  Log in to Netlify and "Add new site" -> "Import an existing project".
3.  Connect to GitHub and select this repository.
4.  Netlify will detect the settings from `netlify.toml` automatically (`npm run build`, `dist`).
5.  Click **Deploy**.
