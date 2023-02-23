const HomePage = () => {
    return(
        <div className="flex flex-wrap flex-col content-center min-w-[91vw] h-[100vh] ml-[9vw]">
            {/* title */}
            <div className="h-[20vh] flex flex-row justify-between px-4">
                <h1 className="text-10xl ">VORL&Iacute;F</h1>
                <span className="text-right text-sm tracking-wide pt-4">
                    KOVE 2022 <br/>
                    DESIGNED TO ENDURE
                </span>
            </div>
            {/* image */}
            <div className="w-[95%] h-[50vh] bg-model1 bg-[center_bottom_10%] bg-cover"></div>

            <div className="flex h-[30vh] justify-between">
                {/* left side */}
                <div className="flex flex-wrap basis-1/2 flex-col justify-between">
                    <a href="/" className="tracking-wide pt-2">VIEW LOOKBOOK +</a>
                    <h1 className="text-10xl">SPRING</h1>
                </div>
                {/* right side */}
                <div className="flex flex-col justify-between basis-1/2" >
                    <div className="flex justify-between w-[100%]">
                        <h1 className="text-10xl pl-20">/22</h1>
                        <a href="/" className="tracking-wide pt-2">WATCH FILM +</a>
                    </div>
                    <div className="flex justify-between w-[100%] pb-4">
                        <span>
                            OUTERWEAR <br/>
                            COL.
                        </span>
                        <div className="flex">
                            {/* moving text */}
                            <div className=" w-[8rem] h-[2rem] border rounded-md border-black overflow-hidden">
                                <span className="h-[100%] w-[100%] animate-moveText">SHOP COLLECTION / SHOP COLLECTION</span>
                            </div>
                            {/* icon */}
                            <div className=" flex flex-wrap justify-center content-center w-[2rem] h-[2rem] border rounded-md border-black">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                                </svg>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomePage