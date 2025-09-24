import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { LogOut } from "lucide-react";
import ThemeToggle from "../molecules/ThemeToggle";
import Avatar from "../atoms/Avatar";
import { logout } from "../../store/authSlice";
import LanguageSwitcher from "../molecules/LanguageSwitcher";
import { useNavigate } from "react-router-dom";

const Navbar = ({ activeTab, onTabChange, unreadMessages, unreadNotifications }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, isFirstMount } = useSelector((state) => state.auth);
    const { t } = useTranslation();
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (isMobile) return null; // Hide Navbar on mobile, use MobileNavBar

    const navigationItems = [
        { key: "home", label: t("nav.home"), gradient: "from-blue-500 to-indigo-600", textColor: "text-blue-600 dark:text-blue-400", bgColor: "bg-blue-50 dark:bg-blue-900/20", hoverBg: "hover:bg-blue-100 dark:hover:bg-blue-800/30" },
        { key: "chat", label: t("nav.chat"), gradient: "from-cyan-500 to-teal-600", textColor: "text-cyan-600 dark:text-cyan-400", bgColor: "bg-cyan-50 dark:bg-cyan-900/20", hoverBg: "hover:bg-cyan-100 dark:hover:bg-cyan-800/30", badge: unreadMessages },
        { key: "notifications", label: t("nav.notifications"), gradient: "from-amber-500 to-orange-600", textColor: "text-amber-600 dark:text-amber-400", bgColor: "bg-amber-50 dark:bg-amber-900/20", hoverBg: "hover:bg-amber-100 dark:hover:bg-amber-800/30", badge: unreadNotifications },
        { key: "profile", label: t("nav.profile"), gradient: "from-emerald-500 to-green-600", textColor: "text-emerald-600 dark:text-emerald-400", bgColor: "bg-emerald-50 dark:bg-emerald-900/20", hoverBg: "hover:bg-emerald-100 dark:hover:bg-emerald-800/30" },
        { key: "wellness-hub", label: t("nav.wellness-hub"), gradient: "from-lime-500 to-emerald-600", textColor: "text-lime-600 dark:text-lime-400", bgColor: "bg-lime-50 dark:bg-lime-900/20", hoverBg: "hover:bg-lime-100 dark:hover:bg-lime-800/30" },
        { key: "settings", label: t("nav.settings"), gradient: "from-gray-500 to-slate-600", textColor: "text-gray-600 dark:text-gray-400", bgColor: "bg-gray-50 dark:bg-gray-900/20", hoverBg: "hover:bg-gray-100 dark:hover:bg-gray-800/30" },
    ];

    return (
        <motion.nav
            initial={isFirstMount ? { y: -100, opacity: 0 } : false}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-30 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border-b border-gray-100 dark:border-gray-800/50 shadow-sm"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                {/* Logo Section - Moved to the very left/beginning */}
                <motion.div
                    initial={isFirstMount ? { scale: 0.9, opacity: 0 } : false}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="flex items-center space-x-3 cursor-pointer flex-shrink-0"
                    onClick={() => navigate("/home")}
                >
                    <img
                        src="./emo-qc-d.png"
                        alt="Emo QC"
                        className="w-10 h-10 rounded-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="hidden md:block">
                        <h1 className="text-xl font-semibold bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
                            EmoSpace
                        </h1>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Mental Social Network</p>
                    </div>
                </motion.div>

                {/* Navigation Items - Centered, with labels on one line */}
                <div className="flex-1 flex items-center justify-center space-x-1 px-4">
                    <div className="flex items-center space-x-1 whitespace-nowrap">
                        {navigationItems.map((item, index) => {
                            const isActive = activeTab === item.key;
                            return (
                                <motion.button
                                    key={item.key}
                                    initial={isFirstMount ? { opacity: 0, y: 20 } : false}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 + 0.3, duration: 0.3 }}
                                    onClick={() => onTabChange(item.key)}
                                    className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${isActive ? `${item.textColor} ${item.bgColor} scale-105` : `text-gray-600 dark:text-gray-300 ${item.hoverBg}`}`}
                                >
                                    <span className="whitespace-nowrap">{item.label}</span>
                                    {item.badge > 0 && (
                                        <motion.span
                                            initial={{ scale: 0.8, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            className="ml-2 bg-gradient-to-r from-red-500 to-rose-600 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center"
                                        >
                                            {item.badge}
                                        </motion.span>
                                    )}
                                </motion.button>
                            );
                        })}
                    </div>
                </div>

                {/* User Info & Settings - Positioned at the far right, more compact design */}
                <motion.div
                    initial={isFirstMount ? { opacity: 0, x: 20 } : false}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.4 }}
                    className="flex items-center space-x-2 flex-shrink-0 ml-auto"
                >

                    <div className="flex items-center space-x-1 flex-shrink-0">
                        <ThemeToggle />
                        <LanguageSwitcher variant="no-icon" />

                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="relative flex-shrink-0">
                            <Avatar username={user?.username || "Anonymous"} size="sm" />
                            <motion.div
                                className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"
                                animate={{ scale: [1, 1.3, 1] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            />
                        </div>
                        {/* <div className="hidden md:block min-w-0">
                            <p className="text-sm font-medium text-gray-900 dark:text-white truncate max-w-[100px]">
                                {user?.username || "Anonymous"}
                            </p>
                            <div className="flex items-center text-xs text-green-500 dark:text-green-400">
                                <motion.span
                                    className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1 flex-shrink-0"
                                    animate={{ opacity: [1, 0.5, 1] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                />
                                <span className="truncate">Online</span>
                            </div>
                        </div> */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => dispatch(logout())}
                            className="p-1.5 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 transition-all duration-300 flex-shrink-0"
                            title={t("nav.logout")}
                        >
                            <LogOut className="w-4 h-4" />
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </motion.nav>
    );
};

export default Navbar;