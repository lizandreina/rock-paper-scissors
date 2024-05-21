function getComputerChoice (result) {
    result = Math.round(Math.random() * (2 - 0) + 0);
    if (result === 0) {
        return 'Rock'
    } else if (result === 1) {
        return 'Paper'
    } else {
        return 'Scissors'
    }
}