export const changeCssVariables = (theme) => {
    const root = document.querySelector(':root')

    const cssVariables = [
        'header', 'bg-image'
    ]

    cssVariables.forEach(item => {
        root.style.setProperty(`--theme-default-${item}`, `var(--theme-${theme}-${item})`)
    })

}