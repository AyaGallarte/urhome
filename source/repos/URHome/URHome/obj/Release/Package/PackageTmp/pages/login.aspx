<%@ Page Title="" Language="C#" MasterPageFile="./Site1.Master" AutoEventWireup="true" CodeBehind="login.aspx.cs" Inherits="URHome.pages.login" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="login-container">
        <div class="row justify-content-center">
            <div class="col-12 col-md-6 col-lg-4 mx-auto pt-3">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col">
                                <center>
                                    <i class="fa-solid fa-user fa-3x"></i>
                                </center>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <center>
                                    <h4>Member Login</h4>
                                </center>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                    <hr />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <label for="loginEmail">Email address</label>
                                    <div class="form-group">
                                        <asp:TextBox ID="loginEmail" runat="server" CssClass="form-control"                    TextMode="Email" Placeholder="Enter email" Required="True">
                                        </asp:TextBox>  
                                    </div>
                                </div>
                            </div>
                        <div class="row">
                            <div class="col">
                                <label for="loginPassword">Password</label>
                                    <div class="form-group">
                                        <asp:TextBox ID="loginPassword" runat="server" CssClass="form-control py-0 my-0"                 TextMode="Password" Placeholder="Enter password" Required="True">
                                    </asp:TextBox>  
                                </div>
                            </div>
                        </div>
                    </div>
                        <div class="col">
                            <asp:Label ID="lblMessage" runat="server" CssClass="text-danger" />
                        </div>
                        <div class="login-buttons">
                            <asp:Button ID="loginBtn" runat="server" class="btn btn-primary" Text="Login" OnClick="LoginBtn_Click" />
                            <asp:Button ID="signUpBtn" runat="server" class="btn btn-success" Text="SignUp" OnClick="SignUpBtn_Click" />
                        </div>
                    </div>
                </div>        
            </div>
        </div>
</asp:Content>
