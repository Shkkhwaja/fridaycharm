import { useCallback, useEffect, useState } from "react";
import useRazorpay from "react-razorpay";
import img from "../../Images/Header_img/logo.webp";
import { useCart } from "react-use-cart";

const CheckOut = () => {
  const [Razorpay, isLoaded] = useRazorpay();
  const [orderId, setOrderId] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const { cartTotal } = useCart(); // Assuming you need cartTotal for amount

  // Function to fetch or generate an order ID
  useEffect(() => {
    const fetchOrder = async () => {
      try {
        setLoading(true);

        // Simulate order creation or fetch from backend (replace with actual logic)
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Example: Generate a random order ID for demo purposes
        const demoOrderId = `order_${Math.floor(Math.random() * 1000000)}`;
        setOrderId(demoOrderId);
      } catch (error) {
        console.error("Error fetching order:", error);
        // Handle error scenario
      } finally {
        setLoading(false);
      }
    };

    if (isLoaded && !orderId && !isLoading) {
      fetchOrder();
    }
  }, [isLoaded, orderId, isLoading]);

  // Payment handler using Razorpay
  const handlePayment = useCallback(() => {
    if (!Razorpay || !orderId) {
      console.error("Razorpay or Order ID not fetched yet");
      return;
    }

    const options = {
      key: "rzp_test_s2VG2G2Hwc0Qd6", // Replace with your actual Test API Key
      amount: cartTotal * 100, // Amount in paise (hence multiplying by 100)
      currency: "INR",
      name: "Acme Corp",
      description: "Test Transaction",
      image: img,
      order_id: orderId,
      handler: (response) => {
        console.log("Payment successful", response);
        // Handle payment success (e.g., updating the backend or notifying the user)
      },
      prefill: {
        name: "Khwaja Shaikh",
        email: "khwajashaikh703@gmail.com",
        contact: "7039551617",
      },
      notes: {
        address: "Sion 90 Feet Road, Mumbai",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzpay = new Razorpay(options);
    rzpay.on("payment.failed", (response) => {
      console.error("Payment failed", response.error);
      // Handle payment failure (e.g., showing a message to the user)
    });

    rzpay.open();
  }, [Razorpay, orderId, cartTotal]);

  return (
    <div className="App">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <button onClick={handlePayment} disabled={!isLoaded || !orderId}>
          Proceed to Pay
        </button>
      )}
    </div>
  );
};

export default CheckOut;
