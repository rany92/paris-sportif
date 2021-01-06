import React, {useEffect, useState }from 'react'

import AllMatchs from '../config/matchs.json'
import '../App.css'
import BootstrapTable from 'react-bootstrap-table-next'
import {useTranslation} from 'react-i18next'


export const BasicTable = () =>{
    const { t }= useTranslation()
    const [matchs, setMatchs] = useState([]);
    const getMatchsData = () =>{
        try {
            setMatchs(AllMatchs.matchs)
        } catch (error) {
            
        }

    }

    function handleClick(e) {
        e.preventDefault();
        alert(matchs);
      }


    const columns = [
        {dataField:"team1", text:'Domicile'},
        {dataField:"score1", text:'Score',   formatter: (cell, row) => {
            return <select name="matchs" id="matchselmect">
            <option value="cell">{cell}</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
        </select>;
          }},
        {dataField:"score2", text:'Score', formatter: (cell, row) => {
            return <select name="matchs" id="matchselect">
            <option value="cell">{cell}</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
        </select>;
          }},
        {dataField:"team2", text:'Exterieur'}
    ]
    useEffect(()=>{
        getMatchsData();
    },[]);
    
    return(
        <div>
            <h1>{t('title')}</h1>
            <BootstrapTable
            keyField="id"
             data={matchs}
             columns={columns}></BootstrapTable>

<button onClick={handleClick}>
      Valider
    </button>
        </div>
    )
}