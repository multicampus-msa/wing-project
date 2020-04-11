import React from 'react';
import MenuTab from './LiveTemplateComponent/MenuTab';  
import Page from './LiveTemplateComponent/Page';
import './LivePage.css';
import LiveList from './LiveTemplateComponent/LiveList';

class  LivePage extends React.Component{

    render(){
        return (
            <>
                <div>
                    <MenuTab/>
                </div>
                <div >
                    <LiveList/>
                </div>

                <div className="Page"><Page/></div>
            </>
        )
    };
}
        
export default LivePage; 