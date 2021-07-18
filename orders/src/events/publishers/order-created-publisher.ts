import {
  Publisher,
  OrderCreatedEvent,
  Subjects,
} from "@fadeesorg/ticketing-common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
