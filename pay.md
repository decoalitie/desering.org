---
title: De Sering - payment
layout: payment
language: en
---

<div class="row">

	<div class="container">

		<h1>Payment</h1>

		<p><em>You are being redirected to Tikkie.</em></p>

		{% for tikkie in site.data.tikkies %}

			{% if forloop.index0 == 0 %}
			<p>
			{% else %}
			<p class="hidden">
			{% endif %}

				Takes too long?
				<a class="button filled tikkie-link" data-date="{{ tikkie.date }}" data-valid-until="{{ tikkie.valid-until }}" href="https://tikkie.me/pay/{{ tikkie.link-slug }}">directly to Tikkie</a>

			</p>

		{% endfor %}

	</div>

</div>
