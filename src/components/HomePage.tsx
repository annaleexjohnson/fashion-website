import MovingBtn from "../assets/MovingBtn"

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
                        <MovingBtn />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomePage