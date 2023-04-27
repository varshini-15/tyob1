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

function EditComponent({ editId, fetchData, editmodalOpen, seteditModalOpen }) {
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
    const res = await axios.put(
      `https://p-9x7e.onrender.com/products/edit-product/${editId}`,
      productData
    );
    console.log(res);
    if (res.data.error) {
      alert("Something went wrong");
    } else {
      seteditModalOpen(false);
      fetchData();
    }
  };
  return (
    <div>
      <Modal open={editmodalOpen}>
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
                seteditModalOpen(false);
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

export default EditComponent;
