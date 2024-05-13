import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { getProviders, signIn } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import authOptions from "@/app/auth/authOptions";

export default function Register({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      {/* {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))} */}
      <div className=" flex justify-center h-fit m-auto">
        <div className="w-80 h-full lg:w-[500px] bg-[#203744] rounded-[10px] flex flex-col  ">
          <div className=" flex flex-row justify-end lg:space-x-24 ">
            <div className=" flex flex-col pt-[14px] space-y-2">
              <div className="  text-center text-white text-[19px] font-normal font-['Archivo Black']">
                Create an Account
              </div>
              <div className=" text-center text-[#ABB5CD] text-[17px] font-bold font-['Arial']">
                Step 1/2: Fill out your details
              </div>
            </div>

            <div className="  p-2">
              <button>
                <img
                alt="Image"
                  className="w-[23px] lg:w-[30px] lg:h-[30px]  "
                  src="/wallet/X.png"
                />
              </button>
            </div>
          </div>
          {/* {Email} */}
          <div className=" flex-col flex pl-3 pt-6">
            <div className=" flex items-start gap-x-1">
              <h1 className=" text-start text-zinc-100 text-[15px] lg:text-[20px] font-bold font-['Arial']">
                Email
              </h1>
              <div className="w-[5px] h-[5px] lg:w-[7px] lg:h-[7px] bg-rose-500 rounded-full"></div>
            </div>
            <div>
              <input
                type="email"
                id="email"
                className=' text-white pl-2  w-[300px] h-[30px] lg:w-[470px]  lg:h-[35px] bg-[#092637] rounded-[5px] border-[1px] border-[#D9D9D9] border-opacity-50"'
              />
            </div>
          </div>

          {/* {Email Ends} */}
          {/* {Username} */}
          <div className=" flex-col flex pl-3 pt-4">
            <div className=" flex items-start gap-x-1">
              <div className=" text-start text-zinc-100 text-[15px] lg:text-[20px] font-bold font-['Arial']">
                Username
              </div>
              <div className="w-[5px] h-[5px] lg:w-[7px] lg:h-[7px] bg-rose-500 rounded-full"></div>
            </div>
            <div>
              <input
                type="text"
                id="username"
                className=' text-white pl-2  w-[300px] h-[30px] lg:w-[470px]  lg:h-[35px] bg-[#092637] rounded-[5px] border-[1.5px] border-[#D9D9D9] border-opacity-50"'
              />
            </div>
          </div>

          {/* {Username Ends} */}
          {/* {Password} */}
          <div className=" flex-col flex pl-3 pt-4">
            <div className=" flex items-start gap-x-1">
              <div className=" text-start text-zinc-100 text-[15px] lg:text-[20px] font-bold font-['Arial']">
                Password
              </div>
              <div className="w-[5px] h-[5px] lg:w-[7px] lg:h-[7px] bg-rose-500 rounded-full"></div>
            </div>
            <div className="w-[300px] h-[30px] relative">
              <input
                id="password"
                minLength={5}
                type="password"
                className="w-[300px] h-[30px] lg:w-[470px]  lg:h-[35px] left-0 top-0 absolute text-white pl-2   bg-[#092637] rounded-[5px] border-[2px] border-[#D9D9D9] border-opacity-50"
              />
              <button>
                <img
                alt="Image"
                  className="w-5 h-5 lg:w-6 lg:h-6 left-[269px] lg:left-[440px] top-[5px] absolute"
                  src="/wallet/eye.png"
                />
              </button>
            </div>
          </div>

          {/* {Password Ends} */}
          {/* {Password} */}
          <div className=" flex-col flex pl-3 pt-4">
            <div className=" flex items-start gap-x-1">
              <div className=" text-start text-zinc-100 text-[15px] lg:text-[20px] font-bold font-['Arial']">
                Date of Birth
              </div>
              <div className="w-[5px] h-[5px] lg:w-[7px] lg:h-[7px] bg-rose-500 rounded-full"></div>
            </div>
            <div className="w-[300px] h-[30px] relative">
              <input
                id="date"
                minLength={5}
                type="date"
                className="w-[300px] h-[30px] lg:w-[470px]  lg:h-[35px] left-0 top-0 absolute text-white pl-2 pr-2   bg-[#092637] rounded-[5px] border-[2px] border-[#D9D9D9] border-opacity-50"
              />
            </div>
          </div>

          {/* {Password Ends} */}

          {/* {Continue Button} */}
          <div className=" flex justify-center pt-[16px]">
            <button className="w-[300px] h-[38px] lg:w-[470px]  lg:h-[40px]  bg-[#02FF67] rounded-[5px] flex justify-center items-center">
              <h1 className="   text-center text-slate-900 text-lg font-bold font-['Arial']">
                Continue
              </h1>
            </button>
          </div>
          {/* {Continue End Button} */}

          <div className=" flex justify-center pt-[8px] py-2">
            <div className=" text-white text-[15px] font-bold font-['Arial']">
              OR
            </div>
          </div>

          <div className=" flex justify-center ">
            <button className="w-[300px] h-10  lg:w-[470px] py-2  lg:h-[35px]  bg-slate-600 rounded-[5px] flex justify-center items-center">
              <img
              alt="Image"
                className="w-[55px] h-[55px] left-[124px] "
                src="/wallet/google.png"
              />
            </button>
          </div>

          <div className=" flex justify-center py-3">
            <div className="  flex flex-row items-center space-x-1">
              <button>
                <div className=" text-center text-[#ABB5CD] text-[15px] font-normal font-['Arial']">
                  Already have an account?
                </div>
              </button>
              <button>
                <div className=" text-center text-[#EEEEEE] text-[18px] font-black font-['Arial']">
                  Sign In
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  // If the user is already logged in, redirect.
  // Note: Make sure not to redirect to the same page
  // To avoid an infinite loop!
  if (session) {
    return { redirect: { destination: "/" } };
  }

  const providers = await getProviders();

  console.log(providers,"PPPPPPPPPPPPPPPPPPP")
  return {
    props: { providers: providers ?? [] },
  };
}
