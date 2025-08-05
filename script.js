// TeamUp Video Platform JavaScript

// Global configuration
window.config = {
    // Example Vimeo video ID - replace with actual video IDs
    defaultVideoId: '1071247322', // Sample video for demonstration
    // Vimeo embed parameters
    embedParams: {
        autoplay: 0,
        color: '075f74', // TeamUp primary color
        title: 0,
        byline: 0,
        portrait: 0,
        responsive: 1
    }
};

document.addEventListener('DOMContentLoaded', function() {
    // Use the global config
    const config = window.config;

    // Initialize the video player
    function initVideoPlayer() {
        const videoWrapper = document.querySelector('.video-wrapper');
        const placeholder = document.querySelector('.video-placeholder');
        
        if (!videoWrapper || !placeholder) {
            console.error('Video elements not found');
            return;
        }

        // Create Vimeo embed
        function createVimeoEmbed(videoId) {
            const iframe = document.createElement('iframe');
            iframe.src = `https://player.vimeo.com/video/${videoId}?${new URLSearchParams(config.embedParams)}`;
            iframe.width = '100%';
            iframe.height = '100%';
            iframe.frameBorder = '0';
            iframe.allow = 'autoplay; fullscreen; picture-in-picture';
            iframe.allowFullscreen = true;
            iframe.style.borderRadius = 'var(--border-radius-lg)';
            iframe.style.position = 'absolute';
            iframe.style.top = '0';
            iframe.style.left = '0';
            
            return iframe;
        }

        // Replace placeholder with actual video
        function loadVideo(videoId = config.defaultVideoId) {
            try {
                const iframe = createVimeoEmbed(videoId);
                
                // Add loading state
                placeholder.innerHTML = `
                    <div class="loading-content">
                        <div class="loading-spinner"></div>
                        <p>Loading video...</p>
                    </div>
                `;
                
                // Replace placeholder with iframe after a brief delay for UX
                setTimeout(() => {
                    videoWrapper.replaceChild(iframe, placeholder);
                }, 500);
                
            } catch (error) {
                console.error('Error loading video:', error);
                showError('Failed to load video');
            }
        }

        // Show error message
        function showError(message) {
            placeholder.innerHTML = `
                <div class="error-content">
                    <div class="error-icon">⚠</div>
                    <p class="error-text">${message}</p>
                    <button class="retry-button" onclick="location.reload()">Retry</button>
                </div>
            `;
        }

        // For now, load the default video
        // In a real implementation, you would get the video ID from URL params or data attributes
        loadVideo();
    }

    // Initialize video player
    initVideoPlayer();

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add loading states for external links
    document.querySelectorAll('a[target="_blank"]').forEach(link => {
        link.addEventListener('click', function() {
            // Add a small delay to show the click was registered
            this.style.opacity = '0.7';
            setTimeout(() => {
                this.style.opacity = '1';
            }, 200);
        });
    });
});

// Utility functions for future use
const VideoUtils = {
    // Extract Vimeo video ID from URL
    extractVimeoId: function(url) {
        const regex = /(?:vimeo\.com\/|player\.vimeo\.com\/video\/)(\d+)/;
        const match = url.match(regex);
        return match ? match[1] : null;
    },

    // Validate Vimeo video ID
    isValidVimeoId: function(id) {
        return /^\d+$/.test(id) && id.length > 0;
    },

    // Generate embed URL with parameters
    generateEmbedUrl: function(videoId, params = {}) {
        const defaultParams = {
            autoplay: 0,
            color: '075f74',
            title: 0,
            byline: 0,
            portrait: 0,
            responsive: 1
        };
        
        const finalParams = { ...defaultParams, ...params };
        return `https://player.vimeo.com/video/${videoId}?${new URLSearchParams(finalParams)}`;
    }
};

// Export for potential module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = VideoUtils;
} 