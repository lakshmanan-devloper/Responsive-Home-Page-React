import sample from '../../../assets/logo.svg';
import {arrowDown, arrowUp, message, person} from'../../../assets/fonts-icons/fonts-icons';
import React, {useState} from 'react';


const cssStyles={
    'heading' :{
        'display': 'flex',
        'justify-content':'center',
        'height':'20px',
        'padding':'5px',
        
    },
    'right-space':{
        'margin-right':'10px',
        'color':'gray'

    },
    'total-count':{
    'color':'rgb(129, 125, 125)',
    'height':'fit-content',
    'font-weight':'bold',
    'font-size':'30px',
}
    
}

export function TopNav() {
    const [isVisible,setVisible]=useState(false)
    
    const toggleVisibility=()=> {
        setVisible(!isVisible)
    }

    return (<div style={{'display':'block'}}>
<div className="top-nav">
 <div>{message}<div className="count">6</div></div><div><img src={sample} alt="" className='nav-profile' /></div><div style={{'margin-right':'5px'}}><div style={{'padding-right':'10px','userSelect':'none'}}>Lakshman</div> <div onClick={toggleVisibility}>
    {isVisible ?arrowUp :arrowDown}
    {isVisible &&( <div className='popup'><div>All details</div><div>Logout</div></div>)}
    </div></div>
        </div>
        <div className='total-users'>
            <div className='user'>
                <div style={cssStyles.heading}><div style={cssStyles['right-space']}>{person}</div><div>Total Users</div></div>
                <div style={cssStyles['total-count']} >2500</div>
                <div style={{'padding':'5px'}}><span style={{'color':'green'}}>4%</span>From last week</div>
                <div className="side-line"></div>
            </div>
            <div className='user'>
                <div style={cssStyles.heading}><div style={cssStyles['right-space']}>{person}</div><div>Total Males</div></div>
                <div style={cssStyles['total-count']} >7652</div>
                <div style={{'padding':'5px'}}><span style={{'color':'green'}}>4%</span>From last week</div>
                <div className="side-line"></div>
            </div>
            <div className='user'>
                <div style={cssStyles.heading}><div style={cssStyles['right-space']}>{person}</div><div>Total Females</div></div>
                <div style={cssStyles['total-count']} >2500</div>
                <div style={{'padding':'5px'}}><span style={{'color':'red'}}>6%</span>From last week</div>
                <div className="side-line"></div>
            </div>
            <div className='user'>
                <div style={cssStyles.heading}><div style={cssStyles['right-space']}>{person}</div><div>Total Users</div></div>
                <div style={cssStyles['total-count']} >4322</div>
                <div style={{'padding':'5px'}}><span style={{'color':'green'}}>4%</span>From last week</div>
                <div className="side-line"></div>
            </div>
            <div className='user'>
                <div style={cssStyles.heading}><div style={cssStyles['right-space']}>{person}</div><div>Total Collection</div></div>
                <div style={cssStyles['total-count']} >8922</div>
                <div style={{'padding':'5px'}}><span>4%</span>From last week</div>
            </div>
        </div>
    </div>
    
    )
}