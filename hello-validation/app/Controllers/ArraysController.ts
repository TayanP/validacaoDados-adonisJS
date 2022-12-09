 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
 import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class ArraysController {
  public async validateArray(context: HttpContextContract) {
   
    let {request} = context

    // criando o schema de validação
    let schemaArray = schema.create({
    numbers: schema.array().members(schema.number()),
    strings: schema.array().members(schema.string()),
    objects: schema.array().members(schema.object().members({
     name: schema.string(),
     age: schema.number()
    })),
    anys: schema.array().anyMembers()
    
    })

    const validated = await request.validate({
      schema: schemaArray
    })
    return {response: 'success', data: validated}
  }
}

