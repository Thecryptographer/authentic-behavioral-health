// ============================================
// ACT Values Cards Data & Generator
// Authentic Behavioral Health
// ============================================

// All 59 Value Cards
const valueCards = [
    { value: "ACCEPTANCE", description: "to be accepted as I am" },
    { value: "ACCURACY", description: "to be accurate in my opinions and beliefs" },
    { value: "ACHIEVEMENT", description: "to have important accomplishments" },
    { value: "ADVENTURE", description: "to have new and exciting experiences" },
    { value: "ATTRACTIVENESS", description: "to be physically attractive" },
    { value: "AUTHORITY", description: "to be in charge of and responsible for others" },
    { value: "AUTONOMY", description: "to be self-determined and independent" },
    { value: "BEAUTY", description: "to appreciate beauty around me" },
    { value: "CARING", description: "to take care of others" },
    { value: "CHALLENGE", description: "to take on difficult tasks and problems" },
    { value: "CHANGE", description: "to have a life full of change and variety" },
    { value: "COMFORT", description: "to have a pleasant and comfortable life" },
    { value: "COMMITMENT", description: "to make enduring, meaningful commitments" },
    { value: "COMPASSION", description: "to feel and act on concern for others" },
    { value: "CONTRIBUTION", description: "to make a lasting contribution in the world" },
    { value: "COOPERATION", description: "to work collaboratively with others" },
    { value: "COURTESY", description: "to be considerate and polite toward others" },
    { value: "CREATIVITY", description: "to have new and original ideas" },
    { value: "DEPENDABILITY", description: "to be reliable and trustworthy" },
    { value: "DUTY", description: "to carry out my duties and obligations" },
    { value: "ECOLOGY", description: "to live in harmony with the environment" },
    { value: "EXCITEMENT", description: "to have a life full of thrills and stimulation" },
    { value: "FAITHFULNESS", description: "to be loyal and true in relationships" },
    { value: "FAME", description: "to be known and recognized" },
    { value: "FAMILY", description: "to have a happy, loving family" },
    { value: "FITNESS", description: "to be physically fit and strong" },
    { value: "FLEXIBILITY", description: "to adjust to new circumstances easily" },
    { value: "FORGIVENESS", description: "to be forgiving of others" },
    { value: "FRIENDSHIP", description: "to have close, supportive friends" },
    { value: "FUN", description: "to play and have fun" },
    { value: "GENEROSITY", description: "to give what I have to others" },
    { value: "GENUINENESS", description: "to act in a manner that is true to who I am" },
    { value: "GOD'S WILL", description: "to seek and obey the will of God" },
    { value: "GROWTH", description: "to keep changing and growing" },
    { value: "HEALTH", description: "to be physically well and healthy" },
    { value: "HELPFULNESS", description: "to be helpful to others" },
    { value: "HONESTY", description: "to be honest and truthful" },
    { value: "HOPE", description: "to maintain a positive and optimistic outlook" },
    { value: "HUMILITY", description: "to be modest and unassuming" },
    { value: "HUMOR", description: "to see the humorous side of myself and the world" },
    { value: "INDEPENDENCE", description: "to be free from dependence on others" },
    { value: "INDUSTRY", description: "to work hard and well at my life tasks" },
    { value: "INNER PEACE", description: "to experience personal peace" },
    { value: "INTIMACY", description: "to share my innermost experiences with others" },
    { value: "JUSTICE", description: "to promote fair and equal treatment for all" },
    { value: "KNOWLEDGE", description: "to learn and contribute valuable knowledge" },
    { value: "LEISURE", description: "to take time to relax and enjoy" },
    { value: "LOVED", description: "to be loved by those close to me" },
    { value: "LOVING", description: "to give love to others" },
    { value: "MASTERY", description: "to be competent in my everyday activities" },
    { value: "MINDFULNESS", description: "to live conscious and mindful of the present moment" },
    { value: "MODERATION", description: "to avoid excesses and find a middle ground" },
    { value: "MONOGAMY", description: "to have one close, loving relationship" },
    { value: "NON-CONFORMITY", description: "to question and challenge authority and norms" },
    { value: "NURTURANCE", description: "to take care of and nurture others" },
    { value: "OPENNESS", description: "to be open to new experiences, ideas, and options" },
    { value: "ORDER", description: "to have a life that is well-ordered and organized" },
    { value: "PASSION", description: "to have deep feelings about ideas, activities, or people" },
    { value: "PLEASURE", description: "to feel good" },
    { value: "POPULARITY", description: "to be well-liked by many people" },
    { value: "POWER", description: "to have control over others" },
    { value: "PURPOSE", description: "to have meaning and direction in my life" },
    { value: "RATIONALITY", description: "to be guided by reason and logic" },
    { value: "REALISM", description: "to see and act realistically and practically" },
    { value: "RESPONSIBILITY", description: "to make and carry out responsible decisions" },
    { value: "RISK", description: "to take risks and chances" },
    { value: "ROMANCE", description: "to have intense, exciting love in my life" },
    { value: "SAFETY", description: "to be safe and secure" },
    { value: "SELF-ACCEPTANCE", description: "to accept myself as I am" },
    { value: "SELF-CONTROL", description: "to be disciplined in my own actions" },
    { value: "SELF-ESTEEM", description: "to feel good about myself" },
    { value: "SELF-KNOWLEDGE", description: "to have a deep and honest understanding of myself" },
    { value: "SERVICE", description: "to be of service to others" },
    { value: "SEXUALITY", description: "to have an active and satisfying sex life" },
    { value: "SIMPLICITY", description: "to live life simply, with minimal needs" },
    { value: "SOLITUDE", description: "to have time and space where I can be apart from others" },
    { value: "SPIRITUALITY", description: "to grow and mature spiritually" },
    { value: "STABILITY", description: "to have a life that stays fairly consistent" },
    { value: "TOLERANCE", description: "to accept and respect those who differ from me" },
    { value: "TRADITION", description: "to follow respected patterns of the past" },
    { value: "VIRTUE", description: "to live a morally pure and excellent life" },
    { value: "WEALTH", description: "to have plenty of money" },
    { value: "WORLD PEACE", description: "to work to promote peace in the world" }
];

