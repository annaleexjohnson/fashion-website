const MovingBtn = ()=>{
    return(
        <div className="flex p-4">
            <div className=" w-[8rem] h-[2rem] text-base border rounded-md border-black overflow-x-hidden">
                <span className="inline-block h-[100%] w-[100%] whitespace-nowrap 
                animate-[moveTextInfinite_5s_linear_infinite] play hover:pause">
                    SHOP COLLECTION / SHOP COLLECTION
                </span>
            </div>
            <div className=" flex flex-wrap justify-center content-center w-[2rem] h-[2rem] border rounded-md border-black">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                </svg>
            </div>
        </div>
        
    )
}

export default MovingBtn