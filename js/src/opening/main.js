import dialogPolyfill from "dialog-polyfill";

// function getProgramTemplate(slug) {
//   const template = document.getElementById(`program-template-${slug}`);
//   return template.content.cloneNode(true);
// }

const dialogs = {};

function openProgramDialog(slug) {
    dialogs[slug].showModal();
    document.body.classList.add('has-dialog-open');
}

function closeDialog(slug) {
    dialogs[slug].close();
    document.body.classList.remove('has-dialog-open');
}

(function initialize() {
    const dialogElements = document.querySelectorAll('dialog');
    for (const element of dialogElements) {
        if (element.dataset.program) {
            dialogPolyfill.registerDialog(element);
            dialogs[element.dataset.program] = element;
        }
    }

    const triggers = document.querySelectorAll('[data-program-trigger]');
    for (const element of triggers) {
        if (dialogs[element.dataset.programTrigger]) {
            element.addEventListener('click', () => openProgramDialog(element.dataset.programTrigger));
    
            const timeElement = document.querySelector(`[data-time-for-program="${element.dataset.programTrigger}"]`);
            if (timeElement) {
                const displayElements = dialogs[element.dataset.programTrigger].querySelectorAll('[data-time-display]');
                for (const element of displayElements) {
                    element.innerText = timeElement.innerText;
                }
            }
        } else {
            element.classList.add('missing-dialog');
        }
    }

    const closeButtons = document.querySelectorAll('[data-close-dialog]');
    for (const element of closeButtons) {
        element.addEventListener('click', () => closeDialog(element.dataset.closeDialog));
    }
})();

// function openProgramDialog(slug) {
//   const dialog = document.createElement("dialog");
//   dialogPolyfill.registerDialog(dialog);

//   dialog.append(getProgramTemplate(slug));
//   dialog.className = `dialog-${slug}`;

//   dialog.showModal();


//   const description = Object.assign(document.createElement("span"), {
//     textContent: title,
//   });

//   const holder = Object.assign(document.createElement("div"), {
//     className: "demo",
//   });
//   holder.append(dialog, button, description);

//   if (options.close) {
//     dialogContent.append(createButton("Close", () => dialog.close()));
//   }

//   document.body.append(holder);
//   return dialog;
// }
