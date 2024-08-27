<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="Carousel.ascx.cs" Inherits="URHome.controls.Carousel" %>

<div class="top-content my-3">
    <div class="container-fluid">
        <div id="carousel" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner row w-100 mx-auto" role="listbox">
                <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3 active">
                    <img src="../img/mirror2.jpg" class="img-fluid mx-auto d-block" alt="img5"/>
                </div>
                <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                    <img src="../img/sculpture4.jpg" class="img-fluid mx-auto d-block" alt="img2"/>
                </div>
                <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                    <img src="../img/mirror4.png" class="img-fluid mx-auto d-block" alt="img3"/>
                </div>
                <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                    <img src="../img/sculpture1.jpeg" class="img-fluid mx-auto d-block" alt="img4"/>
                </div>
                <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                    <img src="../img/vase1.jpg" class="img-fluid mx-auto d-block" alt="img1"/>
                </div>
                <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                    <img src="../img/gift5.jpg" class="img-fluid mx-auto d-block" alt="img6"/>
                </div>
                <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                    <img src="../img/sculpture6.png" class="img-fluid mx-auto d-block" alt="img7"/>
                </div>
                <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                    <img src="../img/sculpture3.jpg" class="img-fluid mx-auto d-block" alt="img8"/>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
</div>