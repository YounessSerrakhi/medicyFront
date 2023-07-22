import React, { useState, useEffect } from "react";
import axios from "axios";

function Medicine() {
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/medicines")
      .then(response => setMedicines(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <section className="section medicines" id="medicines">
      <div className="container">
        <h2 className="mb-5 pb-4">
          <span className="text-danger">Medicines</span> list
        </h2>
        <div className="row">
          {medicines.map(medicine => (
            <div className="col-md-4 col-sm-6" key={medicine.id}>
              <div className="card mb-5">
                <div className="card-header has-icon">
                  <i className="ti-support text-danger" aria-hidden="true"></i>
                </div>
                <div className="card-body px-4 py-3">
                  <h4 className="mb-3 card-title text-dark">{medicine.name}</h4>
                  <p className="subtitle">
                    <strong>Form:</strong> {medicine.form}<br />
                    <strong>Marketing Status:</strong> {medicine.marketingStatus}<br />
                    <strong>Approval Date:</strong> {medicine.approvalDate}<br />
                    <strong>Price:</strong> {medicine.price} DH
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Medicine;