// Category Cards (sorting piles)
const categoryCards = [
    { value: "VERY IMPORTANT TO ME", description: "", type: "category" },
    { value: "IMPORTANT TO ME", description: "", type: "category" },
    { value: "LESS IMPORTANT TO ME", description: "", type: "category" },
    { value: "NOT IMPORTANT TO ME", description: "", type: "category" }
];

// Blank Cards for custom values
const blankCards = [
    { value: "OTHER VALUE", description: "", type: "blank" },
    { value: "OTHER VALUE", description: "", type: "blank" }
];

// SVG Leaf icon
const leafSVG = `
<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
</svg>
`;

// Create a single card element
function createCard(data) {
    const card = document.createElement('div');
    card.className = `card ${data.type || ''}`;
    
    card.innerHTML = `
        <div class="card-inner">
            <div class="card-value">${data.value}</div>
            ${data.type !== 'blank' 
                ? `<div class="card-description">${data.description}</div>`
                : `<div class="card-description"></div>`
            }
        </div>
        <div class="card-leaf">${leafSVG}</div>
        <div class="card-branding">Authentic Behavioral Health</div>
    `;
    
    return card;
}

// Generate all cards
function generateAllCards() {
    const container = document.getElementById('cards-container');
    container.innerHTML = '';
    
    // Add category cards first
    categoryCards.forEach(data => {
        container.appendChild(createCard(data));
    });
    
    // Add all value cards
    valueCards.forEach(data => {
        container.appendChild(createCard(data));
    });
    
    // Add blank cards at the end
    blankCards.forEach(data => {
        container.appendChild(createCard(data));
    });
    
    console.log(`Generated ${categoryCards.length + valueCards.length + blankCards.length} cards total`);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', generateAllCards);
