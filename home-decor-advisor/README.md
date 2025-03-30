# Home Decor Advisor

A modern web application that provides AI-powered home decor advice and inspiration. The application uses Hugging Face's Stable Diffusion for generating decor images and Google's Gemini AI for providing decor advice.

## Features

- AI-generated decor images based on user queries
- AI-powered decor advice and tips
- Pre-built design inspiration gallery
- Dark mode support
- Responsive design for all devices
- Pinterest integration for more inspiration

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Hugging Face API key
- Google Gemini API key

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd home-decor-advisor
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your API keys:
```
REACT_APP_HUGGINGFACE_API_KEY=your_huggingface_api_key_here
REACT_APP_GEMINI_API_KEY=your_gemini_api_key_here
```

4. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`.

## Usage

1. Enter your desired decor style in the search bar (e.g., "modern living room", "boho bedroom")
2. Click "Get Decor Advice" to generate:
   - An AI-generated image of your desired decor style
   - Detailed advice and tips for achieving the look
3. Browse the inspiration gallery for pre-built design ideas
4. Click on any design card to view more inspiration on Pinterest
5. Toggle dark mode using the sun/moon icon in the header

## Technologies Used

- React
- TypeScript
- Hugging Face API (Stable Diffusion)
- Google Gemini AI
- CSS3
- Axios

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
