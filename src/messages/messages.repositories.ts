import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

const messagesFilePath = 'messages.json';

@Injectable()
export class MessagesRepository {
  async findOne(id: string) {
    const contents = await readFile(messagesFilePath, 'utf8');
    const messages = JSON.parse(contents);
    return messages[id];
  }
  async findAll() {
    const contents = await readFile(messagesFilePath, 'utf8');
    const messages = JSON.parse(contents);
    return messages;
  }
  async create(content: string) {
    const contents = await readFile(messagesFilePath, 'utf8');
    const messages = JSON.parse(contents);
    const id = Math.floor(Math.random() * 99999);
    messages[id] = { id, content };
    await writeFile(messagesFilePath, JSON.stringify(messages));
    return messages[id];
  }
  async delete(id: string) {
    const contents = await readFile(messagesFilePath, 'utf8');
    const messages = JSON.parse(contents);
    delete messages[id];
    await writeFile(messagesFilePath, JSON.stringify(messages));
    return true;
  }
}
