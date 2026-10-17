document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn_translate');
    const input = document.getElementById('language_code');

    async function fetchTranslation() {
        const langCode = input.value;
        if (!langCode) return;
        try {
            const response = await fetch(`https://hellosalut.stefanbohacek.dev/?lang=${langCode}`);
            if (!response.ok) {
                throw new Error('Failed to fetch translation');
            }
            const data = await response.json();
            document.getElementById('hello').textContent = data.hello;
        } catch (error) {
            document.getElementById('hello').textContent = 'Error fetching translation';
        }
    }

    btn.addEventListener('click', fetchTranslation);
    input.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            fetchTranslation();
        }
    });
});
