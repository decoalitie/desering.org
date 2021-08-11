const ENABLE_APPEAR_AFTER = 1000;

let enabled = false;

setTimeout(() => {
    enabled = true;
    document.body.classList.add('appear-transitions-enabled')
}, ENABLE_APPEAR_AFTER);

export function appearTransitionsEnabled() {
    return enabled;
}
