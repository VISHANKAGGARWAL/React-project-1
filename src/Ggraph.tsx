export function Ggraph() {
  return (
    <>
      <div className="flex flex-col justify-center gap-(20px) md:flex-row w-full p-[30px] h-auto md:h-[480px]  gap-[110px]  items-center max-w-[1600px] mx-auto">
        <div
          className="h-[250px] w-[250px] flex justify-center items-center rounded-full
         bg-[conic-gradient(#24AFB5_0%_28%,#24AFB533_28%_50%,#DBDBDB_50%_87%,#F7F7F7_87%_100%)] "
        >
          <div className="h-[120px] w-[120px] bg-white rounded-full "></div>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-[20px]   ">
            <div className="h-[24px] w-[24px] bg-[#24AFB5] rounded-full mt-[15px]  "></div>
            <div className="flex flex-col">
              <div className="text-[36px] w-[160px] font-bold ">28%</div>
              <div className=" text-bold text-[15px]">Downloads</div>
            </div>

            <div className="h-[24px] w-[24px] bg-[#24AFB5] rounded-full mt-[15px]"></div>
            <div className="flex flex-col ">
              <div className="text-[36px] w-[160px] font-bold">22%</div>
              <div className="h-[46px] w-[160px] text-[15px]">Downloads</div>
            </div>
          </div>
          <div className="flex  gap-[20px] ">
            <div className="h-[24px] w-[24px] bg-[#DBDBDB] rounded-full flex flex-col mt-[15px] "></div>
            <div className="flex flex-col">
              <div className="text-[36px] w-[160px] font-bold">37%</div>
              <div className="h-[46px] w-[160px] text-[15px]">Downloads</div>
            </div>

            <div className="h-[24px] w-[24px] bg-[#F7F7F7] rounded-full mt-[15px]"></div>
            <div className="flex flex-col">
              <div className="text-[36px] w-[160px] font-bold">13%</div>
              <div className="h-[46px] w-[160px] text-[15px] ">Downloads</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[25px]">
          <div className="h-[110px] w-[350px]  text-[#585757] text-[15px]">
            {" "}
            The quality of today’s video game was not at all there when video
            game first conceptualized and played ever. During the formulative
            years, video games were created by using various interactive
            electronic devices with various display.
          </div>
          <div className="h-[36px] w-[360px] text-[#969696]">
            Video games were created by using various interactive electronic
            devices with various display.
          </div>
        </div>
      </div>
    </>
  );
}
