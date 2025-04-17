# Chef AI App

A modern web application that leverages AI to provide culinary assistance and recipe recommendations. Built with React, TypeScript, and integrated with Hugging Face AI models.

## Features

- AI-powered recipe suggestions and modifications
- Interactive chat interface for culinary queries
- Real-time recipe generation and adaptation
- Modern, responsive UI design
- Type-safe development with TypeScript

## Tech Stack

- **Frontend**: React 19, TypeScript
- **Build Tool**: Vite
- **AI Integration**:
  - Hugging Face Inference API
- **Styling**: Modern CSS
- **Markdown Support**: React Markdown

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- API key for Hugging Face

## Getting Started

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd chef-claude-app
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory with the following variable:

```env
VITE_HUGGINGFACE_API_KEY=your_huggingface_api_key
```

### 4. Obtaining API Key

#### Hugging Face API Key

1. Go to [Hugging Face](https://huggingface.co/)
2. Create an account or log in
3. Click on your profile picture and select "Settings"
4. Navigate to "Access Tokens"
5. Create a new token with appropriate permissions
6. Copy the token and paste it in your `.env` file

### 5. Running the Development Server

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

## Building for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

## Project Structure

```
chef-claude-app/
├── src/              # Source files
├── public/           # Static assets
├── node_modules/     # Dependencies
├── .env             # Environment variables
├── package.json     # Project configuration
└── tsconfig.json    # TypeScript configuration
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please open an issue in the GitHub repository or contact the maintainers.

## Acknowledgments

- Hugging Face for their inference API
- The React and TypeScript communities
