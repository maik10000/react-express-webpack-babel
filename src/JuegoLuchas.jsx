import './estiloJuego.css'
import { useEffect, useRef} from 'react'
var y = 0;
var x = 0;
var saltos = false
export function JuegoLuchas() {
    const canRef = useRef(null)
    const ctxRef = useRef(null)
    const jugador = (ctx) => {
        ctx.clearRect(0,0,window.innerWidth,window.innerHeight)
        ctx.fillStyle = '#fff'
        ctx.fillRect(x, y, 10, 10)
    }
    useEffect(() => {
        const canvas = canRef.current
        const ctx = canvas.getContext('2d')
        let animation;
             
        const animacion = () => {
            jugador(ctx)
            graviti()
            animation = window.requestAnimationFrame(animacion)
        }
        animacion()
        return () => {
            window.cancelAnimationFrame(animation)
        }
    }, [jugador])
    const graviti = ()=>{

        if( y <= 140){
            y+=1
        }else if(saltos){
            console.log('salto')
        }
    }
    const presiono = (e) => {
        switch (e.key) {
            case 'w':
                y--
                break;
            case 's':
                y++
                break;
            case 'a':
                x--
                break;
            case 'd':
                x++
                break;
        }    
    }
    const dejo = (e) =>{
        switch(e.key){
            case 'w':
                saltos = false
        }
    }
    window.addEventListener('keydown', presiono)
    window.addEventListener('keyup',dejo)
    return (
        <canvas className="miCanvas" ref={canRef}>
        </canvas>
    )
}