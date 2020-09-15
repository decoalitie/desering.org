---
title: De Sering
layout: default
language: nl
description: 'Buurtkeuken De Sering in Amsterdam: Elke dinsdag en donderdag samen eten, voor €2,50.'
translation: index
---


<div class="row">
	<div class="container">
		<h1>Buurtkeuken De Sering</h1>

<!-- 		<p>
			Het eten is vegetarisch,
			met een veganistisch optie.
			€2,50
		</p> -->

	</div>
</div>

<div class="row">
	<div class="container-wide">
		<div class="agenda">
			<h3>Agenda</h3>

			{% for event in site.data.events %}

				{% unless prev.date == event.date %}

					{% assign weekday = event.date | date: "%u" | minus: 1 %}
					{% assign day = event.date | date: "%e" %}
					{% assign month = event.date | date: "%-m" | minus: 1 %}
					{% assign year = event.date | date: "%Y" %}

					<h4>{{ site.data.i18n.weekdays-nl[weekday] | capitalize }} {{ day }} {{ site.data.i18n.months-nl[month] }} {{ year }}</h4>

				{% endunless %}

				<div class="event">
					<span class="event-desc">
						{{ event.description-nl }}
						{% if event.xr %}
							<a href="https://extinctionrebellion.nl">(Extinction Rebellion)</a>
						{% endif %}
					</span>
					<span class="event-details">
						{% if event.fb-url %}
						<a class="event-fb" href="{{ event.fb-url }}"></a>
						{% endif %}
						<span class="event-time">{{ event.time }}</span>
					</span>
				</div>

			{% assign prev = event %}
			{% endfor %}

		</div>

	</div>
</div>

<div class="row">
	<div class="container">
<!-- 		<h3>Meehelpen?</h3>
		<p>
			De Sering draait op vrijwilligers, en voor meubels en inrichting zijn
			we afhankelijk van donaties. Wil je ook bijdragen? Op
			<a href="bijdragen.html">de pagina over bijdragen</a> kan je je
			inschrijven als vrijwilliger, en zie je welke spullen we goed kunnen
			gebruiken. Hartelijk dank!
		</p>

		<a class="button" href="bijdragen.html">Bijdragen aan De Sering</a> -->


		<h3>Contact</h3>

		<p><a href="mailto:info@desering.org">info@desering.org</a></p>

		<!-- <p>06 – 17 64 27 91</p> -->

		<img src="/img/sering.png" />

	</div>
</div>
