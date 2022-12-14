import Route from '@ioc:Adonis/Core/Route'

Route.post('/', async () => {
  return { hello: 'world' }
})

Route.post('/string', 'StringsController.validateString')
Route.post('/string/rules', 'StringsController.validateStringWithRules')
Route.post('/string/database', 'StringsController.validateStringWithDatabase')
Route.post('/string/equals', 'StringsController.validateStringWithEquals')
Route.post('/enum/validateEnum', 'EnumsController.validateEnum')
Route.post('/number/validateNumber', 'NumbersController.validateNumber')
Route.post('/boolean/validateBoolean', 'BooleansController.validateBoolean')
Route.post('/date/validateDates', 'DatesController.validateDates')
Route.post('/object/validateObject', 'ObjectController.validateObject')
Route.post('/object/showObjectRequest', 'ObjectController.showObjectRequest')
Route.post('/array/validateArrays', 'ArraysController.validate')
Route.post('/array/validateArray', 'ArraysController.validateArray')