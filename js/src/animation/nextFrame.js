export default function nextFrame(fn) {
    requestAnimationFrame(() => requestAnimationFrame(fn));
}
