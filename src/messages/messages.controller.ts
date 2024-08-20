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
  messagesService: MessagesService;

  constructor() {
    // Controller is creating its own dependencies
    // DON'T DO THIS IN REAL APPS, USE DEPENDENCY INJECTION
    this.messagesService = new MessagesService();
  }

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
      throw new NotFoundException();
    }
    return message;
  }
}
