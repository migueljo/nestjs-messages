import { Controller, Delete, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'All messages';
  }
  @Post()
  createMessage() {
    return 'Create message';
  }
  @Delete('/:id')
  deleteMessage() {
    return 'Delete message';
  }
  @Get('/:id')
  getMessage() {
    return 'Get message';
  }
}
