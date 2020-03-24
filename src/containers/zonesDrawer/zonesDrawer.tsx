import React from 'react'
import GMap from '../../components/gMap'

 class ZonesDrawer extends React.Component  {
     render() {
    return (
        <div style= {{width: '95vw',height: '95vh',minWidth:'95vw',minHeight:'95vh'}}>
                <GMap
                      id= {'script-loader'}
                      apiKey = {process.env.REACT_APP_API_KEY as string }
                      mapProps = {{
                        zoom: 15,
                        center: {
                          lat: 30.0633544,
                          lng: 31.2116232
                        },
                    }}
                >

                </GMap>
        </div>
    )
 }
}
export default  ZonesDrawer;