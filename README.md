
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


## Aprendizados com as libs para forms

o react-hook-form traz a possibilidade de trabalhar com os formularios tanto de forma uncontrolled tanto quando de forma controlled. De dentro da funcao useForm posso retirar as seguintes outras funcoes

register --> a qual eu posso atribuir propriedades de um input e passar o name do input atraves dos parametros desta funcao

sintaxe : 
````js
  <MinutesAmountInput 
    type="number" 
    id='minutesAmount' 
    placeholder='00'  
    step={5}
    min={5}
    //max={60}
    {...register('minutesAmount' , { valueAsNumber : true })}
  />
````

onde eu posso dizer que este input tera o name de minutesAmount e o valor dele é naturalmente number

posso retirar de la o handleSubmit, esta funcao espera um callback, que no caso será a minha propria funcao de enviar o formulario. a grande questao é que o handleSubmit passa para dentro do meu callback um objeto que contem as informacoes de dentro dos meus inputs e eu consigo tipar atraves do proprio useForm inicialmente

a sintaxe : 
````js
    type NewCycleFormDataType = zod.infer<typeof newCycleFormValidationSchema>
    function Home()  { //handleSubmit basicamente recebe uma callback
    
      const { register, handleSubmit, watch /* formState */} = useForm<NewCycleFormDataType>({
        resolver : zodResolver(newCycleFormValidationSchema),
        defaultValues : {
          minutesAmount : 0,
          task : ""
        }
      })
      
      //acima eu estou inferindo que os elementos que meu form no html possuem os campos nomeados de dentro do type e com os seus respectivos tipos que advem de NewCycleFormDataType
      
      const handleCreateNewCycle = (data : NewCycleFormDataType) => {
        console.log(data)
      }
    //... rest of code
````

ainda existe a funcao watch que literalmente observa o campo do formulario sem que eu precise utilizar de states dentro do meu component