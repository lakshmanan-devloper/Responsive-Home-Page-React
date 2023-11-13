import sample from '../../assets/logo.svg';
import {arrowDown, paw, tv, home, folder, arrowUp, table , calender, x, bars} from'../../assets/fonts-icons/fonts-icons';
import React, {useCallback, useState, useEffect} from 'react';

const cssStyles={
    'two-columns' :{
        'display': 'grid',
        'grid-template-columns': '1fr 10%',
        'grid-template-rows':'1fr',
        'place-items':'center'
    }
    
}

export function MainHomeSideBar() { 
    const [isVisible,setVisible]=useState(false)
    const [isVisible1,setVisible1]=useState(true)
    const [selectedItem,setSelected]=useState(null)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const toggleVisibility=()=> {
        setVisible(!isVisible)
    
    }
    const toggleVisibility1=()=> {
        setVisible1(!isVisible1)
    
    }
    const handleSelection=useCallback((option)=> {
        setSelected(option)
    
    },[setSelected])

    const handleResize = () => {
        const newScreenWidth = window.innerWidth;
        setScreenWidth(newScreenWidth);
        setVisible1(newScreenWidth > 768);
      };
    
      useEffect(() => {
        // Add event listener when the component mounts
        window.addEventListener('resize', handleResize);
    
        // Clean up the event listener when the component unmounts
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);


    return (
        <div className="side-container">   
        <div id="hamburger-icon" onClick={toggleVisibility1} >
    {isVisible1 ?x:bars}
      </div>
      {isVisible1 &&
            <><div className="side-element"><div>{paw}</div><div>Welcome</div></div>
            <div className="side-element" style={{'margin-top':'10px'}}><div><img src={sample} alt="" /></div><div className='two-rows'><div>Welcome</div><div>Anthony Das</div></div></div>
            <div className="side-element"><div className=''><div>{home}</div></div><div style={cssStyles['two-columns']} ><>Dashboard</><div onClick={toggleVisibility}>{isVisible ?arrowUp:arrowDown}</div></div></div>
           {isVisible && <div className='expand'>
           <div className={selectedItem==='option1'?'side-element active':'side-element'} onClick={()=>handleSelection('option1')}><div><div></div></div><div ><>Analysis</><div></div></div></div> 
           <div className={selectedItem==='option2'?'side-element active':'side-element'} onClick={()=>handleSelection('option2')}><div><div></div></div><div ><>Customers</><div></div></div></div> 
           <div className={selectedItem==='option3'?'side-element active':'side-element'} onClick={()=>handleSelection('option3')}><div><div></div></div><div ><>Orders</><div></div></div></div> 
            </div>}
            <div className={selectedItem==='option4'?'side-element active':'side-element'} onClick={()=>handleSelection('option4')}><div><div>{folder}</div></div><div style={cssStyles['two-columns']}><>Files</><div></div></div></div>
            <div className={selectedItem==='option5'?'side-element active':'side-element'} onClick={()=>handleSelection('option5')}><div><div>{tv}</div></div><div style={cssStyles['two-columns']}><>Monitor</><div></div></div></div>
            <div className={selectedItem==='option6'?'side-element active':'side-element'} onClick={()=>handleSelection('option6')}><div><div>{table}</div></div><div style={cssStyles['two-columns']}><>Records</><div></div></div></div>
            <div className={selectedItem==='option7'?'side-element active':'side-element'} onClick={()=>handleSelection('option7')}><div><div>{calender}</div></div><div style={cssStyles['two-columns']}><>Timing</><div></div></div></div>
            </>}
            </div>
    )
} 