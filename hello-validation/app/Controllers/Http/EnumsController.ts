import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

enum userTypes {
  ADMIN = 'ADMIN',
  USER = 'USER'
}
export default class EnumsController {
  public async validateEnum(context: HttpContextContract) {
    const {request} = context
    /* enum é usado para validar o tipo de usuario, se o usuario é admin ou cliente */
    const validationSchema = schema.create({
      value: schema.enum(Object.values(userTypes))
    })

    await request.validate({
      schema: validationSchema
    })
    return { success: true }
  }
}
