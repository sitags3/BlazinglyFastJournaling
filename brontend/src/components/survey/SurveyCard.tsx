import './surveyCard.scss'
import '../base.scss'

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const SurveyCard = () => {
    return (
        <div>
            <svg className='absolute' xmlns="http://www.w3.org/2000/svg" width="1146" height="1024" viewBox="0 0 1146 1024" fill="none">
                <g filter="url(#filter0_f_5_367)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M270.035 -34.6208C414.478 -13.8678 534.459 82.6598 646.248 200.237C774.409 335.033 951.152 465.468 945.885 676.223C940.646 885.852 758.788 1002.39 623.187 1123.03C517.269 1217.26 398.771 1295.07 270.035 1277.51C152.033 1261.41 71.6274 1139.54 -14.3801 1036.07C-103.966 928.285 -199.921 828.012 -229.746 676.223C-269.32 474.812 -311.595 233.351 -202.569 78.2829C-91.8003 -79.2657 104.437 -58.413 270.035 -34.6208Z" fill="#0992FB" />
                </g>
                <defs>
                    <filter id="filter0_f_5_367" x="-472.024" y="-251" width="1618.02" height="1731" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_5_367" />
                    </filter>
                </defs>
            </svg>
            <svg className='absolute' xmlns="http://www.w3.org/2000/svg" width="1004" height="1024" viewBox="0 0 1004 1024" fill="none">
                <g filter="url(#filter0_f_5_368)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M46.8769 112.992C171.837 82.3844 296.35 111.978 419.582 158.729C560.861 212.328 741.207 247.761 791.909 395.642C842.34 542.731 722.283 680.262 641.58 806.224C578.543 904.613 500.803 995.524 389.676 1023.45C287.815 1049.05 189.433 989.542 91.2215 944.542C-11.0764 897.669 -116.684 857.991 -181.021 761.961C-266.392 634.537 -364.46 480.165 -314.745 338.594C-264.235 194.76 -96.3842 148.082 46.8769 112.992Z" fill="#03F9B6" />
                </g>
                <defs>
                    <filter id="filter0_f_5_368" x="-528.181" y="-99.5052" width="1532.07" height="1329.13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_5_368" />
                    </filter>
                </defs>
            </svg>
            <div className="survey-card">
                <span className="weekday main-text">
                    Today
                </span>
                <svg className='mt-[20px] relative top-[20px]' width="700" height="1" viewBox="0 0 700 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="0.5" x2="700" y2="0.5" stroke="black" />
                </svg>
                <form className='flex gap-[30px]'>
                    {numbers.map(num => {
                        return (
                            <input type='radio' name='painrate' value={num} className='bg-white z-10 rounded-full border border-solid border-black w-[40px] h-[40px] text-sm flex items-center justify-center'/>
                        )
                    })}
                </form>
            </div>
        </div>
    )
}

export default SurveyCard;