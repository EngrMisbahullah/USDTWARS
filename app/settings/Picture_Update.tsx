import React from "react";
const imageUrls = [
  "/players/pl1.jpeg",
  "/players/pl2.jpeg",
  "/players/pl3.jpeg",
  "/players/pl4.jpeg",
  "/players/pl5.jpeg",
  "/players/pl6.jpeg",
  "/players/pl7.jpeg",
  "/players/pl8.jpeg",
  "/players/pl9.jpeg",
  "/players/pl10.jpeg",
  "/players/pl11.jpeg",
  "/players/pl12.jpeg",
  "/players/pl13.jpeg",
  "/players/pl14.jpeg",
  "/players/pl15.jpeg",
  "/players/pl16.jpeg",
  "/players/pl17.jpeg",
  "/players/pl18.jpeg",
  "/players/pl19.jpeg",
  "/players/pl20.jpeg",
  "/players/pl21.jpeg",
  "/players/pl22.jpeg",
  "/players/pl23.jpeg",
  "/players/pl24.jpeg",
  "/players/pl25.jpeg",
  "/players/pl26.jpeg",
  "/players/pl27.jpeg",
  "/players/pl28.jpeg",
  "/players/pl29.jpeg",
  "/players/pl30.jpeg",
  "/players/pl31.jpeg",
  "/players/pl32.jpeg",
  "/players/pl33.jpeg",
  "/players/pl34.jpeg",
  "/players/pl35.jpeg",
  "/players/pl36.jpeg",
  // Add more image URLs here as needed
];
export default function Picture_Update() {
  return (
    <div>
      <div className=" flex flex-row mt-[24px] ml-[13px] space-x-1  ">
        <img
        alt='Image'
        className="w-max h-[30px] "
          src="https://s3-alpha-sig.figma.com/img/331a/066e/045fb4951f10d731423624656a76bb4f?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B4LqvkAhSXod1Whjb3KLu5-9Qr04ZJfstpfArUatPzy6etYlo6EPhsTQBYRaJD59YVuCCwvx~H7EyombAfPJN17pE8wpyBL38-46Wt9xGDId6~4WXNHKWs4MkLa4BXeyuqyyscyeuCAVxGZ8Vt-JM0SP2JREB3eqxRGxXiKFH1jAqUW0LLccCH69K5WzSMiZioNiLjtXtippTJnOIyriM1ZtzwJuidKAaFpcK9RYR7B03EOVE1aX1Pk7DZCEUAxymuNpdofNobw-TUSltSzlPNl-eeOnvaRBL6D~q9zeyJPGOWauedvEfMgnloMuwwesCXKFp8khTnwwJxi5hefdDg__"
        />
        <div className=" text-white text-[17px] pt-[2px] font-bold font-['Proxima Nova Condensed']">
          Settings
        </div>
      </div>

      <div className=" flex justify-center pt-5 ">
        <div className="w-max p-2 h-max  bg-[#0F212E] rounded-[5px] grid lg:grid-cols-2">
          <div className=" flex justify-center pt-5">
            <div className="w-max p-3 h-max space-y-2  bg-[#1A2C38] rounded-[5px]  border-2 border-slate-700">
              <div className=" pt-3 text-center text-white text-[15px] font-bold font-['Proxima Nova Condensed']">
                Upload Picture
              </div>
              <div className=" m-5 justify-center flex  h-[0px] border border-slate-700"></div>
              <div className=" flex justify-center">
                <img
                alt='Image'
                src="gig.png"
                  className="w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] flex justify-center  bg-zinc-300 rounded-full"
                ></img>
              </div>

              <div className="w-full p-2 h-[30px] bg-slate-700 rounded-[5px] flex justify-center items-center  space-x-1">
                <div className=" text-center text-white text-[12px] lg:text-[15px] lg:p-2 font-bold font-['Proxima Nova Condensed']">
                  Upload Picture
                </div>
                <button>
                  <img
                    className="w-5 h-5  "
                    alt='Image'
                    src="https://s3-alpha-sig.figma.com/img/bca2/b7a5/6eeab6fc483cf23a5e9d6ad1ff7cd023?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=namdzQn29XTZGjiTnYnQ4oN0do85~nTdPT4k1~7Ct~-Y3daKvY9luCfHTNb2p2gr1mmMAQLwk2Q0ugq~c4HmJMtOIvJ-hFNxG8DtxDPT24g~w7xQPv2GAaVa~B-wNaVppZ4eHGTX-DZp9keu7OkW2ioyMRk1dknQnfXx88lqFtlMX1ShCoj20HMiowOwbi6mM8Cnb1Mc7ifHdqSegQNpPgdWZtRF7R9fM2Lh5yNnFH9JJBGoOzTZcMghkl2qbl~QBqia2soSA1VJEyyXO6RFwD9D4pGv12K8Zpy2wKxcXXn9dnxLk7AiIOWbF-H8Ib9OD32JN~4h2m~hSshPBtVUcA__"
                  />
                </button>
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-center pt-5">
              <div className="w-max h-[275px] overflow-y-scroll bg-[#1A2C38] rounded-[5px] border-2 border-slate-700">
                <div className="pt-2 text-center text-white text-[16px] font-bold font-['Proxima Nova Condensed']">
                  Upload a picture or choose from list
                </div>
                <div className="w-[280px] h-[0px] ml-4 border border-slate-700"></div>
                <div className="pl-[px] pt-2 space-x-2 space-y-2 grid grid-cols-4 lg:grid-cols-5 p-3">
                  {imageUrls.map((imageUrl, index) => (
                    <button key={index}>
                      <img
                        src={imageUrl}
                        className="w-[70px] h-[70px] bg-zinc-300 rounded-full"
                        alt={`Image ${index + 1}`}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className=" flex justify-center pt-2">
              <div className=" w-[340px] h-[42px] lg:w-[433px] lg:h-[50px]   flex justify-end items-center pr-1 bg-[#1A2C38] rounded-[5px] border-2 border-slate-700">
                <button className="w-[85px] h-[27px] lg:h-[35px] flex justify-center items-center bg-green-500 rounded-[5px]">
                  <h1 className="  text-slate-800 text-[17px] font-bold font-['Proxima Nova Condensed']">
                    Save
                  </h1>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// =======================================================================================
// "use client";
// import React, { useState } from "react";

// const imageUrls = [
//   "/players/pl1.jpeg",
//   "/players/pl2.jpeg",
//   "/players/pl3.jpeg",
//   "/players/pl4.jpeg",
//   "/players/pl5.jpeg",
//   "/players/pl6.jpeg",
//   "/players/pl7.jpeg",
//   "/players/pl8.jpeg",
//   "/players/pl9.jpeg",
//   "/players/pl10.jpeg",
//   "/players/pl11.jpeg",
//   "/players/pl12.jpeg",
//   "/players/pl13.jpeg",
//   "/players/pl14.jpeg",
//   "/players/pl15.jpeg",
//   "/players/pl16.jpeg",
//   "/players/pl17.jpeg",
//   "/players/pl18.jpeg",
//   "/players/pl19.jpeg",
//   "/players/pl20.jpeg",
//   "/players/pl21.jpeg",
//   "/players/pl22.jpeg",
//   "/players/pl23.jpeg",
//   "/players/pl24.jpeg",
//   "/players/pl25.jpeg",
//   "/players/pl26.jpeg",
//   "/players/pl27.jpeg",
//   "/players/pl28.jpeg",
//   "/players/pl29.jpeg",
//   "/players/pl30.jpeg",
//   "/players/pl31.jpeg",
//   "/players/pl32.jpeg",
//   "/players/pl33.jpeg",
//   "/players/pl34.jpeg",
//   "/players/pl35.jpeg",
//   "/players/pl36.jpeg",
//   // Add more image URLs here as needed
// ];

// export default function Picture_Update() {
//   const [selectedImage, setSelectedImage] = useState<string | null>(null);

//   const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files && event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         if (typeof reader.result === 'string') {
//           setSelectedImage(reader.result);
//         } else {
//           console.error('Failed to read the uploaded image.');
//         }
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleImageSelection = (imageUrl: string) => {
//     setSelectedImage(imageUrl);
//   };

//   return (
//     <div>
//       {/* Your existing JSX code */}
//       <div className="flex justify-center pt-5">
//         <div className="w-max p-2 h-max bg-[#0F212E] rounded-[5px]">
//           {/* Your existing JSX code */}

//           <div className="flex justify-center">
//             {/* Conditionally render selected image */}
//             {selectedImage ? (
//               <img
//                 src={selectedImage}
//                 className="w-[100px] h-[100px] flex justify-center bg-zinc-300 rounded-full"
//                 alt="Selected Image"
//               />
//             ) : (
//               <div className="w-[100px] h-[100px] flex justify-center bg-zinc-300 rounded-full"></div>
//             )}
//           </div>
//           {/* Your existing JSX code */}
//           {/* Input for uploading image */}
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleImageUpload}
//             className="hidden"
//             id="upload-image"
//           />
//           {/* Your existing JSX code */}
//           {/* Display predefined images */}
//           <div className="pl-[px] pt-2 space-x-1 grid grid-cols-4">
//             {imageUrls.map((imageUrl, index) => (
//               <button key={index} onClick={() => handleImageSelection(imageUrl)}>
//                 <img
//                   src={imageUrl}
//                   className="w-[70px] h-[70px] bg-zinc-300 rounded-full"
//                   alt={`Image ${index + 1}`}
//                 />
//               </button>
//             ))}
//           </div>
//           {/* Your existing JSX code */}
//         </div>
//       </div>
//       {/* Your existing JSX code */}
//     </div>
//   );
// }
