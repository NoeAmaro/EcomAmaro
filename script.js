document.addEventListener('DOMContentLoaded', function() {
    const quantities = document.querySelectorAll('.quantity');
    const grandTotal = document.getElementById('grand-total');
    const itemTotals = document.querySelectorAll('.item-total');
    
    quantities.forEach((quantity, index) => {
        quantity.addEventListener('change', function() {
            const price = parseFloat(quantity.closest('tr').querySelector('td:nth-child(3)').innerText.replace('$', ''));
            const total = price * quantity.value;
            itemTotals[index].innerText = `$${total.toFixed(2)}`;
            updateGrandTotal();
        });
    });

    function updateGrandTotal() {
        let total = 0;
        itemTotals.forEach(item => {
            total += parseFloat(item.innerText.replace('$', ''));
        });
        grandTotal.innerText = `$${total.toFixed(2)}`;
    }
});
