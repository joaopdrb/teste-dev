function debounce (
    callback (...args: T) => void;
    delay: number,
): <T> => {
    
    clearTimeout
    return (...args: T) => {setTimeout(() => {callback(...args)}; delay)};
}

@Component({
    selector: 'search-input',
    templateUrl: 'questao23.html',
})
export AppComponent implements OnInit {
    const input = document.getElementByName("search-input") as HTMLInputElement;

    input.addEventListener('keydown');
}