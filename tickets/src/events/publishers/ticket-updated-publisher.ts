import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from "@fadeesorg/ticketing-common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
