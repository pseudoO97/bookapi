<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>


## Workers

- Auriane 
- Badis
- Dorian
- Omar
  
## Installation

```bash
$ npm install
```
## Running the app

```bash
# development
$ npm run start
```
## How it works
Pour tester la sécurité des URL sur Postman récupérer le token avec curl : 
```bash
$ curl -X POST http://localhost:3000/login -d '{"username": "John", "password": "John"}' -H "Content-Type: application/json"
```
Ensuite les urls qui sont sécurisées sont <a href="localhost:3000/book/api">localhost:3000/book/api</a>  et <a href="localhost:3000/category/api">localhost:3000/book/api</a>
## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## License

Nest is [MIT licensed](LICENSE).
