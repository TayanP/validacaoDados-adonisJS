 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
 import { schema, rules } from '@ioc:Adonis/Core/Validator'


export default class DatesController {
  public async validateDates(context: HttpContextContract) {
    const {request} = context

    const validationSchema = schema.create({
      date: schema.date({
        /* formato padrao do AdonisJS - yyyy-MM-dd */
        /* formato padrao BR */
        format: 'dd/MM/yyyy'
      }, [
        /* verifica se a data é depois de hoje
        rules.after('today') */

        /* verifica se a data é antes de hoje
        rules.before('today') */

        /* verifica se a data é anterior a um ano
        rules.before(1, 'years') */

         /* verifica se a data é 10 dias antes
         rules.before(1, 'days') */
      ])
    })
    await request.validate({
      schema: validationSchema
    })
    return { success: true }

  }
}
