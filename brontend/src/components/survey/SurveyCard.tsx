"use client"

import '../body/Body.scss'
import './surveyCard.scss'
import '../base.scss'
// import Body from '../body/Body.svg'
import Body from '../body/Body.jsx'
import SurveyCard2 from './SurveyCard2';
import { FormEventHandler } from 'react'
import { useRouter } from 'next/navigation'

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const SurveyCard = () => {
    const router = useRouter();
    const handleSubmit = (event: any) => {
        event.preventDefault();
        router.push('/carousel')
    }

    return (
        <>
            <svg className='absolute' xmlns="http://www.w3.org/2000/svg" width="1146" height="1024" viewBox="0 0 1146 1024" fill="none">
                <g filter="url(#filter0_f_5_367)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M270.035 -34.6208C414.478 -13.8678 534.459 82.6598 646.248 200.237C774.409 335.033 951.152 465.468 945.885 676.223C940.646 885.852 758.788 1002.39 623.187 1123.03C517.269 1217.26 398.771 1295.07 270.035 1277.51C152.033 1261.41 71.6274 1139.54 -14.3801 1036.07C-103.966 928.285 -199.921 828.012 -229.746 676.223C-269.32 474.812 -311.595 233.351 -202.569 78.2829C-91.8003 -79.2657 104.437 -58.413 270.035 -34.6208Z" fill="#0992FB" />
                </g>
                <defs>
                    <filter id="filter0_f_5_367" x="-472.024" y="-251" width="1618.02" height="1731" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_5_367" />
                    </filter>
                </defs>
            </svg>
            <svg className='absolute' xmlns="http://www.w3.org/2000/svg" width="1004" height="1024" viewBox="0 0 1004 1024" fill="none">
                <g filter="url(#filter0_f_5_368)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M46.8769 112.992C171.837 82.3844 296.35 111.978 419.582 158.729C560.861 212.328 741.207 247.761 791.909 395.642C842.34 542.731 722.283 680.262 641.58 806.224C578.543 904.613 500.803 995.524 389.676 1023.45C287.815 1049.05 189.433 989.542 91.2215 944.542C-11.0764 897.669 -116.684 857.991 -181.021 761.961C-266.392 634.537 -364.46 480.165 -314.745 338.594C-264.235 194.76 -96.3842 148.082 46.8769 112.992Z" fill="#03F9B6" />
                </g>
                <defs>
                    <filter id="filter0_f_5_368" x="-528.181" y="-99.5052" width="1532.07" height="1329.13" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_5_368" />
                    </filter>
                </defs>
            </svg>
            <form className='relative' onSubmit={handleSubmit}>
                <div id='surveyCard1' className="survey-card mt-[28rem]">
                    <span className="absolute top-[6.4rem]">
                        Today
                    </span>
                    <span className='text-3xl'>
                        How did you experience pain today?
                    </span>
                    <svg className='mt-[20px] relative top-[20px]' width="670" height="1" viewBox="0 0 700 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="0.5" x2="700" y2="0.5" stroke="black" />
                    </svg>
                    <div>
                        <div className='flex gap-[30px]'>

                            {numbers.map(num => {
                                return (
                                    <label key={num} className='relative cursor-pointer bg-white z-10 rounded-full w-[40px] h-[40px] border border-solid border-stone-500  text-sm flex items-center justify-center'>
                                        <input type='radio' name='painrate' value={num} className='hidden absolute' />
                                        <div className='transition-size label-checked:p-5 label-checked:px-6 duration-700 flex flex-col justify-center self-center text-center label-checked:bg-neutral-200 label-checked:text-[#666666] rounded-full '>
                                            {num}
                                        </div>
                                    </label>
                                )
                            })}
                        </div>
                        <div className='flex justify-center mt-6 relative'>
                            <Body />
                        </div>
                    </div>

                    <div className='btn-1 mt-6 cursor-pointer bottom-16 absolute' onClick={() => {
                        const card1: HTMLDivElement | null = document.querySelector('#surveyCard1')
                        const card2: HTMLDivElement | null = document.querySelector('#surveyCard2')

                        if (card1 && card2) {
                            card1.classList.add('transition-all')
                            card1.classList.add('duration-700')
                            card1.classList.add('ease-in-out')
                            card1.style.left = '-50%'
                            card2.classList.remove('ml-[150%]')
                        }

                    }}>

                        Next
                    </div>
                </div>
                <SurveyCard2 />

            </form>
        </>
    )
}

export default SurveyCard;