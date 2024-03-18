'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

type Props = {
  data: ProductModels.client.CartProduct,
  onConfirm: (productId: string) => void,
  onCancel: () => void
}

const ModalDeleteProduct: React.FC<Props> = ({ data, onConfirm, onCancel }) => {
  const [show, setShow] = useState(true);

  const handleCancel = () => {
    setShow(false);
    setTimeout(() => {
      onCancel();
    }, 300);
  }

  const handleConfirm = () => {
    setShow(false);
    setTimeout(() => {
      onConfirm(data.id);
    }, 300);
  }

  return (
    <Modal
      show={show}
      onExited={handleCancel}
      backdrop="static"
      keyboard={false}
      size='lg'
    >
      <Modal.Header>
        <Modal.Title>Are you sure you want to remove this product from cart?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row main align-items-center">
          <div className="col-2 ">
            <Image
              width={100}
              height={200}
              alt="cart-image"
              className="img-fluid"
              src={data.imageUrl}
              data-testid="product-image"
            />
          </div>
          <div className="col">
            <div className="row">{data.title}</div>
          </div>
          <div className="col">
            $ {parseFloat(data.price.toString()).toFixed(2)}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCancel} data-testid="cancel-button">
          No
        </Button>
        <Button variant="primary" onClick={handleConfirm} data-testid="confirm-button">
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalDeleteProduct;