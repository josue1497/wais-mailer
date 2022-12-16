import { Injectable } from '@nestjs/common';
import { MailService } from '../mail/mail.service';
import { User } from '../user/user.entity';

@Injectable()
export class ContactService {
  constructor(private mailService: MailService) {}

  async signUp(user: User) {
    await this.mailService.sendUserConfirmation(user);
    await this.mailService.sendMessageFromClient(user);
  }
}