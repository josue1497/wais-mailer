import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { User } from './../user/user.entity';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendUserConfirmation(user: User) {
    await this.mailerService.sendMail({
      to: user.email,
      subject: 'Gracias por contactarnos 🤍',
      template: './confirmation', // `.hbs` extension is appended automatically
      context: {
        // ✏️ filling curly brackets with content
        name: user.name,
      },
    });
  }

  async sendMessageFromClient(user: User) {
    await this.mailerService.sendMail({
      to: process.env.MAIL_USER,
      subject: 'Contacto de nuevo cliente.',
      template: './contact', // `.hbs` extension is appended automatically
      context: {
        name: user.name,
        email: user.email,
        message: user.message,
      },
    });
  }
}
