new Vue({
    el: '#app',
    data(){
        return{
          openTimer : null, 
          showLing:true,
          happy:'小张生日快乐',
          showCard:false,
        }
    },
 
    mounted(){

    },
    methods:{
        hhh(){

        },
        open(){
            this.showLing = false;
            setTimeout(()=>{
                this.showCard = true;
            },10000)
            // console.log('hhhh')
            // this.openTimer = setTimeout(()=>{
            //     var div = document.getElementById("bir");
            //     div.style.height = parseInt(this.getStyle(div, "height")) - 20;
            // if(parseInt(this.getStyle(div, "height")) >0){
            //     this.open();
            // }
            // if(parseInt(this.getStyle(div, "height")) <20){
            //     div.style.height  = 0;
            // }
            // },40)
            },
            getStyle(parm1,parm2) {

                return parm1.currentStyle ? parm1.currentStyle[parm2] : getComputedStyle(parm1)[parm2];  //parm1,要改变的元素代替名;parm2,要改变的属性名
    
            }
    }
})