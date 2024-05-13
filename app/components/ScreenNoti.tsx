"use client";
// import React from 'react'

// export default function ScreenNoti() {
//   return (
//     <div className=' space-y-2'>
//        {/* {Withdraw sent} */}
//        <div className=" flex border-b-4 border-blue-500  ">
//             <div className="w-[54px] h-20  bg-[#1A2C38] rounded-tl-sm rounded-bl-sm flex justify-center items-center">
//               <img
//                 className="w-12 h-12"
//                 src="https://s3-alpha-sig.figma.com/img/4fd3/ae81/08c7cbe2b8fd049c4e3adc180fbedd5d?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nbSgMqQPijcRUZQBwSSvvq7FaHiFAMJJ-xd7MVxSj7F7KmP00sbuZh7YrPyqfBvIY5aqultTW361oES9yEWEhqYfGXBNFvRf2w1QuWgmMrgPKgUprx2pI18oy2vcYcyDgUEHPv~hdpT1RKWpxva5sRIXxdPx-qGGDja5uxxxwr8G~NU0RET9jgZ-ye7qnierAiZmHQkCZL-1lpVgDSsbfsOY1VVNCEs6NGUV1I3fYAxT00grS29IRr-pD7RUSyvxYYKlrZKqhu~DVK3RAXZQRQBLayYzu7Qly9v1mFjsbS6RY82gv2OcP5gd5jHnylyhBZU4cuUd~FjZd-h0WTmtcg__"
//               />
//             </div>
//             <div className="w-52 h-20 bg-[#2E4452] rounded-tr-sm rounded-br-sm">
             
//               <div className=" flex justify-between space-y-1 flex-row items-center pl-2 pt-3  ">

//                 <div>
//                 <h1 className=" text-white text-[14px] font-bold font-['Proxima Nova']">
//                 Welcome to USDTWARS
//                 </h1>
//                 <h1 className="      text-slate-300 text-[11px] font-bold font-['Proxima Nova']">
//                 Welcome Haris!
//                 </h1>
//                 </div>

//                 <div className="  pt-2 pr-2">
//               <img className="w-[22px] h-[22px]" src="https://s3-alpha-sig.figma.com/img/32c9/5155/64f83af7e3a8cc83cbaa39737f216d46?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MuDA1nzAb1nr3IRR2NGnOWSxvi8Udt66RWSdHZpTqRy08F3zoWj7dgfagbSwOZ4wtKF1IKjzU4l6qM2xf8aDZQV3wUI91fLieiXVf57GuN0XdfoW~~p9Vif4ndxbgYeVi2m2IUC1mk0IZUTawA-Nko4pT~lhxK6FEFSLhcNwyQYguE5NyS7JPxtgoxLSUmbvmR~AcgW80Pyc0zJxhee6DfP~sAg5cA9Bt7t2guWE0X4GmGC5Pc~rku49frKj98MFEZrQSSaWRZKHH3BszYImhNoJjFBB2l~-0BvAHyq67IRyb6WreRFUzD0AmKorTlvp3T9QZcw1ar13Pe-grXihig__" />
//               </div>
//               </div>
//             </div>
//           </div>
//           {/* {Withdraw sent end} */}
//        {/* {Withdraw sent} */}
//        <div className=" flex border-b-4 border-blue-500  ">
//             <div className="w-[54px] h-20  bg-[#1A2C38] rounded-tl-sm rounded-bl-sm flex justify-center items-center">
//               <img
//                 className="w-12 h-12"
//                 src="https://s3-alpha-sig.figma.com/img/b374/17a6/1bf9417761014ca968765d706f30a0d5?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IIPKRC0jSJaK6BbyeRC40~~GMdo5BBz~QhyZJzO2YmNiCKCc4f~BC5~pWCyWl-uVT8OP9ejBmi5tNp9hcssBndfvnHznpWPny8QmkmOqG-ijCoZnec-YRIwwgIFnN91lWHCNaaXwIa2zrypSz0pPKwAU8y4BCGoHvxcq~HgWyZH4ERKeTkXeiuka1E5VPuKyJc53zgesCg6Em4jXeblY1~Bow3g3iO2~CBS7qE5-PEgxQ1Rt-Q0Ym~NAbO5L8XV3sO4n7fcUToqhrS5lWXjsIqgtKr5Pdua95dW3XCz0A6ir8ZytP8rHrMmKGkzBhXTfHRU9Uo2Jjb5Vn3~Xy3XEKw__"
//               />
//             </div>
//             <div className="w-52 h-20 bg-[#2E4452] rounded-tr-sm rounded-br-sm">
             
