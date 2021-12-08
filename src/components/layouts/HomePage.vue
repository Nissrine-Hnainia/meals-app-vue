<template>
    <h1 class="home-title">Pick A Meal!</h1>
    <div class="caroussel">
        <div class="section full-height over-hide px-4 px-sm-0">
            <div class="row full-height justify-content-center">
                <div class="col-lg-10 col-xl-8 align-self-center padding-tb">
                    <div
                        class="section-top mx-auto text-center slider-height-padding"
                    >
                        <input
                            class="checkbox frst"
                            type="radio"
                            id="slide-1"
                            name="slider"
                            checked
                        />
                        <label for="slide-1"></label>
                        <input
                            class="checkbox scnd"
                            type="radio"
                            name="slider"
                            id="slider-2"
                        />
                        <label for="slider-2"></label>
                        <input
                            class="checkbox thrd"
                            type="radio"
                            name="slider"
                            id="slider-3"
                        />
                        <label for="slider-3"></label>
                        <input
                            class="checkbox foth"
                            type="radio"
                            name="slider"
                            id="slider-4"
                        />
                        <label for="slider-4"></label>
                        <ul class="list">
                            <li>
                                <span></span>
                            </li>
                            <li>
                                <span></span>
                            </li>
                            <li>
                                <span></span>
                            </li>
                            <li>
                                <span></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="footer">
        <h2 class="section-header">Contact</h2>

        <div class="contact-wrapper">
            <!-- Left contact page -->

            <form id="contact-form" class="form-horizontal" role="form">
                <div class="form-group">
                    <div class="col-sm-12">
                        <input
                            type="text"
                            class="form-control"
                            id="name"
                            placeholder="NAME..."
                            name="name"
                            value=""
                            required
                        />
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-sm-12">
                        <input
                            type="email"
                            class="form-control"
                            id="email"
                            placeholder="EMAIL..."
                            name="email"
                            value=""
                            required
                        />
                    </div>
                </div>

                <textarea
                    class="form-control"
                    rows="6"
                    placeholder="MESSAGE..."
                    name="message"
                    required
                ></textarea>

                <button
                    class="btn btn-primary send-button"
                    id="submit"
                    type="submit"
                    value="SEND"
                >
                    <div class="alt-send-button">
                        <i class="fa fa-paper-plane"></i
                        ><span class="send-text"></span>
                    </div>
                </button>
            </form>

            <!-- right contact page -->

            <div class="direct-contact-container">
                <ul class="contact-list">
                    <li class="list-item">
                        <i class="fa fa-map-marker fa-2x"
                            ><span class="contact-text place"
                                >Ariana, Tunis, Tunisia</span
                            ></i
                        >
                    </li>

                    <li class="list-item">
                        <i class="fa fa-phone fa-2x"
                            ><span class="contact-text phone"
                                ><a
                                    href="tel:1-212-555-5555"
                                    title="Give me a call"
                                    >(216) 94-030-444</a
                                ></span
                            ></i
                        >
                    </li>

                    <li class="list-item">
                        <i class="fa fa-envelope fa-2x"
                            ><span class="contact-text gmail"
                                ><a href="mailto:#" title="Send me an email"
                                    >hnainianesrine@gmail.com</a
                                ></span
                            ></i
                        >
                    </li>
                </ul>

                <hr />
                <ul class="social-media-list">
                    <li>
                        <a
                            href="https://github.com/Nissrine-Hnainia"
                            target="_blank"
                            class="contact-icon"
                        >
                            <i class="fa fa-github" aria-hidden="true"></i
                        ></a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/Nissrine-Hnainia"
                            target="_blank"
                            class="contact-icon"
                        >
                            <i class="fa fa-codepen" aria-hidden="true"></i
                        ></a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/Nissrine-Hnainia"
                            target="_blank"
                            class="contact-icon"
                        >
                            <i class="fa fa-twitter" aria-hidden="true"></i
                        ></a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/Nissrine-Hnainia"
                            target="_blank"
                            class="contact-icon"
                        >
                            <i class="fa fa-instagram" aria-hidden="true"></i
                        ></a>
                    </li>
                </ul>
                <hr />

                <div class="copyright">&copy; Nissrine Hnainia.2021</div>
            </div>
        </div>
    </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Barlow:wght@500&family=Corinthia:wght@700&family=Lato:wght@400;700&family=Oswald&family=Raleway:wght@300&display=swap");

.home-title {
    font-family: "Corinthia", cursive;
    font-size: 7rem;
    text-align: center;
    color: #88898d;
}

.caroussel {
    width: 100%;
    margin: auto;
    color: #343434;
}
a {
    cursor: pointer;
}
a:hover {
    text-decoration: none;
}

