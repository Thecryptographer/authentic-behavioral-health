// ============================================
// ACT Values Cards - Complete 83-Card Deck
// Authentic Behavioral Health
// Extracted from original clinical PDF
// ============================================

const valueCards = [
    // Cards 1-10
    { id: 1, value: "ACCEPTANCE", description: "to be accepted as I am" },
    { id: 2, value: "ACCURACY", description: "to be accurate in my opinions and beliefs" },
    { id: 3, value: "ACHIEVEMENT", description: "to have important accomplishments" },
    { id: 4, value: "ADVENTURE", description: "to have new and exciting experiences" },
    { id: 5, value: "ATTRACTIVENESS", description: "to be physically attractive" },
    { id: 6, value: "AUTHORITY", description: "to be in charge of and responsible for others" },
    { id: 7, value: "AUTONOMY", description: "to be self-determined and independent" },
    { id: 8, value: "BEAUTY", description: "to appreciate beauty around me" },
    { id: 9, value: "CARING", description: "to take care of others" },
    { id: 10, value: "CHALLENGE", description: "to take on difficult tasks and problems" },

    // Cards 11-20
    { id: 11, value: "CHANGE", description: "to have a life full of change and variety" },
    { id: 12, value: "COMFORT", description: "to have a pleasant and comfortable life" },
    { id: 13, value: "COMMITMENT", description: "to make enduring, meaningful commitments" },
    { id: 14, value: "COMPASSION", description: "to feel and act on concern for others" },
    { id: 15, value: "CONTRIBUTION", description: "to make a lasting contribution in the world" },
    { id: 16, value: "COOPERATION", description: "to work collaboratively with others" },
    { id: 17, value: "COURTESY", description: "to be considerate and polite toward others" },
    { id: 18, value: "CREATIVITY", description: "to have new and original ideas" },
    { id: 19, value: "DEPENDABILITY", description: "to be reliable and trustworthy" },
    { id: 20, value: "DUTY", description: "to carry out my duties and obligations" },

    // Cards 21-30
    { id: 21, value: "ECOLOGY", description: "to live in harmony with the environment" },
    { id: 22, value: "EXCITEMENT", description: "to have a life full of thrills and stimulation" },
    { id: 23, value: "FAITHFULNESS", description: "to be loyal and true in relationships" },
    { id: 24, value: "FAME", description: "to be known and recognized" },
    { id: 25, value: "FAMILY", description: "to have a happy, loving family" },
    { id: 26, value: "FITNESS", description: "to be physically fit and strong" },
    { id: 27, value: "FLEXIBILITY", description: "to adjust to new circumstances easily" },
    { id: 28, value: "FORGIVENESS", description: "to be forgiving of others" },
    { id: 29, value: "FRIENDSHIP", description: "to have close, supportive friends" },
    { id: 30, value: "FUN", description: "to play and have fun" },

    // Cards 31-40
    { id: 31, value: "GENEROSITY", description: "to give what I have to others" },
    { id: 32, value: "GENUINENESS", description: "to act in a manner that is true to who I am" },
    { id: 33, value: "GOD'S WILL", description: "to seek and obey the will of God" },
    { id: 34, value: "GROWTH", description: "to keep changing and growing" },
    { id: 35, value: "HEALTH", description: "to be physically well and healthy" },
    { id: 36, value: "HELPFULNESS", description: "to be helpful to others" },
    { id: 37, value: "HONESTY", description: "to be honest and truthful" },
    { id: 38, value: "HOPE", description: "to maintain a positive and optimistic outlook" },
    { id: 39, value: "HUMILITY", description: "to be modest and unassuming" },
    { id: 40, value: "HUMOR", description: "to see the humorous side of myself and the world" },

    // Cards 41-50
    { id: 41, value: "INDEPENDENCE", description: "to be free from dependence on others" },
    { id: 42, value: "INDUSTRY", description: "to work hard and well at my life tasks" },
    { id: 43, value: "INNER PEACE", description: "to experience personal peace" },
    { id: 44, value: "INTIMACY", description: "to share my innermost experiences with others" },
    { id: 45, value: "JUSTICE", description: "to promote fair and equal treatment for all" },
    { id: 46, value: "KNOWLEDGE", description: "to learn and contribute valuable knowledge" },
    { id: 47, value: "LEISURE", description: "to take time to relax and enjoy" },
    { id: 48, value: "LOVED", description: "to be loved by those close to me" },
    { id: 49, value: "LOVING", description: "to give love to others" },
    { id: 50, value: "MASTERY", description: "to be competent in my everyday activities" },

    // Cards 51-60
    { id: 51, value: "MINDFULNESS", description: "to live conscious and mindful of the present moment" },
    { id: 52, value: "MODERATION", description: "to avoid excesses and find a middle ground" },
    { id: 53, value: "MONOGAMY", description: "to have one close, loving relationship" },
    { id: 54, value: "NON-CONFORMITY", description: "to question and challenge authority and norms" },
    { id: 55, value: "NURTURANCE", description: "to take care of and nurture others" },
    { id: 56, value: "OPENNESS", description: "to be open to new experiences, ideas, and options" },
    { id: 57, value: "ORDER", description: "to have a life that is well-ordered and organized" },
    { id: 58, value: "PASSION", description: "to have deep feelings about ideas, activities, or people" },
    { id: 59, value: "PLEASURE", description: "to feel good" },
    { id: 60, value: "POPULARITY", description: "to be well-liked by many people" },

    // Cards 61-70
    { id: 61, value: "POWER", description: "to have control over others" },
    { id: 62, value: "PURPOSE", description: "to have meaning and direction in my life" },
    { id: 63, value: "RATIONALITY", description: "to be guided by reason and logic" },
    { id: 64, value: "REALISM", description: "to see and act realistically and practically" },
    { id: 65, value: "RESPONSIBILITY", description: "to make and carry out responsible decisions" },
    { id: 66, value: "RISK", description: "to take risks and chances" },
    { id: 67, value: "ROMANCE", description: "to have intense, exciting love in my life" },
    { id: 68, value: "SAFETY", description: "to be safe and secure" },
    { id: 69, value: "SELF-ACCEPTANCE", description: "to accept myself as I am" },
    { id: 70, value: "SELF-CONTROL", description: "to be disciplined in my own actions" },

    // Cards 71-83
    { id: 71, value: "SELF-ESTEEM", description: "to feel good about myself" },
    { id: 72, value: "SELF-KNOWLEDGE", description: "to have a deep and honest understanding of myself" },
    { id: 73, value: "SERVICE", description: "to be of service to others" },
    { id: 74, value: "SEXUALITY", description: "to have an active and satisfying sex life" },
    { id: 75, value: "SIMPLICITY", description: "to live life simply, with minimal needs" },
    { id: 76, value: "SOLITUDE", description: "to have time and space where I can be apart from others" },
    { id: 77, value: "SPIRITUALITY", description: "to grow and mature spiritually" },
    { id: 78, value: "STABILITY", description: "to have a life that stays fairly consistent" },
    { id: 79, value: "TOLERANCE", description: "to accept and respect those who differ from me" },
    { id: 80, value: "TRADITION", description: "to follow respected patterns of the past" },
    { id: 81, value: "VIRTUE", description: "to live a morally pure and excellent life" },
    { id: 82, value: "WEALTH", description: "to have plenty of money" },
    { id: 83, value: "WORLD PEACE", description: "to work to promote peace in the world" }
];

