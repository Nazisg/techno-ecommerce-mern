import React, { useEffect, useRef } from "react";
import logo1 from '../../../../assets/icons/partner-logo-1.webp';
import logo2 from '../../../../assets/icons/partner-logo-2.avif';
import logo3 from '../../../../assets/icons/partner-logo-3.avif';
import logo4 from '../../../../assets/icons/partner-logo-4.avif';
import logo5 from '../../../../assets/icons/partner-logo-5.webp';
import logo6 from '../../../../assets/icons/partner-logo-6.webp';

const logos = [
    { id: 1, src: logo1, alt: "Logo 1" },
    { id: 2, src: logo2, alt: "Logo 2" },
    { id: 3, src: logo3, alt: "Logo 3" },
    { id: 4, src: logo4, alt: "Logo 4" },
    { id: 5, src: logo5, alt: "Logo 5" },
    { id: 6, src: logo6, alt: "Logo 6" },
];

const Partners = () => {
    const sliderRef = useRef(null);
    const animationRef = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;
        let currentPosition = 0;

        const startSlider = () => {
            animationRef.current = setInterval(() => {
                currentPosition -= 1;
                if (slider) {
                    slider.style.transform = `translateX(${currentPosition}px)`;

                    // Reset position when the last logo goes out of view
                    if (Math.abs(currentPosition) >= slider.scrollWidth / 2) {
                        currentPosition = 0; // Reset position
                    }
                }
            }, 20); // Controls the speed of the animation
        };

        startSlider();

        // Cleanup function to clear the interval
        return () => clearInterval(animationRef.current);
    }, []);

    return (
        <div className="py-4 md:py-10 overflow-hidden">
            <div className="relative overflow-hidden">
                <div
                    ref={sliderRef}
                    className="flex space-x-10 items-center"
                    style={{ display: "inline-flex", whiteSpace: "nowrap" }}
                >
                    {[...logos, ...logos, ...logos].map((logo, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-28 md:w-40 h-6 md:h-10"
                        >
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                className="w-full h-full object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Partners;
