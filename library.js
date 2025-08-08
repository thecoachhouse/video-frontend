// Library Page JavaScript

class VideoLibrary {
    constructor() {
        this.videos = [];
        this.filteredVideos = [];
        this.currentCategory = 'all';
        this.init();
    }

    async init() {
        await this.loadVideos();
        this.setupEventListeners();
        this.renderVideos();
    }

    async loadVideos() {
        try {
            const response = await fetch('videos.json');
            if (!response.ok) {
                throw new Error('Failed to load videos');
            }
            const data = await response.json();
            this.videos = data.videos;
            this.filteredVideos = [...this.videos];
        } catch (error) {
            console.error('Error loading videos:', error);
            this.showError('Failed to load videos. Please try again later.');
        }
    }

    setupEventListeners() {
        // Category filter buttons
        const categoryFilters = document.querySelectorAll('.category-filter');
        categoryFilters.forEach(filter => {
            filter.addEventListener('click', (e) => {
                this.handleCategoryFilter(e.target);
            });
        });

        // Video card clicks
        document.addEventListener('click', (e) => {
            const videoCard = e.target.closest('.video-card');
            if (videoCard) {
                const videoId = videoCard.dataset.videoId;
                this.navigateToVideo(videoId);
            }
        });
    }

    handleCategoryFilter(button) {
        // Update active state
        document.querySelectorAll('.category-filter').forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');

        // Filter videos
        const category = button.dataset.category;
        this.currentCategory = category;
        
        if (category === 'all') {
            this.filteredVideos = [...this.videos];
        } else {
            this.filteredVideos = this.videos.filter(video => video.category === category);
        }

        this.renderVideos();
    }

    renderVideos() {
        const grid = document.getElementById('videosGrid');
        
        if (this.filteredVideos.length === 0) {
            grid.innerHTML = `
                <div class="no-videos">
                    <p>No videos found in this category.</p>
                </div>
            `;
            return;
        }

        const videoCards = this.filteredVideos.map(video => this.createVideoCard(video)).join('');
        grid.innerHTML = videoCards;
    }

    createVideoCard(video) {
        return `
            <div class="video-card" data-video-id="${video.id}">
                <div class="video-card-thumbnail">
                    <img src="${video.thumbnail}" alt="${video.title}" loading="lazy">
                    <div class="video-card-play-button">▶</div>
                    <div class="video-card-duration">${video.duration}</div>
                </div>
                <div class="video-card-content">
                    <h3 class="video-card-title">${video.title}</h3>
                    <p class="video-card-description">${video.description}</p>
                    <span class="video-card-category">${video.category}</span>
                </div>
            </div>
        `;
    }

    navigateToVideo(videoId) {
        // Navigate to watch page with video ID
        window.location.href = `watch.html?id=${videoId}`;
    }

    showError(message) {
        const grid = document.getElementById('videosGrid');
        grid.innerHTML = `
            <div class="error-message">
                <div class="error-icon">⚠</div>
                <p>${message}</p>
                <button onclick="location.reload()" class="retry-button">Retry</button>
            </div>
        `;
    }
}

// Initialize library when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new VideoLibrary();
});

// Utility functions
const VideoUtils = {
    // Extract video ID from URL
    getVideoIdFromUrl: function() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('id');
    },

    // Validate video ID
    isValidVideoId: function(id) {
        return id && /^\d+$/.test(id);
    },

    // Format duration
    formatDuration: function(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    }
};
