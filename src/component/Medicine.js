import React, { useState, useEffect } from "react";
import axios from "axios";

function Medicine() {
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/medicines")
      .then(response => setMedicines(response.data))
      .catch(error => {
        console.log(error);
        // Default response in case of API failure
        const defaultResponse = [
          {
              "id": 60002283,
              "name": "ANASTROZOLE ACCORD 1 mg",
              "form": "comprimé pelliculé",
              "marketingStatus": "Autorisation active",
              "approvalDate": "2010-10-28",
              "quantity": -5,
              "price": "24.61",
              "inStock": 0,
              "created_at": "2023-05-17T15:52:55.000000Z",
              "updated_at": "2024-01-25T00:30:48.000000Z",
              "barcode": 6111248360130
          },
          {
              "id": 60002504,
              "name": "RANITIDINE BIOGARAN 150 mg",
              "form": "comprimé effervescent(e)",
              "marketingStatus": "Autorisation abrogée",
              "approvalDate": "1989-07-04",
              "quantity": 116,
              "price": "73.93",
              "inStock": 1,
              "created_at": "2023-05-17T14:09:18.000000Z",
              "updated_at": "2023-05-23T10:13:03.000000Z",
              "barcode": 0
          },
          {
              "id": 60003620,
              "name": "BECLOSPIN 800 microgrammes/2ml suspension pour inhalation par nébuliseur",
              "form": "suspension pour inhalation par nébuliseur",
              "marketingStatus": "Autorisation active",
              "approvalDate": "2006-01-06",
              "quantity": 0,
              "price": "7.52",
              "inStock": 0,
              "created_at": "2023-05-19T20:08:50.000000Z",
              "updated_at": "2023-05-27T09:55:09.000000Z",
              "barcode": 0
          },
          {
              "id": 60004487,
              "name": "TRAMADOL EG L.P. 200 mg",
              "form": "comprimé à libération prolongée",
              "marketingStatus": "Autorisation active",
              "approvalDate": "2009-09-07",
              "quantity": 61,
              "price": "136.75",
              "inStock": 1,
              "created_at": "2023-05-17T14:09:34.000000Z",
              "updated_at": "2023-05-23T10:17:53.000000Z",
              "barcode": 6111128000088
          },
          {
              "id": 60007960,
              "name": "AFTAGEL",
              "form": "gel",
              "marketingStatus": "Autorisation active",
              "approvalDate": "1996-08-06",
              "quantity": 1,
              "price": "191.09",
              "inStock": 1,
              "created_at": "2023-05-27T11:34:15.000000Z",
              "updated_at": "2023-05-27T11:34:15.000000Z",
              "barcode": 0
          },
          {
              "id": 60008845,
              "name": "GLUCOSE BIOSEDRA 15 POUR CENT",
              "form": "solution pour perfusion",
              "marketingStatus": "Autorisation active",
              "approvalDate": "1998-03-05",
              "quantity": 30,
              "price": "138.48",
              "inStock": 1,
              "created_at": "2023-05-19T21:22:38.000000Z",
              "updated_at": "2023-06-03T19:04:11.000000Z",
              "barcode": 6111035000430
          },
          {
              "id": 60107747,
              "name": "VERRUFILM",
              "form": "solution pour application",
              "marketingStatus": "Autorisation active",
              "approvalDate": "1995-06-23",
              "quantity": 20,
              "price": "172.53",
              "inStock": 1,
              "created_at": "2023-05-17T14:34:30.000000Z",
              "updated_at": "2023-05-17T15:46:44.000000Z",
              "barcode": 0
          },
          {
              "id": 60918546,
              "name": "DOLIPRANE 1000 mg",
              "form": "comprimé",
              "marketingStatus": "Autorisation active",
              "approvalDate": "2002-07-09",
              "quantity": 117,
              "price": "31.21",
              "inStock": 1,
              "created_at": "2023-05-25T15:52:26.000000Z",
              "updated_at": "2024-01-25T00:28:32.000000Z",
              "barcode": 6111128000088
          },
          {
              "id": 64647032,
              "name": "ASPRO 320 mg",
              "form": "comprimé",
              "marketingStatus": "Autorisation active",
              "approvalDate": "1995-12-14",
              "quantity": 3,
              "price": "106.82",
              "inStock": 1,
              "created_at": "2023-07-11T21:53:53.000000Z",
              "updated_at": "2023-07-11T21:53:53.000000Z",
              "barcode": 0
          }
      ];
        setMedicines(defaultResponse);
      });
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
