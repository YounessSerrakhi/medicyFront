import React from 'react';
import { Dropdown, Form, Button } from 'react-bootstrap';

function MyDropdown() {
  function sendDemande(e){
    var form = e.target;
    var queryString = `?medicine=${form.medicine}&quantity=${form.quantity}`;


    fetch(form.action.concat(queryString))
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });

  }

    return (
        <section className="section bg-dark py-5">
          <div className="container text-center">
          <h2 className="text-light mb-5 font-weight-normal">You don't find your medicine </h2>
            <Dropdown>
              <Dropdown.Toggle variant="outline-secondary" id="dropdownMenuButton">
                Demand it
              </Dropdown.Toggle>
              <Dropdown.Menu className="form">
                <Form method="GET" action="http://127.0.0.1:8000/api/medicines/demande" onSubmit={sendDemande} className="px-4 py-3">
                  <Form.Group controlId="exampleDropdownFormEmail1">
                    <Form.Control type="text" name="medicine" placeholder="medicine name" />
                  </Form.Group>
                  <Form.Group controlId="exampleDropdownFormPassword1">
                    <Form.Control type="number" name="quantity" placeholder="quantity" />
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
