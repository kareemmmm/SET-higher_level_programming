async function fetchCharacter() {
    try {
        const response = await fetch('https://swapi-api.alx-tools.com/api/people/5/?format=json');
        if (!response.ok) {
            throw new Error('Failed to fetch character');
        }
        const data = await response.json();
        document.getElementById('character').textContent = data.name;
    } catch (error) {
        document.getElementById('character').textContent = 'Error fetching character';
    }
}

fetchCharacter();
