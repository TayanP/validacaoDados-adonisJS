 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
 import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class BooleansController {
  public async validateBoolean(context: HttpContextContract) {
    const {request} = context
    const validationSchema = schema.create({
      /* valida dados do tipo boolean,
      true ou false,
      1 ou 0,
      "1 " ou "0"
      "true " ou "false"
      */
      value: schema.boolean()
    })

    await request.validate({
      schema: validationSchema
    })
    return { success: true }
  }
}

