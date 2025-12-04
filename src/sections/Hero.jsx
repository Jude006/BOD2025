// import React, { useState, useEffect } from "react";
// import { LazyLoadComponent } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";
// import img from "../assets/image/img2a.jpg";
// import { FaHeart } from "react-icons/fa";

// const Hero = () => {
//   const [timeLeft, setTimeLeft] = useState({});

//   useEffect(() => {
//     const calculateTimeLeft = () => {
//       const weddingDate = new Date("December 13, 2025 14:00:00").getTime();
//       const now = new Date().getTime();
//       const difference = weddingDate - now;

//       if (difference > 0) {
//         setTimeLeft({
//           days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//           hours: Math.floor(
//             (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//           ),
//           minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
//           seconds: Math.floor((difference % (1000 * 60)) / 1000),
//         });
//       } else {
//         setTimeLeft({
//           days: 0,
//           hours: 0,
//           minutes: 0,
//           seconds: 0,
//         });
//       }
//     };

//     calculateTimeLeft();
//     const timer = setInterval(calculateTimeLeft, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <LazyLoadComponent>
//       <div className="relative h-screen bg-light" id="home">
//         {/* Gradient Overlay (from Option 3) */}
//         <div
//           className="absolute inset-0 z-0"
//           style={{
//             background: `linear-gradient(to bottom, rgba(109, 40, 217, 0.3), rgba(0, 0, 0, 0.6))`,
//           }}
//         ></div>

//         {/* Optimized Background Image */}
//         <div
//           className="absolute inset-0 bg-center bg-no-repeat bg-cover"
//           style={{ backgroundImage: `url(${img})` }}
//         />

//         {/* Content */}
//         <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
//           {/* Heart Divider */}
//           <div className="flex items-center justify-center mb-6">
//             <div className="w-16 h-px bg-white/50"></div>
//             <FaHeart className="mx-4 text-white/80" />
//             <div className="w-16 h-px bg-white/50"></div>
//           </div>

//           {/* Couple Names */}
//           <h1 className="mb-4 text-5xl text-white md:text-7xl lg:text-8xl font-great drop-shadow-lg">
//             David <span className="text-accent">&</span> Dorcas
//           </h1>

//           {/* Subtitle */}
//           <p className="mb-2 text-xl italic text-white md:text-2xl font-playfair drop-shadow">
//             Are Getting Married
//           </p>

//           {/* Date & Venue */}
//           <p className="mb-12 text-lg text-white/90 md:text-xl font-body">
//             December 13, 2025 • The Orisanmi Event Center
//           </p>

//           {/* Countdown with Seconds */}
//           <div className="mb-12">
//             <p className="mb-4 text-white/80 font-body">
//               Counting down to our special day
//             </p>
//             <div className="flex items-center justify-center space-x-3 md:space-x-6">
//               {timeLeft.days !== undefined ? (
//                 <>
//                   {/* Days */}
//                   <div className="text-center">
//                     <div className="text-3xl font-bold text-white md:text-4xl font-body">
//                       {timeLeft.days.toString().padStart(2, "0")}
//                     </div>
//                     <div className="text-sm text-white/70 font-body">Days</div>
//                   </div>
//                   <div className="text-xl text-white/50">:</div>

//                   {/* Hours */}
//                   <div className="text-center">
//                     <div className="text-3xl font-bold text-white md:text-4xl font-body">
//                       {timeLeft.hours.toString().padStart(2, "0")}
//                     </div>
//                     <div className="text-sm text-white/70 font-body">Hours</div>
//                   </div>
//                   <div className="text-xl text-white/50">:</div>

//                   {/* Minutes */}
//                   <div className="text-center">
//                     <div className="text-3xl font-bold text-white md:text-4xl font-body">
//                       {timeLeft.minutes.toString().padStart(2, "0")}
//                     </div>
//                     <div className="text-sm text-white/70 font-body">
//                       Minutes
//                     </div>
//                   </div>
//                   <div className="text-xl text-white/50">:</div>

//                   {/* Seconds - Added! */}
//                   <div className="text-center">
//                     <div className="text-3xl font-bold text-white md:text-4xl font-body animate-pulse">
//                       {timeLeft.seconds.toString().padStart(2, "0")}
//                     </div>
//                     <div className="text-sm text-white/70 font-body">
//                       Seconds
//                     </div>
//                   </div>
//                 </>
//               ) : (
//                 <p className="text-white font-body">
//                   Wedding day has arrived! 🎉
//                 </p>
//               )}
//             </div>

//             {/* Countdown Progress Bar (Optional) */}
//             <div className="max-w-md mx-auto mt-6">
//               <div className="h-1 overflow-hidden rounded-full bg-white/20">
//                 <div
//                   className="h-full transition-all duration-1000 bg-gradient-to-r from-primary to-accent"
//                   style={{
//                     width: `${Math.min((1 - timeLeft.days / 365) * 100, 100)}%`,
//                   }}
//                 ></div>
//               </div>
//               <p className="mt-2 text-xs text-white/60 font-body">
//                 {365 - timeLeft.days} days down, {timeLeft.days} to go!
//               </p>
//             </div>
//           </div>

