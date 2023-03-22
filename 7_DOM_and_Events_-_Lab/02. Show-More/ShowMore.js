function showText() {
    // TODO трябва като натиснем линка да стане следното: на span-a в HTML кода да му променим display: none да стане display: inline, за да може като натиснем линка да се появи текста от span-a

    const anchor = document.getElementById("more");
    const span = document.getElementById("text");

    // правим на span-a display да е inline
    span.style.display = "inline"

    // сега трябва да закрием anchor-a
    anchor.style.display = "none"
}