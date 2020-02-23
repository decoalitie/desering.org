---
title: De Sering - Contributing
layout: default
language: en
translation: index
---

<div class="row">
	<div class="container">
		<h1>People's Kitchen De Sering</h1>

		<p>
			Coming together for dinner every Tuesdays and Thursdays, for €2,50.
			Everyone is welcome starting from 18:30 and the kitchen stays open
			till 21:00. The food is vegetarian, and there is always a vegan option
			available.
		</p>

		<h3>Location</h3>
		<p>
			The location is the Middenweg 22 in Amsterdam-East. We leave the
			door open – you have to go through a tunnel and then you enter the
			garden. In the back is the building of de Sering.
			<strong>Be careful not to make any noise in the garden!</strong> Our
			neighbors can hear everything, and we like to stay on friendly terms
			with them.
		</p>

		<h3>Reservations</h3>
		<p>
			We reach people through various platforms and we need some indication
			of attendance. At this time we have a maximum capacity of 40 people.
			<a href="reservations.html">Reserve a spot</a> to be sure you can join
			for dinner!
		</p>
		<a class="button" href="reservations.html">Reserve for dinner</a>
	</div>
</div>

<div class="row">
	<div class="container-wide">
		<div class="agenda">
			<h3>Agenda</h3>

			{% for event in site.data.events %}

			{% unless prev.date == event.date %}
			<h4>{{ event.date | date: "%A %e %B %Y" }}</h4>
			{% endunless %}

			<div class="event">
				<span class="event-desc">
					{{ event.description-en | default: event.description-nl }}
					{% if event.xr %}
						<a href="https://extinctionrebellion.nl/en/">(Extinction Rebellion)</a>
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
		<h3>Want to help?</h3>
		<p>
			De Sering is being run by volunteers, and for furniture and decoration
			we are dependent on donations. Would you like to contribute too? On
			<a href="contributing.html">this page about contributing</a> you can
			sign up as a volunteer, and you can find out which things we can make
			good use of. We'd be very grateful for it!
		</p>

		<a class="button" href="contributing.html"
			>Contribute to the De Sering</a
		>

		<img src="/img/sering.png" />

		<h3>Contact</h3>

		<p><a href="mailto:info@desering.org">info@desering.org</a></p>

		<p>+31 6 – 17 64 27 91</p>

		<p>Middenweg 22, 1097 BN Amsterdam</p>
	</div>
</div>
