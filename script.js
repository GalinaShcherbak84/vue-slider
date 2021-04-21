const app = new Vue({
    el: '#app',
    data: {
        photos:[
            './img/img1.jpg',
            './img/img2.jpg',
            './img/img3.jpg',
            './img/img4.jpg',
            './img/img5.jpg',
            './img/img6.jpg',
        ],
        indexPhoto: 0,
        intervalID: 0,
    },
    created(){
        this.startLoop();
    },
    methods: {
        nextPhoto(){
          //console.log('click')  
          this.indexPhoto += 1;
          if(this.indexPhoto > (this.photos.length-1)){
            this.indexPhoto = 0;
          };
        },
        prevPhoto(){
            //console.log('click')  
            this.indexPhoto -= 1;
            if(this.indexPhoto < 0){
              this.indexPhoto = this.photos.length-1;
            };
        },
        setPhoto(index){
            this.indexPhoto = index;
        },
        startLoop(){
            this.intervalID = setInterval(() => {
                this.nextPhoto();
            }, 2000);
        },
        stopLoop(){
            clearInterval(this.intervalID);
        }
    }
});