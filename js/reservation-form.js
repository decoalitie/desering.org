"use strict";
const ENDPOINT =
  "https://script.google.com/macros/s/AKfycbxmEwTD9e9XPo50RJhBDTMUZQqGVmdsROFmESKCT_fmM911JM6CKnNjoBwTqKhdPKtL/exec";

const DEFAULT_EVENT_TIME = "15:00:00";

const mainContentWrapper = document.querySelector("#main-content");
const reservationForm = document.querySelector("#reservation");
const dateSelector = reservationForm.querySelector("#select-date");
const startTimeSelector = reservationForm.querySelector("#select-start-time");

const sections = {
  selectDate: reservationForm.querySelector("#section-select-date"),
};

function setupForm() {
  removePastDates();
  const dateRadioInputs = selectToRadioList(dateSelector);
  dateSelector.addEventListener("change", handleDateChange);
  for (const input of dateRadioInputs) {
    input.addEventListener('change', handleDateChange);
  }
  handleDateChange();
  selectToRadioList(startTimeSelector);

  reservationForm.addEventListener("submit", handleReservationSubmit);
}

function handleDateChange() {
  const option = dateSelector.querySelector(`[value="${dateSelector.value}"]`);

  toggleFormSectionMessage(
    "selectDate",
    "fully-booked",
    option && typeof option.dataset.fullyBooked !== 'undefined'
  );
}

function toggleFormSectionMessage(section, messageTemplateId, toggle) {
  const sectionElement = sections[section];
  let messageElement = sectionElement.querySelector(".form-section-message");

  if (toggle) {
    if (!messageElement) {
      messageElement = document.createElement('div');
      messageElement.classList = 'form-section-message';
      sectionElement.appendChild(messageElement);
  
      const template = document.querySelector(`#${messageTemplateId}`);
      messageElement.appendChild(template.content.cloneNode(true));
    } else if (messageElement.dataset.messageTemplate !== messageTemplateId) {
      while (messageElement.firstChild) {
        messageElement.removeChild(messageElement.firstChild);
      }
  
      const template = document.querySelector(`#${messageTemplateId}`);
      messageElement.appendChild(template.content.cloneNode(true));
    }

    messageElement.dataset.messageTemplate = messageTemplateId;
    let newHeight = 500;
    try {
      newHeight = messageElement.scrollHeight || 500;
    } catch (e) {
      // ignore, fallback to default height
    }
    messageElement.style.maxHeight = `${newHeight}px`;
  } else {
    if (messageElement) {
      messageElement.style.maxHeight = 0;
    }
  }
}

function removePastDates() {
  for (const option of dateSelector.querySelectorAll("option")) {
    const optionValue = option.getAttribute("value");
    const optionDate = Date.parse(`${optionValue}T${DEFAULT_EVENT_TIME}`);

    if (optionDate < Date.now()) {
      dateSelector.removeChild(option);
    }
  }

  if (!dateSelector.querySelectorAll("option").length) {
    switchTemplate("no-dates");
    return;
  }

  const defaultOption = dateSelector.querySelector(
    "option[data-allow-default]"
  );
  if (defaultOption) {
    dateSelector.value = defaultOption.getAttribute("value");
  }

  dateSelector.classList.remove("cloak");
}

function selectToRadioList(selectInput) {
  const selectName = selectInput.getAttribute("name");
  const radioList = document.createElement("div");
  radioList.className = "select-radio-list";
  selectInput.parentElement.insertBefore(radioList, selectInput.nextSibling);

  const radioInputs = Array.from(selectInput.querySelectorAll("option")).map(
    (option) => {
      const optionValue = option.getAttribute("value");
      const label = document.createElement("label");
      label.innerHTML = option.innerHTML;
      label.setAttribute("for", `${selectName}-${optionValue}`);
      const radioInput = document.createElement("input");
      radioInput.setAttribute("type", "radio");
      radioInput.setAttribute("value", optionValue);
      radioInput.setAttribute("name", `${selectName}-radio`);
      radioInput.setAttribute("id", `${selectName}-${optionValue}`);
      radioList.appendChild(radioInput);
      radioList.appendChild(label);
      radioInput.addEventListener("change", handleRadioChange);
      return radioInput;
    }
  );

  function updateSelected() {
    for (const radioInput of radioInputs) {
      radioInput.checked = radioInput.value === selectInput.value;
    }
  }

  function handleRadioChange(e) {
    selectInput.value = e.currentTarget.value;
  }

  function handleSelectChange() {
    updateSelected();
  }

  selectInput.addEventListener("change", handleSelectChange);

  updateSelected();

  return radioInputs;
}

function switchTemplate(templateId) {
  const template = document.querySelector(`#${templateId}`);
  while (mainContentWrapper.firstChild) {
    mainContentWrapper.removeChild(mainContentWrapper.firstChild);
  }

  mainContentWrapper.appendChild(template.content.cloneNode(true));
}

function handleReservationSubmit(e) {
  e.preventDefault();

  const data = {
    foo: "bar",
  };

  fetch(ENDPOINT, {
    method: "post",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: JSON.stringify(data),
  })
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
    });
}

setupForm();
