"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const scrollUpEffects = (target : gsap.TweenTarget) => {
    gsap.from(target, {
        y : 30,
        opacity : 0,
        duration : 0.5,
        ease : "power2.out",
        scrollTrigger : {
            trigger : target as HTMLElement,
            start : "top 85%"
        }
    })
};
export const scrollUpDelayEffects = (target : gsap.TweenTarget) =>{
    gsap.from(target, {
        y : 30,
        opacity : 0, 
        duration : 0.5,
        delay : 0.3,
        ease : "power2.out",
        scrollTrigger : {
            trigger : target as HTMLElement,
            start : "top 85%",
        },
    });
};

export const scrollLeftEffect = (target : gsap.TweenTarget) => {
    gsap.from(target, {
        x : 30,
        opacity : 0,
        duration : 0.5,
        ease : "power2.out",
        scrollTrigger : {
            trigger : target as HTMLElement,
            start : "top 85%"
        },
    });
};
export const scrollRightEffect = (target : gsap.TweenTarget) => {
    gsap.from(target, {
        x : -30,
        opacity : 0,
        duration : 0.5,
        ease : "power2.out",
        scrollTrigger : {
            trigger : target as HTMLElement,
            start : "top 85%"
        },
    });
};

export const cardHoverEffects = (target : HTMLElement) => {
    target.addEventListener("mouseenter", ()=> {
        gsap.to(target, {
            scale : 1.05,
            duration : 0.3,
            ease : "power2.out"
        });
    });
    target.addEventListener("mouseleave", ()=> {
        gsap.to(target, {
            scale : 1,
            duration : 0.3,
            ease : "power2.out"
        })
    })
};

export const buttonHoverEffects = (target:HTMLElement) => {
    target.addEventListener("mouseenter", () => {
        gsap.to(target, {scale : 1.05, duration : 0.2});
    });
    target.addEventListener("mouseleave", ()=>{
        gsap.to(target, {scale : 1, duration : 0.2});
    });
    target.addEventListener("mousedown", ()=>{
        gsap.to(target, {scale : 1, duration:0.2});
    });
    target.addEventListener("mouseup", () =>{
        gsap.to(target, {scale : 1.05, duration: 0.1})
    });
};