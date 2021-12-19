import { CreateUserController } from '../../controllers/CreateUserController'
import { CreateUserUseCase } from './CreateUserUseCase'
import { MySQLUsersRepository } from '../../repositories/implementations/MySQLUsersRepository'
import { MailtrapMailProvider } from '../../providers/implementations/MailtrapMailProvider'

const mySQLUsersRepository = new MySQLUsersRepository()
const mailtrapMailProvider = new MailtrapMailProvider()

const createUserUseCase = new CreateUserUseCase(
  mySQLUsersRepository,
  mailtrapMailProvider
)
const createUserController = new CreateUserController(createUserUseCase)

export { createUserUseCase, createUserController }
