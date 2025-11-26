# Monthly Seminar Series Website

A modern, responsive web application for managing and showcasing monthly seminars with Zoom integration and conference details.

## Features

- 🎯 Hero section with background photo and navigation
- 📅 Upcoming seminar details with countdown timer
- 👥 Speaker profiles with circular portraits
- 📚 Past conference brochures gallery
- 🎨 Cohesive design system (navy blue, gold accents)
- 📱 Fully responsive mobile design
- ⏱️ Real-time countdown timer
- 💬 FAQ section
- 🗺️ Venue information

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS 4** - Styling
- **TypeScript** - Type safety
- **Lucide React** - Icons
- **Motion** - Animations

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone <your-repo-url>
cd monthly-seminar-webpage
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production

\`\`\`bash
npm run build
\`\`\`

The built files will be in the `dist` directory.

### Preview Production Build

\`\`\`bash
npm run preview
\`\`\`

## Deploying to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
\`\`\`bash
npm i -g vercel
\`\`\`

2. Deploy:
\`\`\`bash
vercel
\`\`\`

### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your repository
5. Vercel will automatically detect the settings from `vercel.json`
6. Click "Deploy"

### Option 3: Deploy via Git Integration

1. Connect your repository to Vercel
2. Every push to your main branch will automatically deploy
3. Pull requests will create preview deployments

## Project Structure

\`\`\`
├── components/           # React components
│   ├── ui/              # Reusable UI components
│   ├── Hero.tsx         # Hero section
│   ├── Navigation.tsx   # Navigation bar
│   ├── NextSeminar.tsx  # Upcoming seminar section
│   ├── SeminarDetails.tsx
│   ├── PastConferences.tsx
│   └── ...
├── styles/
│   └── globals.css      # Global styles and design tokens
├── App.tsx              # Main app component
├── main.tsx             # Entry point
├── index.html           # HTML template
├── vite.config.ts       # Vite configuration
├── vercel.json          # Vercel deployment config
└── package.json         # Dependencies

\`\`\`

## Customization

### Colors

Edit the design tokens in `/styles/globals.css`:
- `--primary-navy`: Main brand color
- `--secondary-gold`: Accent color
- `--neutral-*`: Gray scale

### Content

Update seminar details, speakers, and other content in the respective component files in the `/components` directory.

## License

MIT

## Support

For issues or questions, please open an issue on GitHub.
