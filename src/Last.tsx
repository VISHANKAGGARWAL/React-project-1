export function Last() {
  return (
    <>
      <div className="h-auto md:h-[220px] w-full flex flex-col md:flex-row items-center gap-[20px]  justify-between max-w-[1400px] mx-auto">
        <div className="flex justify-start items-center">
          <img src="box.png " className="h-[48px] w-[48px]" />
        </div>
        <div className="flex flex-col  gap-[10px] justify-center items-center w-full">
          <div className="flex flex-wrap font-bold gap-[30px] w-full justify-center  ">
            <div>First Link</div>
            <div>Second Link</div>
            <div>Third Link</div>
            <div>Fourth Link</div>
            <div>Fifth Link</div>
          </div>
          <div className="h-[18px] px-[50px] text-center text-[13px] text-[#969696]">
            © Copyright 2020 Pixsellz - Premium UI Goods for Designers 1
          </div>
        </div>
        <div className="flex justify-center items-center  py-[10px]">
          <img src="Social.png" className="h-[30px] " />
        </div>
      </div>
    </>
  );
}