//               <div className=" flex justify-between space-y-1 flex-row items-center pl-2 pt-3  ">

//                 <div>
//                 <h1 className=" text-white text-[14px] font-bold font-['Proxima Nova']">
//                 Account Verify - Level 1
//                 </h1>
//                 <h1 className="      text-slate-300 text-[11px] font-bold font-['Proxima Nova']">
//                 Your USDTWARS account email has been verified successfully.
//                 </h1>
//                 </div>

//                 {/* <div className="  pt-2 pr-2">
//               <img class="w-[22px] h-[22px]" src="https://s3-alpha-sig.figma.com/img/32c9/5155/64f83af7e3a8cc83cbaa39737f216d46?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MuDA1nzAb1nr3IRR2NGnOWSxvi8Udt66RWSdHZpTqRy08F3zoWj7dgfagbSwOZ4wtKF1IKjzU4l6qM2xf8aDZQV3wUI91fLieiXVf57GuN0XdfoW~~p9Vif4ndxbgYeVi2m2IUC1mk0IZUTawA-Nko4pT~lhxK6FEFSLhcNwyQYguE5NyS7JPxtgoxLSUmbvmR~AcgW80Pyc0zJxhee6DfP~sAg5cA9Bt7t2guWE0X4GmGC5Pc~rku49frKj98MFEZrQSSaWRZKHH3BszYImhNoJjFBB2l~-0BvAHyq67IRyb6WreRFUzD0AmKorTlvp3T9QZcw1ar13Pe-grXihig__" />
//               </div> */}
//               </div>
//             </div>
//           </div>
//           {/* {Withdraw sent end} */}
//            {/* {Withdraw sent} */}
//        <div className=" flex border-b-4 border-blue-500  ">
//             <div className="w-[54px] h-20  bg-[#1A2C38] rounded-tl-sm rounded-bl-sm flex justify-center items-center">
//               <img
//                 className="w-12 h-12"
//                 src="https://s3-alpha-sig.figma.com/img/b374/17a6/1bf9417761014ca968765d706f30a0d5?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IIPKRC0jSJaK6BbyeRC40~~GMdo5BBz~QhyZJzO2YmNiCKCc4f~BC5~pWCyWl-uVT8OP9ejBmi5tNp9hcssBndfvnHznpWPny8QmkmOqG-ijCoZnec-YRIwwgIFnN91lWHCNaaXwIa2zrypSz0pPKwAU8y4BCGoHvxcq~HgWyZH4ERKeTkXeiuka1E5VPuKyJc53zgesCg6Em4jXeblY1~Bow3g3iO2~CBS7qE5-PEgxQ1Rt-Q0Ym~NAbO5L8XV3sO4n7fcUToqhrS5lWXjsIqgtKr5Pdua95dW3XCz0A6ir8ZytP8rHrMmKGkzBhXTfHRU9Uo2Jjb5Vn3~Xy3XEKw__"
//               />
//             </div>
//             <div className="w-52 h-20 bg-[#2E4452] rounded-tr-sm rounded-br-sm">
             
//               <div className=" flex justify-between space-y-1 flex-row items-center pl-2 pt-3  ">

//                 <div>
//                 <h1 className=" text-white text-[14px] font-bold font-['Proxima Nova']">
//                 Account Verify - Level 2
//                 </h1>
//                 <h1 className="  text-slate-300 text-[11px] font-bold font-['Proxima Nova']">
//                 Your USDTWARS account details has been verified successfully.
//                 </h1>
//                 </div>

