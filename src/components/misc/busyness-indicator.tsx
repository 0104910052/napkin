import React, {FC} from 'react';

const MAX_BUSYNESS_INDEX = 10
interface BusynessIndicatorProps{
    value: number
}

const BusynessIndicator:FC<BusynessIndicatorProps> = ({value}:BusynessIndicatorProps) => {
    return (
        <div className={'d-inline-block float-right'}>
            {
                value > 5 ?
                    <div style={{backgroundColor: `rgba(240, 52, 52, ${value / MAX_BUSYNESS_INDEX})`}}>
                        Busy
                    </div>
                    :
                    <div>
                        <div style={{backgroundColor: 'rgb(3, 252, 3)'}}>
                            On Time
                        </div>
                    </div>
            }
        </div>
    );
};

export default BusynessIndicator;