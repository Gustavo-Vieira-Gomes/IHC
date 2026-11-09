# Explorar — IHC

Frontend React Native com Expo e TypeScript, baseado no [Figma IHC](https://www.figma.com/design/CwSJyJNgyrMZjZj7bDQWxD/IHC?node-id=0-1). Catálogo, perfil, favoritos e avaliações usam dados de exemplo; não há servidor ou integração de autenticação.

**Estado: implementação parcial, compilação web validada; execução e validação visual pendentes.** As dependências foram instaladas e os 83 assets originais estão disponíveis. O Figma recusou quatro referências por limite de chamadas. Este ambiente bloqueou a abertura da porta local e a criação do Portal Maestri. Consulte [design/STATUS.md](design/STATUS.md) antes de considerar o aplicativo pronto.

## Preparar e executar

Em um ambiente com acesso ao npm e ao Figma:

```sh
npm ci
npm run assets:check
npm run typecheck
npm run web
```

Para dispositivos, execute `npm start` e abra com Expo Go, ou use `npm run android` / `npm run ios` com o respectivo emulador. As dependências foram configuradas para Expo SDK 54 e estão fixadas em `package-lock.json`.

Os 83 assets originais já estão incluídos em `assets/figma/`. O script `npm run assets:download` permite recuperá-los, se necessário, usando as URLs devolvidas pelo Figma. Essas URLs expiram após sete dias; se expirarem, atualize as referências pelo conector. Nenhuma imagem temporária do Figma é usada como origem em runtime.

## Fluxos já escritos

- Inicial → entrar, cadastrar ou pular.
- Login/cadastro mockados, validação e diálogos de recuperação/entrada social.
- Mapa ilustrado → pontos de interesse; cards próximos/favoritos.
- Explorar → pesquisa sem distinção de acentos e categorias.
- Detalhe → favorito, horários, próximos lugares e avaliações de exemplo.
- Mais informações → foto da galeria, preço, horários e categorias.
- Perfil → edição local, favoritos, pontos e leitura das avaliações de exemplo.
- Listas de pontos/favoritos → pesquisa e ordenação.

Os dados são mantidos em AsyncStorage, sem armazenar senhas. O login aceita qualquer usuário e senha preenchidos; no cadastro, use seis caracteres ou mais e confirme o aceite dos termos. A opção “Lembre de mim” mantém a entrada após reabrir o app.

**Ainda faltam:** formulário de adicionar ponto, formulário de avaliação, tela completa de minhas avaliações e tela completa de configurações. Os diálogos atuais de avaliações e conta não substituem essas telas do Figma.

## Verificação

```sh
npm test
npm run typecheck
npm run assets:check
```

`npm test` usa o runner nativo do Node (22.18+). Passaram os cinco testes de regras, a checagem de tipos (`npm run typecheck`), a verificação dos 83 assets e a exportação web (`EXPO_OFFLINE=1 npx expo export --platform web`). Navegação em execução e fidelidade visual permanecem pendentes; o ambiente bloqueou o servidor local com `listen EPERM`.

`design/reference/` contém as respostas originais de código do Figma, apenas como documentação; elas não integram o bundle nem são a implementação React Native.
