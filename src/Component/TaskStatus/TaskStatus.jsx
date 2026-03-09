import { toast } from "react-toastify";

const TaskStatus = ({ tasks, handleComplete }) => {

  const handleClick = (id, title) => {

    toast.success(`${title} marked as completed ✅`);

    handleComplete(id);
  };

  return (
    <div className="p-4 border rounded">
      <h2 className="text-xl font-bold mb-4">Task Status</h2>

      {tasks.length === 0 && (
        <p className="text-gray-500">Select a ticket to add to Task Status</p>
      )}

      {tasks.map((task) => (
        <div key={task.id} className="flex justify-between items-center mb-3">
          <span>{task.title}</span>

          <button
            onClick={() => handleClick(task.id, task.title)}
            className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
          >
            Complete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskStatus;