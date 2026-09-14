# PrediSys - Mining Profitability Dashboard

PrediSys es un dashboard web desarrollado para analizar y estimar la rentabilidad de equipos utilizados en minería de criptomonedas.

El sistema permite comparar diferentes GPUs y CPUs teniendo en cuenta su hashrate, consumo energético, cantidad de equipos y el precio actual de la criptomoneda.

Los precios de ERG (Ergo) y XMR (Monero) se obtienen mediante la API de CoinGecko.

## Características

* Dashboard interactivo para análisis de minería.
* Calculadora de rentabilidad para GPUs.
* Calculadora de rentabilidad para CPUs.
* Consulta de precios de ERG y XMR en tiempo real.
* Cálculo de ingresos diarios estimados.
* Cálculo del consumo energético.
* Cálculo del beneficio estimado.
* Cantidad de equipos configurable.
* Hashrate de red editable.
* Actualización automática de precios cada 5 minutos.
* Interfaz web responsive.
* Integración con la API pública de CoinGecko.

## GPUs disponibles

El sistema incluye los siguientes modelos:

| GPU         |  Hashrate | Consumo |
| ----------- | --------: | ------: |
| RTX 4090    | 1350 MH/s |   290 W |
| RTX 4080    |  960 MH/s |   250 W |
| RTX 3090    |  850 MH/s |   300 W |
| RTX 3080    |  760 MH/s |   220 W |
| RTX 3070    |  480 MH/s |   130 W |
| RTX 3060 Ti |  420 MH/s |   120 W |
| RX 6800 XT  |  620 MH/s |   190 W |
| RX 5700 XT  |  380 MH/s |   130 W |

## CPUs disponibles

| CPU             |  Hashrate | Consumo |
| --------------- | --------: | ------: |
| Ryzen 9 7950X   | 21.5 kH/s |   170 W |
| Ryzen 9 5950X   | 16.2 kH/s |   145 W |
| Ryzen 7 5800X   |  9.6 kH/s |   105 W |
| Intel i9-13900K | 14.8 kH/s |   190 W |

## Criptomonedas

### Ergo

* Ticker: ERG
* Hashrate de red inicial: 15 TH/s
* Recompensa por bloque: 24 ERG
* Tiempo de bloque: 120 segundos

### Monero

* Ticker: XMR
* Hashrate de red inicial: 3.2 GH/s
* Recompensa por bloque: 0.6 XMR
* Tiempo de bloque: 120 segundos

Los valores del hashrate de red pueden ser modificados directamente desde la interfaz.

## Tecnologías utilizadas

* HTML5
* CSS3
* Isolation Forest
* JavaScript
* CoinGecko API
* Git
* GitHub

## Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/USUARIO/PrediSys.git
```

### 2. Entrar al proyecto

```bash
cd PrediSys
```

### 3. Ejecutar

Abrir el archivo:

```text
index.html
```

También se puede utilizar un servidor local como Live Server en Visual Studio Code.

## Uso

1. Abrir el dashboard.
2. Seleccionar la sección de GPU o CPU.
3. Seleccionar el equipo que se desea analizar.
4. Indicar la cantidad de equipos.
5. Configurar el costo de electricidad.
6. Revisar el hashrate de red.
7. Modificarlo si se desea utilizar otro escenario.
8. Consultar el precio actual de la criptomoneda.
9. Revisar los ingresos y beneficios estimados.

## API utilizada

Para obtener los precios actuales se utiliza CoinGecko.

El proyecto utiliza su API pública para consultar los precios de:

```text
ERG
XMR
```
