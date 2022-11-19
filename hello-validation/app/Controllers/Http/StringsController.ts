 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
 import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class StringsController {
  public async validateString(context: HttpContextContract) {
    // desestruturando context para pegar o context.request()
    let {request} = context

    // criando o schema de validação
    let schemaString = schema.create({
    // verifica se um dado é ou não é uma string
      isIstring:schema.string(),
      // verifica se é uma string, mas deixa o dado como opcional
      isStringOptional:schema.string.optional(),
      // verifica se é uma string mas aceita o valor null
      stringNull: schema.string.nullable(),
      // verifica se é uma string aceitando null e permitindo opcional
      stringNullAndOptional:schema.string.nullableAndOptional()
    })

    await request.validate({
      schema: schemaString
    })
    return {response: 'success'}


  }

  public async validateStringWithRules(context: HttpContextContract) {
     // desestruturando context para pegar o context.request()
     let {request} = context

     const rulesSchema = schema.create({

      // permitir apenas caracteres alfabeto(alfa)
      alpha: schema.string([
        rules.alpha()
      ]),
      // permitir apenas caracteres alfanumericos
      alphaNum: schema.string([
        rules.alphaNum()
      ]),
      // validar o tamanho da string com no minimo 3 caracteres e no maximo 5 cacteres
       strlen: schema.string([
        rules.minLength(3),
        rules.maxLength(5)
      ]),
      // retirar espaços em branco de inicio e do fim da string
      trim: schema.string([
        rules.trim()
      ]),
      // escapa caracteres especiais para evitar SQLInjection
      escape: schema.string([
        rules.escape()
      ]),
      /*  // verifica se é um endereço de API valido
       ip: schema.string([
        rules.ip()
       ]),  */
       // verificar se determinado dado é um email
       email: schema.string([
        rules.email()
       ])
     })

     await request.validate({
        schema: rulesSchema
     })
     return {response: 'success'}
  }

  public async validateStringWithDatabase(context: HttpContextContract) {
    let {request} = context

    const rulesSchema = schema.create({
      name: schema.string(),
      /* verifica se o e-mail é unico */
      email: schema.string({}, [
        rules.email(),
        rules.unique({table: 'users', column: 'email'})
      ]),
      /* verifica se o usuario de indicaçao existe. */
      existeEmail: schema.string({}, [
        rules.exists({ table: 'users', column: 'email'})
      ]),

      /* ele vai verificar buscando por um [campo]_confirmation  */
      password: schema.string({}, [
        rules.required(),
        rules.minLength(6),
        rules.maxLength(10),
        rules.confirmed()
      ])
    })
    await request.validate({
      schema: rulesSchema
    })
    return { success: true}
  }
  public async validateStringWithEquals(context: HttpContextContract) {
    const {request} = context

    const validationSchema = schema.create({
     // Verifica se o username é igual a Alessandro
      username: schema.string({}, [
        rules.equalTo('Alessandro')
      ]),
      // verifica se o campo type NÃO é igual a determinado valor
      type: schema.string({}, [
        rules.notIn(['ADMIN', 'TESTER'])
      ])
      // verifica

    })
    await request.validate({
      schema: validationSchema
    })
    return { success: true }
  }

}
