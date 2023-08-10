export function Price() {
  return (
    <>
      <div className="h-auto md:h-[650px] flex flex-col md:flex-row justify-center items-center gap-[40px]  ">
        <div className="py-[30px] gap-[30px] rounded-[10px] h-[450px] w-[350px] border border-black  flex flex-col items-center">
          <div>
            <div className="text-[20px] h-[26px] w-full text-center font-bold">
              Start
            </div>
            <div className="text-[48px] font-bold text-center h-[60px] w-[100px]">
              Free
            </div>
          </div>

          <div className="h-[86px] w-[220px]">
            <div className="text-[15px] text-[#585757] text-center">
              Long Feature One
            </div>
            <div className="text-[15px] text-[#585757] text-center">
              Feature Two
            </div>
            <div className="text-[15px] text-[#585757] text-center">
              Long Feature Three
            </div>
          </div>
          <div className=" bg-slate-300  rounded-[10px] px-[16px] py-[12px]">
            Button
          </div>
          <div className="text-center">
            Two line long feature example with text description for your project
          </div>
        </div>
        {/* 2box */}
        <div className="py-[30px] gap-[30px] h-[450px]  rounded-[10px] w-[350px] border border-green-500  flex flex-col items-center">
          <div>
            <div className="text-[20px] h-[26px] w-full text-center font-bold">
              Pro
            </div>
            <div className=" flex   h-[60px] w-[100px] items-center gap-[5px]">
              <div className="text-[48px] font-bold text-center">$38</div>
              <div className="text-[15px]">/mo</div>
            </div>
          </div>

          <div className="h-[86px] w-[220px]">
            <div className="text-[15px] text-[#585757] text-center">
              Long Feature One
            </div>
            <div className="text-[15px] text-[#585757] text-center">
              Feature Two
            </div>
            <div className="text-[15px] text-[#585757] text-center">
              Long Feature Three
            </div>
          </div>
          <div className=" bg-[#24AFB5]  rounded-[10px] py-[12px] px-[16px]">
            Button
          </div>
          <div className="text-center">
            Two line long feature example with text description for your project
          </div>
        </div>
        {/* 3box */}
        <div className="py-[30px] gap-[30px] h-[450px]  rounded-[10px] w-[350px] border border-black text-slate-100 flex flex-col items-center">
          <div>
            <div className="text-[20px] h-[26px] w-full text-center font-bold text-black">
              Business
            </div>
            <div className=" h-[60px] w-[100px]  text-black flex items-center gap-[5px]">
              <div className="text-[48px] font-bold text-center ">$78</div>
              <div>/mo</div>
            </div>
          </div>

          <div className="h-[86px] w-[220px]">
            <div className="text-[15px] text-[#585757] text-center">
              Long Feature One
            </div>
            <div className="text-[15px] text-[#585757] text-center">
              Feature Two
            </div>
            <div className="text-[15px] text-[#585757] text-center">
              Long Feature Three
            </div>
          </div>
          <div className=" bg-slate-300 text-black  rounded-[10px] px-[16px] py-[12px]">
            Button
          </div>
          <div className="text-center text-black">
            Two line long feature example with text description for your project
          </div>
        </div>
      </div>
    </>
  );
}
