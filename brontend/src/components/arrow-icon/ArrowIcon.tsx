

const ArrowIcon = ({ rotate, onClick }: { rotate: boolean, onClick: any }) => {
    return (
        <div className="h-full flex flex-col justify-center">
            <div className={`${rotate ? 'rotate-180 mt-10' : ''} color-black rounded-full w-8 h-8 cursor-pointer`} onClick={onClick}>
                <svg width="28" height="52" viewBox="0 0 28 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 51L26 26L0.999998 1" stroke="currentColor" stroke-width="2" />
                </svg>
            </div>
        </div>
    )
}

export default ArrowIcon