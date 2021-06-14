---
title: TestTafel
layout: default
language: en
translation: testtafel
---

<div class="row">
	<div class="container">
		<h1>TestTafel</h1>

    <p>
    TestTafel is a restaurant that pops up every Friday to serve a four course meal (plus amuses, bread, and coffee bites) for just €15. Our menu is an eclectic collection of recipes we have been wanting to make for years, dishes stolen form our favourite chefs, and recipes found in obscure cookbooks. 
    </p>

    <p>
    With dinner we serve cocktails, homemade lemonades, and our favourite cheapy wines. All of this takes place at a secret location in the centre of Amsterdam (the location will be revealed when we confirm your reservation). 
    </p>

	</div>
</div>

<div class="row">
	<div class="container">
		<h3>Prices</h3>

    <p>
      Because we know that it is quite likely our audience doesn't have that much money to spare, we try to keep the food and drinks as cheap as possible. The menu is therefore only 15 euros. The drinks we try to keep are about two or three times as cheap as at a normal restaurant.
    </p>

    <p>
      We serve a vegan menu, vegetarian menu, and a menu with sometimes a bit of meat or fish. We can cook for most diets and allergies.
    </p>

	</div>
</div>

<div class="row">
	<div class="container">
		<div class="agenda">
			<h3>Upcoming TestTafels</h3>

			{% for event in site.data.events %}

				{% unless prev.date == event.date %}
			    <h4>{{ event.date | date: "%A %e %B %Y" }}</h4>
				{% endunless %}

				<div class="event">
					<span class="event-desc">
						{{ event.description-en }}
						{% if event.xr %}
							<a href="https://extinctionrebellion.nl">(Extinction Rebellion)</a>
						{% endif %}
						{% if event.signup-en %}
							<a href="{{event.signup-en}}" target="_blank">Reservation form</a>
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
		<h3>Contact</h3>

		<p>
      You can place a reservation through the forms of the TestTafels listed above. For any other questions you can reach us at <a href="mailto:testtafel@desering.org">testtafel@desering.org</a> 
    </p>
    
    <p>
      Get updates about TestTafel through <a href="https://chat.whatsapp.com/C2fIG6POV8FH0nVQcW3hKs" target="_blank">our Whatsapp broadcast group</a>
    </p>
    
    <p>
      Follow us on Instagram <a href="https://instagram.com/TestTafel" target="_blank">@TestTafel</a>
    </p>

		<img src="/img/sering.png" />
  </div>
</div>