import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';


class MenuTab extends Component {
    state = { 
        searchData :'', // 검색창 입력 데이터 
    }

    onChange = (e) => {     // 검색창에 값 입력했을때 받아오기. 
        this.setState({
            searchData : e.target.value
        });
    };

    render() {
        return (
            <div className="MenuTab" >
                <Navbar color="light" light expand="md">
                    <div className = "Menu" style={{marginLeft:'50rem'}}>
                        <Nav navbar>
                            <NavItem >  <NavLink href="#">인기 영상 </NavLink>  </NavItem>
                            <NavItem>  <NavLink href="#" style ={{marginLeft:'5rem'}}>추천 영상</NavLink>  </NavItem>
                        </Nav>               
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default MenuTab;