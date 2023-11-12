"use client"

import '../body/Body.scss'
import './surveyCard.scss'
import '../base.scss'
// import Body from '../body/Body.svg'
import Body from '../body/Body.jsx'


const painTypes = [
    'Dull',
    'Throbbing',
    'Burning',
    'Constant',
    'Sharp',
]

const painLengths = [
    '0   -  0.5 hours',
    '0.5 -  2   hours',
    '2   -  6   hours',
    '6   -  10  hours',
    '10+ hours',
]
const SurveyCard = () => {
    return (
        <div id='surveyCard2' className="survey-card mt-[28rem] ml-[150%] transition-all duration-700 ease-in-out">
            <span className="absolute top-[6.4rem]">
                Today
            </span>
            <div className='flex flex-col space-y-3'>
                <div className='flex flex-col space-y-3'>
                    <span>
                        How would you describe your pain?

                    </span>
                    <div className='flex flex-col'>
                        {painTypes.map(pain => {
                            return (

                                <label key={pain} className=''>
                                    <input className="relative float-left mr-2 mt-0.5 h-5 w-5 rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                                        type='radio' value={pain} name='painType' />
                                    {pain}
                                </label>
                            )
                        })}
                    </div>
                </div>
                <div className='flex flex-col space-y-3'>
                    <span>
                        How long did the pain last?

                    </span>
                    <div className='flex flex-col'>
                        {painLengths.map(pain => {
                            return (

                                <label key={pain} className=''>
                                    <input className="relative float-left mr-2 mt-0.5 h-5 w-5 rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                                        type='radio' value={pain} name='painLength' />
                                    {pain}
                                </label>
                            )
                        })}
                    </div>
                </div>
                <div className='flex flex-col space-y-3'>
                    <span className='overflow-x-hidden'>
                        Did you notice anything that seemed to trigger or worsen your pain today?

                    </span>
                    <div className='flex flex-col'>
                        {/* {painLengths.map(pain => { */}
                            {/* return ( */}

                                    <input type="text" className='px-3 py-4 text-sm border border-solid border-black outline-none' />
                                {/* // <label className=''> */}
                                    {/* <input className="relative float-left mr-2 mt-0.5 h-5 w-5 rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                                        type='radio' value={pain} name='painpainpain' />
                                    {pain} */}
                                {/* </label> */}
                            {/* ) */}
                        {/* })} */}
                    </div>
                </div>
                <div className='w-full flex justify-center'>
                    <button className='btn-1 cursor-pointer bottom-16 absolute'>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default SurveyCard;