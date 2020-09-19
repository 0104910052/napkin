import React, {FC} from 'react';
import circleDry from "../../assets/images/icons/circle-dry.svg";
import BussinessIndicator from "../misc/bussiness-indicator";

interface AirportSegment {
    segment_id: string;
    type: string;
    origin: {
        value: string;
        type: string;
    }
    departure: number;
    detail: {
        busyness_index: number;
    }
}

interface AirportTransportProps {
    segmentInfo: AirportSegment;
    terminal: string | undefined;
}

const AirportTransport: FC<AirportTransportProps> = ({segmentInfo, terminal}:AirportTransportProps) => {
    return (
        <div className={'transport-segment'}>
            <div className="transport-segment-header p-3">
                <img src={circleDry} className={'transport-segment-header-circle'} alt="circle-dry"/>
                <span className={'ml-3'}>{new Date(segmentInfo.departure).toLocaleTimeString("en-US")}</span>
            </div>
            <div className={'transport-segment-body m-3 '}>
                <div className={'ml-3 border-black p-1 bg-light-blue'}>
                    <div>
                        <b>{segmentInfo.origin.value} {segmentInfo.type}</b>
                    </div>
                    <div>
                        Terminal {terminal ? terminal[0] : ''}
                        <BussinessIndicator value={segmentInfo.detail.busyness_index} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AirportTransport;