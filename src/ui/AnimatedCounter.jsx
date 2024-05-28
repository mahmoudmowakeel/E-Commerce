import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const AnimatedCounter = ({ targetNumber, duration }) => {
    const [count, setCount] = useState(0);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        if (!inView) return
        let start = 0;
        const increment = targetNumber / (duration / 10);

        const updateCounter = () => {
            start += increment;
            if (start < targetNumber) {
                setCount(Math.floor(start));
                setTimeout(updateCounter, 10);
            } else {
                setCount(targetNumber);
            }
        };

        updateCounter();
    }, [targetNumber, duration, inView]);

    return (
        <div ref={ref} className="text-3xl md:text-6xl font-bold inline ">
            {count}
        </div>
    );
};

export default AnimatedCounter;