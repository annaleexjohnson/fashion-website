import MovingBtn from "../assets/MovingBtn"

const SpringCampaign = () => {
    return(
        <div className="relative flex flex-col flex-wrap min-w-[91vw] m-w-[100vw] h-[100vh] bg-black text-white
        md:min-w-[91vw] md:flex-row">
            {/* image */}
            <div className="h-[20vh] w-[100vw] bg-model6 bg-center bg-cover mt-2
            md:basis-1/2 md:h-[100vh] md:w-[100%] md:mt-0"></div>


            {/* paragraphs */}
            <div className="flex flex-col content-end h-[50vh] w-[80vw] p-2 text-xs
            md:flex-row md:flex-wrap md:justify-end md:content-start md:basis-1/2 md:h-[100vh]
            md:text-sm lg:text-xs xl:text-sm">
                {/* paragraph 1 */}
                <div className="basis-1/2 md:p-8 ">
                    <h3 className="font-bold pb-4">OUR PLEDGE</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, maiores maxime aperiam culpa corporis a? Omnis dignissimos quam cupiditate cumque ea odit fugit? Accusantium autem atque, ducimus quaerat totam blanditiis?</p>
                </div>
                {/* paragraph 2 */}
                <div className="basis-1/2 md:p-8">
                    <h3 className="font-bold pb-4">DO BETTER BY OUR PLANET.</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, maiores maxime aperiam culpa corporis a? Omnis dignissimos quam cupiditate cumque ea odit fugit? Accusantium autem atque, ducimus quaerat totam blanditiis?</p>
                </div>
                {/* paragraph 3 */}
                <div className="basis-1/2 md:p-8">
                    <h3 className="font-bold pb-4">THE SPRING MOVE</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, maiores maxime aperiam culpa corporis a? Omnis dignissimos quam cupiditate cumque ea odit fugit? Accusantium autem atque, ducimus quaerat totam blanditiis?</p>
                    <br/>
                    <MovingBtn darkMode={true} text="WATCH THE FILM / WATCH THE FILM"/>
                </div>
            </div>


            {/* title text */}
            <div className="flex flex-col justify-end p-2
            md:absolute md:bottom-0 md:right-[5%] md:w-[60vw] md:mr-[10vw] lg:mr-0">

                <div className="text-lg md:text-10xl md:leading-[6rem] md:w-[45vw] 
                lg:text-[5rem] lg:leading-[4rem] xl:text-10xl xl:leading-[5rem]
                2xl:text-15xl 2xl:leading-[8rem]">
                    <h1>KOVE&#174;</h1>
                    <h1 className="md:text-right">SPRING</h1>
                    <h1>CAMPAIGN</h1>
                </div>

                <div className="flex flex-wrap flex-row justify-end">
                    <span className="font-playfair text-3xl md:text-[5rem] 2xl:text-15xl">/K-22</span>
                    <span className="text-xs self-end pb-8 pl-4 md:text-base 2xl:text-lg">
                        VORLIF <br/>
                        OUTWEAR <br/>
                        COL.
                    </span>
                </div>

            </div>

        </div>
    )
}

export default SpringCampaign