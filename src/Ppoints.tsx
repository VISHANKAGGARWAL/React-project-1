export function Ppoints() {
  return (
    <>
      <div className=" flex flex-col md:flex-row w-full p-[20px] h-auto md:h-[620px] max-w-[1400px] mx-auto">
        {/* input left  */}
        <div
          className="w-full flex flex-col  justify-center items-center h-full 
    "
        >
          <div className="flex flex-col    gap-[25px] max-w-[440px]   ">
            <div className="flex  flex-col gap-[20px] ">
              <div className="flex  gap-[10px]  ">
                <img src="start.png" className="h-[32px] w-[32px]" />
                <div className="h-[32px] max-w-[398px] font-bold text-[24px] ">
                  One line header
                </div>
              </div>
              <div className="text-[#545454]">
                Computers are infected with Adware and spyware. Such software is
                rarely accompanied by uninstall utility.
              </div>
            </div>
            <div className="flex  flex-col gap-[20px] ">
              <div className="flex  gap-[10px]  ">
                <img src="start.png" className="h-[32px] w-[32px]" />
                <div className="h-[32px] max-w-[398px] font-bold text-[24px] ">
                  One line header
                </div>
              </div>
              <div className="text-[#545454]">
                Computers are infected with Adware and spyware. Such software is
                rarely accompanied by uninstall utility.
              </div>
            </div>
            <div className="flex  flex-col gap-[20px] ">
              <div className="flex  gap-[10px]  ">
                <img src="start.png" className="h-[32px] w-[32px]" />
                <div className="h-[32px] max-w-[398px] font-bold text-[24px] ">
                  One line header
                </div>
              </div>
              <div className="text-[#545454]">
                Computers are infected with Adware and spyware. Such software is
                rarely accompanied by uninstall utility.
              </div>
            </div>
          </div>
        </div>
        {/* ---------image- right-------- */}
        <div className="w-full h-full flex flex-col justify-center">
          <img
            src="image1.png"
            className=" max-w-[650px] w-full object-cover object-left-top"
          />
        </div>
      </div>
    </>
  );
}
