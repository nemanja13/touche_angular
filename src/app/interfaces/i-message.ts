export interface IMessage {
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    message: string;
}
export interface IMessageRequest extends IMessage {
}
