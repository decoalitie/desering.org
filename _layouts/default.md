---
layout: base
---

<!-- TRANSLATION MENU -->
{% if page.translation %}

  <div class="row purple-dark">
    <div class="container">
      <p style="float:right">

      {% if page.language == 'en' %}
        <a href="/{{ page.translation }}">Nederlands</a>
      {% else %}
        <a href="/en/{{ page.translation }}">English</a>
      {% endif %}

      </p>
    </div>
  </div>

{% endif %}


<!-- BANNERS -->
{% for banner in site.data.banners %}

 <div class="row banner {{ banner.color }}">
    <p>
      {% if page.language == 'en' %}

        {% if banner.link-en %}
          <a href="{{ banner.link-en }}">{{ banner.text-en }}</a>
        {% else %}
          {{ banner.text-en }}
        {% endif %}

      {% else %}

        {% if banner.link-nl %}
          <a href="{{ banner.link-nl }}">{{ banner.text-nl }}</a>
        {% else %}
          {{ banner.text-nl }}
        {% endif %}

      {% endif %}
    </p>
</div>

{% endfor %}

{{ content }}
