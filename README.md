# Chef AI

A React-based web application that leverages Hugging Face's AI models to provide intelligent culinary assistance. The application offers recipe suggestions, modifications, and real-time cooking guidance through an interactive interface.

## Core Features

- Dynamic recipe generation based on available ingredients
- Recipe modification for dietary restrictions
- Real-time cooking assistance
- Interactive recipe exploration
- Step-by-step cooking guidance

## Tech Stack

- React 19 with TypeScript
- Vite for build and development
- Hugging Face Inference API
- React Markdown for content rendering
- Modern CSS for styling

## Development Setup

### Prerequisites

- Node.js v18+
- npm or yarn
- Hugging Face API key

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Eihab4/chef-recipe-app.git
cd chef-recipe-app
```

2. Install dependencies:

```bash
npm install
```

3. Configure environment:
   Create a `.env` file in the root directory:

```env
VITE_API_KEY=your_huggingface_api_key
```

To obtain your Hugging Face API key:

1. Create an account at [Hugging Face](https://huggingface.co/)
2. Navigate to Settings > Access Tokens
3. Generate a new token with appropriate permissions

4. Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Building for Production

```bash
npm run build
```

The production build will be available in the `dist` directory.

## Project Structure

```
chef-recipe-app/
├── src/              # Source files
├── public/           # Static assets
├── node_modules/     # Dependencies
├── .env             # Environment variables
├── package.json     # Project configuration
└── tsconfig.json    # TypeScript configuration
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Implement your changes
4. Submit a pull request
