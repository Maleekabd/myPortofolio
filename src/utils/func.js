export const scrollToTops = () => {
    const target = document.getElementById('top')
    target.scrollIntoView({ behavior: 'smooth' })
}