//           {/* CTA Button */}
//           <button className="px-8 py-3 font-semibold text-white transition-all duration-300 rounded-full shadow-lg bg-primary hover:bg-secondary hover:scale-105 font-body hover:shadow-xl">
//             Discover Our Story
//           </button>
//         </div>

//         {/* Scroll Indicator */}
//         <div className="absolute transform -translate-x-1/2 bottom-8 left-1/2 animate-bounce">
//           <div className="flex justify-center w-6 h-10 border-2 rounded-full border-white/50">
//             <div className="w-1 h-3 mt-2 rounded-full bg-white/70"></div>
//           </div>
//         </div>
//       </div>
//     </LazyLoadComponent>
//   );
// };

// export default Hero;

import React, { useState, useEffect } from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import img from "../assets/image/img2a.jpg";
import { FaHeart } from "react-icons/fa";

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const calculateTimeLeft = () => {
      const weddingDate = new Date("December 13, 2025 14:00:00").getTime();
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <LazyLoadComponent>
      <div className="relative h-screen bg-light" id="home">
        {/* Optimized Background Image WITH Gradient Overlay */}
        <div
          className="absolute inset-0 bg-top bg-no-repeat bg-cover"
          style={{ 
            backgroundImage: `linear-gradient(to bottom, rgba(109, 40, 217, 0.3), rgba(0, 0, 0, 0.6)), url(${img})`
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
          {/* Heart Divider */}
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-px bg-white/50"></div>
            <FaHeart className="mx-4 text-white/80" />
            <div className="w-16 h-px bg-white/50"></div>
          </div>

          {/* Couple Names */}
          <h1 className="mb-4 text-5xl text-white md:text-7xl lg:text-8xl font-great drop-shadow-lg">
            David <span className="text-accent">&</span> Dorcas
          </h1>

          {/* Subtitle */}
          <p className="mb-2 text-xl italic text-white md:text-2xl font-playfair drop-shadow">
            Are Getting Married
          </p>

          {/* Date & Venue */}
          <p className="mb-12 text-lg text-white/90 md:text-xl font-playfair">
            December 13, 2025 • The Orisanmi Event Center
          </p>

          {/* Countdown with Seconds */}
          <div className="mb-12">
            <p className="mb-4 text-white/80 font-body">
              Counting down to our special day
            </p>
            <div className="flex items-center justify-center space-x-3 md:space-x-6">
              {timeLeft.days !== undefined ? (
                <>
                  {/* Days */}
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white md:text-4xl font-body">
                      {timeLeft.days.toString().padStart(2, "0")}
                    </div>
                    <div className="text-sm text-white/70 font-body">Days</div>
                  </div>
                  <div className="text-xl text-white/50">:</div>

                  {/* Hours */}
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white md:text-4xl font-body">
                      {timeLeft.hours.toString().padStart(2, "0")}
                    </div>
                    <div className="text-sm text-white/70 font-body">Hours</div>
                  </div>
                  <div className="text-xl text-white/50">:</div>

                  {/* Minutes */}
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white md:text-4xl font-body">
                      {timeLeft.minutes.toString().padStart(2, "0")}
                    </div>
                    <div className="text-sm text-white/70 font-body">
                      Minutes
                    </div>
                  </div>
                  <div className="text-xl text-white/50">:</div>

                  {/* Seconds - Added! */}
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white md:text-4xl font-body animate-pulse">
                      {timeLeft.seconds.toString().padStart(2, "0")}
                    </div>
                    <div className="text-sm text-white/70 font-body">
                      Seconds
                    </div>
                  </div>
                </>
              ) : (
                <p className="text-white font-body">
                  Wedding day has arrived! 🎉
                </p>
              )}
            </div>

            {/* Countdown Progress Bar (Optional) */}
            <div className="max-w-md mx-auto mt-6">
              <div className="h-1 overflow-hidden rounded-full bg-white/20">
                <div
                  className="h-full transition-all duration-1000 bg-gradient-to-r from-primary to-accent"
                  style={{
                    width: `${Math.min((1 - timeLeft.days / 365) * 100, 100)}%`,
                  }}
                ></div>
              </div>
              <p className="mt-2 text-xs text-white/60 font-body">
                {365 - timeLeft.days} days down, {timeLeft.days} to go!
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <button className="px-8 py-3 font-semibold text-white transition-all duration-300 rounded-full shadow-lg bg-primary hover:bg-secondary hover:scale-105 font-body hover:shadow-xl">
            Discover Our Story
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute transform -translate-x-1/2 bottom-8 left-1/2 animate-bounce">
          <div className="flex justify-center w-6 h-10 border-2 rounded-full border-white/50">
            <div className="w-1 h-3 mt-2 rounded-full bg-white/70"></div>
          </div>
        </div>
      </div>
    </LazyLoadComponent>
  );
};

export default Hero;