// Category buckets for sorting
const categories = [
    { id: "very-important", name: "Very Important to Me", icon: "🌟" },
    { id: "important", name: "Important to Me", icon: "✓" },
    { id: "somewhat-important", name: "Somewhat Important", icon: "○" },
    { id: "not-important", name: "Not Important to Me", icon: "✗" }
];

// ============================================
// State Management
// ============================================
let cardState = {
    unsorted: [],           // Cards still in the deck
    sorted: {               // Cards in each category
        "very-important": [],
        "important": [],
        "somewhat-important": [],
        "not-important": []
    },
    draggedCard: null,      // Currently dragged card
    touchClone: null        // Clone for touch dragging
};

// ============================================
// Utility Functions
// ============================================
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function updateProgress() {
    const total = valueCards.length;
    const sorted = total - cardState.unsorted.length;
    const progressEl = document.getElementById('progress-text');
    const progressBar = document.getElementById('progress-bar');
    const percentComplete = Math.round((sorted / total) * 100);

    if (progressEl) {
        progressEl.textContent = `${percentComplete}% complete`;
    }
    if (progressBar) {
        progressBar.style.width = `${percentComplete}%`;
    }

    // Show results when all cards are sorted
    if (sorted === total) {
        showResults();
    }
}

// ============================================
// Card Creation
// ============================================
function createCardElement(card, isDraggable = true) {
    const el = document.createElement('div');
    el.className = 'value-card';
    el.dataset.cardId = card.id;

    if (isDraggable) {
        el.draggable = true;
        el.addEventListener('dragstart', handleDragStart);
        el.addEventListener('dragend', handleDragEnd);

        // Touch events for mobile
        el.addEventListener('touchstart', handleTouchStart, { passive: false });
        el.addEventListener('touchmove', handleTouchMove, { passive: false });
        el.addEventListener('touchend', handleTouchEnd);
    }

    el.innerHTML = `
        <div class="value-card__content">
            <h3 class="value-card__title">${card.value}</h3>
            <p class="value-card__description">${card.description}</p>
        </div>
        <div class="value-card__branding">Authentic Behavioral Health</div>
    `;

    return el;
}

