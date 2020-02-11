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

    <p>
      Elke dinsdag en donderdag samen eten, voor €2,50. Vanaf 18:30 is
      iedereen welkom, de keuken is open tot 21:00. Het eten is vegetarisch,
      met een veganistisch optie.
    </p>

    <h3>Locatie</h3>
    <p>
      De locatie is de Middenweg 22bg in Amsterdam-Oost. De deur laten we
      open, je moet dan door een tunnel en dan kom je in de binnentuin.
      Achterin staat het gebouw van de Sering.
      <strong>Zorg dat je geen geluid maakt in de tuin!</strong> Onze buren
      horen alles, en we houden ze graag te vriend.
    </p>

    <h3>Reserveringen</h3>
    <p>
      We bereiken mensen via verschillende platformen en we hebben een
      indicatie nodig van de opkomst. Op dit moment hebben we een maximale
      capaciteit van 40 personen.
      <a href="/reserveren.html">Reserveer</a> om er zeker van te zijn dat
      je mee kan eten!
    </p>
    <a class="button" href="/reserveren.html">Reserveren voor eten</a>
  </div>
</div>

<div class="row">
  <div class="container-wide">
    <div class="agenda">
      <h3>Agenda</h3>

      {% for event in site.data.events %}

        {% assign weekday = event.date | date: "%u" | minus: 1 %}
        {% assign day = event.date | date: "%e" %}
        {% assign month = event.date | date: "%-m" | minus: 1 %}
        {% assign year = event.date | date: "%Y" %}

        <h4>{{ site.data.i18n.weekdays-nl[weekday] | capitalize }} {{ day }} {{ site.data.i18n.months-nl[month] }} {{ year }}</h4>

        <div class="event">
          <span class="event-desc">
            {{ event.description-nl }}
            {% if event.xr %}
              <a href="https://extinctionrebellion.nl">(Extinction Rebellion)</a>
            {% endif %}
          </span>
          <span class="event-details">
            <a
              class="event-fb"
              href="{{ event.fb-url }}"
            ></a>
            <span class="event-time">{{ event.time }}</span>
          </span>
        </div>

      {% endfor %}

    </div>

  </div>
</div>

<div class="row">
  <div class="container">
    <h3>Meehelpen?</h3>
    <p>
      De Sering draait op vrijwilligers, en voor meubels en inrichting zijn
      we afhankelijk van donaties. Wil je ook bijdragen? Op
      <a href="bijdragen.html">de pagina over bijdragen</a> kan je je
      inschrijven als vrijwilliger, en zie je welke spullen we goed kunnen
      gebruiken. Hartelijk dank!
    </p>

    <a class="button" href="bijdragen.html">Bijdragen aan De Sering</a>

    <img src="/img/sering.png" />

    <h3>Contact</h3>

    <p><a href="mailto:info@desering.org">info@desering.org</a></p>

    <p>06 – 17 64 27 91</p>

    <p>Middenweg 22, 1097 BN Amsterdam</p>
  </div>
</div>