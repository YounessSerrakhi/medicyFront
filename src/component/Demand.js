import React, { useState } from 'react';
import { Dropdown, Form, Button } from 'react-bootstrap';
import { useAuth } from '../Contexts/AuthContext';
import Cookies from 'js-cookie';

function MyDropdown() {
  const {api} = useAuth();
  const [formData, setFormData] = useState({
    medicine: '',
    quantity: 0,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendDemande = (event) => {
    event.preventDefault();
    api.defaults.headers['Authorization'] = `Bearer ${Cookies.get('token')}`;
    api.post('api/medicines/demande', formData)
      .then((response) => {
        alert(response.data.message);
        document.getElementById('dropdownMenuButton').click();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="section bg-dark py-5">
      <div className="container text-center">
        <h2 className="text-light mb-5 font-weight-normal">You don't find your medicine </h2>
        <Dropdown>
          <Dropdown.Toggle variant="outline-secondary" id="dropdownMenuButton">
            Demand it
          </Dropdown.Toggle>
          <Dropdown.Menu className="form">
            <Form onSubmit={sendDemande} className="px-4 py-3">
              <Form.Group controlId="exampleDropdownFormEmail1">
                <Form.Control
                  type="text"
                  name="medicine"
                  placeholder="medicine name"
                  value={formData.medicine}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="exampleDropdownFormPassword1">
                <Form.Control
                  type="number"
                  name="quantity"
                  placeholder="quantity"
                  value={formData.quantity}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Button type="submit" variant="primary" block>
                Send demand
              </Button>
            </Form>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </section>
  );
}

export default MyDropdown;