.section-top {
    position: relative;
    width: 100%;
    display: block;
}
.full-height {
    min-height: 100vh;
}
.over-hide {
    overflow: hidden;
}
.padding-tb {
    padding: 100px 0;
}
[type="radio"]:checked,
[type="radio"]:not(:checked) {
    position: absolute;
    left: -9999px;
}
.checkbox:checked + label,
.checkbox:not(:checked) + label {
    position: relative;
    cursor: pointer;
    margin: 0 auto;
    text-align: center;
    margin-right: 6px;
    margin-left: 6px;
    margin-top: 50px;
    display: inline-block;
    width: 50px;
    height: 50px;
    border: 1px solid #6b7fef;
    background-size: cover;
    background-position: center;
    box-sizing: border-box;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
    background-image: url("https://twolovesstudio.com/wp-content/uploads/2014/10/two-loves-studio-ombre-chocolate-pancake-stack1w.jpg");
    animation: border-transform 6s linear infinite alternate forwards;
    -webkit-animation-play-state: paused;
    -moz-animation-play-state: paused;
    animation-play-state: paused;
}
.checkbox.scnd + label {
    background-image: url("http://www.seeit360.com/files2/imagecache/lightbox/img_2103.jpg");
}
.checkbox.thrd + label {
    background-image: url("http://www.lemarchedeleopold.com/wp-content/uploads/2019/01/photo-1484980972926-edee96e0960d.jpeg");
}
.checkbox.foth + label {
    background-image: url("https://www.photoblog.com/learn/wp-content/uploads/2018/11/weeattogether.com-2.jpg");
}

.checkbox:checked + label {
    box-shadow: 0 8px 25px 0 rgba(16, 39, 112, 0.3);
    transform: scale(1.3);
    -webkit-animation-play-state: running;
    -moz-animation-play-state: running;
    animation-play-state: running;
}
@keyframes border-transform {
    0%,
    100% {
        border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%;
    }
    14% {
        border-radius: 40% 60% 54% 46% / 49% 60% 40% 51%;
    }
    28% {
        border-radius: 54% 46% 38% 62% / 49% 70% 30% 51%;
    }
    42% {
        border-radius: 61% 39% 55% 45% / 61% 38% 62% 39%;
    }
    56% {
        border-radius: 61% 39% 67% 33% / 70% 50% 50% 30%;
    }
    70% {
        border-radius: 50% 50% 34% 66% / 56% 68% 32% 44%;
    }
    84% {
        border-radius: 46% 54% 50% 50% / 35% 61% 39% 65%;
    }
}

.slider-height-padding {
    padding-top: 440px;
}

.list {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    z-index: 100;
    padding: 0;
    margin: 0;
    list-style: none;
}
.list li {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: block;
    z-index: 100;
    padding: 0;
    margin: 0;
    list-style: none;
    height: 450px;
    border: 1px solid #6b7fef;
    background-size: cover;
    background-position: center;
    background-image: url("https://twolovesstudio.com/wp-content/uploads/2014/10/two-loves-studio-ombre-chocolate-pancake-stack1w.jpg");
    border-radius: 30%;
    box-sizing: border-box;
    font-family: "Barlow", sans-serif;
    font-weight: 900;
    font-size: 16px;
    letter-spacing: 2px;
    line-height: 2.7;
    color: #343434;
    writing-mode: vertical-rl;
    opacity: 0;
    pointer-events: none;
    box-shadow: 0 8px 25px 0 rgba(16, 39, 112, 0.1);
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
}
.list li span {
    mix-blend-mode: difference;
}
.list li:nth-child(2) {
    background-image: url("http://www.seeit360.com/files2/imagecache/lightbox/img_2103.jpg");
}
.list li:nth-child(3) {
    background-image: url("http://www.lemarchedeleopold.com/wp-content/uploads/2019/01/photo-1484980972926-edee96e0960d.jpeg");
}
.list li:nth-child(4) {
    background-image: url("https://www.photoblog.com/learn/wp-content/uploads/2018/11/weeattogether.com-2.jpg");
}

.checkbox.frst:checked ~ .list li:nth-child(1) {
    opacity: 1;
    pointer-events: auto;
    border-radius: 16px;
}
.checkbox.scnd:checked ~ .list li:nth-child(2) {
    opacity: 1;
    pointer-events: auto;
    border-radius: 16px;
}
.checkbox.thrd:checked ~ .list li:nth-child(3) {
    opacity: 1;
    pointer-events: auto;
    border-radius: 16px;
}
.checkbox.foth:checked ~ .list li:nth-child(4) {
    opacity: 1;
    pointer-events: auto;
    border-radius: 16px;
}

