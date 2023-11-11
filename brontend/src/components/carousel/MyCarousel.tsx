"use client"

import React, { useEffect, useState } from 'react';
import './MyCarousel.scss'
import { JournalEntries, journalEntries } from '@/data';
import ArrowIcon from '../arrow-icon/ArrowIcon';
import CarouselCard from './CarouselCard';

type CarouselProps = {
    items: JournalEntries;
    active: number
}



const Carousel = ({ items, active }: CarouselProps) => {
    const [state, setState] = useState({
        active,
        direction: '',
    });

    const moveLeft = () => {
        const newActive = (state.active + 1) % items.length;

        setState({
            ...state,
            active: newActive,
            direction: 'left',
        });
    }

    const moveRight = () => {
        const newActive = state.active - 1;
        setState({
            ...state,
            active: newActive < 0 ? items.length - 1 : newActive,
            direction: 'right',
        });
    }


    const generateItems = () => {
        const itemsArray = [];
        let level;
        for (let i = state.active - 2; i < state.active + 3; i++) {
            let index = i;
            if (i < 0) {
                index = items.length + i;
            } else if (i >= items.length) {
                index = i % items.length;
            }
            level = state.active - i;
            itemsArray.push(
                <CarouselCard key={index} journalEntry={items[index]} level={level} />
            );
        }
        return itemsArray;
    };

    return (
        <div className="noselect h-[350px] mx-auto w-[910px] flex flex-row">
            <ArrowIcon rotate={true} onClick={moveLeft} />
            <div className='grow mt-14'>

                <div className='relative w-fit'>
                    <CarouselCard level={-2} />
                    {generateItems()}
                    <CarouselCard level={2} />
                </div>
            </div>
            <ArrowIcon rotate={false} onClick={moveRight} />

        </div>
    );
};

const Item = ({ id, level, empty }: any) => {
    let className = 'item border border-black border-solid ';
    switch (level) {
        case -2:
            className += 'left-0 scale-90 bg-[#228291] z-10';
            break;
        case -1:
            className += 'left-12 scale-95 bg-[#6796E5] z-20';
            break;
        case 0:
            className += 'left-24 bg-[#4EC9E1] z-30';
            break;
        case 1:
            className += 'left-36 scale-95 bg-[#6796E5] z-20';
            break;
        case 2:
            className += 'left-48 scale-90 bg-[#228291] z-10';
            break;
    }

    return (
        <div className={`${className} transition-all h-64 w-64 duration-1000 color-white absolute ${empty ? '!z-0' : ''}`}>
            {id}
        </div>
    );
};

const MyCarousel = () => {

    const [entries, setEntries] = useState(journalEntries)

    useEffect(() => {
        setEntries(journalEntries)
    }, [journalEntries])

    return (
        <div>
            <svg className='absolute' xmlns="http://www.w3.org/2000/svg" width="1331" height="1024" viewBox="0 0 1331 1024" fill="none">
                <g filter="url(#filter0_f_5_354)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M339.079 -257.713C508.3 -239.61 648.863 -155.412 779.828 -52.852C929.974 64.7278 1137.04 178.503 1130.87 362.34C1124.73 545.194 911.673 646.849 752.811 752.081C628.724 834.277 489.899 902.145 339.079 886.828C200.835 872.788 106.636 766.482 5.87493 676.222C-99.0788 582.207 -211.495 494.742 -246.435 362.34C-292.798 186.653 -342.325 -23.9668 -214.597 -159.23C-84.8261 -296.655 145.075 -278.466 339.079 -257.713Z" fill="#0992FB" />
                </g>
                <defs>
                    <filter id="filter0_f_5_354" x="-495.966" y="-472" width="1826.97" height="1561" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_5_354" />
                    </filter>
                </defs>
            </svg>
            <svg className='absolute' xmlns="http://www.w3.org/2000/svg" width="1091" height="862" viewBox="0 0 1091 862" fill="none">
                <g filter="url(#filter0_f_5_355)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M63.3376 -142.744C207.693 -184.389 346.16 -171.178 481.642 -142.205C636.965 -108.988 838.187 -96.6171 882.429 32.4213C926.435 160.769 778.08 299.216 675.358 422.791C595.123 519.315 498.892 610.652 370.453 648.333C252.724 682.871 146.546 639.542 39.2631 609.404C-72.483 578.013 -188.623 553.536 -252.954 473.205C-338.315 366.613 -435.659 236.888 -366.661 102.521C-296.56 -33.9958 -102.159 -94.9999 63.3376 -142.744Z" fill="#03F9B6" />
                </g>
                <defs>
                    <filter id="filter0_f_5_355" x="-590.063" y="-369.203" width="1680.44" height="1230.28" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_5_355" />
                    </filter>
                </defs>
            </svg>
            <Carousel items={entries} active={0} />
        </div>
    );
}

export default MyCarousel;