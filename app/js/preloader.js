

const vue = new Vue({
    el: '.preloader',
    data: {
      loaded: 0,
      loading: null,
      loadStyle: {
        width: '0%' },
  
      statusElem: $('[status]'),
      loader: $('[loader]'),
      body: $('body') },
  
    ready() {

        this.preloader = $(this.$el);
        this.removeScrolling();
        this.startLoading();
    },
    watch: {
      loaded() {
        
        $('html, body').scrollTop(0);
        this.loadStyle.width = `${this.loaded}%`;
      } },
  
    methods: {
      removeScrolling() {
        this.body.css('overflow', 'hidden');
      },
      startLoading() {
        this.loading = setInterval(this.load, 20);
      },
      load() {
        this.loaded < 100 ? this.loaded++ : this.doneLoading();
      },
      doneLoading() {
        clearInterval(this.loading);
        this.updateStatus();
      },
      updateStatus() {
        this.statusElem.text('Lets get crazay !');
        this.loader.fadeOut();
        this.animatePreloader();
      },
      animatePreloader() {
        let app = this,
        height = this.preloader.height(),
        properties = {
          'margin-top': `-${height}` },
  
        options = {
          duration: 1000,
          easing: 'swing',
          complete() {
            app.removePreloader();
          } };
  
        this.preloader.delay(500).animate(properties, options);
      },
      removePreloader() {
        this.preloader.remove();
        this.body.removeAttr('style');
        this.animateWebsite();
      },
      animateWebsite() {
        gsap.registerPlugin(ScrollTrigger);

        // Настройка анимации
        gsap.to(".video-presentation", {
        scale: 1,
        x: "0%",
        y: "0%",
        top: 0,
        right: 0,
        duration: 2,
        scrollTrigger: {
            trigger: ".promo",
            start: "top top", // Изменено с "bottom top" на "top top"
            end: "bottom top",
            scrub: true,
        },
        });

        gsap.to(".video-presentation .video-presentation__cover", {
        borderRadius: "0px",
        duration: 2,
        scrollTrigger: {
            trigger: ".promo",
            start: "top top", // Изменено с "bottom top" на "top top"
            end: "bottom top",
            scrub: true,
        },
        });

      } } });