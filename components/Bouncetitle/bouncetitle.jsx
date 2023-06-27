import React from "react";

const Bouncetitle = () => {
  return (
    <div className="flex items-center justify-center mt-10">
      <ul className="flex  items-center justify-center gap-12">
        <li>
          <img
            src="./assets/john.webp"
            alt="johan"
            className="w-[3rem] h-[3.4rem] rounded-full hover:animate-bounce transition-all duration-150"
          />
          <p>John</p>
        </li>
        <li>
          <img
            src="./assets/roman.jpg"
            alt="roman"
            className="w-[3rem] rounded-full hover:animate-bounce transition-all duration-150"
          />
          <p>Roman</p>
        </li>
        <li>
          <img
            src="./assets/brock.webp"
            alt="brock"
            className="w-[3rem] rounded-full hover:animate-bounce transition-all duration-150"
          />
          <p>Brock</p>
        </li>
        <li>
          <img
            src="./assets/under.jpg"
            alt="under"
            className="w-[3rem] h-[3rem] rounded-full hover:animate-bounce transition-all duration-150"
          />
          <p>Under</p>
        </li>
      </ul>
    </div>
  );
};

export default Bouncetitle;
