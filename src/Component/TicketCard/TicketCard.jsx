import React from 'react';

const TicketCard = ({ticket,handleSelect}) => {
    return (
        <div onClick={()=>handleSelect(ticket)}
        className='border p-4 rounded shadow cursor-pointer'
        >
<div className='flex justify-between '><h3 className='font-bold'> {ticket.title}</h3>
            <p className='text-sm text-gray-600'> {ticket.status}</p></div>
            <div className='flex justify-between mt-3'>
                <span>{ticket.customer}</span>
                <span className='text-red-500'>{ticket.priority}</span>
            </div>

        </div>
    );
};

export default TicketCard;