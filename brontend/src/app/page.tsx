import Link from 'next/link'
import '../components/base.scss'
import './page.scss'

export default function Home() {
  return (
    <>
      <svg className='absolute' xmlns="http://www.w3.org/2000/svg" width="850" height="1012" viewBox="0 0 850 1012" fill="none">
        <g filter="url(#filter0_f_5_351)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M158.298 53.451C263.367 65.4257 350.642 121.123 431.958 188.966C525.183 266.745 653.748 342.007 649.916 463.615C646.106 584.573 513.82 651.817 415.183 721.428C338.138 775.801 251.941 820.695 158.298 810.563C72.4624 801.276 13.9746 730.954 -48.5879 671.248C-113.753 609.057 -183.552 551.199 -205.246 463.615C-234.033 347.399 -264.784 208.074 -185.478 118.598C-104.904 27.6905 37.8408 39.7227 158.298 53.451Z" fill="#0992FB" />
        </g>
        <defs>
          <filter id="filter0_f_5_351" x="-436" y="-156" width="1286" height="1168" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_5_351" />
          </filter>
        </defs>
      </svg>
      <svg className='absolute' xmlns="http://www.w3.org/2000/svg" width="713" height="856" viewBox="0 0 713 856" fill="none">
        <g filter="url(#filter0_f_5_353)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M78.4594 94.0021C171.314 102.874 248.443 144.139 320.306 194.403C402.694 252.029 516.312 307.789 512.926 397.887C509.558 487.502 392.652 537.323 305.481 588.897C237.393 629.181 161.217 662.442 78.4594 654.935C2.60281 648.054 -49.0856 595.954 -104.375 551.719C-161.965 505.643 -223.649 462.776 -242.822 397.887C-268.262 311.784 -295.438 208.56 -225.352 142.268C-154.144 74.9165 -27.9939 83.831 78.4594 94.0021Z" fill="#03F9B6" />
        </g>
        <defs>
          <filter id="filter0_f_5_353" x="-470" y="-113" width="1183" height="969" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_5_353" />
          </filter>
        </defs>
      </svg>
      <main className='main-wrapper flex flex-col gap-[50px] items-start mx-[100px]'>
        <div className='main-title'>
          Welcome, Alex!
        </div>
        <div>
          Let's begin your journey towards understanding and managing your pain more effectively together.
        </div>
        <Link href="/carousel">
          <button className='btn-1 transition-color'>
            Let's start
          </button>
        </Link>
      </main>
    </>
  )
}
