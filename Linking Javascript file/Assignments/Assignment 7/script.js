const numNeighbours = Number(prompt("How many neighbours does your country have?"));

if (numNeighbours === 1) {
    console.log("Only 1 border!");
}

else if (numNeighbours > 1) {
    console.log('More than 1 border');
}

else {
    console.log(`No Borders`);
}
