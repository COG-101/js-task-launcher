// MOST CONCISE SOLUTION
// ---------------------
function oddEven() {
    var message = [];
    for (let i = 0; i < 16; i++) {
        (i % 2 == 0) ? message.push( i + ' is even') : message.push( i + ' is odd');
    }
    return alert('Odds & Evens Between 0-15:\n\n' + message.join('\n'));
}