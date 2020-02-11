---
title: De Sering - betalen
layout: default
language: nl
---

<script>

function redirect() {

// key-sort from https://stackoverflow.com/a/16648532/7770056
Array.prototype.sortOn = function(key){
	this.sort(function(a, b){
		if(a[key] < b[key]){
			return -1;
		} else if(a[key] > b[key]){
			return 1;
		}
		return 0;
	});
}

const tikkie_elements = document.getElementsByClassName("tikkie-link");
const tikkie_links = Array.from(
	tikkie_elements,
	(el) => {
		return {
			href: el.href,
			date: el.dataset.date,
			validUntil: el.dataset.validUntil
		}
	});
tikkie_links.sortOn('date')

function getCurrentYear() {
	return new Date().toLocaleString('nl-NL', { year:'numeric', timeZone: 'Europe/Amsterdam' })
}
function getCurrentMonth() {
	return new Date().toLocaleString('nl-NL', {month:'2-digit', timeZone: 'Europe/Amsterdam' })
}
function getCurrentDay() {
	return new Date().toLocaleString('nl-NL', {  day:'2-digit', timeZone: 'Europe/Amsterdam' })
}
function getCurrentHour() {
	return new Date().toLocaleString('nl-NL', { hour:'2-digit', timeZone: 'Europe/Amsterdam' })
}

function getCurrentDate() {
	return `${getCurrentYear()}-${getCurrentMonth()}-${getCurrentDay()}`
}

const currentDate = getCurrentDate()
const currentHour = getCurrentHour()

// HERE FOLLOWS THE LOGIC THAT REDIRECTS TO THE CORRECT TIKKIE LINK

// from 12:00 on the day of the event, send people to the Tikkie of that event,
// else previous one

// e.g. 1 jan - A
//      2 jan - B

// then on 2 jan 11:59 send to A
//  and on 2 jan 12:00 send to B

// corner case: first link is today or in the future
const first_tikkie = tikkie_links[0]
if (currentDate <= first_tikkie.date) {
	redirectTo(first_tikkie)
}

// else: now you can assume link 'i' is in the past
else {

	for (var i = 0; i < tikkie_links.length - 1; i++) {

		if (currentDate < tikkie_links[i + 1].date) {
			return redirectTo(tikkie_links[i])
		}

		else if (currentDate == tikkie_links[i + 1].date) {
			if (currentHour >= 12) {
				return redirectTo(tikkie_links[i + 1])
			}
			else {
				return redirectTo(tikkie_links[i])
			}
		}

	}

	// at this point, all Tikkies are in the past, so we redirect to the last one
	return redirectTo(tikkie_links[tikkie_links.length - 1])
}

function redirectTo(tikkie_link) {
	if (tikkie_link.validUntil === undefined || currentDate <= tikkie_link.validUntil) {
		return window.location = tikkie_link.href;
	}
	else {
		if (window.confirm(`The Tikkie for ${tikkie_link.date} is probably not valid anymore (valid until ${tikkie_link.validUntil})\n\nPlease ask someone at de Sering to fix this (mail: info@desering.org)\n\nClick 'OK' to try anyways at your own peril`)) {
			return window.location = tikkie_link.href;
		}
	}
}

}
document.addEventListener("DOMContentLoaded", redirect);
</script>

<style>
.hidden {
display: none;
}
</style>

<div class="row">

	<div class="container">

		<h1>Betalen</h1>

		<p><em>Je wordt doorgestuurd naar Tikkie.</em></p>

		{% for tikkie in site.data.tikkies %}

			{% if forloop.index0 == 0 %}
			<p>
			{% else %}
			<p class="hidden">
			{% endif %}

				Duurt het te lang?
				Klik op <a class="tikkie-link" data-date="{{ tikkie.date }}" data-valid-until="{{ tikkie.valid-until }}" href="https://tikkie.me/pay/{{ tikkie.link-slug }}">deze link.</a>

			</p>

		{% endfor %}

	</div>

</div>
