<%@ Page Title="" Language="C#" MasterPageFile="./Site1.Master" AutoEventWireup="true" CodeBehind="homepage.aspx.cs" Inherits="URHome.pages.homepage" %>

<%@ Register Src="~/controls/Carousel.ascx" TagPrefix="uc1" TagName="Carousel" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <section>
    <div class="homepage-body">
        <img src="../img/home1.jpg" />
    </div>
    <div>
        <uc1:Carousel runat="server" ID="Carousel" />
    </div>
</section>
</asp:Content>
