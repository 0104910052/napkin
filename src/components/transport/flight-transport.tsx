import React, {FC} from 'react';
import circleDry from "../../assets/images/icons/circle-dry.svg";
import planeIcon from '../../assets/images/icons/plane-icon.svg'
import BusynessIndicator from "../misc/busyness-indicator";


export interface FlightSegment {
    segment_id: string;
    type: string;
    origin: {
        value: string;
        type: string;
    },
    destination: {
        type: string;
        value: string;
    }
    departure: number;
    detail: {
        boarding: number;
        flight_number: string;
        gate: string;
        seat: string;
    }
}

interface FlightTransportProps {
    segmentInfo: FlightSegment;
}


const FlightTransport:FC<FlightTransportProps> = ({segmentInfo}:FlightTransportProps) => {
    return (
        <div className={'transport-segment'}>
            <div className="transport-segment-header p-3">
                <img src={circleDry} className={'transport-segment-header-circle'} alt="circle-dry"/>
                <span className={'ml-3'}>{new Date(segmentInfo.departure).toLocaleTimeString("en-US")}</span>
            </div>
            <div className={'transport-segment-body m-3 '}>
                <div className={'ml-3 border-black'}>
                    <div className={'flight-segment-header d-flex flex-wrap'}>
                        <div className={'d-inline-block'}>
                            {segmentInfo.detail.flight_number}
                        </div>
                        <div className={'d-inline-block ml-auto'}>
                            Boarding: {new Date(segmentInfo.detail.boarding).toLocaleTimeString("en-US", {hour: '2-digit', minute:'2-digit'})}
                        </div>
                    </div>
                    <div className={'text-center flight-transport-body'}>
                        {segmentInfo.origin.value}
                        <img className={'flight-segment-icon mx-3'} src={planeIcon} alt=""/>
                        {segmentInfo.destination.value}
                    </div>
                    <div className={'flight-transport-footer'}>
                        <div className={'d-inline-block'}>
                            Gate: {segmentInfo.detail.gate.replace('C','')}
                        </div>
                        <div className={'d-inline-block ml-4'}>
                            Seat: {segmentInfo.detail.seat}
                        </div>
                        <div className={'d-inline'}>
                            <BusynessIndicator value={0} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlightTransport;