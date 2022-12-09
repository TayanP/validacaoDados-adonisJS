 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
 import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class ObjectController {
  public async validateObject(context: HttpContextContract) {
    // desestruturando context para pegar o context.request()
    let {request} = context

    // criando o schema de validação
    let schemaObject = schema.create({
      user: schema.object().members({
        id: schema.number(),
        name: schema.string()
      }), 
      address: schema.object().members({
        city: schema.string(),
        state: schema.string(),
      }),
      /* anyMembers = aceita qualquer tipo de dado, e deixar nulo */
      state: schema.object.nullable().anyMembers(),
      status: schema.string()
    
    })

    await request.validate({
      schema: schemaObject
    })
    return {response: 'success'}
  }
  public async showObjectRequest(context: HttpContextContract) {
    // desestruturando context para pegar o context.request()
    let {request} = context

     let schemaObject = schema.create({
      user: schema.object().members({
        name: schema.string(),
        id: schema.number()
      })
    })
    const validated = await request.validate({
      schema: schemaObject
    })

    return validated
  }
}

