function solve(num) {
    let progress = num / 10;
    let bar = '[' + '%'.repeat(progress) + '.'.repeat(10 - progress) + ']';
    
    if (num < 100) {
        return `${num}% ${bar}\n Still loading...`;
    } else {
        return '100% Complete!';
    }
}
solve(30);