export function Block() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-[30px] ">
        <div className="flex flex-col gap-[30px] ">
          {" "}
          <div className="h-[60px] w-auto max-w-[730px] font-bold text-[48px] text-center ">
            Short heading
          </div>
          <div className="h-[60px] max-w-[730px] text-[#585757] text-center">
            Each and every one of us has that moment when we are suddenly
            stunned when we come face to face with the enormity of the universe.
          </div>
        </div>
        <div className="md:flex grid grid-cols-2 gap-[70px] ">
          <div className="flex flex-col items-center">
            <img src="start.png" className="h-[64px] w-[64px]" />
            <div className="font-bold ">Feature One</div>
          </div>
          <div className="flex flex-col items-center">
            <img src="start.png" className="h-[64px] w-[64px]" />
            <div className="font-bold">Feature two</div>
          </div>
          <div className="flex flex-col items-center">
            <img src="start.png" className="h-[64px] w-[64px]" />
            <div className="font-bold">Feature three</div>
          </div>
          <div className="flex flex-col items-center">
            <img src="start.png" className="h-[64px] w-[64px]" />
            <div className="font-bold">Feature fore</div>
          </div>
        </div>
        <div className="max-w-[1180px] w-full p-[30px]">
          <img
            src="image1.png"
            className="max-w-[1180px] w-full md:h-[500px]"
          />
        </div>
      </div>
    </>
  );
}
