class Preload {
    constructor() {
        this.blocks = document.querySelectorAll('.preloader .blocks .block');
        this.interval = 1;
        this.wrapper = document.querySelector('.wrapper');
    }

    animate = (block,index) => {
        let position = index;
        setInterval(() => {
            switch(position) {
                case 0:
                    block.style.top = '50px';
                    position = 3;
                    break;
                case 1:
                    block.style.left = '40px';
                    position = 0;
                    break;
                case 2:
                    block.style.top = '0px';
                    position = 1;
                    break;
                case 3:
                    block.style.left = '0px';
                    position = 2;
                    break;
            }

        },1500)
    }

    init = () => {
        setTimeout(()=>{
            this.wrapper.classList.add("opacity");
        })
        this.blocks.forEach((item,index)=>{
            setTimeout(()=>{
               this.animate(item,index);
               console.log('here', item, index)
            }, this.interval);
            console.log(index, this.interval)
            this.interval+=500;
        });
    }
}

let a = new Preload();
a.init()