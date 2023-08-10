export function Twolast() {
  return (
    <>
      <div className="flex flex-col md:flex-row h-auto md:h-[310px] p-[30px] w-full max-w-[1400px] mx-auto items-center justify-center gap-[80px]">
        <div className="flex flex-col gap-[10px]">
          <div className="font-bold h-[32px] max-w-[445px] text-[24px]">
            Heading
          </div>
          <div className="text-[15px] text-[#585757] h-[45px] max-w-[445px]">
            In the history of modern astronomy, there is probably no one greater
            leap forward than the building and launch.
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full  gap-[20px] max-w-[450px]">
          <input
            type="text"
            placeholder="Email"
            className="h-[48px] w-full  rounded-[6px] border-[#DBDBDB] border outline-none px-[11px]"
          />
          <div className=" bg-[#24AFB5] rounded-[10px] px-[16px] py-[11px] text-white w-min">
            Subscribe
          </div>
        </div>
      </div>
    </>
  );
}
