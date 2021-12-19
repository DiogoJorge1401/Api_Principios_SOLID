import { User } from '../../entities/User'
import { MailProvider } from '../../providers/MailProvider'
import { UsersRepository } from '../../repositories/UsersRepository'
import { CreateUserRequestDTO } from './CreateUserDTO'

export class CreateUserUseCase {
  constructor(
    private usersRepository: UsersRepository,
    private mailProvider: MailProvider
  ) {}

  async execute(data: CreateUserRequestDTO) {
    const userAlredyExists = await this.usersRepository.findByEmail(data.email)

    if (userAlredyExists) throw new Error('User alredy exists!')

    const user = new User(data)
    await this.usersRepository.save(user)

    await this.mailProvider.sendMail({
      to: {
        address: data.email,
        name: data.name,
      },
      from: {
        name: 'Suegoid',
        address: 'sue@mail.com',
      },
      subject: 'Account created successfully',
      body: '<p>You can now login to our platform</p>',
    })
  }
}
