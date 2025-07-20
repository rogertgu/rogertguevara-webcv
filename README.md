# Rogert Guevara's Web CV

> I'm not going to lie to you: I'm neither a designer nor a programmer. This entire site was built by the magic of AI in less than 3 hours. Enjoy!

## About

This is my personal web CV and portfolio, built with React, Vite, and Tailwind CSS. It includes my professional experience, skills, and contact form (with real email sending via EmailJS).

## How to customize for another person

To use this template for someone else, edit the following files:

- **src/components/Hero.tsx**: Name, title, and about/summary.
- **src/components/About.tsx**: About text, specializations, certifications.
- **src/components/Experience.tsx**: Work experience (companies, roles, achievements, technologies).
- **src/components/Skills.tsx**: Skills categories, skill names, and levels.
- **src/components/Contact.tsx**: Contact info (email, LinkedIn, phone, location, etc.).

You can also update the profile picture and assets in `src/assets/` if needed.

## How to run locally

1. Clone the repository:
   ```bash
   git clone https://github.com/rogertgu/rogertguevara-webcv.git
   cd rogertguevara-webcv
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with your EmailJS credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Deployment

This site is deployed on GitHub Pages. To deploy:

```bash
npm run deploy
```

## Credits

- The base design of this site was made with [Lovable](https://lovable.so/).
