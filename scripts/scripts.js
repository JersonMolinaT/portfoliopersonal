
window.addEventListener('load', () =>{
    let pantallaAncho = screen.width;
    let pantallaAlto = screen.height;

    let ventanaW = window.innerWidth;
    let ventanaH = window.innerHeight;

    let browserW = document.documentElement.clientWidth;
    console.log(browserW)
    let browserH = document.documentElement.clientHeight;
    console.log(browserH)

    let paginaAncho = document.scrollingElement.scrollWidth;
    // console.log(paginaAncho)




    let resolucionP = 800;
    let resolucionV = 800;

    const encabezado = document.getElementsByTagName('header');

    const uno = document.getElementById('uno');
    // console.log(uno)
    const dos = document.getElementById('dos');
    const tres = document.getElementById('tres');
    const cuatro = document.getElementById('cuatro');
    const cinco = document.getElementById('cinco');
    const seis = document.getElementById('seis');

    const arrowL = document.querySelector('.arrowLeft');
    arrowL.disabled = true
    // console.log(arrowL)
    const arrowR = document.querySelector('.arrowRight');
    arrowR.disabled = true;
    // console.log(arrowR)

    const servIcons1 = document.querySelector('.c');
    // console.log(servIcons1)
    const servIcons2 = document.querySelector('.ci');
    const servIcons3 = document.querySelector('.se');
    const servIcons4 = document.querySelector('.si');



    const input = document.querySelectorAll('input');
    
encabezado.scrollTop = function(){
    encabezado.style.cssText = 'position: fixed';
};

    arrowR.onclick = function(){
        // if(paginaAncho > resolucionV && pantallaAlto <= resolucionP) return;
            // console.log(resolucion)
            if(paginaAncho <= resolucionV  && ventanaW <= resolucionP){
            servIcons1.style.cssText = 'transform: translateX(-490px); transition: ease-out .3s;';
            servIcons2.style.cssText = 'transform: translateX(-690px); transition: ease-out .3s;';
            servIcons3.style.cssText = 'transform: translateX(-790px); transition: ease-out .3s;';
            servIcons4.style.cssText = 'transform: translateX(-690px); transition: ease-out .3s;';
            console.log('click')
            
            
    }
    if(paginaAncho >= resolucionV && ventanaW <= resolucionP){
        servIcons1.style.cssText = 'transform: translateX(0px); transition: ease-out .3s;';
        servIcons2.style.cssText = 'transform: translateX(0px); transition: ease-out .3s;';
        servIcons3.style.cssText = 'transform: translateX(0px); transition: ease-out .3s;';
        servIcons4.style.cssText = 'transform: translateX(0px); transition: ease-out .3s;';
    }
    };
 
    arrowL.onclick = function(){
    //     // if(pantallaAncho <= resolucionP)

            if(paginaAncho <= resolucionV && ventanaW <= resolucionP){
            servIcons1.style.cssText = 'transform: translateX(0px); transition: ease-out .3s;';
            servIcons2.style.cssText = 'transform: translateX(0px); transition: ease-out .3s;';
            servIcons3.style.cssText = 'transform: translateX(0px); transition: ease-out .3s;';
            servIcons4.style.cssText = 'transform: translateX(0px); transition: ease-out .3s;';
           
            // }
            // console.log('click') 
    }
    if(paginaAncho >= resolucionV && ventanaW <= resolucionP){
        servIcons1.style.cssText = 'transform: translateX(0px); transition: ease-out .3s;';
        servIcons2.style.cssText = 'transform: translateX(0px); transition: ease-out .3s;';
        servIcons3.style.cssText = 'transform: translateX(0px); transition: ease-out .3s;';
        servIcons4.style.cssText = 'transform: translateX(0px); transition: ease-out .3s;';
    }
    };

    // arrowL.addEventListener('click', () =>{
    //         if(pantallaAncho > resolucionP) return;
    
    //             if(ventanaW <= resolucionV) {
    //             servIcons1.style.cssText = 'transform: translateX(0px); transition: ease-out .3s;';
    //             servIcons2.style.cssText = 'transform: translateX(0px); transition: ease-out .3s;';
    //             servIcons3.style.cssText = 'transform: translateX(0px); transition: ease-out .3s;';
    //             servIcons4.style.cssText = 'transform: translateX(0px); transition: ease-out .3s;';
               
    //             // }
    //             console.log('click') 
    //     }
    //     else{
    //         return;
    //     }
    // });

    uno.onclick = function(){
        uno.style.cssText = 'border-bottom: 1px solid black; margin-top: 0px;';
        
     
        dos.style.cssText = 'border-bottom: 0px solid black; margin-top: 0px;';

		tres.style.cssText = 'border-bottom: 0px solid black; margin-top: 0px;';
		
        cuatro.style.cssText = 'border-bottom: 0px solid black; margin-top: 0px;';

        cinco.style.cssText = 'border-bottom: 0px solid black; margin-top: 0px;';

        seis.style.cssText = 'border-bottom: 0px solid black; margin-top: 0px;';
		}
    
        dos.onclick = function(){
            dos.style.cssText = 'border-bottom: 1px solid black; margin-top: 0px;';
            
            
            uno.style.cssText = 'border-bottom: 0px solid black; margin-top: 0px;';
            
            tres.style.cssText = 'border-bottom: 0px solid black; margin-top: 0px;';
            
            cuatro.style.cssText = 'border-bottom: 0px solid black; margin-top: 0px;';

            cinco.style.cssText = 'border-bottom: 0px solid black; margin-top: 0px;';

            seis.style.cssText = 'border-bottom: 0px solid black; margin-top: 0px;';
        }

        tres.onclick = function (){
            tres.style.cssText = 'border-bottom: 1px solid black; margin-top: 0px;';

            dos.style.cssText = 'border-bottom: 0px solid black; margin-top: 0px;';
            
            uno.style.cssText = 'border-bottom: 0px solid black; margin-top: 0px;';
          
            cuatro.style.cssText = 'border-bottom: 0px solid black; margin-top: 0px;';
    
            cinco.style.cssText = 'border-bottom: 0px solid black; margin-top: 0px;';

            seis.style.cssText = 'border-bottom: 0px solid black; margin-top: 0px;';
            }

            cuatro.onclick = function (){
                cuatro.style.cssText = 'border-bottom: 1px solid black; margin-top: 0px;';
                   
                uno.style.cssText = 'border-bottom: 0px solid black; margin-top: 0px;';
        
                dos.style.cssText = 'border-bottom: 0px solid black; margin-top: 0px;';
                
                tres.style.cssText = 'border-bottom: 0px solid black; margin-top: 0px;';
        
                cinco.style.cssText = 'border-bottom: 0px solid black; margin-top: 0px;';
        
                seis.style.cssText = 'border-bottom: 0px solid black; margin-top: 0px;';
                }
            
                cinco.onclick = function (){
                    cinco.style.cssText = 'border-bottom: 1px solid black; margin-top: 0px;';
    
                       
                    uno.style.cssText = 'border-bottom: 0px solid black; margin-top: 0px;';
            
                    dos.style.cssText = 'border-bottom: 0px solid black; margin-top: 0px;';
                    
                    tres.style.cssText = 'border-bottom: 0px solid black; margin-top: 0px;';
            
                    cuatro.style.cssText = 'border-bottom: 0px solid black; margin-top: 0px;';
            
                    seis.style.cssText = 'border-bottom: 0px solid black; margin-top: 0px;';
                    }

                    seis.onclick = function (){
                        seis.style.cssText = 'border-bottom: 1px solid black; margin-top: 0px;';
                           
                        uno.style.cssText = 'border-bottom: 0px solid black; margin-top: 0px;';
                
                        dos.style.cssText = 'border-bottom: 0px solid black; margin-top: 0px;';
                        
                        tres.style.cssText = 'border-bottom: 0px solid black; margin-top: 0px;';
                
                        cuatro.style.cssText = 'border-bottom: 0px solid black; margin-top: 0px;';

                        cinco.style.cssText = 'border-bottom: 0px solid black; margin-top: 0px;';
                        }
    

});