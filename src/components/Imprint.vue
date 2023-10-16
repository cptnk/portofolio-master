<template>
  <section class="container">
    <div class="row back-row">
      <div class="col-12">
        <a style="font-weight: bold" href="/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
        </svg> home</a>
      </div>
    </div>
    <div class="row imprint-section">
      <div class="col-12">
        <div class='impressum'><h1>Impressum</h1><p>Angaben gemäß § 5 TMG</p><p>Stanislaw Gutsch <br>
          Vulkanstr. 23<br>
          53179 Bonn <br>
        </p><p> <strong>Vertreten durch: </strong><br>
          Stanislaw Gutsch<br>
        </p><p><strong>Kontakt:</strong> <br>
          E-Mail: <a href='mailto:stanislaw.gutsch@gmail.com'>stanislaw.gutsch@gmail.com</a></br></p><p><strong>Haftungsausschluss: </strong><br><br><strong>Urheberrecht</strong><br><br>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p><br>
          Impressum vom <a href="https://www.impressum-generator.de">Impressum Generator</a> der <a href="https://www.kanzlei-hasselbach.de/">Kanzlei Hasselbach, Rechtsanwälte für Arbeitsrecht und Familienrecht</a>
        </div>
      </div>
    </div>
    <Footer mode="light"></Footer>
  </section>
</template>
<script>
import Footer from './Footer.vue'
export default {
  name: 'Imprint',
  components: {Footer},
  data () {
    return {
      //
    }
  }
}
</script>
<style scoped>
  .back-row {
    margin-top: 2rem;
  }
  .imprint-section {
    margin-top: 5rem;
  }
</style>
