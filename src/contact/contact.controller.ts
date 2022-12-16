import { Body, Post, Controller } from '@nestjs/common';
import { User } from '../user/user.entity';
import { ContactService } from './contact.service';

@Controller('contact')
export class ContactController {
  constructor(private contactService: ContactService) {}

  @Post('send-mail')
  async sendMail(@Body() user: User) {
    return await this.contactService.signUp(user);
  }
}
