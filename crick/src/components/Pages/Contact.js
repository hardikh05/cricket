import React from "react";

export const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 md:p-8 lg:p-12 rounded-md border-2 border-custom-blue shadow-sm max-w-[760px] mx-auto my-8 bg-custom-bg transition-transform transform hover:scale-103 hover:shadow-md">
      <h5 className="text-2xl font-semibold mb-4 text-center transition-transform duration-300 hover:translate-y-0.5">
        About CRICKO Organization
      </h5>
      <div className="text-base leading-relaxed text-gray-700">
        <p className="mb-4">
          CRICKO Organization is dedicated to promoting and organizing cricket tournaments at various levels. Our mission is to foster the spirit of cricket and provide a platform for teams to showcase their talents.
        </p>
        <p className="mb-4">
          Founded in 2010, we have successfully organized over 50 tournaments across different formats of the game. Our events are known for their professionalism, fair play, and exciting matches.
        </p>
        <p>
          We believe in the power of cricket to bring people together and create lasting memories. Join us in our journey to make cricket more accessible and enjoyable for everyone.
        </p>
      </div>
    </div>
  );
};
