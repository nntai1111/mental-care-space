import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import IconButton from '../atoms/IconButton';
import { Check } from 'lucide-react';
import tasksData from '../../data/tasks.json';

const TaskTimeline = ({ activeChallengesIds }) => {
    const [tasksByDate, setTasksByDate] = useState({});

    useEffect(() => {
        const groupedTasks = {};

        const activeChallenges = tasksData.filter(challenge =>
            activeChallengesIds.includes(challenge.id)
        );

        activeChallenges.forEach(challenge => {
            const challengeTasks = challenge.tasks || [];
            challengeTasks.forEach(task => {
                const dateKey = task.date; // "2025-09-30"
                if (!groupedTasks[dateKey]) {
                    groupedTasks[dateKey] = [];
                }
                groupedTasks[dateKey].push({
                    ...task,
                    challengeTitle: challenge.title,
                    completed: false,
                });
            });
        });

        setTasksByDate(groupedTasks);
    }, [activeChallengesIds]);

    const handleTaskToggle = (dateKey, taskIndex) => {
        setTasksByDate(prev =>
            Object.fromEntries(
                Object.entries(prev).map(([date, tasks]) => [
                    date,
                    date === dateKey
                        ? tasks.map((task, i) =>
                            i === taskIndex
                                ? { ...task, completed: !task.completed }
                                : task
                        )
                        : tasks,
                ])
            )
        );
    };

    return (
        <div className="w-full h-full p-4 overflow-y-auto shadow-lg">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                Task Timeline
            </h2>

            {Object.keys(tasksByDate).length === 0 ? (
                <p className="text-gray-600">No tasks available.</p>
            ) : (
                Object.keys(tasksByDate)
                    .sort((a, b) => new Date(a) - new Date(b)) // sắp xếp ngày
                    .map(dateKey => (
                        <div key={dateKey} className="mb-6">
                            <h3 className="text-lg font-semibold text-yellow-500 mb-2">
                                {new Date(dateKey).toLocaleDateString('en-US', {
                                    weekday: 'long',
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })}
                            </h3>
                            <ul className="space-y-2">
                                {tasksByDate[dateKey].map((task, index) => (
                                    <li
                                        key={index}
                                        className=" p-2  rounded-md"
                                    >
                                        <IconButton
                                            icon={Check}
                                            variant={task.completed ? 'success' : 'unmarked'}
                                            size="sm"
                                            onClick={() => handleTaskToggle(dateKey, index)}
                                            title={
                                                task.completed
                                                    ? 'Completed - Click to Undo'
                                                    : 'Mark as Done'
                                            }
                                        />
                                        <span
                                            className={`ml-20 ${task.completed
                                                ? 'text-green-600  font-medium'
                                                : 'text-gray-700 dark:text-gray-300'
                                                }`}
                                        >
                                            {task.task} (from {task.challengeTitle})
                                        </span>

                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))
            )}
        </div>
    );
};

TaskTimeline.propTypes = {
    activeChallengesIds: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default TaskTimeline;