function createCategoryElement(category) {
    const el = document.createElement('div');
    el.className = 'category-bucket';
    el.id = `bucket-${category.id}`;
    el.dataset.categoryId = category.id;

    el.addEventListener('dragover', handleDragOver);
    el.addEventListener('dragenter', handleDragEnter);
    el.addEventListener('dragleave', handleDragLeave);
    el.addEventListener('drop', handleDrop);

    el.innerHTML = `
        <div class="category-bucket__header">
            <span class="category-bucket__icon">${category.icon}</span>
            <h4 class="category-bucket__title">${category.name}</h4>
            <span class="category-bucket__count">0</span>
        </div>
        <div class="category-bucket__cards"></div>
    `;

    return el;
}

// ============================================
// Drag & Drop - Desktop (HTML5 API)
// ============================================
function handleDragStart(e) {
    const cardId = parseInt(e.target.dataset.cardId);
    cardState.draggedCard = cardId;
    e.target.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', cardId);
}

function handleDragEnd(e) {
    e.target.classList.remove('dragging');
    cardState.draggedCard = null;

    // Remove highlight from all buckets
    document.querySelectorAll('.category-bucket').forEach(bucket => {
        bucket.classList.remove('drag-over');
    });
}

function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
}

function handleDragEnter(e) {
    e.preventDefault();
    e.currentTarget.classList.add('drag-over');
}

function handleDragLeave(e) {
    // Only remove if actually leaving the bucket (not entering a child)
    if (!e.currentTarget.contains(e.relatedTarget)) {
        e.currentTarget.classList.remove('drag-over');
    }
}

function handleDrop(e) {
    e.preventDefault();
    const bucket = e.currentTarget;
    bucket.classList.remove('drag-over');

    const cardId = parseInt(e.dataTransfer.getData('text/plain'));
    const categoryId = bucket.dataset.categoryId;

    moveCardToCategory(cardId, categoryId);
}

