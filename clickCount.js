export function clickCount(clicks,element) {
    const innerText = element.innerText;

    element.innerText = `${innerText} (${clicks})`;

    return function () {
        clicks--;
        
        if (clicks === 0) {
            element.disabled = true;
        }

    element.innerText = `${innerText} (${clicks})`;
        return clicks;
    }
    
}