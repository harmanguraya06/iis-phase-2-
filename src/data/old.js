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
        image: null, // placeholder for image
        actions: ["View live feed", "Speak", "Dismiss", "Mark as incorrect"],
    },

    // unknown visitor
    {
        id: 2,
        type: "unknown",
        visitor: "Unknown",
        message: "Could not identify the visitor at your door",
        timestamp: "2026-06-01T11:00:00Z",
        confidence: null,
        reason: null,
        image: null, // placeholder for image
        actions: ["View live feed", "Speak", "Dismiss", "Mark as incorrect (add as known visitor)"],
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
        image: null, // placeholder for image
        actions: ["View live feed", "Speak", "Dismiss", "Mark as incorrect"],
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
        image: null, // placeholder for image
        actions: ["View live feed", "Speak", "Dismiss", "Mark as incorrect"],
    }
];