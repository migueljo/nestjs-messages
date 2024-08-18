import { Controller, Delete, Get, Post, Param, Body } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'All messages';
  }
  @Post()
  createMessage(@Body() body: any) {
    console.log(body);
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
