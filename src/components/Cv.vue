<template>
    <div class="container" id="cvContainer">
        <div class="row">
            <div class="col-12">
                <section class="cv-section">
                    <h2>Curriculum Vitae;</h2>
                    <ul class="cv-list">
                        <li v-for="(item, index) in lifeMilestones" v-bind:class="{ even: even(index) }">
                            <h3>{{ item.title }}</h3>
                            <div class="cv-list-item-inner">
                                <p>{{ item.link }}</p>
                                <p>{{ item.desc }}</p>
                            </div>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    name: 'Cv',
    data () {
      return {
        lifeMilestones: [
          {
            title: 'Born n stuff',
            desc: 'Issyk Alma-Ata',
            date: '18.12.1987'
          },
          {
            title: 'Community College',
            desc: 'Issyk Alma-Ata',
            link: 'http://www.august-horch-schule.de/',
            date: 'idk-2004 - idk-2006'
          },
          {
            title: 'Training',
            desc: 'noitulos',
            date: '2006 - 2007'
          },
          {
            title: 'Informatik B.Sc.',
            link: 'https://www.th-bingen.de/home/',
            date: '2008 - 2011'
          },
          {
            title: 'Medizininformatik  B.Sc.',
            link: 'https://www.hochschule-trier.de/index.php?id=1246&no_cache=1',
            date: '2011 - 2013'
          },
          {
            title: 'Open New Media GmbH',
            link: 'https://www.onm.de/',
            date: '2013 - 2014'
          },
          {
            title: 'Freelancer',
            date: '2014 - 2016'
          },
          {
            title: 'kreativrudel GmbH & Co. KG',
            link: 'https://www.kreativrudel.de',
            date: '2016 - today'
          }
        ]
      }
    },
    methods: {
      even: function (n) {
        return n % 2 !== 0;
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #cvContainer {
        margin-top: 7rem;
    }
    .cv-list {
        list-style-type: none;
        display: flex;
        justify-content: center;
        flex-flow: row wrap;
        align-content: center;
        align-items: center;
        padding-left: 0;
        position: relative;
    }

    .cv-list::after {
        content: '';
        position: absolute;
        top: 0;
        height: 100%;
        left: calc(50% - 2px);
        width: 2px;
        background-color: #2c3e50;
    }

    .cv-list li {
        display: block;
        margin: 0 25px;
        width: calc(50% - 50px);
        text-align: center;
        border: 1px solid #2c3e50;
        position: relative;
    }

    .cv-list li:nth-child(even) {
        margin-top: 50%;
    }

    .cv-list li:after {
        content: '';
        position: absolute;
        top: calc(50% - 2px);
        right: -26px;
        height: 2px;
        width: 26px;
        background-color: #2c3e50;
    }

    .cv-list li.even:after {
        right: auto;
        left: -26px;
    }

    .cv-list li h3 {
        background-color: #2c3e50;
        color: #fff;
        margin-bottom: 0;
    }

    .cv-list li .cv-list-item-inner {
        padding: .5rem;
    }
</style>