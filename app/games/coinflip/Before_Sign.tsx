"use client";
import React from "react";
import Link from "next/link";
export default function Before_Signin() {
  
  return (
    <div className=" flex flex-col pb-3 ">
      <div className=" pt-[19px] flex justify-center items-center">
        <div className="w-[311.24px] flex justify-center  h-[16.20px] bg-[#203744] rounded-[5px] border border-green-500">
          <div className="text-center  text-white text-xs font-normal flex items-center">
            COMMISSION SYSTEM TOTAL 8%
          </div>
        </div>
      </div>
      <div className=" pl-2 text-white text-lg font-black font-['Proxima Nova Condensed']">
        Coin Flip
      </div>
      <div className=" flex flex-row items-center justify-end pr-[1.5%]    ">
        <div className="text-center text-white text-sm font-black font-['Proxima Nova Condensed'] pr-2">
          Choose Side:
        </div>

        <button>
          <img
          alt='Image'
          className="w-[29px] h-[29px] opacity-50 hover:opacity-100 hover:border-1  hover:border-yellow-300 rounded-full"
            src="https://s3-alpha-sig.figma.com/img/f162/9d31/89b6bf5603527119ec43872bcda3110a?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pzFL1JCbswcTaROgHmgElw8XPPCe1tLrRtG-VhPxIiHwZFhaRL-0RJQU08oNjoT~JExJv3ZaXmvpOYXkLu0ESWuEwhR5SzlvRdGzuQnug4pAml6OBhJSdg7oqCUjhzdBOXTf8gWPrDast1YIXBYpPmdKJXNwv5tk0UfYCm3SxKy33uKS5tpkvV8~gM4TT6QCSNqD9eFRCw7bDczZKgTyGe3Urylas2EbimY6DCrSai7yprTbE21WHC4d~MiOxv~Q93u7-vcL2bZWtfZah0AU66k-cgmTgVhiqnk7m9hs2QWvvgmZnsws31G4ytPMMKDrkuwl8ZeMDftTPektgzlA8Q__"
          />
        </button>
        <button className=" mr-2">
          <img
          alt='Image'
          className="w-[29px] h-[29px] opacity-50 hover:opacity-100 hover:border-1  hover:border-yellow-300 rounded-full"
            src="https://s3-alpha-sig.figma.com/img/11e3/1215/af1366fef21ce8a9ce7f33a887c6e0af?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h8F8XB5lN~QNQ39Ab-c8GutYHsDNpBDZ348IE6D7YuxId~ym-g36p77alUOEJ9U8wOZPzu0in3STRDqSTsgZnHON8RF3c2HnuHo4wobPHiOY9Q91GcZRryfAZZMbS3zT739c4BP-xT-yHKc~6FLei6TCFpG29yHIjvhzctLwzG7420EZ1TAxSZsfVKbfhZpgcNWGy25L-YZZ7UtE7EMYlZ3LUZc9r2XnEXFrnRwOclBtz3EF-J~WclWQ2phMRKGtbauiTUIieJ489W3iIp-yZQOUziKadHHfh4B8U~4yyOxkKtEL1LMr-99kaGWWhzFZD5Wf2vTFIMp~-DGIRYhC-w__"
          />
        </button>

        <div className="w-[109px] h-[30px] bg-[#203744] flex items-center gap-x-1 pl-1 rounded-[5px] ">
          <img
          alt='Image'
          className="w-4 h-4"
            src="https://s3-alpha-sig.figma.com/img/df86/e5c7/83172474e8c51f8d21ca9ba72aec1f4d?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KJYvr0CXy3-78WfJDVX84Sgu-Egef6fadtAnD04UAkF~YwJGaFHplM58mAjjGTBB9RgyPklhzQ6DByCPJ~SHUTiaSo4IV81bt~ySq9ppD9dfOV-b32RUlhYeVQIR1URCLkGNE8s9zGx5BTVt9-dDLSkTgYakW-7tnSsPVqd4IQabdPltrrIL4STedX-eNPIEjz3spnMOgIQ2GcugGt4k4B1Z4QI7h~GYP8PPLpONUDO4afOj2jZWjEvjfkI~jwEk1xwks6CgYSHV8WjhoMn~nNoQAba~3loyZO49jtboTB~mUUDSCr6KxgQTtS~RoQNHKluO-vh6BaJc-7rbwGqLgg__"
          />
          <div className="text-center text-white text-sm font-light font-['Proxima Nova Condensed']">
            Min. 5
          </div>
        </div>
      </div>
      <button>
        <div className=" flex justify-end pr-[1.5%] pt-2 pb-2">
          <div className="w-[178px] h-[26px] bg-[#F37543] rounded-[5px]">
            <div className=" text-white text-base font-bold  text-[12px] justify-center flex">
              Sign in to create game
            </div>
          </div>
        </div>
      </button>

      <div className=" pl-2 text-start text-white text-lg font-black font-['Proxima Nova Condensed']">
        MY GAMES
      </div>

      <div className=" flex flex-row justify-center gap-x-1 pl-2 pr-2">
        <div className="w-screen h-[122px] bg-[#203744] rounded-[5px]"></div>
        <div className="w-screen h-[122px] bg-[#203744] rounded-[5px]"></div>
      </div>

      <div className=" pl-2 text-start text-white text-lg font-black font-['Proxima Nova Condensed']">
        OPEN GAMES
      </div>

      <div className=" flex flex-row justify-center gap-x-1 pb-1 pl-2 pr-2">
        <div className="w-screen h-[122px] bg-[#203744] rounded-[5px] flex justify-center items-center">
          <div className="w-[171px] h-[85.14px] relative">
            <div className="w-[60px] h-[60px] left-[5px] top-[15px] absolute bg-zinc-300 rounded-full"></div>
            <img
            alt='Image'
            className="w-[22px] h-[22px]"
              src="https://s3-alpha-sig.figma.com/img/f162/9d31/89b6bf5603527119ec43872bcda3110a?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pzFL1JCbswcTaROgHmgElw8XPPCe1tLrRtG-VhPxIiHwZFhaRL-0RJQU08oNjoT~JExJv3ZaXmvpOYXkLu0ESWuEwhR5SzlvRdGzuQnug4pAml6OBhJSdg7oqCUjhzdBOXTf8gWPrDast1YIXBYpPmdKJXNwv5tk0UfYCm3SxKy33uKS5tpkvV8~gM4TT6QCSNqD9eFRCw7bDczZKgTyGe3Urylas2EbimY6DCrSai7yprTbE21WHC4d~MiOxv~Q93u7-vcL2bZWtfZah0AU66k-cgmTgVhiqnk7m9hs2QWvvgmZnsws31G4ytPMMKDrkuwl8ZeMDftTPektgzlA8Q__"
            />

            <div className="w-[58px] h-4 left-[5px] top-[66px] absolute">
              <div className="w-[58px] h-4 left-0 top-0 absolute bg-slate-800"></div>
              <img
              alt='Image'
              className="w-[14px] h-[14px] left-[0.48px] top-[2.78px] absolute"
                src="https://s3-alpha-sig.figma.com/img/df86/e5c7/83172474e8c51f8d21ca9ba72aec1f4d?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KJYvr0CXy3-78WfJDVX84Sgu-Egef6fadtAnD04UAkF~YwJGaFHplM58mAjjGTBB9RgyPklhzQ6DByCPJ~SHUTiaSo4IV81bt~ySq9ppD9dfOV-b32RUlhYeVQIR1URCLkGNE8s9zGx5BTVt9-dDLSkTgYakW-7tnSsPVqd4IQabdPltrrIL4STedX-eNPIEjz3spnMOgIQ2GcugGt4k4B1Z4QI7h~GYP8PPLpONUDO4afOj2jZWjEvjfkI~jwEk1xwks6CgYSHV8WjhoMn~nNoQAba~3loyZO49jtboTB~mUUDSCr6KxgQTtS~RoQNHKluO-vh6BaJc-7rbwGqLgg__"
              />
              <div className="left-[19px] top-[1px] absolute text-center text-green-500 text-xs font-black font-['Proxima Nova Condensed']">
                1.5k
              </div>
            </div>
            <img
            alt='Image'
            className="w-20 h-[77.14px] left-[46px] top-[8px] absolute"
              src="https://s3-alpha-sig.figma.com/img/6edb/105e/d34c796644255950536e4a428170a6ca?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fdxH35G0wckFTftxvGfga9S-o0U~UuPPnKEd8~bgLbv2OQbGs9iLqPzNTfBpMlq2QKHc7-ITowYlGb02MRS6YmTOGF7XQnHUPw2oYhyV-TrD6Pqsw22FdAeK3HvEhsT25mnXxP9rUJJp4tpm8gymlKBjZyKt13DOVS8VZ8Y1os7r6MxNTPxvfLVIreg3bFWoRwsi5edD8o91pVNZgFzlqbMeNRYt-difkwhrJjFWfJ30h8oEpA4s2NK57YM7dL-TVQ~ZNsIBRiopPgHqWE6kU8JaMX~WUJim0AuuoewTMX3bf5kB9F6~VRQXIyxs0w6bfb5LonTQQqBLSgqhTlXrYw__"
            />
            <div className="w-[60px] h-[60px] left-[106px] top-[15px] absolute bg-zinc-300 rounded-full"></div>
            <div className="w-[58px] h-4 left-[107px] top-[66px] absolute">
              <div className="w-[58px] h-4 left-0 top-0 absolute bg-slate-800"></div>
              <img
              alt='Image'
              className="w-[14px] h-[14px] left-[0.48px] top-[2.78px] absolute"
                src="https://s3-alpha-sig.figma.com/img/df86/e5c7/83172474e8c51f8d21ca9ba72aec1f4d?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KJYvr0CXy3-78WfJDVX84Sgu-Egef6fadtAnD04UAkF~YwJGaFHplM58mAjjGTBB9RgyPklhzQ6DByCPJ~SHUTiaSo4IV81bt~ySq9ppD9dfOV-b32RUlhYeVQIR1URCLkGNE8s9zGx5BTVt9-dDLSkTgYakW-7tnSsPVqd4IQabdPltrrIL4STedX-eNPIEjz3spnMOgIQ2GcugGt4k4B1Z4QI7h~GYP8PPLpONUDO4afOj2jZWjEvjfkI~jwEk1xwks6CgYSHV8WjhoMn~nNoQAba~3loyZO49jtboTB~mUUDSCr6KxgQTtS~RoQNHKluO-vh6BaJc-7rbwGqLgg__"
              />
              <div className="left-[19px] top-[1px] absolute text-center text-green-500 text-xs font-black font-['Proxima Nova Condensed']">
                1.5k
              </div>
            </div>

            <img
            alt='Image'
            className="w-[22px] h-[22px] left-[149px] top-0 absolute"
              src="https://s3-alpha-sig.figma.com/img/ae2e/503a/368e6c68db79f0f6d6c5d18a5640ea0b?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vy2T0AjY1p4FfHYUPJ~27PbgRrtSubW~Ne41bVCTX-0A0E1WbNw6JkxLOdcpdUlrz~DqdcK6hliyRHh8F~r5ifFs4xvd0u9hs9Ya3kp5xXC15~5p3uEDMOS2dLVI4NDUmJL24fQC9b7xkwjRPU6MGKDp~h4sSm7vK6WNUVpu9yGwYrxhHQLSJQmYWkV9yZ5QRlHd9oNpgEOl86ndipZQP83ZQ9L~IzfOZ15xJS8SvpnV~IKAADanSbF~nzVmLV8xZTbsr1pMUiCTuUOHMhDPcsFpwxjdqHwM4PZKKOeOyTv8VcgwX44IT012vQOaG8rnMO9Z8SsF6ZqSL1Z3QWxa~A__"
            />
          </div>
        </div>
        <div className="w-screen h-[122px] bg-[#203744] rounded-[5px] flex justify-center items-center  ">
          <div className="w-[171px] h-[85.14px] relative">
            <div className="w-[61px] h-[47px] left-[105px] top-[22px] absolute bg-[#F37543] rounded-[5px]"></div>
            <div className="w-[60px] h-[60px] left-[5px] top-[15px] absolute bg-zinc-300 rounded-full"></div>
            <img
            alt='Image'
            className="w-[22px] h-[22px]"
              src="https://s3-alpha-sig.figma.com/img/f162/9d31/89b6bf5603527119ec43872bcda3110a?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pzFL1JCbswcTaROgHmgElw8XPPCe1tLrRtG-VhPxIiHwZFhaRL-0RJQU08oNjoT~JExJv3ZaXmvpOYXkLu0ESWuEwhR5SzlvRdGzuQnug4pAml6OBhJSdg7oqCUjhzdBOXTf8gWPrDast1YIXBYpPmdKJXNwv5tk0UfYCm3SxKy33uKS5tpkvV8~gM4TT6QCSNqD9eFRCw7bDczZKgTyGe3Urylas2EbimY6DCrSai7yprTbE21WHC4d~MiOxv~Q93u7-vcL2bZWtfZah0AU66k-cgmTgVhiqnk7m9hs2QWvvgmZnsws31G4ytPMMKDrkuwl8ZeMDftTPektgzlA8Q__"
            />
            <div className="w-[58px] h-4 left-[5px] top-[66px] absolute">
              <div className="w-[58px] h-4 left-0 top-0 absolute bg-slate-800"></div>
              <img
              alt='Image'
              className="w-[14px] h-[14px] left-[0.48px] top-[2.78px] absolute"
                src="https://s3-alpha-sig.figma.com/img/df86/e5c7/83172474e8c51f8d21ca9ba72aec1f4d?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KJYvr0CXy3-78WfJDVX84Sgu-Egef6fadtAnD04UAkF~YwJGaFHplM58mAjjGTBB9RgyPklhzQ6DByCPJ~SHUTiaSo4IV81bt~ySq9ppD9dfOV-b32RUlhYeVQIR1URCLkGNE8s9zGx5BTVt9-dDLSkTgYakW-7tnSsPVqd4IQabdPltrrIL4STedX-eNPIEjz3spnMOgIQ2GcugGt4k4B1Z4QI7h~GYP8PPLpONUDO4afOj2jZWjEvjfkI~jwEk1xwks6CgYSHV8WjhoMn~nNoQAba~3loyZO49jtboTB~mUUDSCr6KxgQTtS~RoQNHKluO-vh6BaJc-7rbwGqLgg__"
              />

              <div className="left-[19px] top-[1px] absolute text-center text-green-500 text-xs font-black font-['Proxima Nova Condensed']">
                1.5k
              </div>
            </div>
            <img
            alt='Image'
            className="w-20 h-[77.14px] left-[46px] top-[8px] absolute"
              src="https://s3-alpha-sig.figma.com/img/6edb/105e/d34c796644255950536e4a428170a6ca?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fdxH35G0wckFTftxvGfga9S-o0U~UuPPnKEd8~bgLbv2OQbGs9iLqPzNTfBpMlq2QKHc7-ITowYlGb02MRS6YmTOGF7XQnHUPw2oYhyV-TrD6Pqsw22FdAeK3HvEhsT25mnXxP9rUJJp4tpm8gymlKBjZyKt13DOVS8VZ8Y1os7r6MxNTPxvfLVIreg3bFWoRwsi5edD8o91pVNZgFzlqbMeNRYt-difkwhrJjFWfJ30h8oEpA4s2NK57YM7dL-TVQ~ZNsIBRiopPgHqWE6kU8JaMX~WUJim0AuuoewTMX3bf5kB9F6~VRQXIyxs0w6bfb5LonTQQqBLSgqhTlXrYw__"
            />
            <img
            alt='Image'
            className="w-[22px] h-[22px] left-[149px] top-0 absolute"
              src="https://s3-alpha-sig.figma.com/img/ae2e/503a/368e6c68db79f0f6d6c5d18a5640ea0b?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vy2T0AjY1p4FfHYUPJ~27PbgRrtSubW~Ne41bVCTX-0A0E1WbNw6JkxLOdcpdUlrz~DqdcK6hliyRHh8F~r5ifFs4xvd0u9hs9Ya3kp5xXC15~5p3uEDMOS2dLVI4NDUmJL24fQC9b7xkwjRPU6MGKDp~h4sSm7vK6WNUVpu9yGwYrxhHQLSJQmYWkV9yZ5QRlHd9oNpgEOl86ndipZQP83ZQ9L~IzfOZ15xJS8SvpnV~IKAADanSbF~nzVmLV8xZTbsr1pMUiCTuUOHMhDPcsFpwxjdqHwM4PZKKOeOyTv8VcgwX44IT012vQOaG8rnMO9Z8SsF6ZqSL1Z3QWxa~A__"
            />
            <div className="left-[109px] top-[21px] absolute text-center text-white text-[22px] font-black font-['Proxima Nova Condensed']">
              JOIN
            </div>
            <div className="left-[119px] top-[39px] absolute text-center text-white text-[22px] font-black font-['Proxima Nova Condensed']">
              1V1
            </div>
          </div>
        </div>
      </div>

      <div className=" flex flex-row justify-center gap-x-1 pl-2 pr-2">
        <div className="w-screen h-[122px] bg-[#203744] rounded-[5px]"></div>
        <div className="w-screen h-[122px] bg-[#203744] rounded-[5px]"></div>
      </div>
    </div>
  );
}
