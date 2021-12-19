import { User } from '../../entities/User'
import { UsersRepository } from '../UsersRepository'

export class MySQLUsersRepository implements UsersRepository {
  private users: User[] = []

  async findByEmail(email: string): Promise<User> {
    const user = this.users.find((u) => u.email === email)
    return user
  }
  async save(user: User): Promise<void> {
    this.users.push(user)
  }
}
