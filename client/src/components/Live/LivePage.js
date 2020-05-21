// 메뉴와 리스트 컴포넌트를 모두 감싸는 컴포넌트 
import React from 'react';
import MenuTab from './MenuTab';  
import LivePannel from './LivePannel';

class  LivePage extends React.Component{
    render(){
    return (
        <>
            <MenuTab />  
            <LivePannel />  
        </>
    ) 
  }; 
}
        
export default LivePage; 