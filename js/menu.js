let order = [];
let total = 0;
// search bar function
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');
    const menuItems = document.querySelectorAll('.menu-item');

    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.trim().toLowerCase();

        menuItems.forEach(item => {
            const dishName = item.querySelector('h3').childNodes[0].nodeValue.trim().toLowerCase();
            const isVisible = dishName.includes(searchTerm);
            item.style.display = isVisible ? '' : 'none';
        });
    });
});

// add order to the list
function addToOrder(name, price) {
order.push({name, price});
total += price;
updateOrderDisplay();
}

// refresh orders display
function updateOrderDisplay() {
const orderItems = document.getElementById('order-items');
orderItems.innerHTML = order.map(item => `
    <div class="order-item">
        ${item.name} - ${item.price} $
        <button onclick="removeItem(${order.indexOf(item)})">×</button>
    </div>
`).join('');
document.getElementById('total').textContent = total;
}

// delet elemant form the list
function removeItem(index) {
total -= order[index].price;
order.splice(index, 1);
updateOrderDisplay();
}