import React from "react";
import './Hero.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
<FontAwesomeIcon icon="fa-regular fa-cart-plus" />


function Hero(){
    return(
               <div class="Herosection">
                        <h2 class="buttonheader">Buttons</h2>

            <div class="line1">

                    <div class="button1">

                        <p class="Button1text">{'<Button  />'}</p>
                        <button class="phybutton1">Default</button>

                    </div>

                    <div class="button2">

                            <p class="button2text">&:hover, &:focus</p>
                            <button class="phybutton2">Default</button>

                    </div>
                    </div>

            <div class="line2">

                <div class="button3">
                        <p class="button3text">{'<Button variant="outline"/ >'}</p>
                        <button class="phybutton3">Default</button>

                </div>


                <div class="button4">
                    <p class="button4text">{'&:hover, &:focus'}</p>
                    <button class="phybutton4">Default</button>
                </div>

            </div>


            <div class="line3">

                <div class="button5">
                        <p class="button5text">{'<Button variant="text"/ >'}</p>
                        <button class="phybutton5">Default</button>

                </div>


                <div class="button6">
                    <p class="button6text">{'&:hover, &:focus'}</p>
                    <button class="phybutton6">Default</button>
                </div>

            </div>


            <div class="line4">

                    <div class="button7">
                        <p class="button7text">{'<Button disable shadow/>'}</p>
                        <button class="phybutton7">Default</button>
                    </div>

            </div>
            <div class="line5">

                                <div class="button8">
                                        <p class="button8text">{'<Button variant="outline"/ >'}</p>
                                        <button class="phybutton8">Default</button>

                                </div>


                                <div class="button9">
                                    <p class="button9text">{'&:hover, &:focus'}</p>
                                    <button class="phybutton9">Disabled</button>
                                </div>

            </div>

            <div class="line6">

                                <div class="button10">
                                        <p class="button10text">{'<Button startIcon="local grocery store" >'}</p>
                                        <button class="phybutton10">🛒 Default</button>

                                </div>


                                <div class="button11">
                                    <p class="button11text">{'<Button EndIcon="local grocery store" >'}</p>
                                    <button class="phybutton11" >Default 🛒</button>
                                </div>

            </div>
            <div class="line7">

                                <div class="button12">
                                        <p class="button12text">{'<Button size="sm"/>'}</p>
                                        <button class="phybutton12">Default</button>

                                </div>


                                <div class="button13">
                                    <p class="button13text">{'<Button size="md"/>'}</p>
                                    <button class="phybutton13" >Default</button>
                                </div>

                                <div class="button14">
                                    <p class="button14text">{'<Button size="lg"/>'}</p>
                                    <button class="phybutton14" >Default</button>
                                </div>

            </div>
            <div class="line8">

                                <div class="button15">
                                        <p class="button15text">{'<Button color="default    "/>'}</p>
                                        <button class="phybutton15">Default</button>

                                </div>


                                <div class="button16">
                                    <p class="button16text">{'<Button color="primary"/>'}</p>
                                    <button class="phybutton16" >Default</button>
                                </div>

                                <div class="button17">
                                    <p class="button17text">{'<Button color="secondary"/>'}</p>
                                    <button class="phybutton17" >secondary</button>
                                </div>

                                <div class="button18">
                                    <p class="button18text">{'<Button color="danger "/>'}</p>
                                    <button class="phybutton18" >danger</button>
                                </div>

            </div>
            
            <div class="line9">

                                <div class="button15">
                                        <p class="button19text">&:hover, &:focus</p>
                                        <button class="phybutton15">Default</button>

                                </div>


                                <div class="button16">
        
                                    <button class="phybutton16" >Default</button>
                                </div>

                                <div class="button17">
                                
                                    <button class="phybutton17" >secondary</button>
                                </div>

                                <div class="button18">
                            
                                    <button class="phybutton18" >danger </button>
                                </div>

            </div>
            
            <div class="credits">
                <p>Created by srujith-reddy-devchallenges.io</p>
            </div>

               </div>

    )
}

export default Hero;