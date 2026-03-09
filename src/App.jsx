
import { useState } from 'react';
import './App.css'
import Banner from './Component/Banner/Banner'
import Navbar from './Component/Navbar/Navbar'
import ticketsData from "../public/tickets.json"
import TicketCard from './Component/TicketCard/TicketCard';
import TaskStatus from './Component/TaskStatus/TaskStatus';
import { toast } from 'react-toastify';
import ResolvedTask from './Component/ResolvedTask/ResolvedTask';
import Footer from './Component/Footer/Footer';
function App() {
 const tickets = ticketsData;
  const [tasks, setTasks] = useState([]);
  const [resolved, setResolved] = useState([]);

const handleSelect = (ticket) => {

  const exists = tasks.find(t => t.id === ticket.id);

  if(exists){
    toast.warning("Ticket already in progress ⚠️");
    return;
  }

  toast.success("Ticket added to task status");

  setTasks([...tasks, ticket]);
};

const handleComplete = (id) => {

  const completedTask = tasks.find(task => task.id === id);

  setTasks(tasks.filter(task => task.id !== id));

  setResolved([...resolved, completedTask]);
};

  return (
    <div>
      <Navbar />
      <div className='max-w-7xl p-8  mx-auto md:pt-10'>

      <Banner
        inProgress={tasks.length}
        resolved={resolved.length}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  gap-6 py-10">

        <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          {tickets.map(ticket => (
            <TicketCard
              key={ticket.id}
              ticket={ticket}
              handleSelect={handleSelect}
            />
          ))}
        </div>

       <div>
         <TaskStatus
          tasks={tasks}
          handleComplete={handleComplete}
        />
        <ResolvedTask resolved={resolved} />
       </div>

      </div>

    </div>

    <Footer />
    </div>
  );
}

export default App
