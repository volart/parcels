import * as crypto from 'crypto';

export function generateUniqueId(): string {
  const randomString = crypto.randomBytes(4).toString('hex');
  const timestamp = Date.now().toString();
  return `${timestamp}-${randomString}`;
}

