"use strict";
const ENDPOINT =
  "https://script.google.com/macros/s/AKfycbxmEwTD9e9XPo50RJhBDTMUZQqGVmdsROFmESKCT_fmM911JM6CKnNjoBwTqKhdPKtL/exec";

const reservationForm = document.querySelector("#reservation");
const reservationFormSubmit = reservationForm.querySelector(
  'button[type="submit"]'
);

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

reservationFormSubmit.removeAttribute("disabled");
reservationForm.addEventListener("submit", handleReservationSubmit);
