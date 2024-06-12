
const mp = new MercadoPago('TEST-bff84af5-ae01-4ba2-8854-ac18749ce14d', {
  locale: "es-AR",
});

document.getElementById("checkout-btn").addEventListener("click", async () => {
  try {
      const orderData =  {
        title: document.querySelector(".carrito-card-name").innerText,
        quantity: 1,
        price: 7600000,
      };
      
      const response = await fetch("http://localhost:5050/create_preference", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
      });  
      
      const preference = await response.json();
      createCheckoutButton(preference.id);
  } catch (error) {
    alert("error :(");
  }
});

const createCheckoutButton = (preferenceId) => {
  const bricksBuilder = mp.bricks();
  const renderComponent = async () => {
    if (window.checkoutButton) window.checkoutButton.unmount();
    await bricksBuilder.create("wallet", "wallet_container", {
      initialization: {
        preferenceId: preferenceId,
      },
    });
  };

  renderComponent();
};