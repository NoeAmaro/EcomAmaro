// Your Stripe publishable key
const stripe = Stripe('tu_clave_publica_de_stripe');

const elements = stripe.elements();
const cardElement = elements.create('card', {
    style: {
        base: {
            // Estilos básicos para el elemento de la tarjeta
        }
    }
});
cardElement.mount('#card-element');

const cardExpiry = elements.create('cardExpiry');
cardExpiry.mount('#card-expiry');

const cardCvc = elements.create('cardCvc');
cardCvc.mount('#card-cvc');

const form = document.getElementById('payment-form');
form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: {
            element: cardElement,
            billing_details: {
                name: 'Nombre del titular de la tarjeta' // Agregar nombre si es necesario
            }
        }
    });

    if (error) {
        const errorElement = document.getElementById('card-errors');
        errorElement.textContent = error.message;
    } else {
        // Enviar paymentMethod.id al servidor para procesar el pago
        console.log(paymentMethod.id);
    }
});