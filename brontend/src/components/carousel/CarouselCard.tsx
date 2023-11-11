"use client"

import { FC } from 'react';
import './card.scss';
import { JournalEntry } from '@/data';

import '../base.scss'
import Link from 'next/link';
type Props = {
    journalEntry?: JournalEntry;
    level: number;
    className?: string;
}

const CarouselCard: FC<Props> = ({ journalEntry, level, className = "" }) => {
    switch (level) {
        case -2:
            className += ' left-0 scale-90 z-10';
            break;
        case -1:
            className += ' left-12 scale-95 z-20';
            break;
        case 0:
            className += ' left-24 scale-100 z-30';
            break;
        case 1:
            className += ' left-36 scale-95 z-20';
            break;
        case 2:
            className += ' left-48 scale-90 z-10';
            break;
    }
    return (
        <div className={`${className} overflow-hidden absolute card flex flex-col gap-y-[3.5rem] items-center justify-center transition-all duration-1000`}>
            <svg className='blurry-bg' xmlns="http://www.w3.org/2000/svg" width="762" height="762" viewBox="0 0 762 762" fill="none">
                <g filter="url(#filter0_f_5_377)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M403.297 611.558C329.309 619.209 287.397 525.843 242.122 461.619C198.448 399.667 130.307 333.083 155.394 259.901C179.834 188.61 272.646 199.121 339.569 177.358C386.156 162.208 430.344 139.53 476.726 155.406C533.638 174.886 598.079 206.448 610.382 270.054C622.586 333.149 562.816 378.033 530.194 431.832C489.96 498.181 475.951 604.045 403.297 611.558Z"
                        fill="#0992FB" />
                </g>
                <defs>
                    <filter id="filter0_f_5_377" x="6.10352e-05" y="6.10352e-05" width="762" height="762" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_5_377" />
                    </filter>
                </defs>
            </svg>
            {journalEntry ?
                <>
                    <div className='date-circle rounded-full'></div>
                    <span className="weekday main-text">
                        {journalEntry.when}
                    </span>
                    <div className="date-container">
                        <span className="day main-text">{journalEntry.day}</span>
                        <span className="month main-text">{journalEntry.month}</span>
                    </div>
                    <Link href="/survey" className='link'>
                        <button className="btn-1">See details</button>
                    </Link>
                </> :
                null}
        </div>
    )
}

export default CarouselCard