//                 {/* <div className="  pt-2 pr-2">
//               <img class="w-[22px] h-[22px]" src="https://s3-alpha-sig.figma.com/img/32c9/5155/64f83af7e3a8cc83cbaa39737f216d46?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MuDA1nzAb1nr3IRR2NGnOWSxvi8Udt66RWSdHZpTqRy08F3zoWj7dgfagbSwOZ4wtKF1IKjzU4l6qM2xf8aDZQV3wUI91fLieiXVf57GuN0XdfoW~~p9Vif4ndxbgYeVi2m2IUC1mk0IZUTawA-Nko4pT~lhxK6FEFSLhcNwyQYguE5NyS7JPxtgoxLSUmbvmR~AcgW80Pyc0zJxhee6DfP~sAg5cA9Bt7t2guWE0X4GmGC5Pc~rku49frKj98MFEZrQSSaWRZKHH3BszYImhNoJjFBB2l~-0BvAHyq67IRyb6WreRFUzD0AmKorTlvp3T9QZcw1ar13Pe-grXihig__" />
//               </div> */}
//               </div>
//             </div>
//           </div>
//           {/* {Withdraw sent end} */}
//     </div>
//   )
// }
// ==================================================================================================================

import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Notification component
const Notification = ({ iconSrc, title, description }) => (
  <div className="flex border-b-4 border-blue-500">
    <div className="w-[54px] h-20 bg-[#1A2C38] rounded-tl-sm rounded-bl-sm flex justify-center items-center">
      <img className="w-12 h-12" src={"https://s3-alpha-sig.figma.com/img/a5cc/0e08/44cba52d8d5ffed4dbe731205649526b?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OB381m4aMcfBcXqUNVJnIAhPcW7H4creJ83bEL~81crjYEt34tdBYHXlbqzZi-so~ZuPukThWmS44RuCkgnIJleuw1p13Iaqp1IEtw8PJk5-EuLSkm~W5ZHWWOT8rB0nKJZZC9iQOPBwWx34Vohr0k7Sl1E~z-4FIJ-edVBT6phFVys4VAMcWwjXFQP00yo1sV2VUkVKjN2Nn98VLmepMBPtxLbIcjQ0vwS04rOYpCq-OC7WZljpIwFAF9-d0g8Fc~hcxFiutYbbu-rWlViD54ZWhkCX6bRbjlcyKFX-Gl~zmN8rnaVsed6X4Mbjrq9KELmTpCJ6oHh6vWHHhundzw__"} alt="Notification icon" />
    </div>
    <div className="w-52 h-20 bg-[#2E4452] rounded-tr-sm rounded-br-sm">
      <div className="flex justify-between space-y-1 flex-row items-center pl-2 pt-3">
        <div>
          <h1 className="text-white text-[14px] font-bold font-['Proxima Nova']">{title}</h1>
          <h1 className="text-slate-300 text-[11px] font-bold font-['Proxima Nova']">{description}</h1>
        </div>
      </div>
    </div>
  </div>
);

// ScreenNoti component
export default function ScreenNoti() {
  const handleNotification = (title, description) => {
    toast.info(
      <Notification
        iconSrc="your-icon-src"
        title={title}
        description={description}
      />,
      { autoClose: 5000 } // Close the notification after 5 seconds
    );
  };

  // Trigger notifications when needed
  React.useEffect(() => {
    // Example usage
    handleNotification("Welcome to USDTWARS", "Welcome Haris!");
    handleNotification("Account Verify - Level 1", "Your USDTWARS account email has been verified successfully.");
    handleNotification("Account Verify - Level 2", "Your USDTWARS account details has been verified successfully.");
    handleNotification("Account Verify - Level 2", "Your USDTWARS account details has been verified successfully.");
    handleNotification("Account Verify - Level 2", "Your USDTWARS account details has been verified successfully.");
    handleNotification("Account Verify - Level 2", "Your USDTWARS account details has been verified successfully.");
    handleNotification("Account Verify - Level 2", "Your USDTWARS account details has been verified successfully.");
    handleNotification("Account Verify - Level 2", "Your USDTWARS account details has been verified successfully.");
  }, []);

  return (
    <div>
      <ToastContainer position="top-left" autoClose={5000}  />
    </div>
  );
}
