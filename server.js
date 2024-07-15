const express = require('express');
const { faker } = require('@faker-js/faker');
const app = express();

class Usuario {
    constructor() {
        this._id = faker.string.uuid();
        this.primerNombre = faker.person.firstName();
        this.apellido = faker.person.lastName();
        this.numeroDeTelefono = faker.phone.number();
        this.email = faker.internet.email();
        this.contrasena = faker.internet.password();
    }
}

class Empresa {
    constructor() {
        this._id = faker.string.uuid();
        this.nombre = faker.company.name();
        this.direccion = {
            calle: faker.location.streetAddress(),
            ciudad: faker.location.city(),
            estado: faker.location.state(),
            codigoPostal: faker.location.zipCode(),
            pais: faker.location.country()
        };
    }
}

// Ruta que devuelve un nuevo usuario
app.get('/api/users/new', (req, res) => {
    const nuevoUsuario = new Usuario();
    res.json(nuevoUsuario);
});

// Ruta que devuelve una nueva compañía
app.get('/api/companies/new', (req, res) => {
    const nuevaEmpresa = new Empresa();
    res.json(nuevaEmpresa);
});

// Ruta que devuelve tanto un nuevo usuario como una nueva compañía
app.get('/api/user/company', (req, res) => {
    const nuevoUsuario = new Usuario();
    const nuevaEmpresa = new Empresa();
    res.json({ usuario: nuevoUsuario, empresa: nuevaEmpresa });
});

// Inicia el servidor
app.listen(8080, () => {
    console.log(`El servidor se está ejecutando en el puerto 8080`);
});

