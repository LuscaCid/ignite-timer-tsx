
# Projeto Ignite timer

O projeto é uma forma diferente de lidar com pomodoro, atribuindo um historico de lancamentos de atividades, um formulario feito com a biblioteca react-hook-form e todo feito em react.

## typescript + react + zod


## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/LuscaCid/ignite-timer-tsx.git
```

Entre no diretório do projeto

```bash
  cd ignite-timer-tsx
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run dev
```


## Instalação

Instale as dependencias do projeto com npm

```bash
  cd ignite-timer-tsx
  npm install
  npm run dev
```
    
## Stack utilizada

**Front-end:** React, Redux, styled-components, react-hook-form, typescript, zod




## Uso/Exemplos

```typescript
//properties interface
interface ComponentProps {
  setStateFunction : React.dispatch<React.setStateAction<number>>
  children : Reactnode
} 
export function App({setStateFunction, children} : ComponentProps) {
  return (
    <React.reactFragment>
        {children}
    </React.reactFragment>
    )
}
```


