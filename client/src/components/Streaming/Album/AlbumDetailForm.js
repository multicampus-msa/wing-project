import React, { useEffect } from 'react'


const AlbumDetailForm = ({ id }) => {

    useEffect(() => {
        window.scrollTo(0,0);
    })


    return (
        <div>
            앨범 폼 {id}
        </div>
    )
}

export default AlbumDetailForm