// ============================================
// Touch Events - Mobile
// ============================================
function handleTouchStart(e) {
    if (e.touches.length !== 1) return;

    const touch = e.touches[0];
    const card = e.currentTarget;
    const cardId = parseInt(card.dataset.cardId);

    cardState.draggedCard = cardId;

    // Create a clone for dragging
    const clone = card.cloneNode(true);
    clone.className = 'value-card touch-clone';
    clone.style.position = 'fixed';
    clone.style.left = `${touch.clientX - 75}px`;
    clone.style.top = `${touch.clientY - 50}px`;
    clone.style.width = '150px';
    clone.style.zIndex = '9999';
    clone.style.pointerEvents = 'none';
    clone.style.transform = 'rotate(3deg) scale(1.05)';
    clone.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';

    document.body.appendChild(clone);
    cardState.touchClone = clone;

    card.classList.add('dragging');
    e.preventDefault();
}

function handleTouchMove(e) {
    if (!cardState.touchClone) return;

    const touch = e.touches[0];
    cardState.touchClone.style.left = `${touch.clientX - 75}px`;
    cardState.touchClone.style.top = `${touch.clientY - 50}px`;

    // Highlight bucket if over one
    const elementBelow = document.elementFromPoint(touch.clientX, touch.clientY);
    const bucket = elementBelow?.closest('.category-bucket');

    document.querySelectorAll('.category-bucket').forEach(b => {
        b.classList.remove('drag-over');
    });

    if (bucket) {
        bucket.classList.add('drag-over');
    }

    e.preventDefault();
}

function handleTouchEnd(e) {
    if (!cardState.touchClone) return;

    const touch = e.changedTouches[0];
    const elementBelow = document.elementFromPoint(touch.clientX, touch.clientY);
    const bucket = elementBelow?.closest('.category-bucket');

    // Clean up clone
    cardState.touchClone.remove();
    cardState.touchClone = null;

    // Remove dragging class from original
    document.querySelectorAll('.value-card.dragging').forEach(card => {
        card.classList.remove('dragging');
    });

    // Remove highlights
    document.querySelectorAll('.category-bucket').forEach(b => {
        b.classList.remove('drag-over');
    });

    // If dropped on a bucket, move the card
    if (bucket && cardState.draggedCard) {
        const categoryId = bucket.dataset.categoryId;
        moveCardToCategory(cardState.draggedCard, categoryId);
    }

    cardState.draggedCard = null;
}

// ============================================
// Card Movement Logic
// ============================================
function moveCardToCategory(cardId, categoryId) {
    const card = valueCards.find(c => c.id === cardId);
    if (!card) return;

    // Remove from unsorted
    cardState.unsorted = cardState.unsorted.filter(c => c.id !== cardId);

    // Remove from any existing category
    Object.keys(cardState.sorted).forEach(cat => {
        cardState.sorted[cat] = cardState.sorted[cat].filter(c => c.id !== cardId);
    });

    // Add to new category
    cardState.sorted[categoryId].push(card);

    // Update UI
    renderDeck();
    renderBuckets();
    updateProgress();
}

// ============================================
// Rendering
// ============================================
function renderDeck() {
    const deckEl = document.getElementById('card-deck');
    if (!deckEl) return;

    deckEl.innerHTML = '';

    if (cardState.unsorted.length === 0) {
        deckEl.innerHTML = '<div class="deck-empty">All cards sorted! 🎉</div>';
        return;
    }

    // Show top card prominently, peek at next few
    const topCards = cardState.unsorted.slice(0, 3);
    topCards.forEach((card, index) => {
        const cardEl = createCardElement(card, index === 0);
        cardEl.style.transform = `translateY(${index * 4}px) rotate(${index * -1}deg)`;
        cardEl.style.zIndex = 10 - index;
        if (index > 0) {
            cardEl.classList.add('stacked');
        }
        deckEl.appendChild(cardEl);
    });

    // Show remaining count
    if (cardState.unsorted.length > 3) {
        const remaining = document.createElement('div');
        remaining.className = 'deck-remaining';
        remaining.textContent = `+${cardState.unsorted.length - 3} more`;
        deckEl.appendChild(remaining);
    }
}

