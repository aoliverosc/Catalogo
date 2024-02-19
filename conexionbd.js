const { Client } = require('pg')
//import { Pool, Client } from 'pg'

const connectionData = {
    user: '',
    host: '',
    database: 'db_catalogo',
    password: 'EliteBook1',
    port: 5432,
  }
  const client = new Client(connectionData)