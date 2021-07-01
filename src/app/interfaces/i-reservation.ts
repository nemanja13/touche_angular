export interface IReservation {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    howMany: number;
    date: string;
    message: string;
}
export interface IReservationRequest extends IReservation {
}
