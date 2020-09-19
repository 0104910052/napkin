import React, {FC} from 'react';

const MAX_BUSYNESS_INDEX = 10
interface BusynessIndicatorProps{
    value: number
}

const BussinessIndicator:FC<BusynessIndicatorProps> = ({value}:BusynessIndicatorProps) => {
    return (
        <div className={'d-inline-block float-right'}>
            {
                value > 5 ?
                    <div style={{backgroundColor: `rgba(240, 52, 52, ${value / MAX_BUSYNESS_INDEX})`}}>
                        Busy
                    </div>
                    :
                    <div>
                        <div>
                            Not busy
                        </div>
                    </div>
            }
        </div>
    );
};

export default BussinessIndicator;