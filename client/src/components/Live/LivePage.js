import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import MenuTab from './LiveTemplateComponent/MenuTab';  
import Page from './LiveTemplateComponent/Page';
import './LivePage.css';
import LiveList from './LiveTemplateComponent/LiveList';

class  LivePage extends React.Component{

    render(){
    return (
        <>
            <div>
                <MenuTab></MenuTab>
            </div>
            <div >
            <LiveList></LiveList>
            </div>
            
            <div className="Page"><Page></Page></div>
        </>
    ) 
  }; 
}
        
export default LivePage; 