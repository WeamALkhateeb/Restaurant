let order = [];
let total = 0;
// search bar function
/*
document.addEventListener('DOMContentLoaded', function() {
    //const searchInput = document.getElementById('search');
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
*/
// add order to the list
function addToOrder(name, price) {
    order.push({ name, price });
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

document.getElementById('showFormBtn').addEventListener('click', function () {
    document.getElementById('formContainer').classList.remove('hidden');
});
document.getElementById('showFormBtn').addEventListener('click', function () {
    document.getElementById('formContainer').classList.add('flexed');
});

document.getElementById('orders').addEventListener('click', function () {
    document.getElementById('formContainer').classList.remove('hidden');
});
document.getElementById('orders').addEventListener('click', function () {
    document.getElementById('formContainer').classList.add('flexed');
});

document.getElementById('cancelBtn').addEventListener('click', function () {
    document.getElementById('formContainer').classList.add('hidden');
});
document.getElementById('cancelBtn').addEventListener('click', function () {
    document.getElementById('formContainer').classList.remove('flexed');
});

// Optional: Handle form submission
document.getElementById('orderForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission
    document.getElementById('formContainer').classList.add('hidden'); // Hide the form after submission
});
function show_pup(){
    document.getElementById('pup').classList.add('open');
        }
        function hide_pup(){
    document.getElementById('pup').classList.remove('open');
        }
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



// get a random food
async function getRandomFood() {
    // Making an API call (request) 
    // and getting the response back 
    const api_url = "https://www.themealdb.com/api/json/v1/1/random.php";
    const response = await fetch(api_url);
    // Parsing it to JSON format 
    const data = await response.json();
    //console.log(data.meals); 
    let image = data.meals[0].strMealThumb;
    let hidden = document.getElementById("hiddenRecommended");
    hidden.classList.remove('hidden');
    let title = document.getElementById("titleRecommended");
    title.innerHTML = data.meals[0].strMeal;
    let text = document.getElementById("textRecommended");
    text.innerHTML = data.meals[0].strTags;
    let imageDiv = document.getElementById("imageRecommended");
    imageDiv.setAttribute("src", image);
}

document.getElementById('recomended').addEventListener('click', getRandomFood);

// search foodd by first character
async function searchAllFoodByFirstChar(first) {
    url = "https://www.themealdb.com/api/json/v1/1/search.php?f=" + first;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    if (data.meals != null && data.meals != "no data found") {

        let listOfImage = data.meals;
        let img_div = document.getElementById("searchByFirstChar");
        img_div.removeChild(img_div.lastChild);
        while (img_div.lastElementChild) {
            img_div.removeChild(img_div.lastChild);
        }
        for (let i = 0; i < listOfImage.length; i++) {

            let img = document.createElement("img");
            let div = document.createElement("div");
            let title = document.createElement("h3");
            let descriotion = document.createElement("p");
            let div2 = document.createElement("div");
            let desc2 = document.createElement("p");
            let button = document.createElement("button");
            let il = document.createElement("i");
            img.src = listOfImage[i].strMealThumb;
            title.innerHTML = data.meals[i].strMeal;
            descriotion.innerHTML = data.meals[0].strTags;
            div.setAttribute("class", "card flex flex-col  col-span-1 p-5");
            div2.setAttribute("class", "flex mt-2 justify-between");
            desc2.setAttribute("class", "p1");
            desc2.innerHTML = "price: 10$";
            il.setAttribute("class", "fa-solid fa-plus");
            button.addEventListener("click", addToOrder('Ceaser Salad', 10.00));
            button.append(il);
            div2.append(desc2);
            div2.append(button);
            div.append(img);
            div.append(title);
            div.append(descriotion);
            div.append(div2);
            img_div.append(div);
        }
        let deleteDiv = document.getElementById("divl");
        let deleteDiv1 = document.getElementById("div2");
        let deleteDiv2 = document.getElementById("div3");
        let deleteDiv3 = document.getElementById("div4");
        let deleteDiv4 = document.getElementById("div5");
        let deleteDiv5 = document.getElementById("div6");
        let deleteDiv6 = document.getElementById("div7");
        while (deleteDiv.lastElementChild) {
            deleteDiv.removeChild(deleteDiv.lastChild);
        }
        while (deleteDiv1.lastElementChild) {
            deleteDiv1.removeChild(deleteDiv1.lastChild);
        }
        while (deleteDiv2.lastElementChild) {
            deleteDiv2.removeChild(deleteDiv2.lastChild);
        }
        while (deleteDiv3.lastElementChild) {
            deleteDiv3.removeChild(deleteDiv3.lastChild);
        }
        while (deleteDiv4.lastElementChild) {
            deleteDiv4.removeChild(deleteDiv4.lastChild);
        }
        while (deleteDiv5.lastElementChild) {
            deleteDiv5.removeChild(deleteDiv5.lastChild);
        }
        while (deleteDiv6.lastElementChild) {
            deleteDiv6.removeChild(deleteDiv6.lastChild);
        }
    }
}


// search food by name
async function searchFoodByName(name) {
    url = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + name;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    if (data.meals != null) {
        let hidden = document.getElementById("searchhidden");
        hidden.classList.remove('hidden');
        let image = data.meals[0].strMealThumb;
        let img = document.getElementById('searchImg');
        img.setAttribute('src', image);
        let title = document.getElementById("searchTitle");
        title.innerHTML = data.meals[0].strMeal;
        let desc = document.getElementById("searchText");
        desc.innerHTML = data.meals[0].strTags;
    }
}

async function checkSelect() {
    try {
        if (document.getElementById('searchByApi').value == "searchByName") {
            if ((document.getElementById("search").value) != "") {
                searchFoodByName(document.getElementById("search").value);
                console.log(document.getElementById("search").value);
            }
        }
        else if (document.getElementById('searchByApi').value == "searchByChar") {
            searchAllFoodByFirstChar(document.getElementById("search").value);
            console.log("char")
        }
    }
    catch {
        console.log("erorr");
    }
}

document.getElementById('search').addEventListener('input', checkSelect);

// get all category
async function getAllCategory() {
    url = "https://www.themealdb.com/api/json/v1/1/categories.php";
    const response = await fetch(url);
    const data = await response.json();
    //console.log(data.categories); 
    let listOfImage = data.categories;
    for (let i = 0; i < listOfImage.length; i++) {
        let title = document.createElement("button");
        title.innerHTML = listOfImage[i].strCategory;
        let categoryDiv = document.getElementById("cate");
        categoryDiv.append(title);
        title.setAttribute("class", "buttons");
    }
}

getAllCategory();











