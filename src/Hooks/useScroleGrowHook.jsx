import { useScroll, useTransform } from 'framer-motion';

import { useRef } from 'react';

const useScroleGrowHook = () => {
    const componentRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: componentRef,
        offset: ["0 1", "1.5 1"],
    });

    const scaleValue = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityValue = useTransform(scrollYProgress, [0, 1], [0.1, 1]);

    const style = { scale: scaleValue, opacity: opacityValue, }
    return { componentRef, style }
};

export default useScroleGrowHook;