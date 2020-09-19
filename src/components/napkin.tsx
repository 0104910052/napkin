import React, {useEffect} from 'react';
import arrowLeft from '../assets/images/icons/back-arrow.svg'
import data from '../data/default'
import GroundTransport from "./transport/ground-transport";
import AirportTransport from "./transport/airport-transport";
import FlightTransport from "./transport/flight-transport";

const Napkin = () => {

    useEffect(()=>{
        console.log(data)
    })

    return (
        <div className={'row'}>
            <div className="col-2 p-0 napkin">
                <div className={'mt-4 napkin-header'}>
                    <img src={arrowLeft} className={'arrow-left'} alt=""/>
                    <h4 className={'d-inline-block ml-3 pt-1'}>Overview</h4>
                </div>

                <div className={'napkin-body'}>
                    <div className={'text-center my-4'}>
                        <h4>{data.origin_iata} - {data.destination_iata}</h4>
                    </div>

                    {
                        data.segments.map((segment,index)=>{
                            return (
                                segment.type === 'GROUND' && <GroundTransport segmentInfo={segment as any} /> ||
                                    // Assuming terminal value is supposed to be in the next flight segment
                                segment.type === 'AIRPORT' && <AirportTransport segmentInfo={segment as any} terminal={data.segments[index + 1]?.detail?.gate} /> ||
                                segment.type === 'FLIGHT' && <FlightTransport />
                            )
                        })
                    }

                </div>


            </div>



        </div>
    );
};

export default Napkin;