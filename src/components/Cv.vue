<template>
    <div class="container" id="cvContainer">
        <div class="row" v-if="isCvView()">
            <div class="col-12">
                <a style="font-weight: bold" href="/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                </svg> home</a>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <section class="cv-section">
                    <h2>Curriculum Vitae;</h2>
                    <ul class="cv-list">
                        <li v-for="(item, index) in lifeMilestones" v-bind:class="{ even: even(index) }">
                            <h3 v-bind:style="{color: item.color}" v-html="item.title"></h3>
                            <div class="cv-list-item-inner">
                                <p><a target="_blank" :href="item.link">{{ item.link }}</a></p>
                                <p>{{ item.desc }}</p>
                                <p>{{ item.date }}</p>
                            </div>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
        <div v-if="isCvView()">
            <Footer mode="light"></Footer>
        </div>
    </div>
</template>
<script>
  import Footer from './Footer.vue'
  export default {
    name: 'Cv',
      components: {Footer},
    data () {
      return {
        lifeMilestones: [
          {
            title: 'Birth',
            desc: 'Issyk Alma-Ata',
            date: '18.12.1987',
            color: '#ff00ff'
          },
          {
            title: 'Community College August Horch BBS Andernach',
            desc: 'Assistant of software development and business degree',
            link: 'http://www.august-horch-schule.de/',
            date: '2006 - 2008',
              color: '#ff00ff'
          },
          {
            title: 'Training software development',
            desc: 'Noitulos GmbH',
            date: '2008 - 2009',
              color: '#ffff00'
          },
          {
            title: 'Informatik B.Sc.',
            link: 'https://www.th-bingen.de/home/',
            date: '2009 - 2011',
            desc: 'Switched major to Medizin Informatik B.Sc',
              color: '#ff00ff'
          },
          {
            title: 'Medizinin&shy;formatik  B.Sc.',
            link: 'https://www.hochschule-trier.de',
            desc: 'Cancelled due to low credits in Medical related classes',
            date: '2011 - 2013',
              color: '#ff00ff'
          },
          {
            title: 'Open New Media GmbH',
            desc: 'IHK Internship',
            link: 'https://www.onm.de/',
            date: '2013 - 2014',
              color: '#ffff00'
          },
          {
            title: 'Freelancer',
            date: '2014 - 2016',
              color: '#00ffff'
          },
          {
            title: 'kreativrudel GmbH & Co. KG',
            link: 'https://www.kreativrudel.de',
            desc: 'Worked as a full stack web developer',
            date: '2016 - 2020',
              color: '#00ffff'
          },
          {
            title: 'real.digital',
            link: 'https://www.real.de',
            desc: 'Worked as a Senior Software Engineer',
            date: '2020 - 2021',
              color: '#ffff00'
            },
            {
                title: 'tutoolio GmbH',
                link: 'https://tutool.io',
                desc: 'Currently working as a Senior Fullstack Developer',
                date: '2021 - today',
                color: '#00ffff'
            }
        ]
      }
    },
    methods: {
      even: function (n) {
        return n % 2 !== 0;
      },
      isCvView: function () {
          return this.$route.fullPath === '/cv';
      }
    },
      comments: Footer
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
    .cv-list::before {
        content: '';
        position: absolute;
        top: 0;
        left: calc(50% - 12px);
        height: 22px;
        width: 22px;
        border-radius: 50%;
        background-color: #2c3e50;
    }
    .cv-list::after {
        content: '';
        position: absolute;
        top: 0;
        height: calc(100% - 120px);
        left: calc(50% - 2px);
        width: 2px;
        background-color: #2c3e50;
    }

    @media (min-width: 1200px) {
        .cv-list::after {
            height: calc(100% - 106px);
        }
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