function renderBuckets() {
    categories.forEach(category => {
        const bucketEl = document.getElementById(`bucket-${category.id}`);
        if (!bucketEl) return;

        const cardsContainer = bucketEl.querySelector('.category-bucket__cards');
        const countEl = bucketEl.querySelector('.category-bucket__count');

        const cards = cardState.sorted[category.id];

        if (countEl) {
            countEl.textContent = cards.length;
        }

        if (cardsContainer) {
            cardsContainer.innerHTML = '';
            cards.forEach(card => {
                const miniCard = document.createElement('div');
                miniCard.className = 'mini-card';
                miniCard.textContent = card.value;
                miniCard.title = card.description;
                cardsContainer.appendChild(miniCard);
            });
        }
    });
}

// ============================================
// Results
// ============================================
function showResults() {
    const resultsSection = document.getElementById('results-section');
    if (!resultsSection) return;

    resultsSection.classList.add('visible');

    // Generate results text
    let resultsText = "My Values Card Sort Results\n";
    resultsText += "============================\n\n";
    resultsText += `Date: ${new Date().toLocaleDateString()}\n\n`;

    categories.forEach(category => {
        const cards = cardState.sorted[category.id];
        resultsText += `${category.icon} ${category.name} (${cards.length})\n`;
        resultsText += "-".repeat(30) + "\n";
        cards.forEach(card => {
            resultsText += `• ${card.value}: ${card.description}\n`;
        });
        resultsText += "\n";
    });

    resultsText += "\n---\nAuthentic Behavioral Health\nDr. Lydia R. Malcolm, PhD\n";

    const resultsTextarea = document.getElementById('results-text');
    if (resultsTextarea) {
        resultsTextarea.value = resultsText;
    }
}

function copyResults() {
    const resultsTextarea = document.getElementById('results-text');
    if (resultsTextarea) {
        resultsTextarea.select();
        document.execCommand('copy');

        const btn = document.getElementById('copy-btn');
        if (btn) {
            const originalText = btn.textContent;
            btn.textContent = 'Copied!';
            setTimeout(() => {
                btn.textContent = originalText;
            }, 2000);
        }
    }
}

function resetSort() {
    if (!confirm('Are you sure you want to start over? This will reset all your sorted cards.')) {
        return;
    }

    // Reset state
    cardState.unsorted = shuffleArray([...valueCards]);
    cardState.sorted = {
        "very-important": [],
        "important": [],
        "somewhat-important": [],
        "not-important": []
    };

    // Hide results
    const resultsSection = document.getElementById('results-section');
    if (resultsSection) {
        resultsSection.classList.remove('visible');
    }

    // Re-render
    renderDeck();
    renderBuckets();
    updateProgress();
}

// ============================================
// Initialization
// ============================================
function initApp() {
    // Initialize card state with shuffled deck
    cardState.unsorted = shuffleArray([...valueCards]);

    // Render category buckets
    const bucketsContainer = document.getElementById('category-buckets');
    if (bucketsContainer) {
        categories.forEach(category => {
            bucketsContainer.appendChild(createCategoryElement(category));
        });
    }

    // Initial render
    renderDeck();
    updateProgress();

    // Set up button handlers
    const copyBtn = document.getElementById('copy-btn');
    if (copyBtn) {
        copyBtn.addEventListener('click', copyResults);
    }

    const resetBtn = document.getElementById('reset-btn');
    if (resetBtn) {
        resetBtn.addEventListener('click', resetSort);
    }

    console.log(`ACT Values Card Sort initialized with ${valueCards.length} cards`);
}

// Start when DOM is ready
document.addEventListener('DOMContentLoaded', initApp);
