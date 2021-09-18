const mongoose = require('mongoose');
const Ticket = require('../models/Ticket');


exports.giveTicketsIsInProgressSince3Days = async () => {
    const ticketsInProgress = await Ticket.find({ ticketStatus: "In Progress" });


    let ticketsInProgressSince3Days = [];

    ticketsInProgress.forEach(ticket => {

        // TODO: Modifier le createdAt par la date ou le ticket est passé en in progress
        const ticketDate = new Date(ticket.createdAt);
        const todayDate = new Date();

        const diffTime = Math.abs(todayDate - ticketDate);
        const diffHours = diffTime / (1000 * 60 * 60);


        if (diffHours >= 72) {
            ticketsInProgressSince3Days.push(ticket)
        }

        ticketsInProgressSince3Days;
    })

    return ticketsInProgressSince3Days


}


exports.changeTicketStatusToTodo = async (ticket) => {

    //TODO: A tester
    return await Ticket.findByIdAndUpdate(ticket._id, {
        ...ticket.toJSON(),
        ticketStatus: "Todo"
    })


}


