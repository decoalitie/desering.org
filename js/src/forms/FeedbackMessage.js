class FeedbackMessage {
  constructor(parent, templateElement) {
    this.messageElement =
      templateElement.content.firstElementChild.cloneNode(true);
    this.wrapperElement = document.createElement("div");
    this.wrapperElement.classList.add("appear-expand-height");

    this.wrapperElement.appendChild(this.messageElement);
    parent.appendChild(this.wrapperElement);

    this.visible = false;
    this.reducedMotion = (() => {
      const query = window.matchMedia("(prefers-reduced-motion: reduce)");
      return !query || query.matches;
    })();
  }

  show() {
    if (this.visible) {
      return;
    }
    this.visible = true;

    this.clearCollapseCompleteHandler();
    this.wrapperElement.style.display = "block";
    this.wrapperElement.style.maxHeight = `${this.wrapperElement.scrollHeight}px`;
  }

  hide() {
    if (!this.visible) {
      return;
    }
    this.visible = false;

    if (this.reducedMotion) {
      this.wrapperElement.style.display = "none";
      return;
    }

    this.wrapperElement.style.maxHeight = 0;

    this.collapseCompleteHandler = () => {
      this.wrapperElement.style.display = "none";
      this.clearCollapseCompleteHandler();
    };

    this.wrapperElement.addEventListener(
      "transitionend",
      this.collapseCompleteHandler
    );
    setTimeout(() => {
      this.clearCollapseCompleteHandler();
      if (!this.visible) {
        this.wrapperElement.style.display = "none";
      }
    }, 600);
  }

  clearCollapseCompleteHandler() {
    if (this.collapseCompleteHandler) {
      this.wrapperElement.removeEventListener(
        "transitionend",
        this.collapseCompleteHandler
      );
      this.collapseCompleteHandler = null;
    }
  }
}

const reservationForm = document.querySelector("#form-reservation");

const messages = {};

const defaultMessages = document.querySelectorAll(
  "[data-field-feedback-for] > div[data-message]"
);
for (const messageElement of defaultMessages) {
  const fieldName = messageElement.parentElement.dataset.fieldFeedbackFor;
  if (!messages[fieldName]) {
    messages[fieldName] = {};
  }
  messageElement.classList.add("appear-expand-height");
  messages[fieldName][messageElement.dataset.message] = new FeedbackMessage(
    messageElement
  );
}

export function renderFeedbackMessage(
  fieldName,
  messageTemplateId,
  show = true
) {
  const feedbackElement = reservationForm.querySelector(
    `[data-field-feedback-for="${fieldName}"]`
  );
  const messageTemplate = feedbackElement.querySelector(
    `template[data-message="${messageTemplateId}"]`
  );

  if (!messages[fieldName]) {
    messages[fieldName] = {};
  }

  if (!messages[fieldName][messageTemplateId]) {
    messages[fieldName][messageTemplateId] = new FeedbackMessage(
      feedbackElement,
      messageTemplate
    );
  }

  if (show) {
    messages[fieldName][messageTemplateId].show();
  } else if (messages[fieldName][messageTemplateId]) {
    messages[fieldName][messageTemplateId].hide();
  }
}

export default FeedbackMessage;