.logo {
    position: absolute;
    top: 30px;
    right: 30px;
    display: block;
    z-index: 100;
    transition: all 250ms linear;
}
.logo img {
    height: 26px;
    width: auto;
    display: block;
}

@media (max-width: 767px) {
    .slider-height-padding {
        padding-top: 340px;
    }
    ul li {
        height: 300px;
        font-size: 13px;
        letter-spacing: 1px;
    }
}

@media (max-width: 575px) {
    .slider-height-padding {
        padding-top: 240px;
    }
    ul li {
        height: 200px;
    }
}
.footer {
    margin: 150px 0 0 0;
    padding: 0;
    background-color: #161d27;
}
h2 {
    text-align: center;
    font-size: 4rem;
    color: #bbb;
}
.contact-wrapper {
    display: flex;
    justify-content: space-evenly;
}
.form-horizontal {
    width: 40%;
    /* background-color: coral; */
}
.form-control {
    width: 60%;
    margin: 10px 20%;
    padding: 10px;
    background-color: #161d27;
    border: 1px solid #767a86;
    border-radius: 5px;
}
.send-button {
    width: 60%;
    margin: 15px 20% 20px 20%;
    padding: 10px;
    background-color: #3949ab;
    border-radius: 5px;
}
.direct-contact-container {
    width: 40%;
    background-color: #161d27;
}
.contact-list {
    list-style-type: none;
    margin-left: -30px;
    padding-right: 20px;
}

.list-item {
    line-height: 4;
    color: #aaa;
}

.contact-text {
    font: 300 18px "Barlow", sans-serif;
    letter-spacing: 1.9px;
    color: #bbb;
}

.place {
    margin-left: 62px;
}

.phone {
    margin-left: 56px;
}

.gmail {
    margin-left: 53px;
}

.contact-text a {
    color: #bbb;
    text-decoration: none;
    transition-duration: 0.2s;
}

.contact-text a:hover {
    color: #fff;
    text-decoration: none;
}

/* Social Media Icons */
.social-media-list {
    position: relative;
    font-size: 22px;
    text-align: center;
    width: 100%;
    margin: 0 auto;
    padding: 0;
}

.social-media-list li a {
    color: #fff;
}

.social-media-list li {
    position: relative;
    display: inline-block;
    height: 60px;
    width: 60px;
    margin: 10px 3px;
    line-height: 60px;
    border-radius: 50%;
    color: #fff;
    background-color: rgb(27, 27, 27);
    cursor: pointer;
    transition: all 0.2s ease-in-out;
}

.social-media-list li:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 60px;
    height: 60px;
    line-height: 60px;
    border-radius: 50%;
    opacity: 0;
    box-shadow: 0 0 0 1px #fff;
    transition: all 0.2s ease-in-out;
}

.social-media-list li:hover {
    background-color: #fff;
}

.social-media-list li:hover:after {
    opacity: 1;
    transform: scale(1.12);
    transition-timing-function: cubic-bezier(0.37, 0.74, 0.15, 1.65);
}

.social-media-list li:hover a {
    color: #000;
}

.copyright {
    font: 200 14px "Barlow", sans-serif;
    margin-top: 20px;
    color: #555;
    letter-spacing: 1px;
    text-align: center;
}

hr {
    border-color: rgba(255, 255, 255, 0.6);
}

/* Begin Media Queries*/
@media screen and (max-width: 850px) {
    .contact-wrapper {
        display: flex;
        flex-direction: column;
    }
    .direct-contact-container,
    .form-horizontal {
        margin: 0 auto;
    }

    .direct-contact-container {
        margin-top: 60px;
        max-width: 300px;
    }
    .social-media-list li {
        height: 60px;
        width: 60px;
        line-height: 60px;
    }
    .social-media-list li:after {
        width: 60px;
        height: 60px;
        line-height: 60px;
    }
}

@media screen and (max-width: 569px) {
    .direct-contact-container,
    .form-wrapper {
        float: none;
        margin: 0 auto;
    }
    .form-control,
    textarea {
        margin: 0 auto;
    }

    .name,
    .email,
    textarea {
        width: 280px;
    }

    .direct-contact-container {
        margin-top: 60px;
        max-width: 280px;
    }
    .social-media-list {
        left: 0;
    }
    .social-media-list li {
        height: 55px;
        width: 55px;
        line-height: 55px;
        font-size: 2rem;
    }
    .social-media-list li:after {
        width: 55px;
        height: 55px;
        line-height: 55px;
    }
}

@media screen and (max-width: 410px) {
    .send-button {
        width: 99%;
    }
}
</style>
