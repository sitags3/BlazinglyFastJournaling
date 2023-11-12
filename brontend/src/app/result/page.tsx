import ResultContent from "@/components/result/Result";

const Result = () => {
    return (
        <main>
            <svg className="absolute right-0 z-[-1]" xmlns="http://www.w3.org/2000/svg" width="784" height="1024" viewBox="0 0 784 1024" fill="none">
                <g filter="url(#filter0_f_5_370)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1202.17 35.4291C1242.59 148.703 1216.22 274.852 1170.76 403.563C1118.64 551.125 1088.69 732.199 927.331 813.588C766.836 894.542 608.111 809.611 464.252 759.926C351.884 721.118 247.046 666.532 210.321 565.954C176.657 473.763 237.553 366.103 282.367 261.814C329.045 153.186 367.574 42.968 470.73 -40.0598C607.609 -150.231 773.712 -278.556 933.274 -262.088C1095.39 -245.357 1155.84 -94.434 1202.17 35.4291Z" fill="#0992FB" />
                </g>
                <defs>
                    <filter id="filter0_f_5_370" x="0.583496" y="-463.524" width="1421.53" height="1510.61" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_5_370" />
                    </filter>
                </defs>
            </svg>
            <svg className="absolute right-0 z-[-1]" xmlns="http://www.w3.org/2000/svg" width="581" height="818" viewBox="0 0 581 818" fill="none">
                <g filter="url(#filter0_f_5_371)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M833.462 41.3362C866.836 127.419 856.915 219.058 834.55 311.458C808.909 417.391 799.878 549.397 698.247 599.968C597.16 650.268 487.411 578.115 389.558 532.883C313.126 497.553 240.727 451.012 210.538 374.528C182.867 304.421 216.663 228.488 240.049 154.093C264.408 76.6022 283.296 -2.54542 346.432 -57.7755C430.207 -131.061 532.188 -216.028 638.432 -194.407C746.376 -172.44 795.201 -57.354 833.462 41.3362Z" fill="#03F9B6" />
                </g>
                <defs>
                    <filter id="filter0_f_5_371" x="0.151367" y="-397.832" width="1054.89" height="1214.92" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_5_371" />
                    </filter>
                </defs>
            </svg>
            <ResultContent />
        </main>
    )
}

export default Result;