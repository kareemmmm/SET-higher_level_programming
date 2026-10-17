document.addEventListener('DOMContentLoaded', () => {
    let items = ['Item'];
    const ul = document.querySelector('ul.my_list');

    function render() {
        ul.innerHTML = '';
        items.forEach(itemText => {
            const li = document.createElement('li');
            li.textContent = itemText;
            ul.appendChild(li);
        });
    }

    document.getElementById('add_item').addEventListener('click', () => {
        items.push('Item');
        render();
    });

    document.getElementById('remove_item').addEventListener('click', () => {
        if (items.length > 0) {
            items.pop();
            render();
        }
    });

    document.getElementById('clear_list').addEventListener('click', () => {
        items = [];
        render();
    });
});
