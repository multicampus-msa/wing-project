import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import SupportCard from './SupportCard';

const useStyles = makeStyles((theme) => ({
    root: {
        justifyContent: 'center',
    },
    page: {
        display: 'grid',
        justifyContent: 'center',
    },
    body: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '10px',
        textAlign: 'center',
        color: '#FFF',
        width: '1000px',
        display: 'grid',
    },
    title: {
        textAlign: 'center'
    }
  }));

function SupportList ({match}) {
    const classes = useStyles();
    const pageNum = match.params.pageNum == null ? 1 : match.params.pageNum;

    return (
        <div>
            <h2 className={classes.title}>Support Page</h2>
            <div className={classes.body}>
                <div className={classes.root}>
                    <SupportCard artistId={Number(pageNum) * 8 - 7}/>
                    <SupportCard artistId={Number(pageNum) * 8 - 7 + Number(1)}/>
                    <SupportCard artistId={Number(pageNum) * 8 - 7 + Number(2)}/>
                    <SupportCard artistId={Number(pageNum) * 8 - 7 + Number(3)}/>
                    <SupportCard artistId={Number(pageNum) * 8 - 7 + Number(4)}/>
                    <SupportCard artistId={Number(pageNum) * 8 - 7 + Number(5)}/>
                    <SupportCard artistId={Number(pageNum) * 8 - 7 + Number(6)}/>
                    <SupportCard artistId={Number(pageNum) * 8 - 7 + Number(7)}/>
                </div>
                <div className={classes.page}>
                    <Pagination aria-label="Page navigation">
                    <PaginationItem>
                        <PaginationLink first href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink previous href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="/support/list/1">
                        1
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="/support/list/2">
                        2
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="/support/list/3">
                        3
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                        4
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                        5
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink next href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink last href="#" />
                    </PaginationItem>
                    </Pagination>
                </div>
            </div>
        </div>
    )
}

export default SupportList;
