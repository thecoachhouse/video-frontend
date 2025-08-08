// Watch Page JavaScript

class VideoPlayer {
    constructor() {
        this.videos = [];
        this.currentVideo = null;
        this.currentVideoIndex = -1;
        this.init();
    }

    async init() {
        await this.loadVideos();
        this.setupEventListeners();
        this.loadVideoFromUrl();
    }

    async loadVideos() {
        try {
            const response = await fetch('videos.json');
            if (!response.ok) {
                throw new Error('Failed to load videos');
            }
            const data = await response.json();
            this.videos = data.videos;
        } catch (error) {
            console.error('Error loading videos:', error);
            this.showError('Failed to load video data. Please try again later.');
        }
    }

    setupEventListeners() {
        // Navigation buttons
        const prevButton = document.getElementById('prevButton');
        const nextButton = document.getElementById('nextButton');

        if (prevButton) {
            prevButton.addEventListener('click', () => this.navigateToPrevious());
        }
        if (nextButton) {
            nextButton.addEventListener('click', () => this.navigateToNext());
        }
    }

    loadVideoFromUrl() {
        const videoId = this.getVideoIdFromUrl();
        
        if (!videoId) {
            this.showError('No video ID provided. Please select a video from the library.');
            return;
        }

        const video = this.videos.find(v => v.id === videoId);
        if (!video) {
            this.showError('Video not found. Please check the URL and try again.');
            return;
        }

        this.currentVideo = video;
        this.currentVideoIndex = this.videos.findIndex(v => v.id === videoId);
        this.loadVideo(video);
        this.updateNavigation();
    }

    loadVideo(video) {
        // Update page title
        document.title = `${video.title} - TeamUp`;
        
        // Update video title
        const titleElement = document.getElementById('videoTitle');
        if (titleElement) {
            titleElement.textContent = video.title;
        }

        // Update video description
        const descriptionElement = document.getElementById('videoDescription');
        if (descriptionElement) {
            descriptionElement.textContent = video.description;
        }

        // Load video player
        this.loadVideoPlayer(video.id);
    }

    loadVideoPlayer(videoId) {
        const videoWrapper = document.querySelector('.video-wrapper');
        
        if (!videoWrapper) {
            console.error('Video wrapper not found');
            return;
        }

        // Clear existing content (iframe or placeholder)
        videoWrapper.innerHTML = '';

        // Create Vimeo embed
        const iframe = document.createElement('iframe');
        iframe.src = `https://player.vimeo.com/video/${videoId}?autoplay=0&color=075f74&title=0&byline=0&portrait=0&responsive=1`;
        iframe.width = '100%';
        iframe.height = '100%';
        iframe.frameBorder = '0';
        iframe.allow = 'autoplay; fullscreen; picture-in-picture';
        iframe.allowFullscreen = true;
        iframe.style.borderRadius = 'var(--border-radius-lg)';
        iframe.style.position = 'absolute';
        iframe.style.top = '0';
        iframe.style.left = '0';

        // Show loading state first
        const placeholder = document.createElement('div');
        placeholder.className = 'video-placeholder';
        placeholder.innerHTML = `
            <div class="placeholder-content">
                <div class="loading-spinner"></div>
                <p>Loading video...</p>
            </div>
        `;
        
        videoWrapper.appendChild(placeholder);

        // Replace placeholder with iframe after a brief delay for UX
        setTimeout(() => {
            videoWrapper.innerHTML = '';
            videoWrapper.appendChild(iframe);
        }, 500);
    }

    navigateToPrevious() {
        if (this.currentVideoIndex > 0) {
            const prevVideo = this.videos[this.currentVideoIndex - 1];
            this.navigateToVideo(prevVideo.id);
        }
    }

    navigateToNext() {
        if (this.currentVideoIndex < this.videos.length - 1) {
            const nextVideo = this.videos[this.currentVideoIndex + 1];
            this.navigateToVideo(nextVideo.id);
        }
    }

    navigateToVideo(videoId) {
        // Update URL without page reload
        const newUrl = `watch.html?id=${videoId}`;
        window.history.pushState({ videoId }, '', newUrl);
        
        // Load the new video
        const video = this.videos.find(v => v.id === videoId);
        if (video) {
            this.currentVideo = video;
            this.currentVideoIndex = this.videos.findIndex(v => v.id === videoId);
            this.loadVideo(video);
            this.updateNavigation();
        }
    }

    updateNavigation() {
        const prevButton = document.getElementById('prevButton');
        const nextButton = document.getElementById('nextButton');

        if (prevButton) {
            prevButton.disabled = this.currentVideoIndex <= 0;
        }
        if (nextButton) {
            nextButton.disabled = this.currentVideoIndex >= this.videos.length - 1;
        }
    }

    getVideoIdFromUrl() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('id');
    }

    showError(message) {
        const videoWrapper = document.querySelector('.video-wrapper');
        if (videoWrapper) {
            videoWrapper.innerHTML = `
                <div class="error-content">
                    <div class="error-icon">⚠</div>
                    <p class="error-text">${message}</p>
                    <button class="retry-button" onclick="location.href='library.html'">Back to Library</button>
                </div>
            `;
        }

        // Update title and description
        const titleElement = document.getElementById('videoTitle');
        if (titleElement) {
            titleElement.textContent = 'Video Not Found';
        }

        const descriptionElement = document.getElementById('videoDescription');
        if (descriptionElement) {
            descriptionElement.textContent = message;
        }
    }
}

// Initialize video player when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new VideoPlayer();
});

// Handle browser back/forward buttons
window.addEventListener('popstate', (event) => {
    if (event.state && event.state.videoId) {
        // Reload the page to handle the new video ID
        window.location.reload();
    }
});

// Utility functions
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
