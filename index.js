function bookPurchase(detailOfBook, percentageOfDiscount, percentageOfTax) {
    const discount = detailOfBook.price * percentageOfDiscount / 100;
    const priceAfterDiscount = detailOfBook.price - discount;
    const tax = priceAfterDiscount * percentageOfTax / 100;
    const priceAfterTax = priceAfterDiscount + tax;
    return `
    <h1>Detail of Book</h1>
    <p>Title: ${detailOfBook.title}</p>
    <p>Author: ${detailOfBook.author}</p>
    <p>Price: ${detailOfBook.price}</p>
    <p>Availability: ${detailOfBook.availability}</p>
    <p>Discount: ${discount}</p>
    <p>Price after discount: ${priceAfterDiscount}</p>
    <p>Tax: ${tax}</p>
    <p>Price after tax: ${priceAfterTax}</p>
    `;
}

var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(bookPurchase({title: "Fantastic Beasts: The Secrets of Dumbledore", author: "J. K. Rowling and Steve Kloves", price: 200000, availability: true}, 10, 5));
}).listen(8080);