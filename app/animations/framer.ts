import { animate } from "framer-motion"

export const scrollUpEffect = {
    initial : { opacity : 0, y : 30},
    whileInView : {opacity : 1, y : 0},
    transition : {duration : 0.5, delay : 0},
    exit : {opacity : 0, y : 30},
}
export const scrollupDelayEffects = {
    initial : {opacity : 0, y: 20},
    whileInView : {opacity : 1, y : 0},
    transition : {duration : 1, delay : 0.2},
    exit : {opacity : 0, y : 20}
}
export const textFadeIn = {
    initial : {opacity : 0},
    whileInView : {opacity : 1},
    transition : {duration : 1},
}
export const borderFadeShow = {
    initial : {scale : 0},
    whileInView : {scale : 1},
    transition : {duration : 1}
}
export const cardFadeShow = {
    initial : {scale : 0.85},
    whileInView : {scale : 1},
    transition : {duration : 0.5}
}

export const buttonHoverEffects = {
    whileHover : {scale : 1.05},
    whileTap : {scale : 0.95}
}

export const scrollRightEffects = {
    initial : {opacity : 0, x : 30},
    whileInView : {opacity : 1, x : 0},
    transition : {duration : 0.5},
    exit : {opacity : 0, x : 30},
    viewport : { once: false, amount: 0.2 }
}

export const scrollLeftEffects = {
    initial : {opacity : 0, x : -30},
    whileInView : {opacity :1, x : 0},
    transition : {duration : 0.5},    
    viewport : { once: false, amount: 0.2 }
}