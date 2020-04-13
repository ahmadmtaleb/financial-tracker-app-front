import React from 'react'

import ChartsPage from '../../components/PieChart/PieChart'
import BarCharts from '../../components/BarChart/BarCharts'

import './ReportPage.css'
export default class ReportPage extends React.Component{
    render(){
        return(
            <div className="rep">
                <div><ChartsPage></ChartsPage></div>
                <div><BarCharts></BarCharts></div>

            </div>

        );
    }
}