import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class NumbersController {
  public async validateNumber(context: HttpContextContract) {
    const {request} = context

    const validationSchema = schema.create({
      value: schema.number([
        rules.range(10, 100)
      ])
    })

    await request.validate({
      schema: validationSchema
    })
    return { success: true }
  }
}
