import {Subjects, Publisher, PaymentCreatedEvent} from '@fadeesorg/ticketing-common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
    subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}