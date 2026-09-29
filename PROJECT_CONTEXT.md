# Project Context: ByteSpace

## Project Overview
- **Name:** ByteSpace
- **Description:** Online course marketplace UI.
- **Design Source:**
  - Prototype PDF: `/design/prototype.pdf`
  - PNG screenshots: `/design/screenshots/`
  - Exported assets: `/design/assets/`
  - Target Width: 1440px desktop width

## Pages (9)
1. **Home**
2. **Register**
3. **Login**
4. **Search**
5. **Course Details**
6. **Course Lessons**
7. **Course Reviews**
8. **Creator Profile**
9. **404 Not Found**

## Tech Stack
- **Framework & Bundler:** Vite + React (JavaScript)
- **Routing:** react-router-dom
- **Styling:** Tailwind CSS
- **Authentication & Services:** Firebase (modular v9+ SDK)
- **Architecture:** No backend. All course, creator, and review data is mock data in the frontend.

## Permanent Rules
1. **Design Fidelity:** Match the Figma design as closely as possible: layout, spacing, colors, typography, border radius, shadows. Do not invent sections or content that are not in the design.
2. **Design Text Accuracy:** Use real text from the design (extract from the PDF with pdftotext or PyMuPDF if needed).
3. **Component Reusability:** Build reusable components; do not copy-paste JSX between pages.
4. **Environment Variables:** Never hardcode Firebase credentials. Use `import.meta.env.VITE_*` variables only.
5. **Git Hygiene & Config:** `.env.local` must be in `.gitignore`. Provide `.env.example` with placeholder values.
6. **Clean Architecture:** Keep code clean and organized:
   - `src/components/`
   - `src/pages/`
   - `src/layouts/`
   - `src/data/`
   - `src/context/`
   - `src/lib/`
   - `src/assets/`
7. **Task Wrap-up:** After finishing each task, summarize what you did and list anything you were unsure about.
