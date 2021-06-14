---
title: TestTafel
layout: default
language: nl
translation: testtafel
---

<div class="row">
	<div class="container">
		<h1>TestTafel</h1>

    <p>
      TestTafel is een pop-up restaurant dat elke vrijdag een wisselend menu van vier gangen (plus brood, amuses en koffie hapje) serveert. Het menu is een eclectische verzameling van recepten die we altijd al een keer hebben willen maken, gerechten goed gejat van onze  favoriete chefs en recepten die we uit obscure kookboeken hebben gevist. 
    </p>

    <p>
      Bij het eten serveren we cocktails, zelfgemaakte limonades en onze favoriete betaalbare wijnen. Dit alles vindt plaats op een geheime locatie in het centrum van Amsterdam. Je krijgt onze locatie toegestuurd als je reserveert. 
    </p>

	</div>
</div>

<div class="row">
	<div class="container">
		<h3>Prijzen</h3>

    <p>
      Omdat we weten dat ons publiek over het algemeen niet al te veel cash reserve heeft proberen we het eten en drinken zo goedkoop mogelijk te houden. Het eten kost daarom slechts €15. Ook het drinken proberen we twee of drie keer zo goedkoop te serveren als in een normaal restaurant. 
    </p>

    <p>
      We serveren een vegan menu, een vegetarisch menu, en een menu met soms een stukje vlees. Ook kunnen we rekening houden met de meeste diëten en allergieën. 
    </p>

	</div>
</div>

<div class="row">
	<div class="container">
		<div class="agenda">
			<h3>Opkomende TestTafels</h3>

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
						{% if event.signup-nl %}
							<a href="{{event.signup-nl}}" target="_blank">Reserveren</a>
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
      Om te reserveren kan je terecht bij het formulier van een van de TestTafels hierboven. Voor overige vragen kan je ons mailen op <a href="mailto:testtafel@desering.org">testtafel@desering.org</a> 
    </p>
    
    <p>
      Krijg updates over TestTafel via <a href="https://chat.whatsapp.com/C2fIG6POV8FH0nVQcW3hKs" target="_blank">onze Whatsapp broadcastgroep</a>
    </p>
    
    <p>
      Volg ons op Instagram <a href="https://instagram.com/TestTafel" target="_blank">@TestTafel</a>
    </p>

		<img src="/img/sering.png" />
  </div>
</div>