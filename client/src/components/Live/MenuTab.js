// 인기 영상과 추천 영상을 선택할 수 있는 메뉴 컴포넌트.
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {
    Navbar,
    Nav,
    NavItem
  } from 'reactstrap';

class MenuTab extends Component {
    render() {
        return (
            <>
                <Navbar color="light" light expand="md">
                    <div className = "Menu" style={{marginLeft:'50rem'}}>
                        <Nav navbar>
                            <NavItem >  <Link to="/Live/BestLive">인기 영상 </Link>  </NavItem>
                            <NavItem >  <Link to="/Live/RecommandLive" style ={{marginLeft:'5rem'}}>추천 </Link>  </NavItem>
                        </Nav>               
                    </div>
                </Navbar>
               
            </>
        );
    }
}

export default MenuTab;