# TeamUp Video Platform

A minimalist, beautiful front-end website designed to showcase embedded Vimeo videos with a clean, professional aesthetic. The site serves as a video presentation platform that maintains the TeamUp brand identity while providing an elegant viewing experience.

## 🎯 Features

- **Video Embedding System**: Clean, centered Vimeo video player that maintains aspect ratio
- **Brand-Consistent Design**: Complete adherence to TeamUp design system with proper typography, colors, and spacing
- **Responsive Layout**: Single-column, minimalist design that works across different screen sizes
- **Navigation Integration**: "Back to Coaching.com" button for seamless return to main platform
- **Professional Presentation**: High-quality video display with proper spacing and visual hierarchy

## 🚀 Getting Started

### Prerequisites

- A modern web browser
- A local web server (for development)

### Installation

1. Clone or download the project files
2. Open the project directory in your code editor
3. Start a local web server in the project directory

### Quick Start

```bash
# Using Python (if installed)
python -m http.server 8000

# Using Node.js (if installed)
npx serve .

# Using PHP (if installed)
php -S localhost:8000
```

Then open your browser and navigate to `http://localhost:8000`

## 📁 Project Structure

```
video-frontend/
├── index.html          # Main HTML file
├── styles.css          # TeamUp design system implementation
├── script.js           # JavaScript functionality
├── brand.json          # TeamUp brand guidelines
├── README.md           # This file
└── scripts/
    └── prd.txt         # Product Requirements Document
```

## 🎨 Design System

The project implements the complete TeamUp design system as specified in `brand.json`:

### Colors
- **Background**: `#e6eff1` (Light blue-gray)
- **Text**: `#040335` (Dark blue)
- **Primary**: `#075f74` (Teal)
- **Secondary**: `#679485` (Sage green)
- **Accent Red**: `#ed4d35` (Coral red)
- **Accent Orange**: `#ee9a22` (Orange)
- **Accent Light**: `#d4eee5` (Light mint)

### Typography
- **Headings**: Montserrat (Bold, 24-32pt)
- **Subheadings**: Columbia-Serial (Bold, 16-20pt)
- **Body**: Avenir (Normal, 12-14pt)

## 🔧 Configuration

### Video Configuration

To change the default video, edit the `config` object in `script.js`:

```javascript
const config = {
    defaultVideoId: 'YOUR_VIMEO_VIDEO_ID', // Replace with actual Vimeo video ID
    embedParams: {
        autoplay: 0,
        color: '075f74', // TeamUp primary color
        title: 0,
        byline: 0,
        portrait: 0,
        responsive: 1
    }
};
```

### Vimeo Video ID

To get a Vimeo video ID:
1. Go to your Vimeo video
2. Copy the URL (e.g., `https://vimeo.com/123456789`)
3. The number at the end is your video ID (`123456789`)

## 📱 Responsive Design

The platform is fully responsive and optimized for:
- **Desktop**: 1200px+ (Full layout with generous spacing)
- **Tablet**: 768px-1199px (Adjusted spacing and typography)
- **Mobile**: 480px-767px (Compact layout with mobile-optimized elements)
- **Small Mobile**: <480px (Minimal layout for small screens)

## ♿ Accessibility

The platform includes several accessibility features:
- **Keyboard Navigation**: All interactive elements are keyboard accessible
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **High Contrast Mode**: Support for high contrast display preferences
- **Reduced Motion**: Respects user's motion preferences
- **Focus Indicators**: Clear focus states for all interactive elements

## 🔄 Development Phases

### Phase 1: MVP Foundation ✅
- [x] Basic HTML structure with proper semantic markup
- [x] CSS implementation of TeamUp design system
- [x] Responsive layout framework with centered video positioning
- [x] Hard-coded Vimeo embed with proper aspect ratio handling
- [x] "Back to Coaching.com" button with brand-consistent styling
- [x] Mobile-responsive design testing

### Phase 2: Enhanced User Experience (Future)
- [ ] Smooth transitions and hover effects
- [ ] Loading states for video player
- [ ] Error handling for video embed failures
- [ ] Accessibility improvements
- [ ] Performance optimization

### Phase 3: Backend Integration (Future)
- [ ] Database schema for video link storage
- [ ] Admin interface for adding/editing video links
- [ ] Dynamic video loading from backend
- [ ] Video metadata management

## 🛠️ Customization

### Adding Multiple Videos

To support multiple videos, you can:

1. **URL Parameters**: Modify the JavaScript to read video IDs from URL parameters
2. **Data Attributes**: Add video IDs as data attributes to HTML elements
3. **Configuration File**: Create a separate JSON file with video configurations

### Styling Customization

All styling is done through CSS custom properties (variables) in `styles.css`. You can easily modify:
- Colors in the `:root` section
- Spacing values
- Typography settings
- Border radius values

## 🐛 Troubleshooting

### Video Not Loading
1. Check that the Vimeo video ID is correct
2. Ensure the video is publicly accessible
3. Check browser console for JavaScript errors
4. Verify internet connection

### Styling Issues
1. Clear browser cache
2. Check that all CSS files are loading properly
3. Verify font loading in browser developer tools
4. Test in different browsers

### Responsive Issues
1. Test on actual devices, not just browser dev tools
2. Check viewport meta tag is present
3. Verify CSS media queries are working
4. Test with different screen orientations

## 📄 License

This project is part of the TeamUp platform and follows the same licensing terms.

## 🤝 Contributing

When contributing to this project:
1. Follow the existing code style and structure
2. Maintain brand consistency
3. Test across different devices and browsers
4. Update documentation as needed
5. Ensure accessibility standards are met

## 📞 Support

For questions or issues related to this video platform, please contact the TeamUp development team. 