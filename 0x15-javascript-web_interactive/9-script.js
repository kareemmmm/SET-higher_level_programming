document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('https://hellosalut.stefanbohacek.dev/?lang=fr');
        if (!response.ok) {
            throw new Error('Failed to fetch translation');
        }
        const data = await response.json();
        document.getElementById('hello').textContent = data.hello;
    } catch (error) {
        document.getElementById('hello').textContent = 'Error fetching translation';
    }
});
