let followersData = null;
let followingsData = null;

// Event listener for followers file input
document.getElementById('followersFile').addEventListener('change', function(event) {
    const reader = new FileReader();
    reader.onload = function(e) {
        followersData = JSON.parse(e.target.result);
    };
    reader.readAsText(event.target.files[0]);
});

// Event listener for followings file input
document.getElementById('followingsFile').addEventListener('change', function(event) {
    const reader = new FileReader();
    reader.onload = function(e) {
        followingsData = JSON.parse(e.target.result);
    };
    reader.readAsText(event.target.files[0]);
});

// Function to compare followers and followings
function checkFollowers() {
    if (!followersData || !followingsData) {
        alert('Please select both followers and followings JSON files.');
        return;
    }

    // Extract followers' usernames
    const followersSet = new Set(followersData.map(follower => follower.string_list_data[0].value));

    // Extract followings' usernames and links
    const followingsList = followingsData.relationships_following.map(following => ({
        username: following.string_list_data[0].value,
        link: following.string_list_data[0].href
    }));

    // Find who you follow but they don't follow you back
    const notFollowingBack = followingsList.filter(user => !followersSet.has(user.username));

    // Display results
    const resultList = document.getElementById('result');
    resultList.innerHTML = ''; 
    notFollowingBack.forEach(user => {
        const li = document.createElement('li');
        
        const link = document.createElement('a');
        link.href = user.link;
        link.textContent = user.username;
        link.target = '_blank'; 
        link.classList.add('profile-link'); 

        li.appendChild(link);
        resultList.appendChild(li);
    });
}
