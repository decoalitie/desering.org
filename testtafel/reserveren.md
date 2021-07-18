---
title: TestTafel - Reserveren
layout: default
language: nl
translation: testtafel
scripts:
  - reservation-form
stylesheets:
  - forms
---

<template id="no-dates">
	<p>
		Er zijn momenteel geen TestTafel edities waarvoor je kan reserveren. Probeer het later nog eens!
	</p>
</template>

<div class="row">
	<div class="container">
		<h1>Reserveren voor TestTafel</h1>

		<div id="main-content">
			<form id="reservation">
				<select id="select-date" class="cloak" name="date">
					{% for event in site.data.testtafels %}
						{% assign weekday = event.date | date: "%u" | minus: 1 %}
						{% assign day = event.date | date: "%e" %}
						{% assign month = event.date | date: "%-m" | minus: 1 %}
						{% assign year = event.date | date: "%Y" %}

						<option value="{{ event.date }}"{% unless event.fullyBooked %} data-allow-default{% endunless %}>
							{{ site.data.i18n.weekdays-nl[weekday] | capitalize }} {{ day }} {{ site.data.i18n.months-nl[month] }}{% if event.fullyBooked %} (volgeboekt){% endif %}
						</option>
					{% endfor %}
				</select>
			</form>
		</div>
    </div>
</div>
