// import { useState } from "react";
// import { motion } from "framer-motion";
// import ChallengeHubPage from "../../pages/ChallengeHubPage";
// import TaskTimeline from "./TaskTimeline";

// const DesktopChallengeModule = () => {
//   const [activeView, setActiveView] = useState("challenge");
//   // "challenge" | "task"

//   return (
//     <div className="flex h-screen w-full">
//       {/* ChallengeHubPage */}

//       {/* TaskTimeline */}
//       <motion.div
//         animate={{ width: activeView === "challenge" ? "95%" : "0%" }}
//         transition={{ duration: 0.6 }}
//         className="overflow-y-auto scrollbar-hide"
//       >
//         {/* {activeView === "task" && <TaskTimeline activeChallengesIds={[1, 2]} />} */}
//         {activeView === "challenge" && <ChallengeHubPage />}


//       </motion.div>
//       {/* Task Button */}
//       {activeView === "challenge" && (
//         <motion.div
//           animate={{ width: "5%" }}
//           transition={{ duration: 0.6 }}
//           className="flex items-center justify-center bg-gray-100 cursor-pointer"
//           onClick={() => setActiveView("task")}
//         >
//           <span className="rotate-[-90deg] font-bold">Tasks</span>
//         </motion.div>
//       )}

//       {/* Challenge Button (hiện khi activeView = task) */}

//       {activeView === "task" && (
//         <motion.div
//           animate={{ width: "20%" }}
//           transition={{ duration: 0.6 }}
//           className="h-screen flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
//           onClick={() => setActiveView("challenge")}
//         >
//           <div className="flex flex-col items-center justify-center w-full h-full">
//             <img
//               src="/emoChallenge1a.png"
//               alt="Challenge"
//               className="w-60 h-60 mb-2"
//             />
//             <span
//               className="
//                 text-2xl font-extrabold tracking-wide
//                 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500
//                     dark:bg-gradient-to-r dark:from-pink-400 dark:via-purple-400 dark:to-blue-400

//                 bg-clip-text text-transparent
//                 animate-bounce
//                 drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]
//                 transition-transform duration-300 ease-in-out
//                     hover:scale-125 hover:rotate-3">Go To Challenge</span>
//           </div>
//         </motion.div>
//       )}
//       <motion.div
//         animate={{ width: activeView === "task" ? "95%" : "0%" }}
//         transition={{ duration: 0.6 }}
//         className="overflow-y-auto scrollbar-hide flex items-center justify-center"
//       >
//         {/* {activeView === "challenge" && <ChallengeHubPage />} */}
//         {activeView === "task" && <TaskTimeline activeChallengesIds={[1, 2]} />}


//       </motion.div>

//     </div>
//   );
// };

// export default DesktopChallengeModule;

import { useState } from "react";
import { motion } from "framer-motion";
import ChallengeHubPage from "../../pages/ChallengeHubPage";
import TaskTimeline from "./TaskTimeline";
import { ChevronRight } from "lucide-react";

const DesktopChallengeModule = () => {
  const [activeView, setActiveView] = useState("challenge");
  // "challenge" | "task"

  const toggleView = () =>
    setActiveView(activeView === "challenge" ? "task" : "challenge");

  return (
    <div className="flex h-screen w-full">
      {/* Challenge Content */}
      <motion.div
        animate={{ width: activeView === "challenge" ? "95%" : "0%" }}
        transition={{ duration: 0.6 }}
        className="overflow-y-auto scrollbar-hide"
      >
        {activeView === "challenge" && <ChallengeHubPage />}
      </motion.div>

      {/* Toggle Button with Tooltip */}
      <motion.div
        animate={{ width: "5%" }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-center cursor-pointer relative group hover:bg-gray-100 dark:hover:bg-gray-800"
        onClick={toggleView}
      >
        <motion.div
          animate={{ rotate: activeView === "challenge" ? 0 : 180 }}
          transition={{ duration: 0.4 }}
        >
          <ChevronRight className="w-6 h-6 dark:text-white" />
        </motion.div>

        {/* Tooltip */}
        <span className="absolute left-full ml-2 hidden group-hover:block bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
          {activeView === "challenge" ? "Tasks" : "Challenge"}
        </span>
      </motion.div>

      {/* Task Content */}
      <motion.div
        animate={{ width: activeView === "task" ? "95%" : "0%" }}
        transition={{ duration: 0.6 }}
        className="overflow-y-auto scrollbar-hide"
      >
        {activeView === "task" && <TaskTimeline activeChallengesIds={[1, 2]} />}
      </motion.div>
    </div>
  );
};

export default DesktopChallengeModule;
