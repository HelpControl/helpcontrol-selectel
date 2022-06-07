# HelpcontrolSelectel

This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Smart, Fast and Extensible Build System**

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [React](https://reactjs.org)
  - `npm install --save-dev @nrwl/react`
- Web (no framework frontends)
  - `npm install --save-dev @nrwl/web`
- [Angular](https://angular.io)
  - `npm install --save-dev @nrwl/angular`
- [Nest](https://nestjs.com)
  - `npm install --save-dev @nrwl/nest`
- [Express](https://expressjs.com)
  - `npm install --save-dev @nrwl/express`
- [Node](https://nodejs.org)
  - `npm install --save-dev @nrwl/node`

There are also many [community plugins](https://nx.dev/community) you could add.

## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@helpcontrol-selectel/mylib`.

## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `nx e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.

## Architecture Applications

### UI

- formly

```bash
$npm install @angular/forms @ngx-formly/core @ngx-formly/ionic -S
```

- shared

```
npx nx generate @schematics/angular:module Shared --project=selectel-mobile --flat --path=apps/selectel/mobile/src/app/shared --no-interactive --dry-run
```

```bash
npx nx generate @schematics/angular:module Core --project=selectel-mobile --flat --path=apps/selectel/mobile/src/app/@core --no-interactive --dry-run
```

#### Settings page

```bash
npx nx generate @nrwl/angular:component SettingsEditForm --project=selectel-mobile --module=settings.module.ts --changeDetection=OnPush --path=apps/selectel/mobile/src/app/settings/components --no-interactive --dry-run
```

- ![The Claen Architecture](./docs/img/clean_architecture_ucnle_bob.jpeg)

## Implementation Clean Architecture

```bash
$npx nx g @nx-clean/plugin-core:domain --name=domain --entity=account --directory=selectel/account --repository --usecases --tags=type:domain,scope:account -d
```

```bash
$nx generate @nx-clean/plugin-core:data --name=data-access --domain=account-domain --entity=account --directory=selectel/account --inmemory --tags=type:data,scope:account -d
```

```bash
$npx nx generate @nx-clean/plugin-core:presentation --name=presentation --domain=account-domain --entity=account --directory=selectel/account --data=account-data-access --tags=type:presentation,scope:account -d
```

#### Авторизация

- генерация страници авторизации - регистрации токена доступа к API

```bash
$npx nx generate @nxtend/ionic-angular:page signin --project=selectel/mobile --no-interactive --dry-run
```

#### Добавление станицы Account

```bash
$npx nx generate @nxtend/ionic-angular:page account --project=selectel/mobile --no-interactive --dry-run
```

#### Информация по аккаунту

- компонент отображения баланса

```bash
$npx nx generate @schematics/angular:component account-balance-card --project=selectel-mobile --module=account.module --style=scss --changeDetection=OnPush --displayBlock --path=apps/selectel/mobile/src/app/account/components --prefix=hc-selectel --no-interactive -d
```

## Отображение баланса

- добавление описания доменной сущности

```bash
$npx nx generate @schematics/angular:class balance --project=selectel-account-domain --path=libs/selectel/account/domain/src/lib/entity --type=entity --no-interactive --dry-run
```

- компонент отображения баланса

```bash
$npx nx generate @schematics/angular:component account-balance-card --project=selectel-mobile --module=account.module --style=scss --changeDetection=OnPush --displayBlock --path=apps/selectel/mobile/src/app/account/components --prefix=hc-selectel --no-interactive
```
