import { readFile, writeFile } from 'fs/promises';
import path from 'path';

const messagesFilePath = path.resolve('../../', 'messages.json');

export class MessagesRepository {
  async findOne(id: string) {
    const contents = await readFile(messagesFilePath, 'utf8');
    const messages = JSON.parse(contents);
    return messages[id] ?? null;
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
}
