import React, { useState, useEffect } from "react";
import axios from "axios";
import AddProducts from "./AddProducts";
import EditComponent from "./EditComponent";
// import EditComponent from "./EditComponent";

function Products() {
  const [posts, setPosts] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editmodalOpen, seteditModalOpen] = useState(false);
  const [editId, seteditId] = useState();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get(
      ` https://p-9x7e.onrender.com/products/products`
    );
    // console.log(response);
    if (response.data.data) {
      //in json format data is an key
      setPosts(response.data.data);
    }
  };
  const handleDelete = async (id) => {
    const response = await axios.delete(
      `https://p-9x7e.onrender.com/products/delete-product/${id}`
    );
    if (response.data.error) {
      alert("something went wrong");
    } else {
      fetchData();
    }
  };
  // const handleEdit = (id) => {
  //   seteditModalOpen(true);
  //   seteditId(id);
  // };
  return (
    <div>
      <button
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Add
      </button>
      <br></br>
      <br></br>
      <br></br>
      <table border="1px">
        <tr>
          <th>Product Name</th>
          <th>Product Description</th>
          <th>Product Price</th>
          <th>Product Date</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        {posts.map((val) => {
          return (
            <>
              <tr>
                <td>{val.pName}</td>
                <td>{val.pDesc}</td>
                <td>{val.pPrice}</td>
                <td>{val.date}</td>
                <td>
                  <button
                    onClick={() => {
                      seteditModalOpen(true);
                      seteditId(val._id);
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      handleDelete(val._id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </>
          );
        })}
      </table>
      {modalOpen ? (
        <AddProducts
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          fetchData={fetchData}
        />
      ) : (
        ""
      )}
      {editmodalOpen ? (
        <EditComponent
          editId={editId}
          editmodalOpen={editmodalOpen}
          seteditModalOpen={seteditModalOpen}
          fetchData={fetchData}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Products;
