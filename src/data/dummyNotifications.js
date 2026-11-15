export const notifications = [
    // known visitor
    {
        id: 1,
        type: 'known',
        visitor: 'Gurman',
        message: 'Gurman is at your door',
        timestamp: '2023-06-01T10:00:00Z',
        confidence: 95,
        reason: null,
        image: "src/assets/gurman.jpg", 
        actions: ["Live feed", "Dismiss", "Mark as incorrect"],
    },

    // unknown visitor
    {
        id: 2,
        type: "unknown",
        visitor: "Unknown",
        message: "We do not know the visitor at your door",
        timestamp: "2026-06-01T11:00:00Z",
        confidence: null,
        reason: "The visitor is not in your known visitors list",
        image: "src/assets/unknown.jpg",
        actions: ["Live feed", "Dismiss", "Mark as incorrect", "Add as known visitor", "Urgent help"],
    },
    
    // incorrect identification
    {
        id: 3,
        type: "incorrect",
        visitor: "Diljot",
        message: "Diljot could be at your door",
        timestamp: "2026-06-01T12:00:00Z",
        confidence: 33,
        reason: "Our confidence is lower than usual",
        image: "src/assets/diljot.jpg", 
        actions: ["Live feed", "Dismiss", "Mark as incorrect", "Urgent help"],
    },
    
    // failed identification
    {
        id: 4,
        type: "failed",
        visitor: null,
        message: "We cannot identify the visitor at your door",
        timestamp: "2026-06-01T13:00:00Z",
        confidence: null,
        reason: "The face is obstructed or the image is not clear enough",
        image: "src/assets/failed.jpg", 
        actions: ["Live feed", "Dismiss", "Urgent help"],
    }
];