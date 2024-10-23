# Fornece um cadastro de usuários com todas as operações em NestJS.

## Descrição

Avaliar as habilidades técnicas e práticas de um Desenvolvedor Full Stack Especialista

## Configuração do Projeto

Este projeto foi criado utilizando **NestJS** com **TypeORM** para a gestão de banco de dados MySQL. Além disso, há um módulo de autenticação configurado para gerenciar login de usuários.


### Configuração de Variáveis de Ambiente

O projeto utiliza o **ConfigModule** do NestJS para carregar variáveis de ambiente. Para isso, configure o arquivo `.env` com as variáveis necessárias para a conexão com o banco de dados MySQL:

     DATABASE_HOST     = localhost
     DATABASE_PORT     = 3306
     DATABASE_USERNAME = root DATABASE_PASSWORD = senha
     DATABASE_NAME     = meu_banco
     

No `AppModule`, o **TypeORM** está configurado para usar essas variáveis:

```typescript
TypeOrmModule.forRoot({
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: +process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [User],
  synchronize: true,
}),
```

### Comandos Disponíveis
Aqui estão os principais comandos disponíveis no projeto: 

Iniciar o servidor de desenvolvimento: 
```
npm run start: dev
```
Rodar o ESLint: 
```
npm run lint
```
Executar os testes: 
```
npm run test
```
Rodar o Husky manualmente: 
```
npx husky run pre-commit
```
