import React, { Component } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

class Page extends Component {

    state = { 
        id : 0, 
        data : []
    }

    onClick = (e) => { 
        console.log(e.target.id);
    }

    render() {
        return (
            <div>
                  <Pagination aria-label="Page navigation">
                        <PaginationItem >
                            <PaginationLink first href="#" />
                        </PaginationItem>
                        <PaginationItem >
                            <PaginationLink previous href="#" />
                        </PaginationItem>
                
                        <PaginationItem >
                            <PaginationLink href="#" id={1}>    1    </PaginationLink>
                        </PaginationItem>
                
                        <PaginationItem onClick={this.onClick}>
                            <PaginationLink href="#" id={2} >    2    </PaginationLink>
                        </PaginationItem>
                
                        <PaginationItem onClick={this.onClick}>
                            <PaginationLink href="#" id={3}>    3    </PaginationLink>
                        </PaginationItem>
                
                        <PaginationItem onClick={this.onClick}>
                           <PaginationLink href="#" id={4}>    4    </PaginationLink>
                        </PaginationItem>
                
                        <PaginationItem onClick={this.onClick}>
                            <PaginationLink href="#" id={5}>    5    </PaginationLink>
                        </PaginationItem>
                        
                        <PaginationItem>
                            <PaginationLink next href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink last href="#" />
                        </PaginationItem>
                    </Pagination>   
            </div>
        );
    }
}

export default Page;