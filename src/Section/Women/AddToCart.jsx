import React, { useState, useEffect } from "react";
import { Button, Drawer } from "antd";
import imgMain from "../../Images/Header_img/Second/Adil.jpeg";
import { useCart } from "react-use-cart";
import {useNavigate} from "react-router-dom";


const AddToCard = ({ onClose }) => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  useEffect(() => {
    if (totalItems === 0) {
      setOpen(false);
      onClose();
    }
  }, [totalItems, onClose]);

  const handleClose = () => {
    onClose()
navigate('/login')


  };

  return (
    <div className="bg-black">
      <Drawer
        title={
          <div style={{ display: "flex", alignItems: "center" }}>
            <span
              style={{
                color: "white",
                fontSize: "25px",
                letterSpacing: "4px",
                textAlign: "left",
              }}
            >
              Cart
            </span>
            <span style={{ position: "absolute", right: "20px", top: "20px" }}>
              <span
                style={{ color: "white", fontSize: "25px", cursor: "pointer" }}
                onClick={onClose}
              >
                X
              </span>
            </span>
          </div>
        }
        onClose={handleClose}
        visible={open}
        style={{ backgroundColor: "black" }}
        footer={
          <div>
            <hr />
            
            <div className="my-4 text-white flex justify-between">
              <span className="text-[16px]">Subtotal:</span>
              <span className="text-[16px]">Rs. {cartTotal}</span>
            </div>
            <div style={{ textAlign: "center" }}>
            <Button
                onClick={handleClose}
                style={{
                  textTransform: "uppercase",
                  padding: "20px 100px",
                  marginBottom: "1em",
                  backgroundColor: "#242321",
                  fontSize: "19px",
                  letterSpacing: "3px",
                  color: "white",
                  border: "0px",
                  borderRadius: "50px",
                }}
              >
                Check Out
              </Button>
            </div>
          </div>
        }
      >
        <hr />

        {items.map((item, index) => {
          return (
            <div key={index} className="my-8 text-white grid grid-cols-2">
              <img src={item.img} alt="props" className="h-[9em] w-[9em]" />
              <div className="-ml-4">
                <h2 className="mb-1 text-[16px]">{item.title}</h2>
                <p className="text-[15px] font-semibold mb-2">
                  Size: <span className="font-normal text-[13px]">100ml</span>
                </p>
                <div className="flex gap-4 px-3 h-7 w-[5.5em] border-2 my-2 text-[15px]">
                  <span className="cursor-pointer" onClick={() => updateItemQuantity(item.id, item.quantity -1)}>-</span> <span>{item.quantity}</span>{" "}
                  <span className="cursor-pointer" onClick={() => updateItemQuantity(item.id, item.quantity +1)}>+</span>
                </div>
                <h2 className="text-right">{item.price}</h2>
              </div>
            </div>
          );
        })}
      </Drawer>
    </div>
  );
};

export default AddToCard;
