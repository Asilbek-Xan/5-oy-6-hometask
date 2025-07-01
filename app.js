document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const user = {
        imageUrl: formData.get('avatar'),
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        age: formData.get('age'),
        from: formData.get('from'),
        job: formData.get('job'),
        gender: formData.get('gender')
    };
    
    createProfileCard(user);
    this.reset();
});

function createProfileCard(user) {
    const card = document.createElement('div');
    card.className = 'profile-card';
    
    card.innerHTML = `
        <img class="profile-image" src="${user.imageUrl || 'https://via.placeholder.com/120'}" 
             onerror="this.src='https://via.placeholder.com/120'">
        <div class="profile-info">
            <h2 class="profile-name">${user.firstName} ${user.lastName}<span class="profile-age">, ${user.age}</span></h2>
            <p class="profile-detail"><strong>From:</strong> ${user.from}</p>
            <p class="profile-detail"><strong>Job:</strong> ${user.job}</p>
            <p class="profile-gender">Gender: ${user.gender}</p>
        </div>
    `;
    
    document.getElementById('profilesContainer').prepend(card);
}