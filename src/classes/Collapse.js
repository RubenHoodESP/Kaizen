
export default class Collapse {

    // set the target element that will be collapsed or expanded (eg. navbar menu)
    targetEl = document.getElementById('targetEl');
    
    // optionally set a trigger element (eg. a button, hamburger icon)
    triggerEl = document.getElementById('triggerEl');
    
    // optional options with default values and callback functions
    options = {
        triggerEl: triggerEl,
        onCollapse: () => {
            console.log('element has been collapsed')
        },
        onExpand: () => {
            console.log('element has been expanded')
        },
        onToggle: () => {
            console.log('element has been toggled')
        }
    };
}

