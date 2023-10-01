export function autoResizeTextarea(textarea) {
    textarea.style.height = 0;
    textarea.style.height = (textarea.scrollHeight) + "px";
}