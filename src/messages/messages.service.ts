import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repositories';

@Injectable()
export class MessagesService {
  constructor(public messagesRepository: MessagesRepository) {}

  findOne(id: string) {
    return this.messagesRepository.findOne(id);
  }

  findAll() {
    return this.messagesRepository.findAll();
  }

  create(content: string) {
    return this.messagesRepository.create(content);
  }

  delete(id: string) {
    return this.messagesRepository.delete(id);
  }
}
