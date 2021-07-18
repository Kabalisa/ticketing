import {
  Publisher,
  Subjects,
  ExpirationCompleteEvent,
} from "@fadeesorg/ticketing-common";

export class ExportCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
