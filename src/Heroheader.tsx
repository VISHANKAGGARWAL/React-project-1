export function Heroheader() {
  return (
    <>
      <div className=" flex flex-col-reverse w-full  h-auto md:h-[600px] max-w-[1400px] mx-auto  md:flex-row ">
        {/* input left  */}
        <div
          className="w-full flex flex-col justify-center items-center h-full  p-[15px]
    "
        >
          <div className="flex flex-col    gap-[25px]   ">
            <div className="h-[60px] w-[40px]  text-[48px] font-bold ">
              Heading
            </div>
            <div className="text-[20px] text-[#585757]">
              Let’s talk a little about what symptoms a slow computer can have.{" "}
            </div>
            <div className="flex flex-col gap-[10px]">
              <input
                type="text"
                placeholder="Name"
                className="h-[48px]  max-w-[440px] w-full rounded-[6px] border-[#DBDBDB] border outline-none px-[11px]"
              />
              <input
                type="text"
                placeholder="Email"
                className="h-[48px] rounded-[6px] max-w-[440px] w-full border-[#DBDBDB] border outline-none px-[10px]"
              />
            </div>
            <button className="bg-[#24AFB5] w-min  rounded-[6px] text-gray-50   text-[20px]  px-[16px] py-[11px]">
              Subscribe
            </button>
            <div className="text-[#969696] text-[13px]">
              No spam, notifications only about new products, updates and
              freebies.
            </div>
          </div>
        </div>
        {/* ---------image- right-------- */}
        <div className="w-full h-full flex flex-col justify-end">
          <img
            src="image1.png"
            className=" h-[500px]  object-cover object-left-top"
          />
        </div>
      </div>
    </>
  );
}
