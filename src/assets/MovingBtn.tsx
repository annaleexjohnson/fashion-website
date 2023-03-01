import IconLogo from "./IconLogo"

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
                <IconLogo />
            </div>
        </div>
        
    )
}

export default MovingBtn