import React from 'react'
import {useState,useEffect} from 'react'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import * as ReactBootStrap from 'react-bootstrap'

function Datafetch() {
    const [get ,setget]= useState('')
    useEffect(() => {
        fetch("https://covidpagination.herokuapp.com/country")
          .then((res) => res.json())
          .then((data) => {
            setget(data.data);
            // console.log(get)
          });
      },[]);  
const columns=[
    { dataField: "Country", text: "Country"},
    { dataField: "ThreeLetterSymbol", text: "ISO Code"},
    { dataField: "Population", text: "Population"},
    { dataField: "TotalTests", text: "TotalTests"},
    { dataField: "TotalCases", text: "TotalCases"},
    { dataField: "ActiveCases", text: "ActiveCases"},
    { dataField: "TotalRecovered", text: "Recovered"},
    { dataField: "TotalDeaths", text: "Death"},
]

  return (
    <div>
        <BootstrapTable
        keyField='country'
        data={get}
        columns={columns}
        pagination={paginationFactory()}
         />
    </div>
  )
}

export default Datafetch