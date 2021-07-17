---
title: De Sering
layout: default
language: en
translation: home
---

<div class="row">
	<div class="container">
		<h1>People's Kitchen De Sering</h1>

		<p>
		Every Tuesday we serve two vegan courses for a suggested donation of €2.50-€5.00. Everyone is welcome between 18:30 and 21:30 at NieuwLand (Pieter Nieuwlandstraat 93). To ensure that we have enough space to have a corona safe meetup we ask you to make a reservation using the form linked below.
		</p>

		<a class="button" href="https://forms.gle/HJBKGvFofTQFezu99">Make a reservation</a>
		
<!-- 		<p>
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
		</p> -->

<!-- 		<h3>Reservations</h3>
		<p>
			We reach people through various platforms and we need some indication
			of attendance. At this time we have a maximum capacity of 40 people.
			<a href="reservations.html">Reserve a spot</a> to be sure you can join
			for dinner!
		</p>
		<a class="button" href="reservations.html">Reserve for dinner</a> -->
	</div>
</div>

<!-- <div class="row">
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
</div> -->

<div class="row">
	<div class="container">

        <h3>Want to help?</h3>
		<p>
			We are always in need of more help with cooking, building and cleaning. We are also looking for a new long term location, and we can use all the help we can get. For more information, visit our contributing page: 
		</p>

		<a class="button" href="contributing.html">Help create De Sering</a>

		<img src="/img/sering.png" />

		<h3>Contact</h3>

		<p><a href="mailto:info@desering.org">info@desering.org</a></p>

	</div>
</div>
