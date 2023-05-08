import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { getAge } from './getAge';
import './tableStyling.css';

function PatientRecord() {
    const {rut}= useParams();
    const [patientData, setPatientData] = useState({
        id: {},
        identifier: [{
            value: {}
        }],
        active: {},
        name: [{
            family: {},
            given: [{}]
        }],
        gender: {},
        birthDate: {},
        address: [{
            text: {}
        }] // initialize with empty array
    });
    const [medicationData, setMedicationData] = useState([{
        medicationId: "",
        medicationName: "",
        medicationDose: "",
        medicationTime: ""
    }
    ]);

  const age = getAge(patientData.birthDate.value);
  
  useEffect(() => {
    axios.get(`http://127.0.0.1:5053/Pat/readById?rut=${rut}`)
      .then(response => {
        setPatientData(response.data);
        console.log('Response', response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [rut]);

  useEffect(() => {
    axios.get(`http://127.0.0.1:5053/medAdm/getAllWithMeds?patRut=${rut}`)
      .then(response => {
        setMedicationData(response.data);
        console.log('Response', response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [rut]);


  return (
    <div>
      <h1>Registro Médico del Paciente</h1>
      <h2>Información del Paciente</h2>
      <p>Id: {patientData.id.value}</p>
      <p>Rut: {patientData.identifier[0]?.value.value}</p>
      <p>Nombre: {patientData.name[0].given[0].value} {patientData.name[0].family.value}</p>
      <p>Edad: {age} años</p>
      <p>Género: {patientData.gender.value}</p>
      {<p>Dirección: {patientData.address[0].text.value} </p>}
          <h2>Registro de ingestas</h2>
      <table>
        <thead>
          <tr>
            <th>Medicamento</th>
            <th>Dosis</th>
            <th>Hora de ingesta</th>
          </tr>
        </thead>
        <tbody>
          {medicationData && medicationData.map(medicationData => (
            <tr key={medicationData.medicationId}>
              <td>{medicationData.medicationName}</td>
              <td>{medicationData.medicationDose}</td>
              <td>{medicationData.medicationTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <pre>{JSON.stringify(medicationData, null,2)} </pre> */}
    </div>
  );
}

export default PatientRecord;

