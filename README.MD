# Weather Forecast App

![Ionic](https://img.shields.io/badge/Ionic-7-red)
![Angular](https://img.shields.io/badge/Angular-17-red)
![Tomorrow](https://img.shields.io/badge/Tomorrow_io-API-red)


## Descrição

Weather Forecast App é um aplicativo de previsão do tempo desenvolvido com Ionic e Angular. Ele permite que os usuários visualizem a previsão do tempo atual e para os próximos dias em qualquer cidade do mundo.
O aplicativo usa a API do [Tomorrow.io](https://docs.tomorrow.io/reference/intro/getting-started) para obter dados de previsão do tempo e seu patote de ícones.
<img src="./src/assets/icon/powered-by-tomorrow/Powered_by_Climacell-Halo.svg" width="200">

## Demo


## Recursos

- [x] Integração com API de previsão do tempo
- [x] Previsão do tempo atual
- [x] Previsão para os próximos 7 dias
- [ ] Busca de cidades por nome

## Requisitos

- Node.js
- Ionic CLI
- API Key do serviço de previsão do tempo (tomorrow.io)

## Instalação

1. Clone o repositório:

   ```sh
   git clone https://github.com/RodrigoVellozo/rv-weather
   cd rv-weather
   npm install
   ionic capacitor run android -l --external

