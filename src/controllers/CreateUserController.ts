import { Request, Response } from 'express'
import { CreateUserUseCase } from '../useCases/CreateUser/CreateUserUseCase'

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { name, password, email } = req.body
    try {
      await this.createUserUseCase.execute({
        email,
        name,
        password,
      })
      return res.status(201).send()
    } catch (err) {
      return res.status(400).json({
        message: err.message||'Unexpected error.',
      })
    }
  }
}
