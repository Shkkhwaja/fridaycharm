import { useCallback, useEffect, useState } from "react";
import useRazorpay from "react-razorpay";
import img from "../../Images/Header_img/logo.webp";
import { useCart } from "react-use-cart";

const CheckOut = () => {
  const [Razorpay, isLoaded] = useRazorpay();
  const [orderId, setOrderId] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const { cartTotal } = useCart(); // Assuming you need cartTotal for amount

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

  const handlePayment = useCallback(() => {
    try {
      if (!Razorpay || !orderId) {
        console.error("Razorpay or Order ID not fetched yet");
        return;
      }

      const options = {
        key: "rzp_test_s2VG2G2Hwc0Qd6", // Replace with your actual Test API Key
        amount: cartTotal * 100,
        currency: "INR",
        name: "Acme Corp",
        description: "Test Transaction",
        image: img,
        order_id: orderId,
        handler: (response) => {
          console.log(response);
          // Handle payment success
        },
        prefill: {
          name: "khwaja shaikh",
          email: "khwajashaikh703@gmail.com",
          contact: "7039551617",
        },
        notes: {
          address: "sion 90 feet road mumbai",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzpay = new Razorpay(options);
      rzpay.open();
    } catch (error) {
      console.error("Error processing payment:", error);
      // Handle error scenario
    }
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
