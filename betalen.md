---
title: De Sering - betalen
layout: payment
language: nl
---

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
				<a class="button filled tikkie-link" data-date="{{ tikkie.date }}" data-valid-until="{{ tikkie.valid-until }}" href="https://tikkie.me/pay/{{ tikkie.link-slug }}">direct naar Tikkie</a>

			</p>

		{% endfor %}

	</div>

</div>
