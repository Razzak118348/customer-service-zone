
import { useState } from 'react';
import './App.css'
import Banner from './Component/Banner/Banner'
import Navbar from './Component/Navbar/Navbar'
import ticketsData from "../public/tickets.json"
import TicketCard from './Component/TicketCard/TicketCard';
import TaskStatus from './Component/TaskStatus/TaskStatus';
function App() {
 const [tickets, setTickets] = useState(ticketsData);
  const [tasks, setTasks] = useState([]);
  const [resolved, setResolved] = useState([]);

  const handleSelect = (ticket) => {
    setTasks([...tasks, ticket]);
  };

  const handleComplete = (id) => {

    const completed = tasks.find(t => t.id === id);

    setTasks(tasks.filter(t => t.id !== id));
    setResolved([...resolved, completed]);
    setTickets(tickets.filter(t => t.id !== id));
  };

  return (
    <div>
      <Navbar />
      <div className='max-w-7xl mx-auto pt-10'>

      <Banner
        inProgress={tasks.length}
        resolved={resolved.length}
      />

      <div className="grid grid-cols-3 gap-6 py-10">

        <div className="col-span-2 grid grid-cols-2 gap-4">
          {tickets.map(ticket => (
            <TicketCard
              key={ticket.id}
              ticket={ticket}
              handleSelect={handleSelect}
            />
          ))}
        </div>

        <TaskStatus
          tasks={tasks}
          handleComplete={handleComplete}
        />

      </div>

    </div>
    </div>
  );
}

export default App
