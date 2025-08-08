# TeamUp Video Platform

A minimalist, beautiful front-end website designed to showcase embedded Vimeo videos with a clean, professional aesthetic. The site serves as a video presentation platform that maintains the TeamUp brand identity while providing an elegant viewing experience.

## 🎯 Features

- **Video Library**: Browse all videos with thumbnail cards, categories, and filtering
- **Individual Watch Pages**: Dedicated pages for each video with unique URLs
- **Video Embedding System**: Clean, centered Vimeo video player that maintains aspect ratio
- **Brand-Consistent Design**: Complete adherence to TeamUp design system with proper typography, colors, and spacing
- **Responsive Layout**: Single-column, minimalist design that works across different screen sizes
- **Navigation Integration**: Seamless navigation between library, watch pages, and main platform
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
├── index.html          # Main landing page
├── library.html        # Video library page
├── watch.html          # Individual video watch page
├── styles.css          # TeamUp design system implementation
├── library.css         # Library page specific styles
├── watch.css           # Watch page specific styles
├── script.js           # Main page JavaScript
├── library.js          # Library page JavaScript
├── watch.js            # Watch page JavaScript
├── videos.json         # Video database and metadata
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

Videos are managed through the `videos.json` file. Each video entry includes:

```json
{
  "id": "1071247322",
  "title": "Introduction to TeamUp",
  "description": "Learn the basics of the TeamUp platform...",
  "duration": "5:32",
  "thumbnail": "https://i.vimeocdn.com/video/1071247322_640x360.jpg",
  "category": "Getting Started",
  "order": 1
}
```

### Adding New Videos

1. Add a new entry to `videos.json` in the `videos` array
2. Ensure the Vimeo video ID is correct
3. Add a thumbnail URL (Vimeo provides these automatically)
4. Categorize the video appropriately
5. Set the order for display sequence

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

### Phase 2: Video Library & Watch Pages ✅
- [x] Video library page with grid layout and filtering
- [x] Individual watch pages with unique URLs
- [x] Video metadata display (title, description, duration, category)
- [x] Navigation between library and watch pages
- [x] Video database structure (videos.json)
- [x] Category filtering system
- [x] Previous/Next video navigation
- [x] Breadcrumb navigation
- [x] Responsive video cards and layout

### Phase 3: Enhanced User Experience (Future)
- [ ] Smooth transitions and hover effects
- [ ] Loading states for video player
- [ ] Error handling for video embed failures
- [ ] Accessibility improvements
- [ ] Performance optimization

### Phase 4: Backend Integration (Future)
- [ ] Database schema for video link storage
- [ ] Admin interface for adding/editing video links
- [ ] Dynamic video loading from backend
- [ ] Video metadata management

## 🛠️ Customization

### Adding Multiple Videos

The platform now supports multiple videos through the `videos.json` file:

1. **Video Database**: Add new videos to `videos.json`
2. **Categories**: Organize videos by category for easy filtering
3. **Metadata**: Include titles, descriptions, durations, and thumbnails
4. **Ordering**: Control the display order of videos

### Styling Customization

All styling is done through CSS custom properties (variables) in the respective CSS files:
- `styles.css` - Main design system and shared styles
- `library.css` - Library page specific styles
- `watch.css` - Watch page specific styles

You can easily modify:
- Colors in the `:root` section
- Spacing values
- Typography settings
- Border radius values

## 🐛 Troubleshooting

### Video Not Loading
1. Check that the Vimeo video ID is correct in `videos.json`
2. Ensure the video is publicly accessible
3. Check browser console for JavaScript errors
4. Verify internet connection

### Library Page Issues
1. Ensure `videos.json` is properly formatted
2. Check that all video IDs are valid
3. Verify thumbnail URLs are accessible
4. Test category filtering functionality

### Watch Page Issues
1. Check URL parameters are correct (e.g., `watch.html?id=123`)
2. Verify video exists in `videos.json`
3. Test navigation between videos
4. Check browser console for errors

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
6. Test video library and watch page functionality

## 📞 Support

For questions or issues related to this video platform, please contact the TeamUp development team. 