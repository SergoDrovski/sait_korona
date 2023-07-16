export function observeAnimate(observeClass, elemAnimateClass) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                createAnimateSlick(elemAnimateClass);
            }
        });
    });
    observer.observe(document.querySelector(observeClass));
}

export function createAnimateSlick(elemAnimateClass) {
    let num = 200;
    document.querySelectorAll(elemAnimateClass).forEach(
        (el, i) => {
            let timeout = i * num;
            setTimeout(() => {
                el.classList.add('animate');
            }, timeout);
        })
}

export function scroll() {
    const a = document.querySelectorAll("a[href^='#']")
    a.forEach((link)=>{
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href').substring(1);
            const scrollTarget = document.getElementById(href);
            if(scrollTarget){
                const topOffset = 0; // если не нужен отступ сверху
                const elementPosition = scrollTarget.getBoundingClientRect().top;
                const offsetPosition = elementPosition - topOffset;
                window.scrollBy({
                    top: offsetPosition - 40,
                    behavior: 'smooth'
                });
            }
            return true;
        })
    })

}