
# New Year Timer

Esse projeto é apenas para deixar marcada essa virada de ano, sendo assim é bem simples.
Durante os próximos 5 dias após a virada de cada ano ficará escrito "Feliz (Ano Atual)!!" e ficará com fogos soltando...

Antes de tudo, devo os devidos créditos ao [Roger-Melo](https://github.com/Roger-Melo), pois estava com certa dificuldade no cálculo da diferença de anos e encontrei um [projeto](https://github.com/Roger-Melo/contagem-regressiva-ano-novo) dele que me ajudou com isso... 
## Desafios

- Desenvolvimento do calcúlo para a distância de tempo;
- Formatação da diferença de tempo do tipo "time" para os respectivos tipos: Dia, Hora, Minutos e Segundos.
- Criação dos fogos apenas utilizando CSS vanilla.
## Aprendizados

Por final aprendi algumas coisas interessantes como: 
## Na prática

### Diferença de Tempo
Abaixo está o trecho de código responsável por calcular a diferença de tempo
```js
const nextYear = new Date().getFullYear() + 1
const nextTime = new Date(`January 01 ${nextYear} 00:00:00`)

function yearCalc(){

    const actualYear = new Date()
    const diff = nextTime - actualYear

    const days = Math.floor((((diff / 1000) / 60) / 60) / 24)
    const hours = Math.floor(((diff / 1000) / 60) / 60) % 24
    const minutes = Math.floor((diff / 1000) / 60) % 60
    const seconds = Math.floor(diff / 1000) % 60    

    printTimer((days < 10? '0'+days: days), (hours < 10? '0'+hours: hours), (minutes < 10? '0'+minutes: minutes), (seconds < 10? '0'+seconds: seconds))
    
}
```

### Criação dos Fogos

#### Definição dos estilos no CSS.
```css
.firework{

    position: absolute;

    width: 10px;
    height: 10px;

    display: none;
    align-items: center;
    justify-content: center;

    /* background-color: #fff; */

    border-radius: 100%;

    animation: explosion 2s infinite linear;

    > .firework2{

        border-radius: 100%;
        animation: intern-explosion 2s infinite linear;

    }
}

```

#### Keyframes - Animação.

```css
@keyframes explosion {
    0%{
        width: 10px;
        height: 10px;        
        opacity: 1;
    }

    80%{
        opacity: 1;
    }

    100%{
        width: 100px;
        height: 100px;    
        opacity: 0;
    }
}

@keyframes intern-explosion {
    0%{
        width: 5px;
        height: 5px;        
        opacity: 1;
    }

    85%{
        opacity: 1;
    }

    100%{
        width: 70px;
        height: 70px;    
        opacity: 0;
    }
}
```

#### HTML
Basta definir a cor da borda, da explosão interna e externa e a sua posição através do inline-css
```html
<div class="firework" style="border: 2.5px dotted #002fff; top: 5svh; left: 12.5vw">
        <div class="firework2" style="border: 2.5px dotted #002fff;"></div>
</div>
```
### Screenshots

![ScreenShot 1](https://github.com/Victor-Lis/New-Year-Timer/blob/main/ScreenShots/ScreenShot1.png)

![ScreenShot 2](https://github.com/Victor-Lis/New-Year-Timer/blob/main/ScreenShots/ScreenShot2.png)
## Autores

- [@Victor-Lis](https://github.com/Victor-Lis)
