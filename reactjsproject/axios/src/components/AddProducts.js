import React, { useState } from "react";
import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,

  pt: 2,
  px: 4,
  pb: 3,
};

function AddProducts({ fetchData, modalOpen, setModalOpen }) {
  const [productData, setProductData] = useState({
    pName: "",
    pDesc: " ",
    pPrice: " ",
    pImg: " ",
  });
  const handleChange = (e) => {
    // console.log(e.target.name);
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async () => {
    const res = await axios.post(
      "https://p-9x7e.onrender.com/products/add-product",
      productData
    );
    console.log(res);
    if (res.data.error) {
      alert("Something went wrong");
    } else {
      setModalOpen(false);
      fetchData();
    }
  };
  return (
    <div>
      <Modal open={modalOpen}>
        <Box sx={style}>
          <form>
            <label>Product Name</label>
            <input
              // value={productData.pName}
              onChange={handleChange}
              name="pName"
            ></input>
            <br></br>
            <label>Product Description</label>
            <input
              type="text"
              value={productData.pDesc}
              onChange={handleChange}
              name="pDesc"
            ></input>
            <br></br>

            <label>Product Price</label>
            <input
              value={productData.pPrice}
              onChange={handleChange}
              name="pPrice"
            ></input>
            <br></br>
            <label>Product Image</label>
            <input
              value={productData.pImg}
              onChange={handleChange}
              name="pImg"
            ></input>
            <br></br>
            <button onClick={handleSubmit} type="button">
              Submit
            </button>
            <button
              onClick={() => {
                setModalOpen(false);
              }}
            >
              Cancel
            </button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default AddProducts;

{
  /* <form>
        <label>Product Name</label>
        <input type="text" id="productName" name="productName"></input>
        <br></br>
        <label>Product Description</label>
        <input
          type="text"
          id="productDescription"
          name="productDescription"
        ></input>
        <br></br>
        <label>Product Image Url</label>
        <input type="text" id="productImg" name="productImg"></input>
        <br></br>
        <label>Product Price</label>
        <input
          type="image"
          url="#"
          alt="loading..."
          id="productPrice"
          name="productPrice"
        ></input>
      </form> */
}
