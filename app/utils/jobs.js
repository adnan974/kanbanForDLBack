const schedule = require('node-schedule');
const Notification = require('../models/Notification');
const { giveTicketsIsInProgressSince3Days, changeTicketStatusToTodo } = require('../repositories/ticketRepository')


exports.scheduler = () => {
    schedule.scheduleJob("*/5 * * * * *",/*Verifie Etat du Ticket*/ async () => {

        //1- Récupérer les tickets avec le status In progress
        const ticketsInProgressSince3Days = await giveTicketsIsInProgressSince3Days();

        ticketsInProgressSince3Days.forEach(ticket => {

            //2- Changer le status de ces tickets en "Todo"

            changeTicketStatusToTodo(ticket)
                .catch((err) => {
                    console.log(err);
                });


            //3- Sauvegarder la notif dans la BDD

            const owner = ticket.owner;

            const notification = new Notification({
                title: `ticket (title: ${ticket.title}) status has changed`,
                description: `this ticked was in progress since 3 days, it's now in the todo list`,
                associatedUser: ticket.owner
            })

            notification.save()
                .catch((err) => {
                    console.log(err);
                })

        });


        //4- Si le client est connecté, lancer une notification 

        console.log("scheduled...")
    })

}