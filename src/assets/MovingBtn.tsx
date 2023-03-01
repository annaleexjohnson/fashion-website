import IconLogo from "./IconLogo"

interface Props {
    text: string;
    darkMode: boolean;
}

const MovingBtn = (props: Props)=>{
    return(
        <div className="flex">
            <div style={ props.darkMode ? {border: '1px solid white'} : {} } 
            className="flex w-[30vw] md:w-[8rem] lg:h-[2rem] 2xl:w-[10rem] 2xl:h-[3rem] 
            text-base border rounded-md border-black overflow-x-hidden">
                <span className="self-center inline-block w-[100%] whitespace-nowrap
                 animate-[moveTextInfinite_5s_linear_infinite] play hover:pause 2xl:text-lg">
                    {props.text}
                </span>
            </div>
            <div style={ props.darkMode ? {border: '1px solid white'} : {} }  
            className=" flex flex-wrap justify-center content-center w-[2rem] h-[2rem] 2xl:w-[3rem] 2xl:h-[3rem] border rounded-md border-black">
                <IconLogo />
            </div>
        </div>
        
    )
}

export default MovingBtn
