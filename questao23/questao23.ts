function debounce (
    callback (...args: T) => void;
    delay: number,
): <T> => {
    let timer = ReturnType<typeof setTimeout>;

    clearTimeout(timer);

    return (...args: T) => timer = {setTimeout(() => {callback(...args)}; delay)};
}

@Component({
    selector: 'search-input',
    templateUrl: 'questao23.html',
})
export AppComponent implements OnInit {
    const input = document.getElementByName("search-input") as HTMLInputElement;

    input.addEventListener('keydown');
}