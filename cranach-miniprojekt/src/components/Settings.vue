<template>
  <div class="settings" ref="reel">
    <section class="settings__information">
      <p>
        Lucas Cranach der Ältere (1472 – 1553) gehört zu den bedeutendsten
        Malern und Grafikern der deutschen Renaissance. Bereits seine
        Zeitgenossen waren beeindruckt von der Geschwindigkeit mit der Cranach
        produzierte: Weltweit sind heute noch mehr als 1500 Gemälde aus der
        Cranach-Werkstatt erhalten, und diese repräsentieren nur einen Bruchteil
        des ursprünglichen Werkbestandes. Eine beträchtliche Anzahl der
        erhaltenen Gemälde wurde bisher nicht wissenschaftlich bearbeitet.
      </p>
      <p>
        Im Verbund mit 310 Partnern in 31 Ländern arbeiten der Kunstpalast in
        Düsseldorf und die Technischer Hochschule Köln seit Oktober 2009
        gemeinsam an einem Forschungsprojekt zur digitalen Erschließung der
        Gemälde von Lucas Cranach dem Älteren, unterstützt von der Andrew W.
        Mellon Foundation.
      </p>
      <p>
        Das interdisziplinäre Projektteam konnte bislang Datensätze von über
        1.900 Gemälden auf­bereiten, insgesamt mehr als 16.500 Abbildungen (u.a.
        hochaufgelöste Gesamt- und Detailaufnahmen, Infrarotreflektografien und
        Röntgenaufnahmen) sowie über 1.200 digitalisierte und transkribierte
        Archivdokumente. Die Daten werden stetig erweitert und den Aus­tausch
        über neueste Forschungsresultate zu Cranachs Bildern sichtbar
        erleichtern.
      </p>
    </section>
    <section class="settings__configuration">
      <dropdown name="Darkmode" :options="['aus', 'an']" start="an" />
      <dropdown
        name="Vorschaubilder"
        :options="['klein', 'mittel']"
        start="klein"
      />
      <langswitcher />
      <login />
    </section>
  </div>
</template>

<script>
import dropdown from '@/components/SettingDropdown.vue';
import langswitcher from '@/components/LangSwitcher.vue';
import login from '@/components/Login.vue';

export default {
  name: 'Settings',
  components: {
    dropdown,
    langswitcher,
    login
  },
  props: {
    open: Boolean
  },
  watch: {
    open() {
      if (this.open) {
        this.$refs.reel.style.height = `${this.$refs.reel.scrollHeight}px`;
      } else {
        this.$refs.reel.style.height = 0;
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/styles/_variables";

.settings {
  max-width: $max-width-content;
  margin: auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: $l;
  height: 0;
  transition: all $transition-fast ease;
  overflow: hidden;

  & > * {
    padding: $s 0;
  }
}
</style>
