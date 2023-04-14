import React from 'react';
import {Modal, CloseButton} from "react-bootstrap";


const Info = ({id, show, setShow}) => {

  const [title, setTitle] = React.useState("")

  const loadProduct = async () => {

    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    console.log(res);
    if (res.ok && res.status === 200) {
      const data = await res.json();
      setTitle(data.title)
    } else {
      alert("asas");
    }
  };

  React.useEffect(() => {
    loadProduct();
  }, [show]);


  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header>
        Info
        <CloseButton />
      </Modal.Header>
      <Modal.Body>
        <label>Title</label>
        <input value={title} />

      </Modal.Body>
    </Modal>
  )
}

export default Info