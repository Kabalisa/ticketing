import express, { Response, Request } from "express";
import { body } from "express-validator";
import { requireAuth, ValidateRequest } from "@fadeesorg/ticketing-common";
import { Ticket } from "../models/ticket";
import { TicketCreatedPublisher } from "../events/publishers/ticket-created-publisher";
import { natsWrapper } from "../nats-wrapper";

const router = express.Router();

router.post(
  "/api/tickets",
  requireAuth,
  [
    body("title").not().isEmpty().withMessage("title is required"),
    body("price")
      .isFloat({ gt: 0 })
      .withMessage("price must be greater than zero"),
  ],
  ValidateRequest,
  async (req: Request, res: Response) => {
    const { title, price } = req.body;
    const { id } = req.currentUser!;

    const ticket = Ticket.build({
      title,
      price,
      userId: id,
    });

    await ticket.save();

    await new TicketCreatedPublisher(natsWrapper.client).publish({
      id: ticket.id,
      title: ticket.title,
      price: ticket.price,
      userId: ticket.userId,
      version: ticket.version
    });

    res.status(201).send(ticket);
  }
);

export { router as createTicketRouter };
