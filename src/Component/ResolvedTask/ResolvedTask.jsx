import React from "react";

const ResolvedTask = ({ resolved }) => {
  return (
    <div className="p-4   mt-6">
      <h2 className="text-xl font-bold mb-4">Resolved Tasks</h2>

      {resolved.length === 0 && (
        <p className="text-gray-500">No resolved tickets yet</p>
      )}

      {resolved.map((task) => (
        <div
          key={task.id}
          className="border-b py-2 flex justify-between"
        >
          <span>{task.title}</span>
          <span className="text-green-600 font-semibold">
            Completed
          </span>
        </div>
      ))}
    </div>
  );
};

export default ResolvedTask;