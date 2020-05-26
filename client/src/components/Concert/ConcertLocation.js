import React, { useEffect, useRef } from 'react';


const {kakao} = window;
  
const ConcertLocation = () => {
    const mapContainer = useRef();
    useEffect(() => {
        kakao.maps.load(() => {
            let el = document.getElementById('map');
            let map = new kakao.maps.Map(el, {
                center: new kakao.maps.Coords(523951.25, 1085073.75)
            })
        })
        
    }, []);
    return (
        <div className="App">
        <div id="map" style={{ width: "70vw", height: "100vh" }} />
        </div>
    );
    }


export default ConcertLocation;