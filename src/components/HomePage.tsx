import MovingBtn from "../assets/MovingBtn"

const HomePage = () => {
    return(
        <div className="flex flex-wrap flex-col justify-center w-[100vw] m-w-[100vw] h-[100vh] mt-[10vh] p-2
        md:w-[100vw] md:min-w-[91vw] md:h-[100vh] md:ml-[9vw] md:content-center md:justify-start md:gap-10 md:mt-0
        lg:gap-0 lg:justify-start ">


            {/* title */}
            <div className="h-[15vh] flex flex-row justify-between 
            md:h-[10vh] md:px-4 lg:h-[20vh]">
                <h1 className="text-4xl md:text-10xl 2xl:text-15xl">
                    VORL&Iacute;F
                </h1>
                <span className="text-right text-sm tracking-wide pt-4 md:text-base 2xl:text-lg">
                    KOVE 2022 <br/>
                    DESIGNED TO ENDURE
                </span>
            </div>


            {/* image */}
            <div className=" w-[100%] md:w-[95%] h-[50vh] bg-model1 bg-[center_bottom_15%] bg-cover"></div>


            {/* bottom text */}
            <div className="flex h-[20vh]
            md:h-[15vh] md-justify-between lg:h-[25vh]">

                {/* left side */}
                <div className="flex basis-1/2 flex-col justify-between">
                    <a href="/" className="text-xs tracking-wide pt-2 md:text-base lg:text-sm 2xl:text-lg">
                        VIEW LOOKBOOK +
                    </a>
                    <h1 className="text-3xl md:text-[4rem] lg:text-10xl 2xl:text-15xl">
                        SPRING
                    </h1>
                </div>

                {/* right side */}
                <div className="flex flex-col justify-between basis-1/2" >

                    <div className="flex justify-between w-[100%]">
                        <h1 className="text-3xl md:text-[4rem] md:pl-20 xl:text-10xl 2xl:text-15xl">
                            /22
                        </h1>
                        <a href="/" className="text-xs tracking-wide pt-2 md:text-base lg:text-sm 2xl:text-lg">
                            WATCH FILM +
                        </a>
                    </div>

                    <div className="relative flex flex-col justify-between w-[100%] text-xs
                    md:flex-row md:text-base md:pb-4 2xl:text-lg">
                        <span>
                            OUTERWEAR <br/>
                            COL.
                        </span>
                        <MovingBtn darkMode={false} text="SHOP COLLECTION / SHOP COLLECTION"/>
                    </div>
                    
                </div>

            </div>

        </div>
    )
}

export default HomePage