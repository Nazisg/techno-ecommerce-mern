import React from 'react';
import Title from '../../../../components/Title';
import OfferBox from '../../../../components/OfferBox';

function LimitedTimeOffer() {

    return (
        <div className='py-8 md:py-10 px-6 md:px-8'>
            <Title title={"LIMITED TIME OFFER"} />
            <div className='grid grid-cols-1 xl:grid-cols-2 gap-4 pt-8'>
                <OfferBox timer={true}/>
                <OfferBox />
            </div>
        </div>
    );
}

export default LimitedTimeOffer;
