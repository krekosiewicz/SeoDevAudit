import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
  getConfig() {
    return [
      { id: 1, title: 'Post Title', description: 'Post Description' },
      { id: 2, title: 'Post Title2', description: 'Post Description2' },
    ];
  }
}
