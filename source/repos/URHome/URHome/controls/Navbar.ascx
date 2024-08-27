<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="Navbar.ascx.cs" Inherits="URHome.controls.Navbar" %>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Brand</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
            <li class="nav-item active">
                <a class="nav-link" href="homepage.aspx">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                Shop by Category
                </a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Living Room</a></li>
                    <li><a class="dropdown-item" href="#">Bedroom</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#">Lounge</a></li>
                </ul>
            </li>

            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                Shop by Theme
                </a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Black & White</a></li>
                    <li><a class="dropdown-item" href="#">Green & Brown</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#">Lightblue</a></li>
                    <li><a class="dropdown-item" href="#">Purple</a></li>
                </ul>
            </li>
        </ul>
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="#">Cart</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Order</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Profile</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="../pages/login.aspx">Login</a>
            </li>
        </ul>
    </div>
</nav>