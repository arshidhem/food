let order = [];
let totalAmount = 0;

function addToOrder(name, price) {
    order.push({ name: name, price: price });
    updateOrderSummary();
}

function updateOrderSummary() {
    const orderSummary = document.getElementById('order-summary');
    orderSummary.textContent = ''; 

    totalAmount = 0;

    order.forEach((item, index) => {
        const orderItem = document.createElement('div');
        orderItem.classList.add('order-item');
        orderItem.innerHTML = `
            <span>${item.name} - ₹${item.price}</span>
            <button  class="cancel-button" onclick="removeFromOrder(${index})">Remove</button>
        `;
        orderSummary.appendChild(orderItem);

        totalAmount += item.price;
    });

    document.getElementById('total-amount').innerText = `Total: ₹${totalAmount}`;
}

function removeFromOrder(index) {
    order.splice(index, 1);
    updateOrderSummary();
}
function placeOrder() {
    if (order.length === 0) {
        alert("Your order is empty!");
        return;
    }
    const orderSummary = order.map(item => item.name).join(', ');
    alert(`Your order: ${orderSummary}\nTotal: ₹${totalAmount}`);
    order = []; 
    totalAmount = 0;
    updateOrderSummary();

}
