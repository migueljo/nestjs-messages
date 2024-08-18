import { Controller, Delete, Get, Post, Param, Body } from '@nestjs/common';

import { CreateMessageDTO } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'All messages';
  }
  @Post()
  createMessage(@Body() body: CreateMessageDTO) {
    return `Create message: ${body.content}`;
  }
  @Delete('/:id')
  deleteMessage(@Param('id') id: string) {
    return `Delete message ${id}`;
  }
  @Get('/:id')
  getMessage() {
    return 'Get message';
  }
}
