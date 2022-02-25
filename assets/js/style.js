const usuario = prompt("Ingresa tu nombre:");
let juegos = parseInt(prompt(`Jugar al Cachipun!!!
¿Cuantas veces quieres jugar ${usuario} (max 5)`))

while (juegos > 5 || juegos <= 0 || !juegos) {
    alert("fuera de rango")
    juegos = parseInt(prompt(`Jugar al Cachipun!!!
¿Cuantas veces quieres jugar ${usuario} (max 5)`))

}
const piedra = 0;
const papel = 1;
const tijera = 2;

alert(usuario + " " + "V/S" + " " + "MAQUINA")

for (i = 1; i <= juegos; i++) {
    let choice = prompt("Elige" + " " + usuario + ":" + "\n \n" + "Piedra:" + " " + piedra + "\n" + "Papel:" + " " + papel + "\n" + "Tijera:" + " " + tijera)
    const maquina = Math.floor(Math.random() * 3);

    const options = ["Piedra", "Papel", "Tijera"]
    alert("Tu eleccion es" + " " + options[choice])
    alert("Maquina eligió" + " " + options[maquina])

    if (choice == piedra && maquina == piedra || choice == papel && maquina == papel || choice == tijera && maquina == tijera) {
        let tie = "Empate";
        alert(tie)
        console.log(tie)
    } else if (choice == piedra && maquina == tijera || choice == papel && maquina == piedra || choice == tijera && maquina == papel) {
        let win = "Felicidades...Ganaste";
        alert(win)
        console.log(win)
    } else if (choice == piedra && maquina == papel || choice == papel && maquina == tijera || choice == tijera && maquina == piedra) {
        let lose = "Perdiste :(";
        alert(lose)
        console.log(lose);
    } else {
        alert("La opcion no es válida")
    }
}