import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Sun, Moon, Shield, ShieldOff } from "lucide-react";
import { toggleTheme, toggleSafeMode } from "../../store/themeSlice";
import Button from "../atoms/Button";
import Badge from "../atoms/Badge";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const { isDarkMode, isSafeMode } = useSelector((state) => state.theme);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  const handleSafeModeToggle = () => {
    dispatch(toggleSafeMode());
  };

  return (
    <div className="flex items-center space-x-2">
      {/* Safe Mode Toggle */}
      <div className="relative">
        <Button
          variant="ghost"
          size="sm"
          onClick={handleSafeModeToggle}
          className={`relative ${
            isSafeMode ? "text-green-600 dark:text-green-400" : "text-gray-500"
          }`}
          title={isSafeMode ? "Tắt chế độ an toàn" : "Bật chế độ an toàn"}>
          {isSafeMode ? (
            <Shield className="w-5 h-5" />
          ) : (
            <ShieldOff className="w-5 h-5" />
          )}
        </Button>

        {isSafeMode && (
          <Badge
            variant="success"
            size="xs"
            className="absolute -top-1 -right-1 animate-pulse">
            🛡️
          </Badge>
        )}
      </div>

      {/* Theme Toggle */}
      <Button
        variant="ghost"
        size="sm"
        onClick={handleThemeToggle}
        className="text-gray-500 dark:text-gray-400"
        title={
          isDarkMode ? "Chuyển sang chế độ sáng" : "Chuyển sang chế độ tối"
        }>
        {isDarkMode ? (
          <Sun className="w-5 h-5" />
        ) : (
          <Moon className="w-5 h-5" />
        )}
      </Button>
    </div>
  );
};

export default ThemeToggle;
