const Photogrid = () => {
    return(
        <div className="flex flex-wrap flex-row md:gap-2 justify-center h-[100vh] min-w-[91vw] bg-black overflow-hidden">
            <div className="flex flex-col basis-[30%] p-2 gap-4 -translate-y-[25%] animate-[movePics25_5s_linear_1]">
                <div className="h-[50vh] bg-model1 bg-center bg-cover"></div>
                <div className="h-[50vh] bg-model2 bg-center bg-cover"></div>
                <div className="h-[50vh] bg-landscape1 bg-center bg-cover"></div>
            </div>
            <div className="flex flex-col basis-[30%] p-2 gap-4 -translate-y-[10%]">
                <div className="h-[50vh] bg-landscape2 bg-center bg-cover"></div>
                <div className="h-[50vh] bg-model3 bg-center bg-cover"></div>
                <div className="h-[50vh] bg-landscape3 bg-center bg-cover"></div>
                <div className="h-[50vh] bg-model4 bg-center bg-cover"></div>
            </div>
            <div className="flex flex-col basis-[30%] p-2 gap-4 -translate-y-[25%] animate-[movePics25_5s_linear_1]">
                <div className="h-[50vh] bg-landscape4 bg-center bg-cover"></div>
                <div className="h-[50vh] bg-model5 bg-center bg-cover"></div>
                <div className="h-[50vh] bg-model6 bg-center bg-cover"></div>
            </div>
        </div>
    )
}

export default Photogrid