import React, {FC} from 'react';
import circleWet from '../../assets/images/icons/circle-wet.svg'


export interface GroundSegment {
    segment_id: string;
    type: string;
    origin: {
        value: string;
        type: string;
    }
    departure: number;
    destination: {
        type: string;
        value: string;
    }
}

interface GroundTransportProps {
    segmentInfo: GroundSegment
}


const GroundTransport:FC<GroundTransportProps> = ({segmentInfo}: GroundTransportProps) => {
    return (
        <div className={'transport-segment'}>
            <div className="transport-segment-header">
                <img src={circleWet} className={'transport-segment-header-circle'} alt="circle-dry"/>
                <span className={'ml-3'}>{new Date(segmentInfo.departure).toLocaleTimeString("en-US", {hour: '2-digit', minute:'2-digit'})}</span>
            </div>
            <div className={'transport-segment-body m-3 '}>
                    <div className={'ml-3 border-black p-1 bg-dark-blue'}>
                        <b>Pickup from</b>
                        <div>
                            {segmentInfo.origin.value}
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default GroundTransport;