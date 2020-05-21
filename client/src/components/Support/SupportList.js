import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import SupportCard from './SupportCard';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'block',
        width: '1080px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '10px',
        position: 'relative',
        fontFamily: "NanumSquare",
    },
    root: {
        justifyContent: 'center',
        display: 'block',
        height: '600px',
        marginBottom: '25px',
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
        width: '1080px',
        display: 'grid',
    },
    title: {
        textAlign: 'center',
        marginBottom: '10px',
        fontWeight: 'bold',
    },
    line: {
        borderWidth: '2px',
    },
  }));

function SupportList ({match}) {
    const classes = useStyles();
    const pageNum = match.params.pageNum == null ? 1 : match.params.pageNum;

    return (
        <div className={classes.wrapper}>
            <h2 className={classes.title}>아티스트 후원 목록</h2>
            <hr className={classes.line}/>
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
                        <PaginationLink href="#">
                        {'≪'}
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                        {'<'}
                        </PaginationLink>
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
                        <PaginationLink href="#">
                        {'>'}
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                        {'≫'}
                        </PaginationLink>
                    </PaginationItem>
                    </Pagination>
                </div>
            </div>
        </div>
    )
}

export default SupportList;
