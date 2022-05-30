function openDescription(number) {
    const chevronDown = document.getElementById(`chevronDown${number}`)
    const chevronUp = document.getElementById(`chevronUp${number}`)
    const valueDescription = document.getElementById(`valueDescription${number}`)
    chevronDown.style.display = "none"
    chevronUp.style.display = "block"
    valueDescription.style.display = "block"
}

function closeDescription(number) {
    const chevronDown = document.getElementById(`chevronDown${number}`)
    const chevronUp = document.getElementById(`chevronUp${number}`)
    const valueDescription = document.getElementById(`valueDescription${number}`)
    chevronDown.style.display = "block"
    chevronUp.style.display = "none"
    valueDescription.style.display = "none"
}



function Chevrons({ number }) {
    return (
        <div>
            <svg id={`chevronUp${number}`} onClick={() => { closeDescription(number) }} className="chevronUp" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="white" d="M416 352c-8.188 0-16.38-3.125-22.62-9.375L224 173.3l-169.4 169.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25C432.4 348.9 424.2 352 416 352z" /></svg>
            <svg id={`chevronDown${number}`} onClick={() => { openDescription(number) }} className="chevronDown" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="white" d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" /></svg>
        </div>
    )
}

export default Chevrons