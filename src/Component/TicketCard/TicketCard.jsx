import React from 'react';
import { MdDateRange } from 'react-icons/md';

const TicketCard = ({ ticket, handleSelect }) => {
    return (
        <div onClick={() => handleSelect(ticket)}
            className='p-6 hover:scale-105 rounded shadow-lg cursor-pointer'
        >
            <div className='flex justify-between '><h3 className='font-bold'> {ticket.title}</h3>
                <p className={`${ticket.status === "Open"
                            ? "text-gray-700 rounded-2xl px-2 bg-green-500"
                            : ticket.status === "In Progress"
                                ? "text-gray-700 rounded-2xl px-2 bg-yellow-500"
                                : "text-red-500"
                        }`}> {ticket.status}</p></div>
            <p>{ticket.description}</p>
            <div className='flex justify-between mt-3 text-gray-500'>
                <div className='flex justify-between gap-4'>
                    <span>{ticket.id}</span>
                    <span className={`${ticket.priority === "Low"
                            ? "text-green-500"
                            : ticket.priority === "Medium"
                                ? "text-yellow-500"
                                : "text-red-500"
                        }`}>{ticket.priority}</span>
                </div>
                <div className='flex justify-between gap-2'>
                    <span>{ticket.customer}</span>
                    <span className='flex'><MdDateRange className='text-blue-500 mt-1' /> <span> {ticket.createdAt}</span></span>
                </div>

            </div>

        </div>
    );
};

export default TicketCard;