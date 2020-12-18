const buttons = document.getElementsByTagName('button');

const toggleTargetMenu = (target) => {
    let ariaControls = target.getAttribute('aria-controls'),
    controlledAria = document.getElementById(ariaControls),
    ariaHidden = controlledAria.getAttribute('aria-hidden');
    if (ariaHidden == 'true') {
        controlledAria.setAttribute('aria-hidden', 'false');
        target.setAttribute('aria-expanded', 'true');
    } else {
        controlledAria.setAttribute('aria-hidden', 'true');
        target.setAttribute('aria-expanded', 'false');
    }
}

function buttonClick({ target }) {
    toggleTargetMenu(target);
}

for (let index = 0; index < buttons.length; index++) {
    const allButtons = buttons[index];
    allButtons.addEventListener('click', buttonClick);
}