import MovingBtn from "../assets/MovingBtn"

const Page4 = () => {
    return(
        <div className="relative flex flex-row flex-wrap min-w-[91vw] h-[100vh]">
            {/* image */}
            <div className="basis-1/2 h-[100vh] bg-model6 bg-center bg-cover"></div>

            {/* paragraphs */}
            <div className="flex flex-wrap flex-row basis-1/2 justify-end content-start h-[100vh] text-xs">
                {/* paragraph 1 */}
                <div className="basis-1/2 p-8 ">
                    <h3 className="font-bold pb-4">OUR PLEDGE</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, maiores maxime aperiam culpa corporis a? Omnis dignissimos quam cupiditate cumque ea odit fugit? Accusantium autem atque, ducimus quaerat totam blanditiis?</p>
                </div>
                {/* paragraph 2 */}
                <div className="basis-1/2 p-8">
                    <h3 className="font-bold pb-4">DO BETTER BY OUR PLANET.</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, maiores maxime aperiam culpa corporis a? Omnis dignissimos quam cupiditate cumque ea odit fugit? Accusantium autem atque, ducimus quaerat totam blanditiis?</p>
                </div>
                {/* paragraph 3 */}
                <div className="basis-1/2 p-8">
                    <h3 className="font-bold pb-4">THE SPRING MOVE</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, maiores maxime aperiam culpa corporis a? Omnis dignissimos quam cupiditate cumque ea odit fugit? Accusantium autem atque, ducimus quaerat totam blanditiis?</p>
                    <MovingBtn />
                </div>
            </div>

            {/* title text */}
            <div className="absolute bottom-0 right-[5%] flex flex-col justify-end w-[60vw]">
                <div className="text-10xl leading-[6rem] w-[50vw]">
                    <h1>KOVE&#174;</h1>
                    <h1 className="text-right">SPRING</h1>
                    <h1>CAMPAIGN</h1>
                </div>
                <div className="flex flex-wrap flex-row justify-end">
                    <span className="font-playfair text-10xl">/K-22</span>
                    <span className="text-xs self-end pb-8 pl-4">
                        VORLIF <br/>
                        OUTWEAR <br/>
                        COL.
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Page4