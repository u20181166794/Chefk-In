import { useEffect, useState } from "react";

import './../documentacion/style/nicepage.css';
import './../documentacion/style/RestSoft.css';

import siiii from "./../documentacion/images/siiii.png";
import a from "./../documentacion/images/2769104-13f53c3d.png";
import b from "./../documentacion/images/3037106-8bf6df91.png";
import c from "./../documentacion/images/Screenshot_20.jpg";
import d from "./../documentacion/images/Screenshot_21.jpg";
import e from "./../documentacion/images/IMG-20221211-WeaA0123.png";
import f from "./../documentacion/images/IMG-20221211-WA0082.png";
import g from "./../documentacion/images/pngegg.png";

import menu from "./../documentacion/images/menu.SVG";
import IconUno from "./../documentacion/images/IconUno.js";
import IconDos from "./../documentacion/images/IconDos.js";
import IconTres from "./../documentacion/images/IconTres.js";




const DocInicio = ()=>{

    return (
        <>
        <header className="u-box-shadow u-clearfix u-custom-color-1 u-header u-sticky u-sticky-112b u-header" id="sec-e7ca">
            <div className="u-clearfix u-sheet u-sheet-1">
                <p className="u-text u-text-custom-color-3 u-text-1">RestS​oft</p>
                <nav className="u-menu u-menu-one-level u-offcanvas u-menu-1">
                    
                    <div className="menu-collapse" >
                        <a className="u-button-style u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-top-bottom-menu-spacing u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
                            href="#">
                            <img src={menu}/>
                        </a>
                    </div>
                    <div className="u-custom-menu u-nav-container">
                        <ul className="u-nav u-unstyled u-nav-1">
                            <li className="u-nav-item">
                                <a className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
                                href="/" >Home</a>
                            </li>
                            <li className="u-nav-item">
                                <a className={`u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base `}
                                href="#carousel_2b86" >Objetivo</a>
                            </li>
                            <li className="u-nav-item">
                                <a className={`u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base`}
                                href="#carousel_e5e6" >Ingreso</a>
                            </li>
                            <li className="u-nav-item">
                                <a className={`u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base`}
                                href="#carousel_c707" >Mesero</a>
                            </li>
                            <li className="u-nav-item">
                                <a className={`u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base`}
                                href="#sec-2912" >Cocinero</a>
                            </li>
                        </ul>
                    </div>
                    <div className="u-custom-menu u-nav-container-collapse">
                        <div className="u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
                            <div className="u-inner-container-layout u-sidenav-overflow">
                                <div className="u-menu-close"></div>
                                <ul className="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2">
                                    <li className="u-nav-item">
                                        <a className="u-button-style u-nav-link"
                                        href="#carousel_2b86">Objetivo</a>
                                    </li>
                                    <li className="u-nav-item">
                                        <a className="u-button-style u-nav-link"
                                        href="#carousel_e5e6">Ingreso</a>
                                    </li>
                                    <li className="u-nav-item">
                                        <a className="u-button-style u-nav-link"
                                        href="#carousel_c707">Mesero</a>
                                    </li>
                                    <li className="u-nav-item">
                                        <a className="u-button-style u-nav-link"
                                        href="#sec-2912">Cocinero</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="u-black u-menu-overlay u-opacity u-opacity-70"></div>
                    </div>
                </nav>
            </div>
        </header>
        <section className="u-clearfix u-custom-color-2 u-section-1" id="carousel_2b86">
            <div className="u-clearfix u-sheet u-valign-middle-md u-valign-middle-sm u-valign-middle-xs u-sheet-1">
                <h1 className="u-text u-text-1" data-animation-name="customAnimationIn" data-animation-duration="1250">¿Qué es
                    RestSoft?</h1>
                <img className="u-image u-image-1" src={siiii} data-image-width="1024" data-image-height="1024"
                    data-animation-name="customAnimationIn" data-animation-duration="1750" />
                <div className="u-layout-horizontal u-list u-list-1">
                    <div className="u-repeater u-repeater-1">
                        <div className="u-align-center u-container-style u-custom-border u-custom-color-1 u-list-item u-repeater-item u-shape-rectangle u-list-item-1" data-animation-name="customAnimationIn" data-animation-duration="1500">
                            <div className="u-container-layout u-similar-container u-container-layout-1">
                                <h4 className="u-text u-text-2" data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="500">
                                    <b>RestSoft es un software especializado para la toma de pedidos y muestra en tiempo<span ></span> real tanto para el personal de cocina como para los meseros.&nbsp;</b>
                                    <br/>
                                    <br/>
                                    <span> La razón de ser de RestSoft es r</span><b>educir los tiempos de espera
                                    en la toma de ordenes y obtención de una visualización en tiempo real del pedido realizado con el
                                    proposito de sistematizar dicho proceso, acortar el margen de error humano y aumentar las
                                    ganancias</b>
                                    <br/>
                                </h4>
                                <span className="u-border-4 u-border-palette-1-base u-file-icon u-icon u-icon-circle u-text-palette-1-base u-white u-icon-1"
                        data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="500"
                        data-animation-direction="">
                            <img src={a} alt=""/></span><span
                        className="u-border-4 u-border-palette-1-base u-file-icon u-icon u-icon-circle u-text-palette-1-base u-white u-icon-2"
                        data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="500"
                        data-animation-direction="">
                            <img src={b} alt=""/>
                        </span>
                        <span
                        className="u-border-4 u-border-palette-1-base u-icon u-icon-circle u-text-palette-1-base u-white u-icon-3"
                        data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="500"
                        data-animation-direction="">
                            <IconUno />
                    </span>
                    </div>
                </div>
                <div
                    className="u-align-center u-container-style u-custom-border u-custom-color-1 u-list-item u-repeater-item u-shape-rectangle u-list-item-2"
                    data-animation-name="customAnimationIn" data-animation-duration="1500">
                    <div className="u-container-layout u-similar-container u-container-layout-2">
                    <h4 className="u-text u-text-3" data-animation-name="customAnimationIn" data-animation-duration="1500"
                        data-animation-delay="500">Sample text. Click to select the text box. Click again or double click to
                        start editing the text.</h4><span
                        className="u-border-4 u-border-palette-1-base u-file-icon u-icon u-icon-circle u-text-palette-1-base u-white u-icon-4"
                        data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="500"
                        data-animation-direction=""><img src={a} alt=""/></span><span
                        className="u-border-4 u-border-palette-1-base u-file-icon u-icon u-icon-circle u-text-palette-1-base u-white u-icon-5"
                        data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="500"
                        data-animation-direction=""><img src={b} alt=""/></span><span
                        className="u-border-4 u-border-palette-1-base u-icon u-icon-circle u-text-palette-1-base u-white u-icon-6"
                        data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="500"
                        data-animation-direction="">
                            <IconUno/>
                    </span>
                    </div>
                </div>
                <div
                    className="u-align-center u-container-style u-custom-border u-custom-color-1 u-list-item u-repeater-item u-shape-rectangle u-list-item-3"
                    data-animation-name="customAnimationIn" data-animation-duration="1500">
                    <div className="u-container-layout u-similar-container u-container-layout-3">
                    <h4 className="u-text u-text-4" data-animation-name="customAnimationIn" data-animation-duration="1500"
                        data-animation-delay="500">Sample text. Click to select the text box. Click again or double click to
                        start editing the text.</h4><span
                        className="u-border-4 u-border-palette-1-base u-file-icon u-icon u-icon-circle u-text-palette-1-base u-white u-icon-7"
                        data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="500"
                        data-animation-direction=""><img src={a} alt=""/></span><span
                        className="u-border-4 u-border-palette-1-base u-file-icon u-icon u-icon-circle u-text-palette-1-base u-white u-icon-8"
                        data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="500"
                        data-animation-direction=""><img src={b} alt=""/></span><span
                        className="u-border-4 u-border-palette-1-base u-icon u-icon-circle u-text-palette-1-base u-white u-icon-9"
                        data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="500"
                        data-animation-direction="">
                            <IconUno/>
                    </span>
                    </div>
                </div>
                <div
                    className="u-align-center u-container-style u-custom-border u-custom-color-1 u-list-item u-repeater-item u-shape-rectangle u-list-item-4"
                    data-animation-name="customAnimationIn" data-animation-duration="1500">
                    <div className="u-container-layout u-similar-container u-container-layout-4">
                    <h4 className="u-text u-text-5" data-animation-name="customAnimationIn" data-animation-duration="1500"
                        data-animation-delay="500">Sample text. Click to select the text box. Click again or double click to
                        start editing the text.</h4><span
                        className="u-border-4 u-border-palette-1-base u-file-icon u-icon u-icon-circle u-text-palette-1-base u-white u-icon-10"
                        data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="500"
                        data-animation-direction=""><img src={a} alt=""/></span><span
                        className="u-border-4 u-border-palette-1-base u-file-icon u-icon u-icon-circle u-text-palette-1-base u-white u-icon-11"
                        data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="500"
                        data-animation-direction=""><img src={b} alt=""/></span><span
                        className="u-border-4 u-border-palette-1-base u-icon u-icon-circle u-text-palette-1-base u-white u-icon-12"
                        data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="500"
                        data-animation-direction="">
                            <IconUno/>
                    </span>
                    </div>
                </div>
                <div
                    className="u-align-center u-container-style u-custom-border u-custom-color-1 u-list-item u-repeater-item u-shape-rectangle u-list-item-5"
                    data-animation-name="customAnimationIn" data-animation-duration="1500">
                    <div className="u-container-layout u-similar-container u-container-layout-5">
                    <h4 className="u-text u-text-6" data-animation-name="customAnimationIn" data-animation-duration="1500"
                        data-animation-delay="500">Sample text. Click to select the text box. Click again or double click to
                        start editing the text.</h4><span
                        className="u-border-4 u-border-palette-1-base u-file-icon u-icon u-icon-circle u-text-palette-1-base u-white u-icon-13"
                        data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="500"
                        data-animation-direction=""><img src={a} alt=""/></span><span
                        className="u-border-4 u-border-palette-1-base u-file-icon u-icon u-icon-circle u-text-palette-1-base u-white u-icon-14"
                        data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="500"
                        data-animation-direction=""><img src={b} alt=""/></span><span
                        className="u-border-4 u-border-palette-1-base u-icon u-icon-circle u-text-palette-1-base u-white u-icon-15"
                        data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="500"
                        data-animation-direction="">
                            <IconUno/>
                    </span>
                    </div>
                </div>
                <div
                    className="u-align-center u-container-style u-custom-border u-custom-color-1 u-list-item u-repeater-item u-shape-rectangle u-list-item-6"
                    data-animation-name="customAnimationIn" data-animation-duration="1500">
                    <div className="u-container-layout u-similar-container u-container-layout-6">
                    <h4 className="u-text u-text-7" data-animation-name="customAnimationIn" data-animation-duration="1500"
                        data-animation-delay="500">Sample text. Click to select the text box. Click again or double click to
                        start editing the text.</h4><span
                        className="u-border-4 u-border-palette-1-base u-file-icon u-icon u-icon-circle u-text-palette-1-base u-white u-icon-16"
                        data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="500"
                        data-animation-direction=""><img src={a} alt=""/></span><span
                        className="u-border-4 u-border-palette-1-base u-file-icon u-icon u-icon-circle u-text-palette-1-base u-white u-icon-17"
                        data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="500"
                        data-animation-direction=""><img src={b} alt=""/></span><span
                        className="u-border-4 u-border-palette-1-base u-icon u-icon-circle u-text-palette-1-base u-white u-icon-18"
                        data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="500"
                        data-animation-direction="">
                            <IconUno/>
                    </span>
                    </div>
                </div>
                <div
                    className="u-align-center u-container-style u-custom-border u-custom-color-1 u-list-item u-repeater-item u-shape-rectangle u-list-item-7"
                    data-animation-name="customAnimationIn" data-animation-duration="1500">
                    <div className="u-container-layout u-similar-container u-container-layout-7">
                    <h4 className="u-text u-text-8" data-animation-name="customAnimationIn" data-animation-duration="1500"
                        data-animation-delay="500">Sample text. Click to select the text box. Click again or double click to
                        start editing the text.</h4><span
                        className="u-border-4 u-border-palette-1-base u-file-icon u-icon u-icon-circle u-text-palette-1-base u-white u-icon-19"
                        data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="500"
                        data-animation-direction=""><img src={a} alt=""/></span><span
                        className="u-border-4 u-border-palette-1-base u-file-icon u-icon u-icon-circle u-text-palette-1-base u-white u-icon-20"
                        data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="500"
                        data-animation-direction=""><img src={b} alt=""/></span><span
                        className="u-border-4 u-border-palette-1-base u-icon u-icon-circle u-text-palette-1-base u-white u-icon-21"
                        data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="500"
                        data-animation-direction="">
                            <IconUno/>
                    </span>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        <section
            className="u-align-center-lg u-align-center-md u-align-center-xl u-align-center-xs u-align-right-sm u-clearfix u-white u-section-2"
            id="carousel_e5e6">
            <h2 className="u-align-center u-text u-text-1" data-animation-name="customAnimationIn"
            data-animation-duration="1500" data-animation-delay="500">Guia de usuario</h2>
            <div className="u-custom-color-3 u-shape u-shape-rectangle u-shape-1" data-animation-name="fadeIn"
            data-animation-duration="1000" data-animation-delay="0"></div>
            <img className="u-image u-image-default u-image-1" src={c} alt="" data-image-width="682"
            data-image-height="545" />
            <img className="u-image u-image-default u-image-2" src={d} alt="" data-image-width="459"
            data-image-height="467"/>
            <div className="u-custom-color-1 u-shape u-shape-rectangle u-shape-2"></div>
            <img className="u-image u-image-contain u-image-default u-image-3" src={e} alt=""
            data-image-width="820" data-image-height="1194"/>
            <img className="u-image u-image-contain u-image-default u-preserve-proportions u-image-4"
            src={f} alt="" data-image-width="450" data-image-height="450"/>
            <img className="u-image u-image-contain u-image-default u-image-5" src={g} alt=""
            data-image-width="1265" data-image-height="1024"/>
            <img className="u-image u-image-contain u-image-default u-image-6" src={g} alt=""
            data-image-width="1265" data-image-height="1024"/>
            <p className="u-align-center u-text u-text-2">Para iniciar se sión con RestSoft<br/>deberás llenar los campos de
            usuario y co​ntraseña respectivamente, si cometetes un error, prueba escribirlo de nuevo&nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            </p>
            <p className="u-align-center u-text u-text-3">En caso de no poseer un usuario&nbsp;<br/>en la aplicación, debes
            proceder<br/>a registrarte rellenando los datos&nbsp;<br/>que te indica en pantalla para<br/>así poder proseguir
            </p>
            <div className="u-custom-color-1 u-shape u-shape-rectangle u-shape-3"></div>
            <div className="u-shape u-shape-svg u-text-custom-color-6 u-shape-4">
                <IconDos/>
            </div>
            <div className="u-shape u-shape-svg u-text-custom-color-7 u-shape-5">
            <IconTres/>
            </div>
        </section>
        <section className="u-clearfix u-image u-shading u-section-3" id="carousel_c707" data-image-width="1920"
            data-image-height="1057">
            <div className="u-clearfix u-sheet u-sheet-1">
            <div className="u-clearfix u-gutter-20 u-layout-wrap u-layout-wrap-1">
                <div className="u-gutter-0 u-layout">
                <div className="u-layout-col">
                    <div className="u-size-60">
                    <div className="u-layout-row">
                        <div
                        className="u-align-left u-black u-container-style u-layout-cell u-opacity u-opacity-40 u-size-60 u-layout-cell-1"
                        data-animation-name="customAnimationIn" data-animation-duration="1500">
                        <div className="u-container-layout u-container-layout-1">
                            <h2 className="u-custom-font u-font-montserrat u-text u-text-body-alt-color u-text-1">Guia para
                            usuario mesero</h2>
                            <p className="u-text u-text-2">Modalidad a seguir en caso de ser miembro del personal que toma
                            pedidos en mesa</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        <section className="u-align-center u-clearfix u-custom-color-1 u-section-4" id="sec-e5f5">
            <div className="u-clearfix u-sheet u-sheet-1">
            <h3 className="u-text u-text-custom-color-3 u-text-default u-text-1">
                <span className="pedido">Hacer pedido</span>:
            </h3>
            <div className="u-align-center u-layout-grid u-list u-list-1">
                <div className="u-repeater u-repeater-1">
                <div
                    className="u-align-center u-container-align-center u-container-style u-custom-item u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-1"
                    data-animation-name="customAnimationIn" data-animation-duration="1500">
                    <div className="u-container-layout u-similar-container u-container-layout-1">
                    <h2
                        className="u-align-center u-custom-font u-custom-item u-font-lato u-text u-text-custom-color-2 u-text-2">
                        0​1 </h2>
                    <h4
                        className="u-align-center u-custom-font u-custom-item u-font-montserrat u-text u-text-custom-color-2 u-text-3">
                        Mesa</h4>
                    <p className="u-align-center u-custom-item u-text u-text-grey-50 u-text-4">Al seleccionar un número de
                        mesa se habilitará la opción "Crear orden" pará dar a un nuevo pedido.</p>
                    </div>
                </div>
                <div
                    className="u-align-center u-container-align-center u-container-style u-custom-color-2 u-custom-item u-list-item u-radius-20 u-repeater-item u-shape-round u-list-item-2"
                    data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="500">
                    <div className="u-container-layout u-similar-container u-container-layout-2">
                    <h2
                        className="u-align-center u-custom-font u-custom-item u-font-lato u-text u-text-body-alt-color u-text-5">
                        02</h2>
                    <h4
                        className="u-align-center u-custom-font u-custom-item u-font-montserrat u-text u-text-body-alt-color u-text-6">
                        Comida</h4>
                    <p className="u-align-center u-custom-item u-text u-text-body-alt-color u-text-7">Una vez creada la&nbsp;
                        orden aparecerá imagenes de los platillso disponibles. Los platillos estan divididos en categorias como:
                        plato principal, sopas, bebidas o buscarlos inderectamente en&nbsp; la opción "Buscar producto".</p>
                    </div>
                </div>
                <div
                    className="u-align-center u-container-align-center u-container-style u-custom-item u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-3"
                    data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="0">
                    <div className="u-container-layout u-similar-container u-container-layout-3">
                    <h2
                        className="u-align-center u-custom-font u-custom-item u-font-lato u-text u-text-custom-color-2 u-text-8">
                        03</h2>
                    <h4
                        className="u-align-center u-custom-font u-custom-item u-font-montserrat u-text u-text-custom-color-2 u-text-9">
                        Ordenar</h4>
                    <p className="u-align-center u-custom-item u-text u-text-grey-50 u-text-10">Cuando seleccionas algún
                        platillo puedes elegir la cantidades especificas del mismo y agregarlo a la lista del pedido. Cuando la
                        orden este lista oprimes "Ordenar" para que el pedido tomado llegue a la cocina.</p>
                    </div>
                </div>
                <div
                    className="u-align-center u-container-align-center u-container-style u-custom-color-2 u-custom-item u-list-item u-radius-20 u-repeater-item u-shape-round u-list-item-4"
                    data-animation-name="customAnimationIn" data-animation-duration="1500">
                    <div className="u-container-layout u-similar-container u-container-layout-4">
                    <h2 className="u-align-center u-custom-font u-custom-item u-font-lato u-text u-text-white u-text-11">04
                    </h2>
                    <h4
                        className="u-align-center u-custom-font u-custom-item u-font-montserrat u-text u-text-white u-text-12">
                        Pedido listo</h4>
                    <p className="u-align-center u-custom-item u-text u-text-white u-text-13">En el momento en que la orden
                        este preparada saltará una alerta u aviso para que vayas a recogerla a la cocina</p>
                    </div>
                </div>
                <div
                    className="u-align-center u-container-align-center u-container-style u-custom-item u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-5"
                    data-animation-name="customAnimationIn" data-animation-duration="1500">
                    <div className="u-container-layout u-similar-container u-container-layout-5">
                    <h2
                        className="u-align-center u-custom-font u-custom-item u-font-lato u-text u-text-custom-color-2 u-text-14">
                        05</h2>
                    <h4
                        className="u-align-center u-custom-font u-custom-item u-font-montserrat u-text u-text-custom-color-2 u-text-15">
                        Factura</h4>
                    <p className="u-align-center u-custom-item u-text u-text-grey-50 u-text-16">En el instante que el comenzal
                        reciba su pedido, la aplicación ya tendrá preparada la factura la suma de todos los precios y impuestos
                        a pagar.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        <section className="u-clearfix u-image u-shading u-section-5" id="sec-2912" data-image-width="5760" data-image-height="3840">
            <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
            <div className="u-clearfix u-gutter-20 u-layout-wrap u-layout-wrap-1">
                <div className="u-gutter-0 u-layout">
                <div className="u-layout-col">
                    <div className="u-size-60">
                    <div className="u-layout-row">
                        <div
                        className="u-align-left u-black u-container-style u-layout-cell u-opacity u-opacity-40 u-size-60 u-layout-cell-1"
                        data-animation-name="customAnimationIn" data-animation-duration="1500">
                        <div className="u-container-layout u-container-layout-1">
                            <h2 className="u-custom-font u-font-montserrat u-text u-text-body-alt-color u-text-1">Guia para
                            usuario cocina</h2>
                            <p className="u-text u-text-2"> Modalidad a seguir en caso de ser miembro del personal que prepara
                            la comida en la cocina</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        <section className="u-align-center u-clearfix u-custom-color-1 u-section-6" id="carousel_aba1">
            <div className="u-clearfix u-sheet u-sheet-1">
            <div className="u-list u-list-1">
                <div className="u-repeater u-repeater-1">
                <div
                    className="u-align-center u-container-style u-custom-item u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-1"
                    data-animation-name="customAnimationIn" data-animation-duration="1500">
                    <div className="u-container-layout u-similar-container u-container-layout-1">
                    <h2 className="u-custom-font u-custom-item u-font-lato u-text u-text-custom-color-2 u-text-1">0​1 </h2>
                    <h4 className="u-custom-font u-custom-item u-font-montserrat u-text u-text-custom-color-2 u-text-2">
                        Pantalla de visualización</h4>
                    <p className="u-custom-item u-text u-text-grey-50 u-text-3">En pantalla se mostrará una lista de notas que
                        representan cada pedido tomado por los meseros. Las notas se acomodan según su orden de llegada, derecha
                        la más antigua, izquierda más reciente</p>
                    </div>
                </div>
                <div
                    className="u-align-center u-container-style u-custom-color-2 u-custom-item u-list-item u-radius-20 u-repeater-item u-shape-round u-list-item-2"
                    data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="500">
                    <div className="u-container-layout u-similar-container u-container-layout-2">
                    <h2 className="u-custom-font u-custom-item u-font-lato u-text u-text-body-alt-color u-text-4">02</h2>
                    <h4 className="u-custom-font u-custom-item u-font-montserrat u-text u-text-body-alt-color u-text-5">
                        Visualización del pedido</h4>
                    <p className="u-custom-item u-text u-text-body-alt-color u-text-6">Al oprimir las notas se expandirán por
                        la pantalla para así visualizar por completo la lista de platillos que comopnen la orden junto con el
                        precio total a pagar</p>
                    </div>
                </div>
                <div
                    className="u-align-center u-container-style u-custom-item u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-3"
                    data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="0">
                    <div className="u-container-layout u-similar-container u-container-layout-3">
                    <h2 className="u-custom-font u-custom-item u-font-lato u-text u-text-custom-color-2 u-text-7">03</h2>
                    <h4 className="u-custom-font u-custom-item u-font-montserrat u-text u-text-custom-color-2 u-text-8">Salida
                        de factura</h4>
                    <p className="u-custom-item u-text u-text-grey-50 u-text-9">Una vez tengas preparado el pedido que has
                        seleccionado, avisa en la aplicación que ya esta preparado para que el mesero lo recoga y salga expedida
                        la factura</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        <footer className="u-align-center u-clearfix u-footer u-grey-80 u-footer" id="sec-dca3">
            <div className="u-clearfix u-sheet u-sheet-1">
            <p className="u-small-text u-text u-text-variant u-text-1">Texto de muestra. Haz click para seleccionar el
                elemento de Texto.</p>
            </div>
        </footer>
        <section className="u-backlink u-clearfix u-grey-80">
            <a className="u-link" href="https://nicepage.com/website-templates" target="_blank">
            <span>Website Templates</span>
            </a>
            <p className="u-text">
            <span>created with</span>
            </p>
            <a className="u-link" href="" target="_blank">
            <span>Website Builder Software</span>
            </a>.
        </section>
        </>
    )
}


export default DocInicio