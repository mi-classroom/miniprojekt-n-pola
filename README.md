# Web-Development Miniprojekt Nils Polarek
In diesem Miniprojekt ging es darum, eine Website anhand eines [Layouts](https://github.com/mi-classroom/content-pack-wd-miniprojekt-2020/tree/master/layouts) und Daten aus [JSON oder Markdown Files](https://github.com/mi-classroom/content-pack-wd-miniprojekt-2020/tree/master/data) zu bauen. Diese Seite bewegte sich wieder im Universum des [Cranach Digital Archives](http://lucascranach.org/) und stellt eine Übersicht von Gemälden dar, mit der Möglichkeit mehr Informationen über diese in einem Modal zu erhalten. Die Bilder sind entsprechend Ihrer Erstellungsjahre sortiert und die Jahre lassen sich aus und ein klappen.

## Framework Wahl
Ich habe mich dazu entschieden <b>Vue.js</b> zu nutzen, da hier das Arbeiten in Komponenten stark gefördert und vereinfacht wird. Zudem ist mit <b>Vuex</b> die Möglichkeit eines zentralen Stores geboten, mit welchem man relativ unproblematisch global Daten zwischen den Komponenten austauschen kann. Um die Seite später auf GitHub zu hosten bietet Vue ebenfalls Unterstütztung an, welche mit Hilfe von Babel und Webpack die erstellte Web App effizient rendert und für das deployment vorbereitet. Des weiteren ist die Wahl auf Vue.js gefallen, da ich bereits im Modul Erfahrungen damit sammeln konnte.

## Essential Features
* [ ] Hosted on GitHub
* [x] Gemäldeübersicht für jeweils ein Jahr
* [x] Layout nachstellen
* [x] Detailansicht bei Klick auf Bilder
* [x] Navigation in der Detailansicht
* [ ] Sprachwechsler
* [x] Akkordeon
* [ ] Akkordeon Switch Mobile
* [ ] Responsive

## Extra Features
* [X] Navigation of Modal with Keyboard
  * Esc = Close
  * ArrowRight = NextImage
  * ArrowLeft = PreviousImage
