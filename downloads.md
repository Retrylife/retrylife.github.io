---
title: Downloads
layout: page
header_red: true
backing_img: /assets/images/innovation__monochromatic.svg
backing_scalar: "height:90%;"
---

## Files

Here are links to various downloadable files

<div class="list-group" id="posts">

    {% for file in site.data.downloads %}

    <a href="{{file.src}}" class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">{{file.title}}</h5>
            <small style="color:gray;" class="maybe-date">{{file.date}}</small>
        </div>
        <p class="card-text">{{file.subtitle}}</p>
    </a>

    {% endfor %}
</div>
---


## Lecture Notes & Papers

Finished lecture notes and papers.

<div class="list-group" id="posts">

    {% for paper in site.papers %}

    <a href="{{paper.src}}" class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">{{paper.title}}</h5>
            <small style="color:gray;" class="maybe-date">{{paper.date}}</small>
        </div>
        <p class="card-text">{{paper.subtitle}}</p>
        <p class="card-text">
        {% for author in paper.authors %}
            <span class="badge badge-secondary">{{author}}</span>
        {% endfor %}</p>
    </a>

    {% endfor %}
</div>