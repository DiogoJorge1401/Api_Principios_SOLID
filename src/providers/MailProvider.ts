interface address{
  address:string
  name:string
}


export interface Message {
  to: address
  from: address
  subject: string
  body: string
}


export interface MailProvider{
  sendMail(message:Message):Promise<void>;
}