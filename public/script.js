// Connect to the Socket.io server
const socket = io('http://yourserver.com');

// Create a new party
function createParty(partyName) {
    socket.emit('create-party', { name: partyName });
}

// Join an existing party
function joinParty(partyId) {
    socket.emit('join-party', { id: partyId });
}

// Synchronize movie playback
function syncMovie(action, data) {
    socket.emit('sync-movie', { action: action, data: data });
}

// Listen for movie synchronization events
socket.on('sync-movie', function(data) {
    // Handle the synchronization action, e.g., play, pause, seek
    if (data.action === 'play') {
        // Code to play the movie
    } else if (data.action === 'pause') {
        // Code to pause the movie
    } else if (data.action === 'seek') {
        // Code to seek the movie
    }
});

// Listen for party creation confirmation
socket.on('party-created', function(data) {
    console.log('Party created:', data);
});