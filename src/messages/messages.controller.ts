import {
  Controller,
  Delete,
  Get,
  Post,
  Param,
  Body,
  NotFoundException,
} from '@nestjs/common';
import { MessagesService } from './messages.service';

import { CreateMessageDTO } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  constructor(public messagesService: MessagesService) {}

  @Get()
  listMessages() {
    return this.messagesService.findAll();
  }
  @Post()
  createMessage(@Body() body: CreateMessageDTO) {
    return this.messagesService.create(body.content);
  }
  @Delete('/:id')
  deleteMessage(@Param('id') id: string) {
    return this.messagesService.delete(id);
  }
  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const message = await this.messagesService.findOne(id);
    if (!message) {
      throw new NotFoundException('message not found');
    }
    return message;
  }
}
