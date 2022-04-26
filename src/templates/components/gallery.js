import React, { useState, useEffect } from "react";
import Icon from "./icon";

import imagesFolder from "./../../resources/assets/images/imagesFolder.png";


export default function Gallery() {
    const [data, setData] = useState(null);
    // const [filteredData, setFilteredData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos`)
            .then((response) => response.json())
            .then((actualData) => {
    
                setData(actualData);
                setError(null);
            })
            .catch((err) => {
                setError(err.message);
                setData(null);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);


    const filterByAlbumId = () => {
        var filteredarray = [];
        var mydata = data.reduce((r, a, nekiAraj) => {
            r[a.albumId] = r[a.albumId] || [];
            r[a.albumId].push(a);
            return r;
        }, Object.create(null));
        filteredarray.push(mydata);
        return mydata;
        // return filteredarray;
    }

    return (
        <div className="c-gallery">
            {loading && <div>A moment please...</div>}
            {error && (
                <div>{`There is a problem fetching the data - ${error}`}</div>
            )}
            <div className="c-gallery__album">
                
                {data && 

                    //console.log(data.map(item => item))
                    console.log('Data by albums: ', filterByAlbumId())
                    
                //    data.map(item => {
                //         <>
                //         <Icon text={`Album ` + item.albumId} icon={imagesFolder} albumData={item} />
                //         </>
                //    })
                }
     
            </div>
        </div>
    );
}