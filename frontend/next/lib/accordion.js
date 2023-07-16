export function accordion() {
    var d = document,
        accordionToggles = d.querySelectorAll('.js-accordionTrigger');

    function skipClickDelay(e) {
        e.preventDefault();
    }

    function setAriaAttr(el, ariaType, newProperty) {
        el.setAttribute(ariaType, newProperty);
    }

    function setAccordionAria(el1, el2, expanded) {
        switch (expanded) {
            case "true":
                setAriaAttr(el1, 'aria-expanded', 'true');
                setAriaAttr(el2, 'aria-hidden', 'false');
                break;
            case "false":
                setAriaAttr(el1, 'aria-expanded', 'false');
                setAriaAttr(el2, 'aria-hidden', 'true');
                break;
            default:
                break;
        }
    }

    //function
    function switchAccordion(e) {
        e.preventDefault();
        var thisAnswer = e.target.parentNode.nextElementSibling;
        var thisQuestion = e.target;
        if (thisAnswer.classList.contains('is-collapsed')) {
            setAccordionAria(thisQuestion, thisAnswer, 'true');
        } else {
            setAccordionAria(thisQuestion, thisAnswer, 'false');
        }
        thisQuestion.classList.toggle('is-collapsed');
        thisQuestion.classList.toggle('is-expanded');
        thisAnswer.classList.toggle('is-collapsed');
        thisAnswer.classList.toggle('is-expanded');
        thisAnswer.classList.toggle('animateIn');
    }

    for (var i = 0, len = accordionToggles.length; i < len; i++) {
        accordionToggles[i].onpointerup = (e) => switchAccordion(e);
    }
}