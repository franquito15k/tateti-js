document.addEventListener('DOMContentLoaded', () => {
    let currentPlayer = 'X';
    const turnoElement = document.getElementById('turno');

    function updateTurno() {
        turnoElement.textContent = `Jugador ${currentPlayer}`;
        if (currentPlayer === 'X') {
            turnoElement.classList.add('turno-x');
            turnoElement.classList.remove('turno-o');
        } else {
            turnoElement.classList.add('turno-o');
            turnoElement.classList.remove('turno-x');
        }
    }

    // Simula el cambio de turno
    document.getElementById('tablero').addEventListener('click', () => {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        updateTurno();
    });

    updateTurno();
});