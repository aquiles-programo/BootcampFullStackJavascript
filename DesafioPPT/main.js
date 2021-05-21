const partidas = Number(prompt('Cuantas partidas desea jugar?'))

const getJugadas = () => [Math.floor(Math.random() * 3) + 1, Number(prompt('1: Piedra, 2: Papel, 3: Tijeras'))]

const getGanador = (jugadaPersona, jugadaComputador) => {
    switch (jugadaPersona) {
        case 1:
            if (jugadaComputador === 3)
                return 'Ganador!'
            break
        case 2:
            if (jugadaComputador === 1)
                return 'Ganador!'
            break
        case 3:
            if (jugadaComputador === 2)
                return 'Ganador!'
            break
        default:
            return 'Jugada Invalida'
    }
    return 'Perdedor!'
}

for (let i = 0; i < partidas; i++) {
    [jugadaComputador, jugadaPersona] = getJugadas()

    alert(jugadaPersona === jugadaComputador ? 'Empate' : getGanador(jugadaPersona, jugadaComputador))
}


