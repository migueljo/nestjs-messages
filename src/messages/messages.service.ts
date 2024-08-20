import { MessagesRepository } from './messages.repositories';

export class MessagesService {
  messagesRepository: MessagesRepository;

  constructor() {
    // Service is creating its own dependencies
    // DON'T DO THIS IN REAL APPS
    this.messagesRepository = new MessagesRepository();
  }

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
