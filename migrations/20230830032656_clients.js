/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.hasTable('clients').then(function (exists) {
    if (!exists) {
      /* Si la tabla no existe, voy a crear una nueva tabla */
      return knex.schema.createTable('clients', function (table) {
        // sintaxis: table.tipoDeDato("nombreAtributo").chainableMethods
        table.increments('client_id').primary()// en knex usamos increments en vez de serial como tipo de dato
        table.string('first_name').notNullable()
        table.string('last_name').notNullable() // notNullable es que no puede quedar nulo (not null) // notNullable es que no puede quedar nulo (not null)
        table.string('email').notNullable()
        table.string('phone')
        table.string('address').notNullable()
        table.integer('postal_code').notNullable()
        table.string('district').notNullable()
        table.string('city').notNullable()
        table.boolean('active').notNullable().defaultTo(true) // defaultTo: Especifico un valor por defecto
        table.timestamp('created_at').defaultTo(knex.fn.now()) // knex.fn.now() me devuelve la fecha y hora actual al momento se crear el registro en la base de datos.
      })
    }
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.hasTable('clients').then(function (exists) {
    if (exists) {
      return knex.schema.dropTable('clients')
    }
  })
}
