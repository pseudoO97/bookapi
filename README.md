<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

<<<<<<< HEAD
<<<<<<< HEAD
### Project
=======
## Branche du projet à installer : <b>Master</b>
## Project
>>>>>>> 418fc94b94f265c0012721ad8cbd48297f0ad289
=======
## Branche du projet à installer : <b>Master</b>
## Project
>>>>>>> 9c2c3b83fe8120766fea54a7865b157eded0c615
 Ce projet est une API REST (liée à MongoDB) pour récupérer des données concernant des livres. Tout ceci dans le but de créer une application où nous pourrons recenser nos livres préférés que nous souhaiterions partager. 
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
$ npm run start
```
## How it works
- Pour tester la sécurité des URL sur Postman récupérer le token avec cette commande curl : 

```bash
$ curl -X POST http://localhost:3000/login -d '{"username": "John", "password": "John"}' -H "Content-Type: application/json"
```
- Ensuite les urls sécurisées sont <a href="http://localhost:3000/book/api" target="_blank">localhost:3000/book/api</a>  et <a href="http://localhost:3000/category/api" target="_blank">localhost:3000/category/api</a>. Et bien sûr nous pourrons y accéder via une requête POST.
<br><br>
<<<<<<< HEAD
<<<<<<< HEAD
- Nous pouvons insérer des données en POST avec par exemple avec par exemple <a href="http://localhost:3000/dictionary" target="_blank">/dictionary</a> etc... et les visualiser en GET.
<br><br>
- Enfin, nous pouvons visualiser les URL avec Swagger via <a href="http://localhost:3000/api" target="_blank">localhost:3000/book/api</a>
=======
- Nous pouvons insérer des données en POST avec par exemple <a href="http://localhost:3000/dictionary" target="_blank">/dictionary</a> etc... et les visualiser en GET.
<br><br>
- Enfin, nous pouvons visualiser les URL avec Swagger via <a href="http://localhost:3000/api" target="_blank">localhost:3000/api</a>
>>>>>>> 418fc94b94f265c0012721ad8cbd48297f0ad289
=======
- Nous pouvons insérer des données en POST avec par exemple <a href="http://localhost:3000/dictionary" target="_blank">/dictionary</a> etc... et les visualiser en GET.
<br><br>
- Enfin, nous pouvons visualiser les URL avec Swagger via <a href="http://localhost:3000/api" target="_blank">localhost:3000/api</a>
>>>>>>> 9c2c3b83fe8120766fea54a7865b157eded0c615
## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## License

Nest is [MIT licensed](LICENSE).
