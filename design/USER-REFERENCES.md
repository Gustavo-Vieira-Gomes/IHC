# Referências fornecidas pelo usuário

Em 09/11/2026, o usuário forneceu capturas das quatro telas cuja leitura estava bloqueada pelo limite do Figma. Essas imagens passaram a ser a referência para a implementação restante.

| Tela | Referência local | Código |
| --- | --- | --- |
| Adicionar Ponto | screenshots/1-14-user.png | src/screens/AddPlace.tsx |
| Avaliação | screenshots/66-354-user.png | src/screens/Review.tsx |
| Minhas avaliações | screenshots/91-444-user.png | src/screens/MyReviews.tsx |
| Configurações | screenshots/96-375-user.png | src/screens/Settings.tsx |

As capturas são apenas documentação. Elas não são usadas como imagens das telas em execução.

Os componentes existentes de foto, preço, horários e categorias foram reutilizados. Os pequenos ícones das configurações foram construídos como SVGs locais em `assets/ui/`, com base na referência fornecida, sem dependências externas.

O desenho de “Adicionar Ponto” não mostra uma ação de envio ou um campo de nome. Para completar o fluxo navegável, foi acrescentado um botão de salvar depois das categorias; a confirmação pede o nome do lugar. A foto é opcional e, quando ausente, o ponto usa a ilustração de mapa do próprio projeto.

O fluxo de avaliação salva a nota, o comentário e a foto opcional no dispositivo, recalcula a nota do lugar e permite editar avaliações próprias pela lista “Minhas reviews”. As preferências de notificações e localização são simuladas; não solicitam acesso ao GPS nem enviam notificações reais.
