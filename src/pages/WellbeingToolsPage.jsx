import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import DesktopWellbeingTools from "../components/organisms/DesktopWellbeingTools";
import MobileWellbeingTools from "./MobileWellbeingTools";

const SettingsPage = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-8"
        >
            {isMobile ? <MobileWellbeingTools /> : <DesktopWellbeingTools />}
        </motion.div>
    );
};

export default SettingsPage;