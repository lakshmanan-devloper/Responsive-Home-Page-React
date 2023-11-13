import MyChartComponent from  './chart2'
import AppVerions from  './chart3'
import BarChart from  './chart1'
import PieChart from  './chart4'
import React, {useState} from 'react';
import {arrowDown, arrowUp, x} from'../../../assets/fonts-icons/fonts-icons';

const cssStyles={
'head':{
    'display':'flex',
    'align-items':'center',
    'justify-content':'space-between',
    'margin-left':'20px',
    'margin-right':'20px'
},
'head2':{
    'display':'flex',
    'align-items':'center',
    'justify-content':'space-evenly',
}
}

export function Charts() {

    const [isVisibleChart1,setVisibleChart1]=useState(true)
    const [isVisibleChart2,setVisibleChart2]=useState(true)
    const toggleVisibility1=()=> {
        setVisibleChart1(!isVisibleChart1)
    
    }

    const toggleVisibility2=()=> {
        setVisibleChart2(!isVisibleChart2)
    
    }

    return (
        <div className="chart-container">
            <div style={cssStyles.head} className='head-small'>
                <div style={{'font-size':'18px'}}>Network Activities</div>
                <div><input type="datetime-local" className="date-input" style={{'margin-right':'10px'}}/><input type="datetime-local" className="date-input" /></div>
            </div>
            <div className="network-charts">
            <MyChartComponent/>
            <BarChart />
            </div>
            <div className="separated-charts">
                <div className="app-versions">
                    <div className='head1'><div>App Versions</div><div style={cssStyles.head2}><div className='size-small' onClick={toggleVisibility1}>{isVisibleChart1 ?arrowUp:arrowDown}</div><div></div><div className='size-small'>{x}</div></div></div>
                    {isVisibleChart1 && <div style={{'width':'100%'}}><AppVerions/></div>}
                </div>
                <div className="app-versions">
                    <div className='head1'><div>Device Usage</div><div style={cssStyles.head2}><div className='size-small' onClick={toggleVisibility2}>{isVisibleChart2 ?arrowUp:arrowDown}</div><div></div><div className='size-small'>{x}</div></div></div>
                    {isVisibleChart2 &&<div style={{'width':'100%'}}><PieChart/></div>}
                </div>
            </div>
        </div>
    )
}

