let order = [];
let total = 0;
// search bar function
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');
    const menuItems = document.querySelectorAll('.card'); 
    

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

      document.getElementById('showFormBtn').addEventListener('click', function() {
                document.getElementById('formContainer').classList.remove('hidden');
            });
            document.getElementById('showFormBtn').addEventListener('click', function() {
                document.getElementById('formContainer').classList.add('flexed');
            });

            document.getElementById('orders').addEventListener('click', function() {
                document.getElementById('formContainer').classList.remove('hidden');
            });
            document.getElementById('orders').addEventListener('click', function() {
                document.getElementById('formContainer').classList.add('flexed');
            });
            
            document.getElementById('cancelBtn').addEventListener('click', function() {
                document.getElementById('formContainer').classList.add('hidden');
            });
            document.getElementById('cancelBtn').addEventListener('click', function() {
                document.getElementById('formContainer').classList.remove('flexed');
            });
            
            // Optional: Handle form submission
            document.getElementById('orderForm').addEventListener('submit', function(event) {
                event.preventDefault(); // Prevent the default form submission
                alert('Form submitted!'); // You can replace this with your form handling logic
                document.getElementById('formContainer').classList.add('hidden'); // Hide the form after submission
            });

//             dragElement(document.getElementById("formContainer"));

// function dragElement(el) {
//     let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//     el.onmousedown = dragMouseDown;

//     function dragMouseDown(e) {
//         e = e || window.event;
//         e.preventDefault();
//         // الحصول على موضع الماوس عند الضغط
//         pos3 = e.clientX;
//         pos4 = e.clientY;
//         document.onmouseup = closeDragElement;
//         document.onmousemove = elementDrag;
//     }

//     function elementDrag(e) {
//         e = e || window.event;
//         e.preventDefault();
//         // حساب الموضع الجديد
//         pos1 = pos3 - e.clientX;
//         pos2 = pos4 - e.clientY;
//         pos3 = e.clientX;
//         pos4 = e.clientY;

//         // تحديث موضع التنبيه مع التحقق من الحدود
//         let newTop = el.offsetTop - pos2;
//         let newLeft = el.offsetLeft - pos1;

//         // الحصول على عرض وارتفاع الشاشة
//         const screenWidth = window.innerWidth;
//         const screenHeight = window.innerHeight;

//         // الحصول على عرض وارتفاع التنبيه
//         const alertWidth = el.offsetWidth;
//         const alertHeight = el.offsetHeight;

//         // التحقق من الحدود الأفقية
//         if (newLeft < 0) {
//             newLeft = 0;
//         } else if (newLeft + alertWidth > screenWidth) {
//             newLeft = screenWidth - alertWidth;
//         }

//         // التحقق من الحدود الرأسية
//         if (newTop < 0) {
//             newTop = 0;
//         } else if (newTop + alertHeight > screenHeight) {
//             newTop = screenHeight - alertHeight;
//         }

//         // el.style.top = newTop + "px";
//         el.style.left = newLeft + "px";
//     }

//     function closeDragElement() {
//         // إيقاف السحب عند الإفلات
//         document.onmouseup = null;
//         document.onmousemove = null;
//     }
// }