# Controle de Academia | LaunchBase
 O projeto de Controle de Academia é uma plataforma de gerenciamento de membros e instrutures de uma academia!.
<h2 align="center">Controle de Academia</h2>

___

<h3 align="center">
  <a href="#information_source-sobre">Sobre</a>&nbsp;|&nbsp;
  <a href="#interrobang-motivo">Motivo</a>&nbsp;|&nbsp;
  <a href="#seedling-requisitos-mínimos">Requisitos</a>&nbsp;|&nbsp;
  <a href="#rocket-tecnologias-utilizadas">Tecnologias</a>&nbsp;|&nbsp;
  <a href="#package-como-baixar-o-projeto-e-executar">Baixar e Executar</a>&nbsp;
</h3>

___

<div align="center" ><img src="" width="600"></div> 

___

## :information_source: Sobre

O projeto de Controle de Academia é uma plataforma web voltada para o gerenciamentos de intrutores e membros de uma academia, sistema de  cadastro, atualização, remoção e listagem em conjunto com os verbos HTTP dos participantes de uma academia foram alguns dos novos conhecimentos adquiridos nesse projeto do **Bootcamp LaunchBase da Rocketseat.**
___
## :interrobang: Motivo

O Intuito é praticar os conhecimentos absorvidos ao longo do curso de javascript, html, nunjucks, css, servidor, banco de dados dentre outros a fim de estabelece-los e fixa-los de forma sólida aumentando o portfólio pessoal.
___
## :seedling: Requisitos Mínimos

Node.js, Nunjucks, Express, Browser-sync, npm-run-all e method-override.
___
## :rocket: Tecnologias Utilizadas 

O projeto foi desenvolvido utilizando as seguintes tecnologias

- [Node.js](https://nodejs.org/en/)
- [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [Nunjucks](https://mozilla.github.io/nunjucks/)

___
## :package: Como baixar e executar o projeto

  - Clonar o projeto:
```bash
  $ git clone https://github.com/Aszurar/Controle_de_Academia.git
```
- Entrar na pasta do projeto:
```bash
  $ cd NomedaPasta
```
- Após instalar o Node.js, executar o npm:
```bash
  $ npm init -y
```
- Instalar o Express:
```bash
  $ npm install express
```
- Instalar o Nodemon:
```bash
  $ npm install -D nodemon  
```
- Após isso configure o script do arquivo package.json assim:
```json
  "scripts": {
      "start": "nodemon server.js"
    }
```
- Instalar o Nunjucks:
```bash
  $ npm install nunjucks
```
 - Instalar o  Browser-sync e npm-run-all:
```bash
  $ npm install browser-sync npm-run-all -D
```
 - Após isso configure o script do arquivo package.json assim:
 ```bash
   "scripts": {
    "start": "npm-run-all -p nodemon browsersync",
    "nodemon": "nodemon server.js",
    "browsersync": "browser-sync start --proxy http://localhost:5010 --files 'public,views'"
  },
```
 - Execução:
 ```bash
  $ npm start
```
- A utilização d o browser-sync e npm-run-all basicamente serve para que o site seja aberto automaticamente assim que executamos o projeto, que a página na web se atualize cada veze que realizarmos alguma mudança no projeto, ou seja, a sincronia estea totalmente automática, facilitando o desenvolvimento.
- As configurações no serve.js já estão feitas para utilizarem essas ferramentas.
```json
{   
    "ignore": ["*.json"] 
}
```
- Isso previne o projeto de ficar em loop de carregamento "infinito" no navegador quando uma mudança for feita no arquivo json de dados.
___
Desenvolvido por :star2: Lucas de Lima Martins de Souza.
