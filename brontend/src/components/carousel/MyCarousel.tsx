"use client"

import React, { useEffect, useState } from 'react';
import './MyCarousel.scss'
import { JournalEntries, journalEntries } from '@/data';
import ArrowIcon from '../arrow-icon/ArrowIcon';

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
        const newActive = state.active - 1;
        setState({
            ...state,
            active: newActive < 0 ? items.length - 1 : newActive,
            direction: 'left',
        });
    }

    const moveRight = () => {
        const newActive = (state.active + 1) % items.length;
        setState({
            ...state,
            active: newActive,
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
            itemsArray.push(<Item key={index} id={items[index].id} level={level} />);
        }
        return itemsArray;
    };

    return (
        <div className="noselect h-[350px] mx-auto w-[510px] flex flex-row">
            <ArrowIcon rotate={true} onClick={moveLeft} />
            <div className='grow mt-14'>

                <div className='relative w-fit'>
                    <Item level={-2} empty={true}></Item>
                    {generateItems()}
                    <Item level={2} empty={true}></Item>
                </div>
            </div>
            <ArrowIcon rotate={false} onClick={moveRight} />

        </div>
    );
};

const Item = ({ id, level, empty }: any) => {
    let className = 'item border border-black border-solid ';
    console.log(level)
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
            <Carousel items={entries} active={0} />
        </div>
    );
}

export default MyCarousel;