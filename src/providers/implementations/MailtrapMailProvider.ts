import { MailProvider, Message } from '../MailProvider'
import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'

export class MailtrapMailProvider implements MailProvider {
  private transpoter: Mail

  constructor() {
    this.transpoter = nodemailer.createTransport({
      host: 'smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: '0638b32cf1aeba',
        pass: '7f3221a6d57898',
      },
    })
  }

  async sendMail(message: Message): Promise<void> {
    await this.transpoter.sendMail({
      to: message.to,
      from: message.from,
      subject: message.subject,
      html: message.body,
    })
  }
}
