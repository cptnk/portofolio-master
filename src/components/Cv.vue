<template>
    <div class="container" id="cvContainer">
        <div class="row">
            <div class="col-12">
                <section class="cv-section">
                    <h2>Curriculum Vitae;</h2>
                    <ul class="cv-list">
                        <li v-for="(item, index) in lifeMilestones" v-bind:class="{ even: even(index) }">
                            <h3 v-html="item.title"></h3>
                            <div class="cv-list-item-inner">
                                <p>{{ item.link }}</p>
                                <p>{{ item.desc }}</p>
                                <p>{{ item.date }}</p>
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
            title: 'Birth',
            desc: 'Issyk Alma-Ata',
            date: '18.12.1987'
          },
          {
            title: 'Community College August Horch BBS Andernach',
            desc: 'Assistant of software development and business degree',
            link: 'www.august-horch-schule.de/',
            date: '2006 - 2008'
          },
          {
            title: 'Training software development',
            desc: 'Noitulos GmbH',
            date: '2008 - 2009'
          },
          {
            title: 'Informatik B.Sc.',
            link: 'www.th-bingen.de/home/',
            date: '2009 - 2011',
            desc: 'Switched major to Medizin Informatik B.Sc'
          },
          {
            title: 'Medizinin&shy;formatik  B.Sc.',
            link: 'www.hochschule-trier.de',
            desc: 'Cancelled due to low credits in Medical related classes',
            date: '2011 - 2013'
          },
          {
            title: 'Open New Media GmbH',
            desc: 'IHK Internship',
            link: 'https://www.onm.de/',
            date: '2013 - 2014'
          },
          {
            title: 'Freelancer',
            date: '2014 - 2016'
          },
          {
            title: 'kreativrudel GmbH & Co. KG',
            link: 'www.kreativrudel.de',
            desc: 'Currently working as a full stack web developer',
            date: '2016 - 2020'
          },
          {
            title: 'real.digital',
            link: 'www.real.de',
            desc: 'Currently working as a Senior Software Engineer',
            date: '2020 - today'
            }
        ]
      }
    },
    methods: {
      even: function (n) {
        return n % 2 !== 0;
      },
      isCvView: function () {
          let wholeQuery = this.$route.query;
          console.log(wholeQuery);
          return false;
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
        margin-top: 20vh;
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
        padding: 1rem;
    }

    .cv-list li .cv-list-item-inner {
        padding: .5rem;
    }

    @media (max-width: 992px) {
        .cv-list {
            flex-flow: column;
        }

        .cv-list li {
            width: 100%;
        }

        .cv-list li:after {
            height: 0;
            width: 0;
            background-color: transparent;
        }

        .cv-list::after {
            height: 0;
            width: 0;
            background-color: transparent;
        }
        .cv-list li:nth-child(2n) {
            margin-top: 0;
        }

        .cv-list li h3 {
            padding: .5rem;
        }
    }
</style>
