# Angular 19 i18n Application

A modern Angular 19 application demonstrating internationalization (i18n) capabilities using Transloco library.

## Features

- 🌍 **Internationalization**: Support for English and Spanish languages
- 🔄 **Language Switching**: Dynamic language switching with real-time updates
- 🎨 **Modern UI**: Clean and responsive design with gradient backgrounds
- 📱 **Responsive Design**: Works on desktop and mobile devices
- 🚀 **Angular 19**: Built with the latest Angular version
- 📦 **Standalone Components**: Uses Angular's modern standalone component architecture

## Technologies Used

- Angular 19.2.0
- Transloco (i18n library)
- SCSS for styling
- TypeScript

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Angular19-i18n
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:4200`

### Available Scripts

- `npm start` - Start the development server
- `npm run build` - Build the application for production
- `npm run watch` - Build the application in watch mode
- `npm test` - Run unit tests

## Project Structure

```
src/
├── app/
│   ├── customer/          # Customer component
│   ├── product/           # Product component
│   ├── app.component.*    # Main app component
│   ├── app.config.ts      # Application configuration
│   ├── app.routes.ts      # Routing configuration
│   └── transloco-loader.ts # Transloco HTTP loader
├── assets/
│   └── i18n/             # Translation files
│       ├── en.json       # English translations
│       └── es.json       # Spanish translations
└── locale/               # Angular i18n locale files
    ├── messages.xlf      # English XLF file
    └── messages.es.xlf   # Spanish XLF file
```

## Internationalization

This application uses two approaches for internationalization:

1. **Transloco Library**: For dynamic content and runtime language switching
2. **Angular i18n**: For static content extraction and build-time localization

### Translation Files

The application includes translation files for:
- **English** (`en.json`): Default language
- **Spanish** (`es.json`): Secondary language

### Language Switching

Users can switch between languages using the language switcher buttons in the header. The application will:
- Update all translated content immediately
- Maintain the selected language during navigation
- Provide visual feedback for the active language

## Features

### Main Application
- Welcome header with greeting messages
- Language switcher with English/Spanish options
- Navigation menu with translated labels
- Responsive design with modern styling

### Customer Management
- Customer information display
- Clean, professional interface

### Product Management
- Product information display
- Consistent styling with the main application

## Styling

The application uses SCSS with:
- Modern gradient backgrounds
- Smooth transitions and hover effects
- Responsive design principles
- Clean typography and spacing

## Build and Deployment

### Development Build
```bash
npm run build
```

### Production Build
```bash
npm run build --configuration production
```

The built application will be available in the `dist/angular19-i18n` directory.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
